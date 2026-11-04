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
