// Enregistre la mini-vidéo de démo de Letterflop pour la slide « étude de cas ».
// Prérequis : Letterflop lancé en local (docker compose up, avec TMDB_API_KEY).
// Usage : node scripts/record-letterflop.mjs [url] [film]
// Sortie : public/letterflop-demo.webm
import { chromium } from 'playwright-chromium'
import { rename, rm } from 'node:fs/promises'

const baseUrl = process.argv[2] ?? 'http://localhost:3000'
const film = process.argv[3] ?? 'Dune'
const size = { width: 1280, height: 720 }
const tmpDir = 'exports/video'
const output = 'public/letterflop-demo.webm'

const pause = ms => new Promise(resolve => setTimeout(resolve, ms))

await rm(tmpDir, { recursive: true, force: true })

const browser = await chromium.launch()
const context = await browser.newContext({ viewport: size, recordVideo: { dir: tmpDir, size } })
const page = await context.newPage()

// 1. Rechercher un film
await page.goto(baseUrl)
await pause(1200)
await page.locator('#search-input').pressSequentially(film, { delay: 120 })
await page.locator('#search-btn').click()
await page.locator('#results-grid [data-id]').first().waitFor()
await pause(2000)

// 2. Ouvrir sa fiche
await page.locator('#results-grid [data-id]').first().click()
await page.locator('#log-btn').waitFor()
await pause(2000)

// 3. Le noter et le logger
await page.locator('#log-btn').click()
// main : étoiles en <span> dans #star-input ; rgesn : boutons radio accessibles (label for="s4")
await page.locator('#star-input span:nth-child(4), label[for="s4"]').first().click()
await pause(600)
await page.locator('#comment').pressSequentially('Vu au cinéma, toujours aussi beau.', { delay: 50 })
await page.locator('#submit-btn').click()
await pause(2000)

// 4. Retrouver son historique
await page.goto(`${baseUrl}/history.html`)
await page.locator('#logs-list').waitFor()
await pause(2500)

await context.close()
await browser.close()

await rename(await page.video().path(), output)
await rm(tmpDir, { recursive: true, force: true })
console.log(`Vidéo enregistrée : ${output}`)
