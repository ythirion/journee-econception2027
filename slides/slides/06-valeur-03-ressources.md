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
