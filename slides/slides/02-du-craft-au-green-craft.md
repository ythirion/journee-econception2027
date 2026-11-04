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
