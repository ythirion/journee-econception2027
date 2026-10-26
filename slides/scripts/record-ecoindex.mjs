// Enregistre une mini-démo (~10 s) de mesure EcoIndex d'une page, avec les compteurs en direct.
// Mesure inspirée d'EcoIndex (cnumr) : viewport 1920 × 1080, chargement, défilement,
// puis nombre d'éléments du DOM (hors enfants de <svg>), requêtes et poids transféré.
// Usage : node scripts/record-ecoindex.mjs [url] [sortie]
// Sortie : public/ecoindex-demo.webm et les mesures en JSON sur la sortie standard.
import { chromium } from 'playwright-chromium'
import { rename, rm } from 'node:fs/promises'

const url = process.argv[2] ?? 'https://www.youtube.com/'
const output = process.argv[3] ?? 'public/ecoindex-demo.webm'
const tmpDir = 'exports/video-ecoindex'

// Quantiles et formule de https://github.com/cnumr/ecoindex_python
const quantiles = {
  dom: [0, 47, 75, 159, 233, 298, 358, 417, 476, 537, 603, 674, 753, 843, 949, 1076, 1237, 1459, 1801, 2479, 594601],
  req: [0, 2, 15, 25, 34, 42, 49, 56, 63, 70, 78, 86, 95, 105, 117, 130, 147, 170, 205, 281, 3920],
  size: [0, 1.37, 144.7, 319.53, 479.46, 631.97, 783.38, 937.91, 1098.62, 1265.47, 1448.32, 1648.27, 1876.08, 2142.06, 2465.37, 2866.31, 3401.59, 4155.73, 5400.08, 8037.54, 223212.26],
}
const quantile = (q, value) => {
  for (let i = 1; i < q.length; i++) {
    if (value < q[i]) return i - 1 + (value - q[i - 1]) / (q[i] - q[i - 1])
  }
  return q.length - 1
}
const ecoindex = (dom, req, sizeKb) =>
  Math.round(100 - (5 * (3 * quantile(quantiles.dom, dom) + 2 * quantile(quantiles.req, req) + quantile(quantiles.size, sizeKb))) / 6)
const grade = score => [[80, 'A'], [70, 'B'], [55, 'C'], [40, 'D'], [25, 'E'], [10, 'F']].find(([min]) => score > min)?.[1] ?? 'G'

const pause = ms => new Promise(resolve => setTimeout(resolve, ms))

await rm(tmpDir, { recursive: true, force: true })
const browser = await chromium.launch()
const viewport = { width: 1920, height: 1080 }

// Session préalable, non filmée : refuser les cookies pour que la page s'affiche sans bandeau de consentement
const consent = await browser.newContext({ viewport, locale: 'fr-FR' })
const consentPage = await consent.newPage()
await consentPage.goto(url, { waitUntil: 'domcontentloaded' })
// Le libellé visible est « Tout refuser », mais le nom accessible du bouton est plus long
await consentPage.locator('button', { hasText: /tout refuser|reject all/i }).first().click({ timeout: 10000 }).catch(() => {})
await consentPage.waitForTimeout(2000)
const storageState = await consent.storageState()
await consent.close()

const context = await browser.newContext({
  viewport,
  locale: 'fr-FR',
  storageState,
  recordVideo: { dir: tmpDir, size: { width: 1280, height: 720 } },
})
const page = await context.newPage()

// Requêtes et poids transféré, via le protocole DevTools
let requests = 0
let bytes = 0
const cdp = await context.newCDPSession(page)
await cdp.send('Network.enable')
cdp.on('Network.requestWillBeSent', e => { if (!e.request.url.startsWith('data:')) requests++ })
cdp.on('Network.loadingFinished', e => { bytes += e.encodedDataLength })

const countDom = () => page.evaluate(() => [...document.querySelectorAll('*')]
  .filter(el => !el.closest('#gc-overlay') && !el.parentElement?.closest('svg')).length).catch(() => 0)

const measure = async () => {
  const dom = await countDom()
  const sizeKb = bytes / 1024
  const score = ecoindex(dom, requests, sizeKb)
  return { dom, requests, sizeKb: Math.round(sizeKb), score, grade: grade(score) }
}

// Bandeau de compteurs, aux couleurs du thème Signal.
// Construit avec les API DOM : certains sites (YouTube) interdisent innerHTML (Trusted Types).
const overlay = (m, final = false) => page.evaluate(([m, final]) => {
  const node = (css, ...children) => {
    const el = document.createElement('div')
    el.style.cssText = css
    el.append(...children)
    return el
  }
  const label = text => node('font-size:16px;font-weight:600;margin-bottom:6px', text)
  const cell = (title, value) => node('padding:16px 24px;border-right:4px solid #fff', label(title), String(value))
  const mb = (m.sizeKb / 1024).toLocaleString('fr-FR', { maximumFractionDigits: 1 })
  const bar = node('position:fixed;left:32px;bottom:32px;z-index:2147483647;display:flex;align-items:stretch;'
    + 'background:#0A0A0A;color:#fff;border:4px solid #fff;font:700 30px/1.1 system-ui,sans-serif;',
  cell('Poids', `${mb} Mo`),
  cell('Requêtes', m.requests),
  cell('Éléments DOM', m.dom.toLocaleString('fr-FR')),
  node(`padding:16px 28px;background:#D9F24F;color:#0A0A0A;font-size:${final ? 56 : 40}px;display:flex;align-items:center;gap:12px`,
    node('font-size:16px;font-weight:600', 'EcoIndex'), m.grade))
  bar.id = 'gc-overlay'
  document.getElementById('gc-overlay')?.remove()
  document.documentElement.appendChild(bar)
}, [m, final]).catch(() => {})

let live = true
const ticker = (async () => {
  while (live) {
    await overlay(await measure())
    await pause(250)
  }
})()

await page.goto(url, { waitUntil: 'domcontentloaded' })
await pause(3000)
await page.mouse.wheel(0, 2500)
await pause(2500)
await page.mouse.wheel(0, -2500)
await pause(1500)

live = false
await ticker
const result = await measure()
await overlay(result, true)
await pause(2500)

await page.screenshot({ path: 'exports/ecoindex-final.png' })
await context.close()
await browser.close()
await rename(await page.video().path(), output)
await rm(tmpDir, { recursive: true, force: true })
console.log(JSON.stringify({ url, date: new Date().toISOString(), ...result }))
