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

<span class="kicker">Pour aller plus loin / se faire accompagner</span>

# Écoconcevoir <span class="mark">avec son assistant de code</span>

<div class="grid grid-cols-[600px_1fr] gap-10 mt-6 items-start">
  <div>
    <p class="promo__pitch">L'<strong>Institut du Numérique Responsable</strong> met les règles du RGESN, du GR491, d'Opquast et du RGAA <strong>dans ton assistant de code</strong> : Claude Code, Codex, Mistral Vibe…</p>
    <a class="promo__link" href="https://institutnr.org/ecoconcevoir-avec-un-assistant-de-code">institutnr.org/ecoconcevoir-avec-un-assistant-de-code</a>
  </div>
  <div class="box">
    <ol class="promo__facts">
      <li><strong>Cibler</strong> les règles utiles au projet</li>
      <li>Les <strong>appliquer</strong> pendant l'écriture</li>
      <li><strong>Vérifier</strong> avec un audit local</li>
      <li><strong>Rendre compte</strong>, sources à l'appui</li>
    </ol>
  </div>
</div>

<p class="lead mt-6">Pour apprendre en faisant, ou pré-auditer un projet.<br/><span class="mark">Un accompagnement, pas une certification.</span></p>

<div class="source">
  Source : <a href="https://institutnr.org/ecoconcevoir-avec-un-assistant-de-code">Institut du Numérique Responsable, Labo NR, « Écoconcevoir avec un assistant de code »</a>. Outils libres, skill-nr sous licence CC BY-SA 4.0.
</div>

<!--
Pour se faire accompagner, dans ses apprentissages comme dans un audit : l'INR publie des outils libres pour les assistants de code.
skill-nr rassemble les règles du RGESN, du GR491, d'Opquast et du RGAA, avec des déclinaisons poussées : Green Claude, Green Codex, Green Vibe.
La méthode en 4 temps : cibler, appliquer, vérifier par un audit local, rendre compte avec les sources.
Leur propre mise en garde : aucun de ces outils ne certifie la conformité. Ça accompagne, ça ne remplace pas la mesure.
-->

---
layout: statement
---

# Bien conçus et sobres, ça ne se décrète pas : <span class="mark">ça se pratique.</span>

Merci ! Des questions ?

<a class="slides-qr" href="https://ythirion.github.io/journee-econception2027/green-craft-journee-econception-2027.pdf">
  <img src="/qr-slides.svg" alt="QR code pour télécharger les slides en PDF" width="150" height="150" />
  <span>ythirion.github.io/journee-econception2027/green-craft-journee-econception-2027.pdf</span>
</a>

<!--
La punchline. Des logiciels bien conçus et sobres, ça ne se décrète pas, ça se pratique.
Lundi, deux pratiques. Merci, place aux questions.
-->
