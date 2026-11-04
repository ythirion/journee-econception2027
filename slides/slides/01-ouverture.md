---
part: Ouverture
---

<div class="whoami">

<div>

<span class="kicker">Qui suis-je ?</span>

# Yoan Thirion

- Responsable de la pédagogie, [école Coda Dijon](https://coda.school/)
- Software Crafter, Coach Agile, juste un dév
- GitHub : [@ythirion](https://github.com/ythirion)
- LinkedIn : [yoanthirion](https://www.linkedin.com/in/yoanthirion/)

</div>

<div class="whoami__photo">
  <img src="/ythirion.webp" alt="Avatar de Yoan Thirion, casquette et gilet, un verre et une bouteille de vin à la main" width="1200" height="675">
</div>

</div>

---

<a class="inspiration" href="/Une vie sur notre planète.webp" target="_blank">
  <img src="/une-vie-sur-notre-planete-mini.webp" alt="Mon infographie du film « Une vie sur notre planète » de David Attenborough" width="440" height="1100">
  <span>Une vie sur notre planète</span>
</a>

<div class="with-inspiration">

<span class="kicker">Pourquoi ce sujet</span>

# Depuis une dizaine d'années, une question me suit

<div class="grid grid-cols-2 gap-6 mt-6">
  <div class="box box--accent">
    <div class="figure">7 / 9</div>
    <p class="mt-3">limites planétaires dépassées</p>
  </div>
  <div class="box">
    <h3>Érosion de la biodiversité</h3>
    <p>L'intégrité de la biosphère, déjà au-delà du seuil</p>
  </div>
</div>

<blockquote class="quote mt-8" v-click="1">
  <p>Tu crois que tu vas éteindre l'incendie avec quelques gouttes d'eau ?<br>Je le sais bien, mais <span class="mark">je fais ma part.</span></p>
  <p class="quote__by">La légende du colibri</p>
</blockquote>

<p class="lead mt-6" v-click="2">Comment agir à mon échelle ?</p>

<p class="lead" v-click="3">Je viens du numérique : <span class="mark">autant commencer par là.</span></p>

</div>

<div class="source">
  Source : <a href="https://www.stockholmresilience.org/news--events/general-news/2025-09-24-seven-of-nine-planetary-boundaries-now-breached">Planetary Health Check 2025</a>, Stockholm Resilience Centre et PIK (septembre 2025).
</div>

<!--
Avant de parler de code, dire d'où vient l'envie.
- Montrer la vignette : « Une vie sur notre planète » de David Attenborough, un déclic pour moi,
  j'en ai fait une infographie (lien vers l'image complète).
- Depuis une dizaine d'années, je suis sensible aux limites planétaires, au dérèglement climatique
  et à l'érosion de la biodiversité. Pas en expert, en citoyen qui lit, qui se renseigne.
- En 2025, 7 des 9 limites planétaires sont dépassées : climat, intégrité de la biosphère,
  usage des sols, eau douce, cycles de l'azote et du phosphore, nouvelles entités, et désormais
  l'acidification des océans. Seuls l'ozone et les aérosols restent dans la zone sûre.
- Et depuis, une question me suit : qu'est-ce que je peux faire, moi, à mon échelle ?
- La légende du colibri : pendant l'incendie, il fait des allers-retours avec quelques gouttes d'eau.
  « Je sais, mais je fais ma part. »
- Mon terrain, c'est le numérique. Commencer par agir là où j'ai la main,
  c'est déjà une façon de passer à l'action. Transition : regardons d'abord un site du quotidien.
-->

---
part: Le constat
---

<script setup>
import { ref } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

// Lecture automatique à l'arrivée sur la slide, uniquement dans la vue projetée
const demo = ref()
onSlideEnter(() => {
  if ($renderContext.value === 'slide')
    demo.value?.play().catch(() => {})
})
onSlideLeave(() => {
  if (!demo.value) return
  demo.value.pause()
  demo.value.currentTime = 0
})
</script>

<span class="kicker">YouTube.com / mesuré le 26 octobre 2026</span>

# Un site que j'utilise tous les jours

<div class="measure">

<figure class="case__video">
  <video ref="demo" src="/ecoindex-demo.webm" poster="/ecoindex-youtube.webp" controls muted playsinline preload="none" width="1280" height="720" aria-label="Mesure de la page d'accueil de YouTube : les compteurs de poids, de requêtes et d'éléments montent pendant le chargement, note finale F"></video>
</figure>

<div class="measure__figures">
  <div class="grades" role="img" aria-label="Note EcoIndex : F, sur une échelle de A à G">
    <span>A</span>
    <span>B</span>
    <span>C</span>
    <span>D</span>
    <span>E</span>
    <span class="is-active">F</span>
    <span>G</span>
  </div>
  <div class="measure__row"><span>Poids</span><strong>3,9 Mo</strong></div>
  <div class="measure__row"><span>Requêtes</span><strong>125</strong></div>
  <div class="measure__row"><span>Éléments DOM</span><strong>1 403</strong></div>
  <div class="measure__row"><span>EcoIndex</span><strong>20 / 100</strong></div>
</div>

</div>

<p class="lead mt-6">Une page d'accueil qui n'affiche <span class="mark">aucune vidéo</span>.</p>

<div class="source">
  Source : formule EcoIndex (<a href="https://github.com/cnumr/ecoindex_python">cnumr</a>), écran 1920 × 1080, sans compte, cookies refusés. Script : scripts/record-ecoindex.mjs.
</div>

<!--
Vidéo de 12 secondes, lancée automatiquement, sans son : on ouvre youtube.com et on regarde les compteurs monter.
- Sans compte et cookies refusés, YouTube n'affiche plus de recommandations : « Votre historique YouTube est désactivé ».
  La page est presque vide… et pourtant : 3,9 Mo, 125 requêtes, 1 403 éléments. EcoIndex 20 / 100, note F.
- On ne culpabilise personne : je l'utilise tous les jours moi aussi. On constate.
- Pour rejouer la mesure : node scripts/record-ecoindex.mjs https://www.youtube.com/
  (les chiffres varient d'une mesure à l'autre, l'ordre de grandeur reste).
-->

---

<span class="kicker">Ordres de grandeur / empreinte carbone du numérique en France</span>

# Où pèse l'empreinte du numérique ?

<div class="bars mt-10" role="list">
  <div class="bar" role="listitem">
    <span>Terminaux<small class="bar__hint">smartphones, PC, TV</small></span>
    <div class="bar__track"><div class="bar__fill" style="width: 50%"></div></div>
    <span class="bar__value">50 %</span>
  </div>
  <div class="bar" role="listitem">
    <span>Centres de données<small class="bar__hint">calcul, stockage</small></span>
    <div class="bar__track"><div class="bar__fill bar__fill--stripes" style="width: 46%"></div></div>
    <span class="bar__value">46 %</span>
  </div>
  <div class="bar" role="listitem">
    <span>Réseaux<small class="bar__hint">box, antennes, fibre</small></span>
    <div class="bar__track"><div class="bar__fill bar__fill--dots" style="width: 4%"></div></div>
    <span class="bar__value">4 %</span>
  </div>
</div>

<p class="lead mt-10 text-xl" v-click="1">Notre code fait tourner les serveurs <strong>et</strong> vieillir les terminaux : <span class="mark">en tant que devs, nous avons la main sur 96 %.</span></p>

<div class="source">
  Source : <a href="https://ecoresponsable.numerique.gouv.fr/docs/2024/etude-ademe-impacts-environnementaux-numerique.pdf">ADEME-Arcep, mise à jour janvier 2025</a> (données 2022), empreinte carbone du numérique en France.
</div>

<!--
Répartition de l'empreinte carbone du numérique en France, par grande famille d'équipements.
- Terminaux : surtout leur fabrication. Un logiciel trop lourd pousse à renouveler le matériel.
- Centres de données : ce que nos applications consomment côté serveur.
Les deux pèsent presque autant, et le code agit sur les deux.
Casser l'idée reçue des « 80 % sur le device » : elle vient de l'étude 2020.
-->

---

<span class="kicker">Et ce n'est pas que du carbone</span>

# Le numérique pèse déjà lourd

<div class="grid grid-cols-3 gap-6 mt-10">
  <div class="box box--accent">
    <div class="figure">40 %</div>
    <p class="mt-4">du budget climat annuel soutenable d'un·e internaute pour rester sous +1,5 °C</p>
  </div>
  <div class="box">
    <div class="figure">6</div>
    <p class="mt-4">équipements numériques actifs par personne, en moyenne</p>
  </div>
  <div class="box">
    <div class="figure">#1</div>
    <p class="mt-4">indicateur environnemental : l'épuisement des <strong>ressources</strong> (minéraux et métaux), devant le climat</p>
  </div>
</div>

<div class="source">
  Source : <a href="https://www.greenit.fr/2025/02/04/le-numerique-cest-40-du-budget-climat-soutenable/">GreenIT.fr, « Le numérique, c'est 40 % du budget climat soutenable » (2025)</a>.
</div>
