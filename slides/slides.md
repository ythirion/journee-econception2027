---
theme: ./theme
title: Green Craft
info: |
  Green Craft : 10 actions concrètes pour un numérique soutenable que tu peux appliquer dès lundi.
  Yoan Thirion, Journée de l'écoconception numérique 2027.
lang: fr
colorSchema: light
canvasWidth: 1280
fonts:
  provider: none
transition: none
mdc: true
download: true
exportFilename: green-craft-journee-econception-2027
layout: cover
eyebrow: Journée de l'écoconception numérique 2027
author: Yoan Thirion
image: /logo.webp
alt: Logo Green Craft, un avatar aux jumelles caché dans un buisson, un geai bleu posé sur les jumelles
---

# Green <mark>Craft</mark>

<p class="subtitle">10 actions concrètes pour un numérique soutenable que tu peux appliquer dès lundi</p>

<p class="author">Yoan Thirion · <a href="https://green-craft.fr">green-craft.fr</a></p>

<a class="cover-license" href="https://creativecommons.org/licenses/by-sa/4.0/deed.fr"><img src="/cc-by-sa.svg" alt="Licence Creative Commons Attribution, Partage dans les mêmes conditions 4.0 International" width="88" height="31" /></a>

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

---
layout: statement
part: Le Craft
---

<span class="kicker">D'où je parle</span>

# Je viens du dev.

Et plus exactement du monde du <span class="mark">Craft</span>.

<div class="tags">
  <span>Qualité</span>
  <span>Pragmatisme</span>
  <span>Responsabilité</span>
  <span>Orientation Produit</span>
  <span>Feedback</span>
</div>

<!--
Poser l'angle : je ne suis pas un expert carbone, je suis un dev qui cherche à faire du logiciel de qualité,
de façon pragmatique, au service du produit et de ses utilisateurs.
-->

---

<span class="kicker">Manifesto for Software Craftsmanship / 2009</span>

# Du Craft…

<div class="values">
  <div class="value">
    <span class="value__num">01</span>
    <div>
      <p>Pas seulement des logiciels opérationnels,</p>
      <p class="value__then">mais aussi des logiciels bien conçus</p>
    </div>
  </div>
  <div class="value">
    <span class="value__num">02</span>
    <div>
      <p>Pas seulement l'adaptation aux changements,</p>
      <p class="value__then">mais aussi l'ajout constant de valeur</p>
    </div>
  </div>
  <div class="value">
    <span class="value__num">03</span>
    <div>
      <p>Pas seulement les individus et leurs interactions,</p>
      <p class="value__then">mais aussi une communauté de professionnels</p>
    </div>
  </div>
  <div class="value">
    <span class="value__num">04</span>
    <div>
      <p>Pas seulement la collaboration avec les clients,</p>
      <p class="value__then">mais aussi des partenariats productifs</p>
    </div>
  </div>
</div>

<div class="source">
  Source : <a href="https://manifesto.softwarecraftsmanship.org/#/fr-fr">manifesto.softwarecraftsmanship.org</a>, qui prolonge le Manifeste Agile (2001).
</div>

<!--
1 minute maximum. Le Craft a relevé le niveau de qualité du logiciel : du code testé, lisible, maintenable.
Mais un logiciel bien conçu peut très bien être lourd, on vient de le voir. Transition vers la question.
-->

---
layout: statement
part: Le manifeste
---

# Et si les valeurs du Craft pouvaient orienter le logiciel vers un numérique <span class="mark">plus responsable</span> ?

---

<span class="kicker">Le manifeste / green-craft.fr</span>

# … au Green Craft

<div class="values mt-6">
  <div class="value">
    <span class="value__num">01</span>
    <div>
      <p>Des partenariats productifs permettant de co-construire des solutions</p>
      <p class="value__then">conscientes de leur impact environnemental et sociétal</p>
    </div>
  </div>
  <div class="value">
    <span class="value__num">02</span>
    <div>
      <p>Des logiciels bien conçus, ET aussi</p>
      <p class="value__then">sobres et durables</p>
    </div>
  </div>
  <div class="value">
    <span class="value__num">03</span>
    <div>
      <p>Pas seulement ajouter constamment de la valeur, mais aussi</p>
      <p class="value__then">de la valeur respectueuse des ressources</p>
    </div>
  </div>
  <div class="value">
    <span class="value__num">04</span>
    <div>
      <p>Plus qu'une communauté de professionnels, une communauté dédiée à</p>
      <p class="value__then">un numérique soutenable</p>
    </div>
  </div>
</div>

<!--
Ces 4 valeurs sont le sommaire du talk. L'ordre suit la vie d'une feature, pas l'ordre du manifeste.
-->

---

<span class="kicker">Pourquoi Green Craft ?</span>

# Passer de l'intention à l'action

<div class="grid grid-cols-2 gap-8 mt-2">
  <div class="box">
    <h3>Des référentiels en or</h3>
    <div class="chips chips--dense">
      <span>RGESN</span>
      <span>GR491 / ISIT</span>
      <span>115 bonnes pratiques GreenIT</span>
      <span>RGAA</span>
      <span>WCAG 2.2</span>
      <span>AFNOR Spec 2201</span>
      <span>ISO/IEC 21031 (SCI)</span>
      <span>Référentiel INR</span>
    </div>
  </div>
  <div class="box" v-click="2">
    <h3>Un quotidien déjà chargé</h3>
    <div class="chips chips--dense">
      <span>Cybersécurité</span>
      <span>RGPD</span>
      <span>Réglementaire</span>
      <span>Analytics</span>
      <span>Observabilité</span>
      <span>Infra / Cloud</span>
      <span>FinOps</span>
      <span>CI/CD</span>
      <span>Dette technique</span>
      <span>IA générative</span>
    </div>
  </div>
</div>

<div class="rgesn-example mt-6" v-click="1">
  <span class="rgesn-example__id">RGESN 1.1 · Prioritaire</span>
  <p>« Le service numérique a-t-il été évalué favorablement en termes d'utilité en tenant compte de ses impacts environnementaux ? »</p>
  <span class="mark rgesn-example__verdict">Pas assez concret pour un·e dev</span>
</div>

<p class="lead mt-6 text-2xl" v-click="3">Lundi matin, devant mon IDE : <span class="mark">par quoi je commence ?</span></p>

<!--
Pourquoi j'ai créé ce manifeste, l'atelier « RGESN en action » et ce talk.

- En tant que devs, on a presque tous suivi des sensibilisations : fresques, conférences, chartes signées.
  On ressort convaincus… et le lundi, on ne sait pas par quoi commencer de manière tangible.
- Les référentiels sont de vraies mines d'or, et il y en a beaucoup : RGESN, GR491 de l'ISIT,
  115 bonnes pratiques GreenIT, RGAA, WCAG, EN 301 549, W3C Web Sustainability Guidelines,
  AFNOR Spec 2201, ISO/IEC 21031 (SCI), méthodologie ADEME, référentiel de l'INR, loi REEN, CSRD…
- Mais 79 critères RGESN, plus le RGAA, plus le GR491 : c'est dur à ingurgiter
  dans un quotidien où l'on doit déjà rester alerte sur la cybersécurité, le RGPD, le réglementaire,
  les analytics, l'observabilité, l'infra et le cloud, le FinOps, la CI/CD, la dette technique,
  les dépendances et leurs CVE, l'IA générative, la performance, le time-to-market…
- Ne pas lire les étiquettes une par une : laisser l'effet de profusion parler.
- Green Craft, c'est ma réponse : partir des pratiques qu'on connaît déjà en tant que crafters
  et les orienter vers la sobriété et l'accessibilité. Des gestes concrets, mesurables.
- Exemple, le critère 1.1 du RGESN : « Le service numérique a-t-il été évalué favorablement en termes d'utilité
  en tenant compte de ses impacts environnementaux ? ». Indispensable, mais devant mon IDE, j'en fais quoi ?
- Mon souhait pour ces 30 minutes : vous donner envie de le faire, concrètement, dès cette semaine.
-->

---
part: Le fil rouge
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

<span class="kicker">Le fil rouge / étude de cas</span>

# Letterflop

<div class="case">

<div>

Un clone de <a href="https://letterboxd.com">Letterboxd</a>, le journal de films aux <span class="mark">30 millions de membres</span>.

<ol class="case__flow">
  <li>Rechercher un film</li>
  <li>Consulter sa fiche</li>
  <li>Le noter, le logger</li>
  <li>Retrouver son historique</li>
</ol>

<div class="chips chips--dense">
  <span>Spring Boot / Java 25</span>
  <span>TypeScript / Vite</span>
  <span>PostgreSQL</span>
  <span>Docker Compose</span>
  <span>API TMDB</span>
</div>

</div>

<figure class="case__video">
  <video ref="demo" src="/letterflop-demo.webm" poster="/letterflop.webp" controls muted playsinline preload="none" width="1280" height="720" aria-label="Démo de Letterflop : recherche d'un film, fiche, notation puis historique"></video>
</figure>

</div>

<p class="lead mt-4">Une violation par famille du RGESN. <span class="mark">Des chiffres avant / après mesurés.</span></p>

<div class="source">
  Source : <a href="https://github.com/ythirion/letter-flop">github.com/ythirion/letter-flop</a> (branches main et rgesn). Letterboxd : 30,7 M de membres fin juin 2026, d'après <a href="https://www.tiny.com/">Tiny</a>.
</div>

<!--
Avant de dérouler les valeurs, je vous présente le fil rouge de ce talk.
- Letterflop, c'est un clone de Letterboxd : on cherche un film, on ouvre sa fiche, on le note, on garde son historique.
  Letterboxd, c'est plus de 30 millions de membres (x17 depuis 2020) : à cette échelle, chaque octet compte.
- Trois pages, deux contrôleurs, une base. Un service simple, et pourtant on y loge une violation par famille du RGESN.
- Ce n'est pas un cas pathologique : il ressemble à beaucoup de projets démarrés sans contrainte d'écoconception.
- La branche rgesn porte les corrections : tous les chiffres que vous allez voir sont mesurés.
- Lancer la vidéo (20 s), sans son. Elle n'est chargée qu'au clic : preload="none", pas d'autoplay.
- Et le PO vient d'avoir une idée pour rendre l'appli plus « captivante »… (transition vers la valeur 1).
-->

---
layout: section
number: 1
part: Valeur 01
---

<span class="kicker">Valeur 01 / avant de coder</span>

# Des partenariats productifs permettant de co-construire des solutions <span class="mark">conscientes de leur impact environnemental et sociétal</span>

<!--
Transition : tout commence avant la première ligne de code, au moment où l'on discute du besoin avec le PO.
Un artisan sait dire non… ou plutôt « pas comme ça ».
-->

---

<span class="kicker">Manifeste du Software Craftsmanship / partenariats productifs</span>

# Ça veut dire quoi, un partenariat productif ?

<p class="lead">Pas seulement la collaboration avec les clients, <span class="mark">mais aussi des partenariats productifs.</span></p>

<div class="partner mt-6">
  <div class="box" v-click="1">
    <span class="partner__en">We are not factory workers</span>
    <p>On ne prend pas des commandes : on co-construit la solution.</p>
  </div>
  <div class="box" v-click="2">
    <span class="partner__en">Say no, for our client's good</span>
    <p>Dire non, ou plutôt « pas comme ça », quand c'est son intérêt.</p>
  </div>
  <div class="box" v-click="3">
    <span class="partner__en">Challenging is our responsibility</span>
    <p>Questionner le besoin fait partie du métier, pas de l'insolence.</p>
  </div>
</div>

<p class="lead mt-8" v-click="4">Pas des code monkeys. <span class="mark">Pas des pisseurs de code.</span></p>

<div class="source">
  Source : Sandro Mancuso, <em>The Software Craftsman</em> (2014). Robert C. Martin, <em>The Clean Coder</em> (2011), chapitre « Saying No ».
</div>

<!--
Transition vers la valeur 01 : d'où vient « partenariats productifs » ?
De la 4e valeur du manifeste du Software Craftsmanship : pas seulement la collaboration avec les clients,
mais aussi des partenariats productifs.
- Clic 1 : nous ne sommes pas des ouvriers à la chaîne. On ne prend pas les specs comme des commandes.
- Clic 2 : savoir dire non pour le bien du client. Un artisan refuse de livrer quelque chose qui va lui nuire.
- Clic 3 : challenger le besoin, c'est notre responsabilité professionnelle.
- Clic 4 : on n'est pas des code monkeys, des pisseurs de code.
Green Craft ajoute une dimension : challenger aussi l'impact environnemental et sociétal de ce qu'on nous demande.
Le meilleur code vert est celui qu'on n'écrit pas.
-->

---
layout: statement
---

# Comment <span class="mark">co-construire</span> des solutions ?

<!--
Transition : on a dit pourquoi challenger le besoin. Reste le comment :
mettre tout le monde autour du même mur, métier, PO, devs, UX, ops. Un format pour ça : l'Event Storming.
-->

---

<span class="kicker">Atelier / Alberto Brandolini</span>

# Event Storming

<div class="es-intro">

<div>

<div class="es-intro__def">« Un format d'atelier flexible pour explorer <span class="mark">ensemble</span> des domaines métier complexes. »</div>

- Tout le monde autour du même mur : métier, PO, devs, UX, ops
- On raconte l'histoire du produit avec des **événements**, au passé
- On fait émerger les **problèmes** et les **opportunités** avant de coder

<div class="chips">
  <span>Big Picture</span>
  <span>Process Modelling</span>
  <span>Software Design</span>
</div>

</div>

<div class="es-intro__side">

<img class="es-intro__photo" src="/eventstorming-atelier.webp" alt="Atelier EventStorming animé par Alberto Brandolini : des participants debout devant un long mur couvert de post-its" width="880" height="587">

<div class="es-intro__legend">

<v-clicks>

<div class="es es--event"><strong>Événement métier</strong>Film noté</div>
<div class="es es--command"><strong>Commande</strong>Noter le film</div>
<div class="es es--actor"><strong>Acteur</strong>Cinéphile</div>
<div class="es es--policy"><strong>Règle</strong>Dès qu'un film est noté…</div>
<div class="es es--readmodel"><strong>Read model</strong>Note moyenne</div>
<div class="es es--external"><strong>Système externe</strong>TMDB</div>
<div class="es es--hotspot"><strong>Hotspot</strong>Et si TMDB ne répond pas ?</div>

</v-clicks>

</div>

</div>

</div>

<div class="source">
  Source : <a href="https://www.eventstorming.com/">eventstorming.com</a>. Notation d'Alberto Brandolini, <em>Introducing EventStorming</em>. Photo : <a href="https://www.avanscoperta.it/wp-content/uploads/2013/08/EventStorming-Workshop-Alberto-Brandolini.jpg">Avanscoperta</a>.
</div>

<!--
EventStorming, inventé par Alberto Brandolini : « un format d'atelier flexible pour explorer
collectivement des domaines métier complexes ».
À quoi ça sert : évaluer un métier existant et trouver où l'améliorer, tester un modèle de startup,
imaginer de nouveaux services, concevoir un logiciel orienté événements.
Trois niveaux : Big Picture (tout le métier), Process Modelling (un processus), Software Design (le code).

Au clic, une couleur par concept :
- orange : l'événement métier, toujours au passé (« Film noté »),
- bleu : la commande qui le déclenche,
- jaune : l'acteur,
- lilas : la règle métier (« dès que… alors… »),
- vert : le read model, la vue des données dont on a besoin pour décider,
- rose : le système externe,
- rouge : le hotspot, le problème ou la question qu'on ne sait pas encore résoudre.
-->

---
clicks: 1
---

<span class="kicker">Étape 1 / chaotic exploration, puis enforce the timeline</span>

# D'abord, raconter le métier <span class="mark">dans le temps</span>

<div class="tl" :class="{ 'is-ordered': $clicks >= 1 }">
  <div class="tl__time">Temps →</div>
  <div class="es es--event tl__ev" style="--x:40px;--y:40px;--r:-4deg;--tx:0px;--ty:130px">Compte créé</div>
  <div class="es es--event tl__ev" style="--x:150px;--y:20px;--r:3deg;--tx:135px;--ty:130px">Film recherché</div>
  <div class="es es--event tl__ev" style="--x:60px;--y:140px;--r:2deg;--tx:270px;--ty:130px">Résultats affichés</div>
  <div class="es es--event tl__ev" style="--x:420px;--y:110px;--r:-3deg;--tx:405px;--ty:130px">Fiche consultée</div>
  <div class="es es--event tl__ev" style="--x:560px;--y:170px;--r:4deg;--tx:540px;--ty:130px">Bande-annonce lancée</div>
  <div class="es es--event tl__ev" style="--x:820px;--y:40px;--r:-2deg;--tx:675px;--ty:130px">Film noté</div>
  <div class="es es--event tl__ev tl__ev--dup" style="--x:700px;--y:200px;--r:3deg;--tx:810px;--ty:130px">Film ajouté</div>
  <div class="es es--event tl__ev" style="--x:960px;--y:180px;--r:-4deg;--tx:810px;--ty:130px">Film loggé</div>
  <div class="es es--event tl__ev" style="--x:320px;--y:220px;--r:-2deg;--tx:945px;--ty:130px">Historique consulté</div>
  <span class="tl__q" style="left:20px;top:290px">C'est vraiment le début ?</span>
  <span class="tl__q" style="left:640px;top:290px">« Ajouté » et « loggé », c'est pareil ?</span>
  <span class="tl__q" style="left:880px;top:-6px">Ça suit bien la timeline ?</span>
</div>

<p class="lead mt-6">Des événements métier, <span class="mark">au passé</span>, puis remis dans l'ordre ensemble.</p>

<div class="source">
  Source : d'après les étapes « chaotic exploration » et « enforce the timeline » du Big Picture d'<a href="https://www.eventstorming.com/">Alberto Brandolini</a>.
</div>

<!--
Première étape d'un Big Picture : tout le monde écrit des événements métier (orange, au passé) et les colle sur le mur, sans discuter.
C'est volontairement chaotique : des doublons, des trous, des choses mal placées.
Les questions émergent : est-ce vraiment le début ? « Film ajouté » et « Film loggé », c'est le même événement ?
- Clic : on impose la timeline. Les événements se rangent de gauche à droite, les doublons fusionnent
  (« Film ajouté » disparaît au profit de « Film loggé »). C'est là que le langage commun se construit.
-->

---

<span class="kicker">Letterflop / Big Picture</span>

# Le parcours d'un·e cinéphile

<div class="es-key" aria-label="Légende des couleurs">
  <span><i class="es--event"></i>Événement</span>
  <span v-click="1"><i class="es--actor"></i>Acteur</span>
  <span v-click="1"><i class="es--external"></i>Système externe</span>
  <span v-click="2"><i class="es--hotspot"></i>Hotspot</span>
  <span v-click="3"><i class="es--nr"></i>Numérique responsable</span>
</div>

<div class="es-board">
  <div class="es-col">
    <div class="es es--actor es--sm" v-click="1">Cinéphile</div>
    <div class="es es--event">Film recherché</div>
    <div class="es es--nr" v-click="3">Affiches en taille originale ?</div>
  </div>
  <div class="es-col">
    <div class="es es--external es--sm" v-click="1">TMDB</div>
    <div class="es es--event">Résultats affichés</div>
    <div class="es-stack">
      <div class="es es--hotspot" v-click="2">Et si TMDB ne répond pas ?</div>
      <div class="es es--nr" v-click="3">Une vraie pagination : pas de scroll infini</div>
    </div>
  </div>
  <div class="es-col">
    <div class="es-gap"></div>
    <div class="es es--event">Fiche film consultée</div>
    <div class="es es--nr" v-click="3">Synopsis chargé même en liste ?</div>
  </div>
  <div class="es-col">
    <div class="es es--external es--sm" v-click="1">YouTube</div>
    <div class="es es--event">Bande-annonce lancée</div>
    <div class="es es--nr" v-click="3">Pas d'autoplay / low-res par défaut</div>
  </div>
  <div class="es-col">
    <div class="es-gap"></div>
    <div class="es es--event">Film noté</div>
    <div class="es es--nr" v-click="3">Notation possible au clavier ?</div>
  </div>
  <div class="es-col">
    <div class="es-gap"></div>
    <div class="es es--event">Visionnage loggé</div>
    <div class="es es--hotspot" v-click="2">Un film vu deux fois ?</div>
  </div>
  <div class="es-col">
    <div class="es-gap"></div>
    <div class="es es--event">Historique consulté</div>
    <div class="es es--nr" v-click="3">Tout l'historique chargé d'un coup ?</div>
  </div>
</div>

<div class="es-legend" v-click="3">
  <span class="es-legend__swatch"></span>
  <p><strong>Nouvelle couleur : numérique responsable.</strong> Gaspillage, sobriété, accessibilité. <br/> Pas une case à cocher en fin de mur : <span class="mark">une couleur centrale, posée sous chaque événement.</span></p>
</div>

<!--
Le Big Picture de Letterflop, sur le chemin principal : on cherche un film, on ouvre sa fiche, on le note, on le logge.
- Au départ : uniquement les événements orange, au passé, sur une ligne de temps.
- Clic 1 : les acteurs (le ou la cinéphile) et les systèmes externes (TMDB, YouTube).
- Clic 2 : les hotspots classiques, les questions métier qu'on ne sait pas encore trancher.
- Clic 3 : la couleur en plus. Comme un hotspot, c'est une question, mais dédiée au numérique responsable :
  gaspillage (affiches en taille originale, une vraie pagination plutôt qu'un scroll infini,
  synopsis chargé pour rien, historique sans pagination)
  et accessibilité (pas d'autoplay par défaut, le son ne doit pas couvrir le lecteur d'écran, notation à la souris uniquement).
  Toutes ces questions correspondent à de vraies violations de la branche main de Letterflop.
- L'idée : cette couleur n'est pas un post-it de plus en bout de mur. Elle est sous chaque événement,
  au même niveau que le métier. C'est elle qui devient centrale.
-->

---
layout: statement
---

# Comment <span class="mark">challenger</span> un·e PO ?

<!--
Transition : le mur est posé, les hotspots et les post-its numérique responsable ont fait surgir des questions.
Reste à les porter auprès du PO, sans être « celui qui dit non ». On prend une user story du backlog.
-->

---

<span class="kicker">US-A / le PO a une idée</span>

# Une affiche de film générée par IA

<div class="usa">

<img v-click="1" class="usa__poster" src="/devinator.webp" alt="Affiche parodique « Devinator » : l'avatar de Yoan, casquette et lunettes noires, un œil rouge façon cyborg" width="600" height="900">

<div>

<div class="box">
  <h3>La user story</h3>
  <p class="usa__story">En tant que cinéphile, je veux générer une affiche personnalisée pour chaque film loggé, créée par IA à partir du synopsis et de ma note, afin de garder un souvenir unique de chaque visionnage.</p>
</div>

<div class="usa__steps">
  <div class="usa__step" v-click="2">
    <span class="usa__num">01</span>
    <div>
      <strong>Mini ACV</strong> pour quantifier, avec des hypothèses d'usage
      <table class="usa__acv">
        <thead><tr><th>Hypothèse</th><th>Basse</th><th>Haute</th></tr></thead>
        <tbody>
          <tr><td>Utilisateur·rices par jour</td><td>1 000</td><td>1 000</td></tr>
          <tr><td>Part qui génère une affiche</td><td>10 %</td><td>30 %</td></tr>
          <tr><td>CO2e par affiche</td><td>1,6 g</td><td>5 g</td></tr>
        </tbody>
        <tfoot><tr><td>Par an</td><td>≈ 58 kg</td><td><span class="mark">≈ 547 kg</span></td></tr></tfoot>
      </table>
    </div>
  </div>
  <div class="usa__step" v-click="3">
    <span class="usa__num">02</span>
    <div><strong>Prioriser valeur / impact</strong> environnemental et social</div>
  </div>
  <div class="usa__step" v-click="4">
    <span class="usa__num">03</span>
    <div><strong>Décider</strong> : construire, retravailler ou abandonner</div>
  </div>
</div>

</div>

<div class="matrix" v-click="5" role="img" aria-label="Matrice valeur / impact : US-A se place en valeur moyenne et impact fort">
  <span class="matrix__y">Valeur ↑</span>
  <div class="matrix__grid">
    <div>Retravailler</div>
    <div>Construire</div>
    <div><span class="matrix__fill" v-click="5"></span><span class="matrix__label">Abandonner</span><span class="matrix__dot" v-click="5">US-A</span></div>
    <div>Différer</div>
  </div>
  <span class="matrix__x">← Impact fort · faible →<br>environnemental et social</span>
</div>

</div>

<div class="source">
  Source : <a href="https://arxiv.org/abs/2311.16863">Luccioni et al., « Power Hungry Processing », FAccT 2024</a> (Stable Diffusion XL, inférence seule).
</div>

<!--
Une seule US pour commencer, la plus « wow » du backlog : une affiche générée par IA pour chaque film loggé.
(L'affiche à l'écran est une parodie, et elle n'a pas été générée par IA.)
- Clics : 1 la user story, 2 l'affiche, 3 la mini ACV, 4 prioriser + la matrice, 5 décider (US-A dans « Abandonner »).
- Avant d'en débattre, on quantifie : une mini ACV en 10 minutes suffit.
  Hypothèses d'usage : 1 000 utilisateur·rices par jour, dont 10 à 30 % génèrent une affiche (une par jour).
  CO2e par affiche : 1,6 g en bas (Luccioni et al., FAccT 2024, Stable Diffusion XL, inférence seule)
  à 5 g en haut (hypothèse haute, qui ajoute fabrication du matériel et refroidissement).
  Calcul : 1 000 × 10 % × 1,6 g × 365 ≈ 58 kg, et 1 000 × 30 % × 5 g × 365 ≈ 547 kg CO2e par an.
  Une fourchette assumée, pas une ACV normée : l'ordre de grandeur suffit pour arbitrer.
- Puis on prend la décision avec deux axes : la valeur ET l'impact, environnemental et social.
  Social : des affiches qui imitent le style d'artistes sans leur accord, des visages générés,
  une feature inaccessible à qui ne voit pas l'image (texte alternatif ?).
  Valeur moyenne (c'est amusant, mais pas le cœur du produit), impact fort : on abandonne,
  ou on cherche une alternative sobre (le champ overview de TMDB et l'affiche officielle suffisent-ils ?).
- Transition : on applique la même grille aux trois US du backlog.
-->

---

<span class="kicker">Ratio valeur / impact / le sprint n'a de place que pour une US</span>

# Les critères du RGESN comme <span class="mark">grille d'arbitrage</span>

<p class="lead">Famille « Spécifications » : 5 questions posées à chaque US, avant le sprint.</p>

<table class="grid-table mt-2">
  <thead>
    <tr>
      <th>Critère</th>
      <th>Question</th>
      <th>US-A<br><small>Affiche générée par IA</small></th>
      <th>US-B<br><small>Bande-annonce HD autoplay</small></th>
      <th>US-C<br><small>Formulaire de log</small></th>
    </tr>
  </thead>
  <tbody>
    <tr><td>2.3</td><td>Fonctionne sur connexion lente ?</td><td>Non</td><td>Non</td><td>Oui</td></tr>
    <tr><td>2.6</td><td>Impact évalué avant construction ?</td><td>Non</td><td>Non</td><td>Oui</td></tr>
    <tr><td>2.7</td><td>Décommissionnable proprement ?</td><td>Difficile</td><td>Oui</td><td>Oui</td></tr>
    <tr><td>2.9</td><td>Composants UI à l'impact maîtrisé ?</td><td>Non</td><td>Non</td><td>Oui</td></tr>
    <tr><td>2.10</td><td>Impact des services tiers évalué ?</td><td>Non</td><td>Moyen</td><td>Oui</td></tr>
  </tbody>
  <tfoot>
    <tr><td colspan="2">Décision</td><td>Abandonner</td><td class="is-active">Retravailler</td><td>Construire</td></tr>
  </tfoot>
</table>

<div class="source">
  Source : critères de la famille Spécifications du <a href="https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/">RGESN</a> (Référentiel général d'écoconception de services numériques).
</div>

<!--
Le RGESN reste abstrait pour un·e dev (on l'a vu) : on le rend concret en faisant de ses critères
« Spécifications » une grille d'arbitrage, posée sur chaque US en refinement.
Le backlog de Letterflop contient 3 US, le PO les veut toutes, le sprint n'en accueille qu'une.
La question habituelle : « laquelle a le plus de valeur ? ».
La question Green Craft : « laquelle a le meilleur ratio valeur / impact ? ».
Le retournement : la feature la plus impressionnante (US-A) est celle qu'on abandonne,
la plus banale (US-C) est la plus sobre. Et US-B n'est pas à jeter : on la retravaille.
Un mot sur l'IA pour US-A : le champ overview de TMDB suffit-il ? L'IA par défaut n'est pas neutre,
et les chiffres 2022 de l'ADEME n'intègrent pas encore l'essor de l'IA générative.
-->

---

<span class="kicker">Pas « non », mais « pas comme ça »</span>

# US-B, retravaillée

<p class="lead">La grille l'a classée « Retravailler » : <span class="mark">on réécrit l'US jusqu'à ce que les critères passent.</span></p>

<div class="grid grid-cols-2 gap-8 mt-6">
  <div class="box">
    <h3>Avant</h3>
    <p>En tant qu'utilisateur·rice, je veux voir la bande-annonce <strong>en HD</strong> directement sur la fiche, <strong>en lecture automatique</strong> à l'ouverture de la page, afin de découvrir le film avant de le logger.</p>
  </div>
  <div class="box box--accent" v-click="1">
    <h3>Après</h3>
    <p>En tant qu'utilisateur·rice, je veux pouvoir <strong>cliquer sur « Voir la bande-annonce »</strong>, en qualité standard par défaut, avec la possibilité de passer en HD, afin de découvrir le film <strong>sans charger une vidéo que je ne regarderai peut-être pas</strong>.</p>
  </div>
</div>

<div class="chips mt-8" v-click="2">
  <span>2.3 · Pas d'autoplay</span>
  <span>2.9 · Vignette au lieu du lecteur</span>
  <span>2.10 · Iframe YouTube chargée au clic</span>
  <span>2.3 · HD au choix</span>
</div>

<!--
La grille d'arbitrage ne sert pas qu'à dire non : chaque critère au rouge devient une piste pour réécrire l'US.
Le « afin de » ne change pas : la valeur pour l'utilisateur·rice reste la même, c'est le « comment » qui devient sobre.
Le PO garde sa feature, l'utilisateur·rice garde la main.
Chaque chip renvoie au critère de la grille qu'elle fait passer au vert.
- Pas d'autoplay : un clic est requis (et c'est aussi un critère RGAA : pas de son qui démarre tout seul).
- Une vignette cliquable au lieu d'un lecteur vidéo embarqué au chargement.
- L'iframe YouTube n'est chargée qu'au clic (lazy loading).
- Qualité standard par défaut, la HD reste un choix.
-->

---
layout: section
number: 2
part: Valeur 02
---

<span class="kicker">Valeur 02 / concevoir et coder</span>

# Des logiciels bien conçus, et aussi <span class="mark">sobres et durables</span>

<!--
Le cœur du talk : la sobriété et l'accessibilité ne sont pas des features qu'on ajoute à la fin.
Ce sont des caractéristiques d'architecture, au même titre que la performance ou la sécurité.
-->

---

<span class="kicker">Rappel / Fundamentals of Software Architecture</span>

# L'architecture, c'est aussi <span class="mark">des caractéristiques</span>

<div class="sa mt-4">
  <img class="sa__cover" src="/fundamentals-software-architecture.webp" alt="Couverture du livre Fundamentals of Software Architecture, de Mark Richards et Neal Ford, chez O'Reilly" width="400" height="525">
  <div class="box">
    <h3>Une caractéristique d'architecture, ou « -ility »</h3>
    <p>Un critère de succès du système, <strong>orthogonal au fonctionnel</strong>. Elle doit remplir 3 conditions :</p>
    <ol class="archi__rules">
      <li v-click="1">spécifier une considération de conception <strong>non fonctionnelle</strong></li>
      <li v-click="2"><strong>influencer la structure</strong> du design</li>
      <li v-click="3">être <strong>critique</strong> pour le succès de l'application</li>
    </ol>
  </div>
</div>

<div class="source">
  Source : Mark Richards, Neal Ford, <a href="https://yoan-thirion.gitbook.io/knowledge-base/software-architecture/fundamentals-of-software-architecture"><em>Fundamentals of Software Architecture</em></a> (O'Reilly, 2020).
</div>

<!--
Petit rappel avant de parler code, avec un livre de référence : Fundamentals of Software Architecture.
Les caractéristiques d'architecture, les « -ilities » : des critères de succès orthogonaux au fonctionnel.
- Clics 1 à 3 : les trois conditions. Non fonctionnelle, elle influence la structure, elle est critique.
La disponibilité, la performance, la sécurité en sont. La question du jour : et la sobriété ?
-->

---

<span class="kicker">Les 4 dimensions de l'architecture</span>

# Les caractéristiques <span class="mark">portent le système</span>

<div class="house mt-2" role="img" aria-label="Schéma : l'architecture comme un bâtiment. La structure en est la base, les décisions d'architecture et les principes de conception les murs, et les caractéristiques d'architecture remplissent l'intérieur.">
  <div class="house__frame">
    <div class="house__chars">
      <span>Disponibilité</span>
      <span>Fiabilité</span>
      <span>Testabilité</span>
      <span>Scalabilité</span>
      <span>Sécurité</span>
      <span>Agilité</span>
      <span>Tolérance aux pannes</span>
      <span>Élasticité</span>
      <span>Récupérabilité</span>
      <span>Performance</span>
      <span>Déployabilité</span>
      <span>Apprenabilité</span>
      <span class="is-missing" v-click="1">Sobriété ?</span>
      <span class="is-missing" v-click="1">Durabilité ?</span>
      <span class="is-missing" v-click="1">Accessibilité ?</span>
    </div>
    <div class="house__floor"><i></i><i></i><i></i></div>
  </div>
</div>

<div class="source">
  Source : d'après Mark Richards, Neal Ford, <em>Fundamentals of Software Architecture</em> (O'Reilly, 2020).
</div>

<!--
Pour Richards et Ford, l'architecture combine quatre dimensions :
la structure (microservices, monolithe en couches…), en bas ; les décisions d'architecture et les principes de conception, les murs ;
et les caractéristiques d'architecture, qui remplissent le bâtiment.
- Clic : où sont la sobriété, la durabilité, l'accessibilité ? Pas dans la liste.
-->

---

<span class="kicker">La proposition Green Craft</span>

# Les rendre <span class="mark">explicites</span>, et mesurables

<div class="ff-def">
  <strong>Fitness function</strong> : un mécanisme qui fournit une <span class="mark">évaluation objective</span> de l'intégrité d'une caractéristique d'architecture. Un test, un seuil, une métrique, qui tourne à chaque commit.
</div>

<table class="grid-table archi-table mt-4">
  <thead>
    <tr><th>Caractéristique</th><th>Ce qu'elle exige de la structure</th><th>Sa fitness function</th></tr>
  </thead>
  <tbody>
    <tr v-click="1"><td>Sobriété</td><td>Ressources proportionnelles à l'usage, dépendances minimales, seules les données utiles transférées</td><td>Budget de taille d'image, budget de payload par endpoint, <span class="mark">seuil EcoIndex</span></td></tr>
    <tr v-click="2"><td>Durabilité</td><td>Fonctionne sur des terminaux anciens et des connexions lentes, ne force pas le renouvellement</td><td>Parcours clés <span class="mark">testés en réseau lent</span> et CPU bridé</td></tr>
    <tr v-click="3"><td>Accessibilité</td><td>Composants natifs et sémantiques, navigation clavier, contrastes</td><td><span class="mark">Zéro violation axe-core</span> sur les parcours critiques</td></tr>
  </tbody>
</table>

<p class="lead mt-6" v-click="4">Le RGESN et le GR491 deviennent <span class="mark">une source de caractéristiques implicites</span>, comme l'expertise métier.</p>

<div class="source">
  Source : Neal Ford, Rebecca Parsons, Patrick Kua, <em>Building Evolutionary Architectures</em> (O'Reilly, 2017). RGESN, RGAA.
</div>

<!--
La proposition : rendre ces trois caractéristiques explicites, et les mettre en concurrence avec les autres.
On les identifie comme les autres : en traduisant les préoccupations du domaine en « -ilities ».
Le RGESN et le GR491 jouent le rôle de l'expert métier pour les caractéristiques implicites.
Une caractéristique sans fitness function reste un vœu pieux. Définition de Ford, Parsons et Kua :
un mécanisme qui évalue objectivement l'intégrité d'une caractéristique d'architecture.
Concrètement : un test ou un seuil qui tourne dans la CI. Les trois slides suivantes en montrent un par caractéristique.
-->

---

<span class="kicker">Fitness function / sobriété</span>

# Sobriété : <span class="mark">un budget qui casse le build</span>

<div class="ff mt-4">
  <div class="ff__side">
    <div class="box">
      <h3>Ce qu'elle exige</h3>
      <p>Des ressources proportionnelles à l'usage, des dépendances minimales, seules les données utiles transférées.</p>
    </div>
    <div class="box box--accent">
      <h3>Le build casse si…</h3>
      <p>l'image du frontend dépasse <strong>100 Mo</strong>. Aujourd'hui : 62,4 Mo.</p>
    </div>
  </div>
  <div>
<span class="code-duo__label">CI : budget de taille d'image Docker</span>

```bash
SIZE=$(docker image inspect letter-flop-frontend \
  --format '{{.Size}}')
BUDGET=$((100 * 1000 * 1000))   # 100 Mo

if [ "$SIZE" -gt "$BUDGET" ]; then
  echo "Image : $((SIZE / 1000000)) Mo > budget 100 Mo"
  exit 1
fi
```

  </div>
</div>

<div class="source">
  Source : RGESN 3.1, 3.2, 3.7. Même principe pour un budget de payload par endpoint ou un seuil EcoIndex.
</div>

<!--
Une fitness function de sobriété, en 6 lignes de shell dans la CI.
On fixe un budget de taille d'image : si une dépendance ou une image de base fait regonfler le frontend
au-dessus de 100 Mo, le build casse. Le gorille ne revient pas en douce.
Même logique pour un budget de payload par endpoint (7,4 Ko pour /api/logs) ou un seuil EcoIndex (Valeur 03).
-->

---

<span class="kicker">Fitness function / durabilité</span>

# Durabilité : <span class="mark">tester sur un vieux téléphone</span>

<div class="ff mt-4">
  <div class="ff__side">
    <div class="box">
      <h3>Ce qu'elle exige</h3>
      <p>Fonctionner sur des terminaux anciens et des connexions lentes, sans forcer le renouvellement du matériel.</p>
    </div>
    <div class="box box--accent">
      <h3>Le build casse si…</h3>
      <p>l'historique ne s'affiche pas en <strong>5 s</strong> en réseau lent, avec un processeur bridé ×4.</p>
    </div>
  </div>
  <div>
<span class="code-duo__label">Playwright : réseau lent et CPU bridé</span>

```ts
test('historique utilisable sur un vieux terminal', async ({ page }) => {
  const cdp = await page.context().newCDPSession(page)
  await cdp.send('Network.emulateNetworkConditions', {
    offline: false, latency: 400,
    downloadThroughput: 50_000, uploadThroughput: 50_000,
  })
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 })

  await page.goto('/history.html')
  await expect(page.locator('#logs-list > *').first())
    .toBeVisible({ timeout: 5_000 })
})
```

  </div>
</div>

<div class="source">
  Source : RGESN 2.3 et famille 4. Émulation réseau et CPU via le Chrome DevTools Protocol.
</div>

<!--
La durabilité, c'est permettre de garder son téléphone plus longtemps : la fabrication des terminaux pèse 50 % de l'empreinte.
La fitness function émule un vieux terminal : réseau lent (~400 Kbit/s, 400 ms de latence) et CPU 4 fois plus lent.
Si le parcours clé ne tient plus en 5 secondes, le build casse.
-->

---

<span class="kicker">Fitness function / accessibilité</span>

# Accessibilité : <span class="mark">zéro violation</span>

<div class="ff mt-4">
  <div class="ff__side">
    <div class="box">
      <h3>Ce qu'elle exige</h3>
      <p>Des composants natifs et sémantiques, la navigation au clavier, des contrastes suffisants.</p>
    </div>
    <div class="box box--accent">
      <h3>Le build casse si…</h3>
      <p>un critère RGAA vérifiable automatiquement échoue sur un parcours critique.</p>
    </div>
  </div>
  <div>
<span class="code-duo__label">Playwright + axe-core ≥ 4.11 : tag RGAAv4</span>

```ts
import AxeBuilder from '@axe-core/playwright'

test('recherche de film conforme RGAA', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('searchbox').fill('Dune')
  await page.keyboard.press('Enter')

  const { violations } = await new AxeBuilder({ page })
    .withTags(['RGAAv4'])
    .analyze()
  expect(violations).toEqual([])
})
```

  </div>
</div>

<div class="source">
  Source : <a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/">RGAA 4.1</a>. Tags RGAA dans axe-core depuis la <a href="https://docs.deque.com/axe-release-impact/4.11.1/en/release-notes">version 4.11</a>. Seule une partie des critères est automatisable : ce test ne remplace pas un audit.
</div>

<!--
Le test cherche le champ et le bouton par leur rôle : s'ils ne sont pas accessibles, le test ne les trouve même pas.
On parle le langage du référentiel français : depuis la 4.11, axe-core étiquette ses règles avec le RGAA
(tag RGAAv4, et RGAA-x.y.z par critère). On ne lance que les règles exigées par le RGAA.
Un critère échoue, le build casse, et le rapport donne directement le numéro du critère RGAA.
Honnêteté : l'outillage automatique ne couvre qu'une partie des critères. C'est un filet, pas un audit.
-->

---
layout: statement
---

# Et sur Letterflop, <span class="mark">ça donne quoi ?</span>

<!--
Transition : on a posé les caractéristiques et leurs fitness functions.
Place aux preuves, mesurées entre la branche main (les mauvaises pratiques) et la branche rgesn (les corrections).
-->

---

<span class="kicker">Letterflop / sobriété · l'architecture</span>

# N'embarquer <span class="mark">que l'utile</span>

<div class="docker mt-2">
  <img class="docker__img" src="/gorilla.webp" alt="Un gorille tenant une banane, avec la citation de Joe Armstrong : « You wanted a banana but what you got was a gorilla holding the banana and the entire jungle. »" width="707" height="596">
  <div>
    <div class="bars" role="list">
      <div class="bar bar--wide" role="listitem" v-click="1">
        <span>Avant</span>
        <div class="bar__track"><div class="bar__fill" style="width: 100%"></div></div>
        <span class="bar__value">2,63 Go</span>
      </div>
      <div class="bar bar--wide" role="listitem" v-click="3">
        <span>Après</span>
        <div class="bar__track"><div class="bar__fill bar__fill--stripes" style="width: 30%"></div></div>
        <span class="bar__value">791 Mo</span>
      </div>
    </div>
    <div class="ms mt-4" v-click="2">
<div>
<span class="code-duo__label">Ce qu'on a fait : un multi-stage build</span>

```dockerfile
FROM maven:3.9-eclipse-temurin-25-alpine AS build
RUN mvn package -DskipTests

FROM eclipse-temurin:25-jre-alpine
COPY --from=build /app/target/*.jar app.jar
```

</div>
      <ul class="ms__gains">
        <li><strong>backend −78 %</strong> JDK et Maven restent dans l'étape de build</li>
        <li><strong>frontend −93 %</strong> Vite dev → fichiers statiques servis par nginx</li>
      </ul>
    </div>
  </div>
</div>

<p class="lead mt-6" v-click="4">Ce n'est pas une optimisation : <span class="mark">c'est retirer ce qui n'aurait jamais dû être là.</span></p>

<div class="source">
  Source : <a href="https://docs.docker.com/build/building/multi-stage/">Docker, multi-stage builds</a>. Mesures <code>docker images</code>, base postgres:15 inchangée (445 Mo). RGESN 3.1, 3.3.
</div>

<!--
Sobriété, côté architecture. Pari à la salle : combien pèse la stack Docker d'une app qui cherche des films ?
- Clic 1 : 2,63 Go. Le JDK complet et un serveur Vite de développement, servis en production.
  Joe Armstrong : on voulait une banane, on a eu le gorille qui la tient, et toute la jungle.
- Clic 2 : ce qu'on a fait. Un multi-stage build : une première étape construit avec tous les outils (JDK, Maven, node_modules),
  la seconde ne récupère que l'artefact (le .jar, les fichiers statiques) dans une image minimale.
- Clic 3 : 791 Mo. Backend −78 % (JRE Alpine), frontend −93 % (nginx). La base postgres ne bouge pas.
  Bonus : nginx apporte HTTP/2, brotli et les bons headers de cache (critère 3.3).
-->

---

<span class="kicker">Letterflop / sobriété · les données</span>

# Ne transférer <span class="mark">que l'utile</span>

<div class="code-duo mt-2">
<div>
<span class="code-duo__label">Avant : toute la table, deux fois, paginée en Java</span>

```java
List<MovieLog> allLogs =
    repository.findAllOrderByWatchedAtDesc();
List<MovieLog> freshLogs =
    repository.findAllOrderByWatchedAtDesc();
// tri et subList en mémoire…
long total = repository.findAll().size();
```

</div>
<div v-click="1">
<span class="code-duo__label">Ce qu'on a fait : pagination SQL et index</span>

```java
return repository
    .findAllByOrderByWatchedAtDescCreatedAtDesc(
        PageRequest.of(page, size))
    .map(this::toDto);
```

```sql
CREATE INDEX idx_movie_logs_watched_at
  ON movie_logs (watched_at DESC, created_at DESC);
```

</div>
</div>

<div class="grid grid-cols-3 gap-6 mt-4">
  <div class="box box--accent" v-click="2"><span class="figure">+77 %</span><p>de requêtes par seconde (79 → 140 req/s)</p></div>
  <div class="box" v-click="2"><span class="figure">−45 %</span><p>de latence p50 (122 → 67 ms)</p></div>
  <div class="box" v-click="3"><span class="figure">−94 %</span><p>de données avec <code>size=20</code> au lieu de 1 000 (123 → 7,4 Ko)</p></div>
</div>

<div class="source">
  Source : mesures <code>ab</code> sur <code>GET /api/logs</code>, branches <code>main</code> et <code>rgesn</code>, ~330 lignes en base. RGESN 6.5, 7.1.
</div>

<!--
Sobriété, côté données. L'historique chargeait toute la table deux fois, triait en Java, paginait avec subList,
et comptait avec findAll().size() : trois full table scans pour afficher 6 films.
- Clic 1 : ce qu'on a fait. La pagination descend dans SQL (LIMIT / OFFSET), un index B-tree couvre le tri.
- Clic 2 : +77 % de req/s, −45 % de latence p50.
- Clic 3 : un client qui demande size=1000 au lieu de 20 transfère 17 fois plus pour la même page.
Mesuré sur ~330 lignes : avec des millions, l'écart O(n) vs O(log n) est d'un ordre de grandeur.
-->

---

<span class="kicker">Letterflop / sobriété · le code</span>

# Un Result plutôt qu'un <span class="mark">throw</span>

<div class="rt mt-2">
<div>
<span class="code-duo__label">Avant : une note invalide lève une exception</span>

```java
if (rating < 1 || rating > 5)
    throw new InvalidRatingException(rating);
```

<span class="code-duo__label">Après : une valeur de retour</span>

```java
sealed interface Result permits Ok, Err {}

if (rating < 1 || rating > 5)
    return new Err("La note doit être entre 1 et 5");
```

</div>
<div>
<table class="grid-table rt__table" v-click="1">
  <thead><tr><th>Par appel, pile de</th><th>10 appels</th><th>100 appels</th></tr></thead>
  <tbody>
    <tr><td><code>throw</code> + <code>fillInStackTrace</code></td><td>2 076 ns</td><td>10 922 ns</td></tr>
    <tr><td><code>throw</code> sans stack trace</td><td>551 ns</td><td>5 403 ns</td></tr>
    <tr v-click="2"><td><code>Result</code></td><td class="is-active">10 ns</td><td class="is-active">110 ns</td></tr>
  </tbody>
</table>
<p class="rt__nuance mt-4" v-click="2"><strong>La nuance :</strong> sans stack trace, c'est moins cher, mais on perd de quoi diagnostiquer.</p>
</div>
</div>

<p class="lead mt-6" v-click="3">Des exceptions pour l'exceptionnel, <span class="mark">des valeurs de retour pour l'attendu.</span></p>

<p class="rt__warning" v-click="3"><strong>⚠ Micro-benchmark :</strong> l'écart dépend de votre gestion des erreurs (profondeur de pile, fréquence, try/catch global). <a href="https://xtrem-tdd.netlify.app/Flavours/Design/avoid-exceptions">Avoid exceptions, Xtrem TDD</a></p>

<div class="source">
  Source : Benchmark JMH 1.37, JDK 25, Intel Core i5-8279U.
</div>

<!--
Une note de 7 étoiles, ce n'est pas exceptionnel : c'est un cas métier attendu. Pourtant on lève souvent une exception.
Le coût caché : à la construction, Throwable appelle fillInStackTrace, qui parcourt toute la pile.
Plus la pile est profonde (Spring, filtres, proxies…), plus ça coûte, et ça se paie sur un chemin chaud.
- Clic 1 : benchmark JMH. Avec 10 appels dans la pile, ~2 µs avec throw contre 10 ns avec Result : ~200 fois plus.
  Avec 100 appels, ~11 µs contre 110 ns : ~100 fois plus.
- Clic 2 : la nuance. On peut désactiver la stack trace (writableStackTrace = false, constructeur protégé de RuntimeException) :
  2 à 4 fois moins cher, mais toujours ~50 fois plus qu'un Result, et on perd la trace.
- Clic 3 : la règle. Exceptions pour l'exceptionnel (base de données injoignable), valeurs de retour pour l'attendu.
Warning : un micro-benchmark sur un portable. L'écart réel dépend de la façon dont on gère ses cas d'erreur :
profondeur de pile, fréquence de l'erreur, un try/catch global ou des exceptions remontées partout.
C'est l'ordre de grandeur qui compte, pas la nanoseconde. Article : Avoid exceptions, sur Xtrem TDD.
-->

---

<span class="kicker">Letterflop / durabilité</span>

# Rester utilisable <span class="mark">sur un vieux téléphone</span>

<div class="grid grid-cols-3 gap-6 mt-8">
  <div class="box lf-card" v-click="1">
    <span class="figure">−75 %</span>
    <h3>Lazy loading</h3>
    <p>D'images au premier affichage : seules les affiches visibles sont chargées.</p>
<div class="lf-how">

```html
<img loading="lazy" width="185" height="278">
```

</div>
  </div>
  <div class="box lf-card" v-click="2">
    <span class="figure">−94 %</span>
    <h3>Des affiches à la bonne taille</h3>
    <p>Sur une recherche, ~4,5 Mo → ~274 Ko : on demande à TMDB la taille affichée.</p>
<div class="lf-how">

```diff
- /t/p/original
+ /t/p/w185
```

</div>
  </div>
  <div class="box lf-card" v-click="3">
    <span class="figure">0</span>
    <h3>Requête vers Google Fonts</h3>
    <p>Plus de domaine tiers : le texte s'affiche tout de suite, même en réseau lent.</p>
<div class="lf-how">

```css
body {
  font-family: system-ui;
}
```

</div>
  </div>
</div>

<p class="lead mt-10" v-click="4">Un site fluide sur un vieux téléphone, <span class="mark">c'est un téléphone qu'on garde.</span></p>

<div class="source">
  Source : mesures DevTools Network sur Letterflop, recherche « Matrix », branches <code>main</code> et <code>rgesn</code>. RGESN 2.3, 5.x, 6.x.
</div>

<!--
Deuxième caractéristique : la durabilité. La fabrication des terminaux pèse 50 % de l'empreinte :
un site qui reste fluide sur un vieux téléphone, c'est un téléphone qu'on ne remplace pas.
- Clic 1 : lazy loading natif (loading="lazy") : 20 affiches chargées au premier rendu avant, ~5 après.
- Clic 2 : des images adaptées. On demandait l'affiche originale à TMDB pour l'afficher en vignette.
- Clic 3 : plus de Google Fonts : 0 requête externe, plus de blocage du premier rendu.
Les chiffres d'images sont des ordres de grandeur.
-->

---

<span class="kicker">Letterflop / accessibilité</span>

# Accessible, <span class="mark">au clavier compris</span>

<div class="grid grid-cols-3 gap-6 mt-8">
  <div class="box lf-card" v-click="1">
    <h3>Des focus visibles</h3>
    <p>On voit toujours où l'on se trouve en naviguant au clavier.</p>
<div class="lf-how">

```diff
- class="focus:outline-none"
+ class="focus:outline-2"
```

</div>
    <span class="lf-card__crit">RGAA 10.7</span>
  </div>
  <div class="box lf-card" v-click="2">
    <h3>Des intitulés pour les lecteurs d'écran</h3>
    <p>Le champ de recherche est étiqueté, chaque affiche a un texte alternatif.</p>
<div class="lf-how">

```html
<input aria-label="Rechercher un film par titre">
<img alt="Affiche du film ${title}">
```

</div>
    <span class="lf-card__crit">RGAA 1.1, 11.1</span>
  </div>
  <div class="box lf-card box--accent" v-click="3">
    <h3>Une notation native</h3>
    <p>Des boutons radio au lieu d'étoiles en JavaScript : Tab, flèches, lecteur d'écran, <strong>zéro JS</strong>.</p>
<div class="lf-how">

```html
<fieldset>
  <input type="radio" name="rating">
```

</div>
    <span class="lf-card__crit">RGAA 7.1, 7.3</span>
  </div>
</div>

<p class="lead mt-8" v-click="4">Le composant natif est aussi <span class="mark">le plus sobre.</span></p>

<div class="source">
  Source : <a href="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/">RGAA 4.1</a>. Vérifié à chaque commit par la fitness function axe-core (tag RGAAv4).
</div>

<!--
Troisième caractéristique : l'accessibilité.
- Clic 1 : le focus visible. Le CSS supprimait l'outline : impossible de savoir où l'on est au clavier.
- Clic 2 : un aria-label sur le champ de recherche, et un texte alternatif sur chaque affiche (alt vide avant).
- Clic 3 : la notation. Des étoiles en span cliquables, inutilisables au clavier, remplacées par des boutons radio natifs dans un fieldset.
- Clic 4 : sobriété et accessibilité convergent : le natif, c'est moins de JavaScript et plus d'accessibilité.
-->

---

<span class="kicker">Rappel / Fundamentals of Software Architecture</span>

# Les caractéristiques d'architecture

<div class="archi mt-4">
  <div class="box">
    <h3>Explicites ou implicites</h3>
    <p><strong>Explicites</strong> : écrites dans les exigences.</p>
    <p class="archi__note"><strong>Implicites</strong> : personne ne les écrit, mais le système échoue sans elles.</p>
  </div>
  <div class="archi__cats">
    <div>
      <h3>Opérationnelles</h3>
      <div class="chips">
        <span>Disponibilité</span><span>Performance</span><span>Scalabilité</span><span>Élasticité</span><span>Fiabilité</span>
        <span class="is-missing" v-click="1">Sobriété ?</span>
      </div>
    </div>
    <div>
      <h3>Structurelles</h3>
      <div class="chips">
        <span>Maintenabilité</span><span>Extensibilité</span><span>Testabilité</span><span>Portabilité</span>
        <span class="is-missing" v-click="1">Durabilité ?</span>
      </div>
    </div>
    <div>
      <h3>Transverses</h3>
      <div class="chips">
        <span>Sécurité</span><span>Confidentialité</span><span>Légalité</span>
        <span v-mark.highlight="{ at: 1, color: 'var(--hl)' }">Accessibilité</span>
      </div>
    </div>
  </div>
</div>

<p class="lead mt-6" v-click="1">Sobriété absente, accessibilité jamais dans le top 3 : <span class="mark">implicites, donc invisibles, donc sacrifiées.</span></p>

<div class="source">
  Source : Mark Richards, Neal Ford, <a href="https://yoan-thirion.gitbook.io/knowledge-base/software-architecture/fundamentals-of-software-architecture"><em>Fundamentals of Software Architecture</em></a> (O'Reilly, 2020).
</div>

<!--
Rappel : une caractéristique d'architecture est un critère de succès du système, orthogonal au fonctionnel.
Trois conditions : non fonctionnelle, elle influence la structure, elle est critique.
Trois familles : opérationnelles, structurelles, transverses.
- Clic : la sobriété n'apparaît dans aucune liste. L'accessibilité est bien là, dans les transverses,
  mais on ne la retient presque jamais dans le top 3. Elles restent implicites, donc invisibles, donc sacrifiées.
-->

---
layout: statement
---

# Et nos <span class="mark">langages de programmation</span> ?

Au-delà de l'envie, de la hype, de l'orgueil.

<!--
Transition : on a vu les caractéristiques et ce qu'elles changent sur Letterflop.
Reste une décision qu'on ne remet presque jamais en question : le langage.
On le choisit par envie (« j'ai envie d'essayer »), par hype (« tout le monde passe à… »),
ou par orgueil (« mon langage est le meilleur »). Rarement selon l'usage.
-->

---

<span class="kicker">Un choix technique / pas neutre</span>

# Et notre langage, <span class="mark">on se pose la question ?</span>

<div class="lang mt-4">
  <div class="bars bars--lang" role="list" aria-label="Énergie relative par langage, C = 1">
    <div class="bar" role="listitem"><span>C</span><div class="bar__track"><div class="bar__fill" style="width: 1.3%"></div></div><span class="bar__value">1,00</span></div>
    <div class="bar" role="listitem"><span>Rust</span><div class="bar__track"><div class="bar__fill" style="width: 1.4%"></div></div><span class="bar__value">1,03</span></div>
    <div class="bar" role="listitem"><span>Java</span><div class="bar__track"><div class="bar__fill" style="width: 2.6%"></div></div><span class="bar__value">1,98</span></div>
    <div class="bar" role="listitem"><span>Go</span><div class="bar__track"><div class="bar__fill" style="width: 4.3%"></div></div><span class="bar__value">3,23</span></div>
    <div class="bar" role="listitem"><span>JavaScript</span><div class="bar__track"><div class="bar__fill" style="width: 5.9%"></div></div><span class="bar__value">4,45</span></div>
    <div class="bar" role="listitem"><span>TypeScript</span><div class="bar__track"><div class="bar__fill bar__fill--stripes" style="width: 28.3%"></div></div><span class="bar__value">21,50</span></div>
    <div class="bar" role="listitem"><span>PHP</span><div class="bar__track"><div class="bar__fill" style="width: 38.6%"></div></div><span class="bar__value">29,30</span></div>
    <div class="bar" role="listitem"><span>Python</span><div class="bar__track"><div class="bar__fill" style="width: 100%"></div></div><span class="bar__value">75,88</span></div>
  </div>
  <div class="lang__notes">
    <p v-click="1"><strong>Selon l'usage.</strong> Peu d'écart si l'appli attend, beaucoup si elle calcule.</p>
    <p v-click="2"><strong>Selon l'utilisation.</strong> JavaScript et TypeScript : presque pareils, et pourtant ×5.</p>
    <p v-click="3"><strong>Toujours un compromis.</strong> Java : sobre en énergie, gourmand en mémoire.</p>
  </div>
</div>

<p class="lead mt-6" v-click="4">Pas de bon langage : <span class="mark">un choix selon l'usage.</span></p>

<div class="source">
  Source : Pereira et al., <a href="https://greenlab.di.uminho.pt/wp-content/uploads/2017/10/sleFinal.pdf">« Energy Efficiency across Programming Languages »</a>, SLE 2017. Énergie consommée, C = 1.
</div>

<!--
Le choix du langage est une décision d'architecture, et elle pèse sur les caractéristiques.
Rarement remise en question : on prend celui de l'équipe. L'étude de Pereira et al. (SLE 2017) mesure l'énergie de 27 langages
sur les mêmes 10 problèmes. Normalisé sur C : Rust 1,03, Java 1,98, JavaScript 4,45, Python 75,88.
Ce n'est pas binaire :
- Clic 1 : tout dépend de l'usage. Letterflop passe son temps à attendre TMDB et PostgreSQL : le langage pèse peu.
  Sur un batch lourd ou un service à fort trafic, l'écart se paie à chaque exécution.
- Clic 2 : tout dépend de comment on l'utilise. TypeScript est compilé en JavaScript, même moteur, et pourtant 21,50 contre 4,45 :
  ce sont les implémentations qui diffèrent. La façon d'écrire le code compte autant que le langage.
- Clic 3 : Java est très bien placé en énergie, mais gourmand en mémoire. Encore un compromis.
- Clic 4 : on ne change pas de langage pour l'écologie, mais on choisit en connaissance de cause.
Limites de l'étude : des micro-benchmarks de 2017, des versions de compilateurs datées.
-->

---

<span class="kicker">Deux trajectoires / un même choix</span>

# Rust et Python <span class="mark">qui explosent</span>

<div class="rp mt-8">
  <div class="rp__col" v-click="1">
    <h3>Rust : <span class="mark">sobre</span>, choisi pour les logiciels très utilisés</h3>
    <div class="rp__stat"><span class="figure">÷3</span><p><strong>de ressources</strong> pour le même service chez Cloudflare, qui fait transiter une grande partie du web.</p></div>
  </div>
  <div class="rp__col" v-click="2">
    <h3>Python : <span class="mark">gourmand</span>, et le plus utilisé au monde</h3>
    <div class="rp__stat"><span class="figure">6 sur 10</span><p><strong>développeur·ses l'utilisent</strong>, porté par l'essor de l'IA.</p></div>
    <div class="rp__stat"><span class="figure">×76</span><p><strong>d'énergie</strong> par rapport au C, pour faire la même chose.</p></div>
  </div>
</div>

<p class="lead mt-8" v-click="3">Plus un logiciel est utilisé, <span class="mark">plus le choix du langage compte.</span></p>

<div class="source">
  Source : Cloudflare, <a href="https://blog.cloudflare.com/how-we-built-pingora-the-proxy-that-connects-cloudflare-to-the-internet/">« How we built Pingora »</a>, 2022. <a href="https://survey.stackoverflow.co/2025/technology">Stack Overflow Developer Survey 2025</a> (57,9 %). Pereira et al., SLE 2017 (×75,88).
</div>

<!--
Deux trajectoires opposées, en termes simples.
- Clic 1 : Rust est sobre, et on l'utilise de plus en plus pour réécrire les logiciels qui tournent énormément.
  Cloudflare, par où transite une grande partie du web, a réécrit l'un de ses services clés en Rust :
  70 % de processeur et 67 % de mémoire en moins, sur plus de 1 000 milliards de requêtes par jour.
  Même l'écosystème Python se fait réécrire ses outils en Rust (uv, 8 à 10 fois plus rapide que pip).
- Clic 2 : Python n'a jamais été autant utilisé : 57,9 % des développeur·ses (Stack Overflow 2025, +7 points en un an),
  1er langage sur GitHub depuis 2024. Porté par l'IA et la data. Mais il consomme environ 76 fois l'énergie du C
  pour la même tâche (Pereira, 75,88).
  Nuance si question : en IA, les calculs lourds tournent en C ou sur GPU, Python orchestre.
- Clic 3 : plus un logiciel est utilisé, plus chaque gain se multiplie. Le choix du langage compte d'abord là.
-->

---
layout: section
number: 3
part: Valeur 03
---

<span class="kicker">Valeur 03 / mesurer en continu</span>

# Pas seulement ajouter constamment de la valeur, mais aussi <span class="mark">de la valeur respectueuse des ressources</span>

<!--
Ajouter constamment de la valeur, c'est aussi ne pas laisser l'empreinte dériver à chaque sprint.
La sobriété est une métrique, pas une intention.
-->

---

<span class="kicker">Le constat / sans mesure, rien ne se voit</span>

# Sprint après sprint, <span class="mark">l'empreinte dérive</span>

<div class="drift mt-6" role="list" aria-label="Score EcoIndex de la page d'accueil, sprint après sprint (valeurs illustratives)">
  <div class="drift__col" role="listitem" v-click="1"><span class="drift__score">85</span><div class="drift__bar" style="height: 85%"></div><span class="drift__label">Sprint 1</span><span class="drift__why">La version optimisée</span></div>
  <div class="drift__col" role="listitem" v-click="1"><span class="drift__score">77</span><div class="drift__bar" style="height: 77%"></div><span class="drift__label">Sprint 2</span><span class="drift__why">+ une bibliothèque d'icônes</span></div>
  <div class="drift__col" role="listitem" v-click="2"><span class="drift__score">69</span><div class="drift__bar" style="height: 69%"></div><span class="drift__label">Sprint 3</span><span class="drift__why">+ un carrousel en page d'accueil</span></div>
  <div class="drift__col" role="listitem" v-click="2"><span class="drift__score">61</span><div class="drift__bar" style="height: 61%"></div><span class="drift__label">Sprint 4</span><span class="drift__why">+ un outil de statistiques</span></div>
  <div class="drift__col" role="listitem" v-click="3"><span class="drift__score">52</span><div class="drift__bar" style="height: 52%"></div><span class="drift__label">Sprint 5</span><span class="drift__why">+ un widget de chat</span></div>
  <div class="drift__col" role="listitem" v-click="3"><span class="drift__score">44</span><div class="drift__bar" style="height: 44%"></div><span class="drift__label">Sprint 6</span><span class="drift__why">+ une vidéo d'accueil</span></div>
</div>

<p class="lead mt-6" v-click="4">Personne n'a rien cassé. <span class="mark">Personne n'a rien vu.</span></p>

<div class="source">
  Source : valeurs illustratives. EcoIndex : un score sur 100 calculé à partir du poids de la page, du nombre de requêtes et de la complexité du DOM (<a href="https://www.ecoindex.fr/comment-ca-marche/">ecoindex.fr</a>).
</div>

<!--
Un scénario que tout le monde a vécu. Au sprint 1, la page est optimisée (85, le score réel de Letterflop).
- Clics 1 à 3 : les sprints apparaissent deux par deux.
Puis chaque sprint ajoute de la valeur, et un petit quelque chose : une bibliothèque, un carrousel, un outil de stats, un chat, une vidéo.
Aucun de ces ajouts n'est un drame. Mis bout à bout, on a perdu presque la moitié du score.
- Clic 4 : personne n'a rien cassé, personne n'a rien vu. Les tests passent, la feature marche.
On a des tests pour les régressions fonctionnelles. Pourquoi pas pour les régressions d'empreinte ?
Les valeurs sont illustratives : l'EcoIndex combine poids de la page, nombre de requêtes et taille du DOM.
-->

---

<span class="kicker">Les fitness functions / branchées dans la CI</span>

# Un contrôle qui bloque, <span class="mark">comme un test</span>

<div class="gate mt-8" role="list" aria-label="Étapes du pipeline d'intégration continue">
  <div class="gate__step" role="listitem">Commit</div>
  <span class="gate__arrow" aria-hidden="true">→</span>
  <div class="gate__step" role="listitem">Tests</div>
  <span class="gate__arrow" aria-hidden="true">→</span>
  <div class="gate__step gate__step--eco" :class="{ 'is-failed': $clicks >= 1 }" role="listitem">EcoIndex<br><small>≥ 80</small></div>
  <span class="gate__arrow" aria-hidden="true">→</span>
  <div class="gate__step" role="listitem">Accessibilité<br><small>RGAA</small></div>
  <span class="gate__arrow" aria-hidden="true">→</span>
  <div class="gate__step" role="listitem">Rapidité<br><small>&lt; 200 ms</small></div>
  <span class="gate__arrow" aria-hidden="true">→</span>
  <div class="gate__step gate__step--end" role="listitem">Mise en ligne</div>
</div>

<p class="gate__fail" v-click="1">✗ <strong>EcoIndex 77 &lt; 80</strong> : le sprint 2 ne passe pas, la mise en ligne est bloquée.</p>

<div class="gate__detail mt-4">
  <div v-click="2">
<span class="code-duo__label">EcoIndex : greenit-analysis-action</span>

```yaml
- name: GreenIT Analysis
  uses: ythirion/greenit-analysis-action@0.1.2
  with:
    url-file: greenit-urls.yaml
    min-ecoindex: '80'
```

  </div>
  <div v-click="3">
<span class="code-duo__label">Rapidité : un benchmark ab</span>

```yaml
- name: API Benchmark
  run: |
    p95=$(ab -n 50 -c 5 "$API/logs?page=0&size=6" \
      | grep "95%" | awk '{print $2}')
    if [ "$p95" -gt 200 ]; then exit 1; fi
```

  </div>
</div>

<div class="source">
  Source : <a href="https://github.com/ythirion/greenit-analysis-action">greenit-analysis-action</a>, basée sur GreenIT-Analysis CLI. Accessibilité et performance : les fitness functions de la valeur 02. RGESN 1.4.
</div>

<!--
La réponse : on traite l'empreinte comme un test. À chaque commit, le pipeline mesure.
Les fitness functions de la valeur 02 (accessibilité, temps de réponse) s'ajoutent à un contrôle EcoIndex.
- Clic 1 : seuil à 80, au plus près du score actuel. Dès le sprint 2, l'EcoIndex tombe à 77 : la mise en ligne est bloquée.
  L'écart est petit, la correction aussi.
- Clic 2 : côté code, 5 lignes dans GitHub Actions, avec l'action open source que j'ai écrite pour ça.
- Clic 3 : la rapidité, avec ApacheBench (exercice 13 de l'atelier) : 50 requêtes, 5 en parallèle,
  et si 95 % des réponses ne tiennent pas sous 200 ms, le build casse.
RGESN 1.4 : l'écoconception intégrée aux revues, ici automatiquement.
-->

---

<span class="kicker">Les fitness functions / le rapport GreenIT-Analysis</span>

# Un rapport, <span class="mark">à chaque push</span>

<div class="report mt-4">
  <img class="report__img report__img--main" src="/greenit-rapport-scenarios.webp" alt="Rapport GreenIT-Analysis de Letterflop : Historique 86, Fiche film 85, Recherche 85, note A, environ 1,9 cl d'eau et 1,3 gCO2e par page, 3 bonnes pratiques à mettre en œuvre" width="2200" height="532">
  <div class="report__imgs">
  <div v-click="1">
    <img class="report__img" src="/greenit-rapport-pratiques.webp" alt="Bonnes pratiques non respectées : ajouter des en-têtes de cache, compresser les ressources, éviter les requêtes en erreur" width="2200" height="275">
  </div>
  </div>
  <p class="report__lead" v-click="2">Le score dit <span class="mark">où on en est</span>, les bonnes pratiques disent <span class="mark">quoi corriger.</span></p>
</div>

<div class="source">
  Source : rapport réel GreenIT-Analysis CLI sur Letterflop (branche <code>rgesn</code>), 26/10/2026. 24 des 115 bonnes pratiques CNumR sont vérifiées automatiquement.
</div>

<!--
Voilà ce que produit la CI, ici sur la version corrigée de Letterflop. Un rapport par pull request, joint au pipeline.
Les trois parcours : historique, fiche film, recherche. 85-86 sur 100, note A. Environ 2 cl d'eau et 1,3 g de CO2e par page.
- Clic 1 : même avec un A, le rapport trouve encore 3 bonnes pratiques à corriger :
  pas d'en-têtes de cache, des ressources non compressées, et une requête en erreur.
- Clic 2 : le score dit où on en est, les bonnes pratiques disent quoi corriger. Le rapport devient la todo list.
Honnêteté : l'outil vérifie 24 des 115 bonnes pratiques du référentiel CNumR. C'est un filet, pas un audit.
-->

---

<span class="kicker">Les fitness functions / la rapidité</span>

# Mesurer la rapidité, <span class="mark">pas la deviner</span>

<div class="bench mt-6">
  <div class="box" v-click="1">
    <span class="bench__kind">Benchmark de charge</span>
    <h3>On envoie des centaines de requêtes, on chronomètre</h3>
    <div class="bench__rows">
      <div class="bench__row"><span>Requêtes par seconde</span><strong>79 → 140</strong><span class="mark">+77 %</span></div>
      <div class="bench__row"><span>Temps de réponse médian</span><strong>122 → 67 ms</strong><span class="mark">−45 %</span></div>
    </div>
    <p>L'historique de Letterflop, avant et après pagination et index.</p>
  </div>
  <div class="box" v-click="2">
    <span class="bench__kind">Micro-benchmark</span>
    <h3>On isole un bout de code, on le répète des millions de fois</h3>
    <div class="bench__rows">
      <div class="bench__row"><span><code>throw</code>, pile de 10 appels</span><strong>2 076 ns</strong><span></span></div>
      <div class="bench__row"><span><code>Result</code></span><strong>10 ns</strong><span class="mark">÷200</span></div>
    </div>
    <p>Le même cas métier, deux façons de l'écrire.</p>
  </div>
</div>

<p class="lead mt-6" v-click="3">Un benchmark montre aussi <span class="mark">ce qui se dégrade</span> : −10 % sur la fiche film.</p>

<div class="source">
  Source : ApacheBench 2.3 (100 requêtes, 10 en parallèle, <code>GET /api/logs</code>) et JMH 1.37 (JDK 25, Intel Core i5-8279U). Comparer toujours sur la même machine, avec les mêmes données.
</div>

<!--
La troisième fitness function de la CI, la rapidité. On ne la devine pas, on la mesure, de deux façons.
- Clic 1 : le benchmark de charge, avec ApacheBench. On envoie 100 requêtes, 10 en parallèle, sur l'historique de Letterflop.
  Avant / après pagination et index : 79 à 140 requêtes par seconde (+77 %), temps de réponse médian de 122 à 67 ms (−45 %).
  Dans la CI : au-delà de 200 ms, la mise en ligne est bloquée.
- Clic 2 : le micro-benchmark, avec JMH, celui du Result plutôt que throw : ~200 fois moins cher.
- Clic 3 : honnêteté. Le même benchmark a montré −10 % sur la fiche film (274 à 246 req/s). Sans mesure, on ne l'aurait pas vu.
Les pièges : comparer sur la même machine, avec les mêmes données. Mesuré sur ~330 lignes : avec des millions,
l'écart de la pagination serait d'un ordre de grandeur.
-->

---

<span class="kicker">La transparence / le Nutri-Score du numérique</span>

# Afficher son score, <span class="mark">en pied de page</span>

<div class="badge-demo mt-6">
  <div class="badge-demo__visual">
    <div class="badge-demo__site" aria-hidden="true">
      <div class="badge-demo__line"></div>
      <div class="badge-demo__line badge-demo__line--short"></div>
      <div class="badge-demo__footer">
        <span class="badge-demo__badge"><span>EcoIndex</span><strong>B</strong></span>
        <span class="badge-demo__link">Notre empreinte →</span>
      </div>
    </div>
    <p class="badge-demo__caption">Le badge officiel du collectif CNumR, mis à jour à chaque mesure, cliquable vers le détail.</p>
  </div>
  <div class="badge-demo__body">
    <div class="rp__stat" v-click="1"><span class="figure">~1,3 Ko</span><p><strong>au total</strong> : un badge de 779 octets et un script de 569 octets. Le badge ne pèse presque rien.</p></div>
    <div class="rp__stat" v-click="2"><span class="figure">7 jours</span><p><strong>de cache</strong> : le score n'est pas recalculé à chaque visite.</p></div>
    <div v-click="3">

```html
<div id="ecoindex-badge"></div>
<script src="https://cdn.jsdelivr.net/gh/cnumr/ecoindex_badge@3/assets/js/ecoindex-badge.js" defer></script>
```

  </div>
  </div>
</div>

<p class="lead mt-6" v-click="4">On affiche le Nutri-Score sur les aliments. <span class="mark">Pourquoi pas sur nos sites ?</span></p>

<div class="source">
  Source : <a href="https://github.com/cnumr/ecoindex_badge">cnumr/ecoindex_badge</a>. Note affichée à titre d'exemple. RGESN 1.5.
</div>

<!--
On boucle avec l'ouverture : on avait mesuré un site au hasard, voilà comment rendre le score visible sur le nôtre.
Le badge EcoIndex du collectif CNumR, en pied de page. Il affiche la note, il est cliquable vers le détail.
- Clic 1 : il pèse à peine 1,3 Ko, badge et script compris.
- Clic 2 : avec 7 jours de cache, on ne refait pas l'analyse à chaque visite.
- Clic 3 : deux lignes de HTML.
- Clic 4 : le Nutri-Score du numérique. Afficher son score, c'est s'engager : pour les utilisateurs, et pour l'équipe.
-->

---

<span class="kicker">La transparence / Letterflop</span>

# Une page <span class="mark">« Notre empreinte »</span>

<div class="footprint mt-6">
  <div class="footprint__window">
    <div class="footprint__bar" aria-hidden="true"><span></span><span></span><span></span><code>letterflop / empreinte</code></div>
    <div class="footprint__page">
      <h3>Notre empreinte numérique</h3>
      <div class="footprint__grid">
        <div v-click="1">
          <h4>Ce que nous avons optimisé</h4>
          <ul>
            <li><strong>−80 %</strong> sur le poids de l'application installée</li>
            <li><strong>−94 %</strong> de données sur l'historique</li>
            <li><strong>~4,5 Mo → ~274 Ko</strong> d'images par recherche</li>
            <li><strong>0</strong> police téléchargée</li>
          </ul>
        </div>
        <div v-click="2">
          <h4>Comment nous mesurons</h4>
          <ul>
            <li>EcoIndex : poids, requêtes, DOM</li>
            <li>Accessibilité : critères RGAA automatisables</li>
            <li>Chaque modification est mesurée avant mise en ligne</li>
          </ul>
        </div>
        <div v-click="3">
          <h4>Nos engagements</h4>
          <ul>
            <li>Aucune mise en ligne sous un EcoIndex de 80</li>
            <li>Le seuil ne redescend jamais</li>
            <li>Vérifiez par vous-même : <span class="footprint__fake-link">ecoindex.fr</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<p class="lead mt-6" v-click="4">Ce qu'on affiche publiquement, <span class="mark">on s'interdit de le dégrader.</span></p>

<p class="footprint__demo" v-click="5">Démo : <a class="promo__link" href="https://green-craft.fr/empreinte">green-craft.fr/empreinte</a></p>

<div class="source">
  Source : chiffres mesurés sur Letterflop, branches <code>main</code> et <code>rgesn</code>. Atelier « RGESN en action », exercice 14. RGESN 1.5.
</div>

<!--
Le badge renvoie vers une page « Notre empreinte ». Rien de compliqué, trois blocs :
- Clic 1 : ce qu'on a optimisé, avec les vrais chiffres de Letterflop vus dans la valeur 02.
- Clic 2 : comment on mesure. Pas de greenwashing : une méthode publique, que chacun peut refaire.
- Clic 3 : nos engagements, c'est-à-dire les seuils de la CI, écrits noir sur blanc.
- Clic 4 : la transparence engage. Ce qu'on affiche publiquement, on s'interdit de le dégrader.
- Clic 5 : démo, la page « Notre empreinte » de green-craft.fr. Score réel, ce qui est fait, et ce qu'il reste à faire pour passer en A.
-->

---
layout: section
number: 4
part: Valeur 04
---

<span class="kicker">Valeur 04 / partager</span>

# Plus qu'une communauté de professionnels, une communauté dédiée à <span class="mark">un numérique soutenable</span>

<!--
Dernière valeur, la plus simple et la plus difficile : partager.
Ce qu'on a vu ne sert à rien si ça reste dans une équipe.
-->

---

<span class="kicker">La communauté / montrer ce qu'on fait</span>

# Partager, <span class="mark">y compris ses échecs</span>

<div class="grid grid-cols-2 gap-5 mt-6">
  <div class="box lf-card" v-click="1">
    <h3>Ses mesures</h3>
    <p>Avant, après, et la méthode. Comme les chiffres de Letterflop dans ce talk : chacun peut les refaire.</p>
  </div>
  <div class="box lf-card" v-click="2">
    <h3>Ses pratiques</h3>
    <p>Un Event Storming responsable, une grille d'arbitrage, un seuil en CI : ce qui marche chez nous peut marcher ailleurs.</p>
  </div>
  <div class="box lf-card box--accent" v-click="3">
    <h3>Ses échecs</h3>
    <p>La fiche film qui perd 10 %, l'affiche IA abandonnée. Ce qui n'a pas marché fait gagner du temps aux autres.</p>
  </div>
  <div class="box lf-card" v-click="4">
    <h3>Ses outils</h3>
    <p>En open source : la GitHub Action GreenIT, Letterflop, l'atelier « RGESN en action ».</p>
  </div>
</div>

<p class="lead mt-6" v-click="5">On a tous à y gagner : <span class="mark">on progresse plus vite ensemble.</span></p>

<!--
Une communauté dédiée à un numérique soutenable, concrètement, c'est partager quatre choses.
- Clic 1 : ses mesures. Pas « on a réduit notre empreinte », mais avant, après, et comment on a mesuré.
- Clic 2 : ses pratiques. Ce qui marche dans votre équipe : un atelier, une grille, une fitness function.
  Personne n'a à tout réinventer.
- Clic 3 : ses échecs. C'est le plus rare et le plus utile : la régression qu'on n'avait pas vue,
  la feature qu'on a abandonnée. Ça évite aux autres de refaire les mêmes erreurs.
- Clic 4 : ses outils. Tout ce que vous avez vu aujourd'hui est en open source : l'action, Letterflop, l'atelier.
- Clic 5 : on a tous à y gagner. Ce que je partage, vous l'améliorez, et je le récupère.
  C'est l'esprit du Craft : on progresse en apprenant les uns des autres. Faites un talk, un article, un atelier en interne.
-->

---
layout: statement
---

# La règle des 2 : <span class="mark">choisis 2 pratiques</span>, applique-les cette semaine.

Et partage le résultat.

<!--
On fait lever la main : qui repart avec une pratique ? Deux ?
Pas dix : deux. Choisies dans la checklist qui suit, appliquées cette semaine, et partagées.
-->


---
part: Clôture
exportClean: true
---

<span class="kicker" v-if="!$nav.isPrintMode">Conclusion / green-craft.fr</span>

# <span class="mark">Ta checklist</span> pour lundi

<a class="checklist__qr" v-if="!$nav.isPrintMode" href="https://green-craft.fr/docs/ta-checklist-pour-lundi.pdf">
  <img src="/qr-checklist.svg" alt="QR code vers la checklist en PDF" width="104" height="104" />
</a>

<div class="checklist">
  <div class="checklist__value">
    <h3><span class="value__num">01</span> Des partenariats conscients de leur impact</h3>
    <ul>
      <li><span class="mark">Event Storming</span>, avec une couleur numérique responsable</li>
      <li><span class="mark">Challenger</span> son PO : pas « non », mais « pas comme ça »</li>
      <li>Critères RGESN « Spécifications » comme grille d'arbitrage</li>
      <li><span class="mark">Mini ACV</span> pour quantifier une feature</li>
      <li><span class="mark">Matrice valeur / impact</span> environnemental et social</li>
    </ul>
  </div>
  <div class="checklist__value">
    <h3><span class="value__num">02</span> Des logiciels sobres et durables</h3>
    <ul>
      <li>Sobriété, durabilité, accessibilité en caractéristiques</li>
      <li>Une <span class="mark">fitness function</span> par caractéristique</li>
      <li><span class="mark">Multi-stage build</span> pour les images Docker</li>
      <li>Pagination SQL et index, pas de <code>findAll()</code></li>
      <li><code>Result</code> plutôt que <code>throw</code> pour l'attendu</li>
      <li>Lazy loading, images à la bonne taille, polices système</li>
      <li>Focus visibles, champs étiquetés, composants natifs</li>
    </ul>
  </div>
  <div class="checklist__value">
    <h3><span class="value__num">03</span> De la valeur respectueuse des ressources</h3>
    <ul>
      <li>Une <span class="mark">quality gate EcoIndex</span> qui bloque la mise en ligne</li>
      <li><span class="mark">Accessibilité</span> et temps de réponse vérifiés à chaque commit</li>
      <li>Un seuil ambitieux, qui ne redescend jamais</li>
      <li>Le badge EcoIndex en pied de page</li>
      <li>Une page <span class="mark">« Notre empreinte »</span></li>
    </ul>
  </div>
  <div class="checklist__value">
    <h3><span class="value__num">04</span> Une communauté soutenable</h3>
    <ul>
      <li><span class="mark">Partager</span> ses mesures, ses pratiques, ses échecs</li>
      <li>Ouvrir ses outils en open source</li>
      <li>Monter une communauté, ou porter le sujet ailleurs</li>
      <li>Rejouer l'atelier « RGESN en action » en équipe</li>
    </ul>
  </div>
</div>

<p class="checklist__link" v-if="!$nav.isPrintMode"><a href="https://green-craft.fr/docs/ta-checklist-pour-lundi.pdf">green-craft.fr/docs/ta-checklist-pour-lundi.pdf</a></p>

<!--
La slide à prendre en photo : une checklist par valeur du manifeste, avec les outils vus pendant le talk.
- 01 : Event Storming et sa couleur numérique responsable, grille RGESN, mini ACV, matrice valeur / impact.
- 02 : sobriété, durabilité et accessibilité comme caractéristiques d'architecture, avec leurs fitness functions ;
  le choix du langage ; multi-stage build, pagination SQL et index, Result plutôt que throw ;
  lazy loading, images adaptées, polices système ; focus visibles, champs étiquetés, composants natifs.
- 03 : les fitness functions dans la CI (EcoIndex, accessibilité, temps de réponse), un seuil ambitieux, le badge et la page « Notre empreinte ».
- 04 : la règle des 2, partager ses mesures et ses échecs, ouvrir ses outils, monter une communauté ou porter le sujet ailleurs, rejouer l'atelier, diffuser le manifeste sur green-craft.fr.
Punchline : des logiciels bien conçus et sobres, ça ne se décrète pas, ça se pratique.
-->

---

<span class="kicker">Pour aller plus loin</span>

# L'atelier <span class="mark">RGESN en action</span>

<div class="promo mt-4">
  <img class="promo__visual" src="/rgesn-en-action.webp" alt="Visuel de l'atelier Le RGESN en action : Yoan Thirion pêche depuis une barque" width="1200" height="675">
  <div class="promo__body">
    <p class="promo__pitch">Pas une énième prise de conscience : <strong>une boîte à outils</strong> à appliquer dès lundi, sur ton produit, dans tes affinages, dans ton code.</p>
    <ul class="promo__facts">
      <li><strong>15 exercices</strong> pratiques, de la mesure au bilan</li>
      <li><strong>Letterflop</strong> en fil rouge, branche <code>main</code> à corriger</li>
      <li>Les <strong>9 familles du RGESN</strong> couvertes</li>
      <li><strong>1 journée</strong> en mob ou pair programming, sans prérequis</li>
    </ul>
    <a class="promo__link" href="https://github.com/ythirion/rgesn-en-action">github.com/ythirion/rgesn-en-action</a>
  </div>
</div>

<!--
Pour aller plus loin : l'atelier « RGESN en action ».
Tout ce qu'on a vu sur Letterflop vient de là : les chiffres Docker, la pagination, les images, l'accessibilité.
15 exercices en mob ou pair programming, sur une journée, sans prérequis en numérique responsable.
Le repo est public : rejouez-le en équipe.
-->

---
layout: statement
---

# Bien conçus et sobres, ça ne se décrète pas : <span class="mark">ça se pratique.</span>

Merci ! Des questions ?

<a class="slides-qr" href="https://ythirion.github.io/journee-econception2027/">
  <img src="/qr-slides.svg" alt="QR code vers les slides en ligne" width="150" height="150" />
  <span>ythirion.github.io/journee-econception2027</span>
</a>

<!--
La punchline. Des logiciels bien conçus et sobres, ça ne se décrète pas, ça se pratique.
Lundi, deux pratiques. Merci, place aux questions.
-->
