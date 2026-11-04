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
