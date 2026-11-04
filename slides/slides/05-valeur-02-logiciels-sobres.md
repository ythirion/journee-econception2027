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

<span class="kicker">Infrastructure / le poste invisible</span>

# L'hébergement en <span class="mark">3 questions</span>

<div class="host mt-6">
  <div class="host__questions">
    <div class="box" v-click="1">
      <h3>1. Quelle efficacité ?</h3>
      <p>Le <strong>PUE</strong> : l'énergie du datacenter divisée par celle des serveurs. 1,0 : rien de perdu.</p>
    </div>
    <div class="box" v-click="3">
      <h3>2. Quelle électricité ? <span class="host__figure">×40</span></h3>
      <p>Entre charbon et hydraulique. Vraiment consommée, ou de simples <strong>certificats</strong> ?</p>
    </div>
    <div class="box box--accent" v-click="4">
      <h3>3. Quel pays ? <span class="host__figure">÷5 à 7</span></h3>
      <p>D'intensité carbone en hébergeant à <strong>Paris</strong> plutôt qu'en Virginie.</p>
    </div>
  </div>
  <div class="pue" v-click="2">
    <p class="pue__title">PUE moyen déclaré, du plus sobre au moins sobre</p>
    <ul class="pue__list" role="list">
    <li class="pue__row"><span class="pue__name">Google Cloud</span><span class="pue__track"><span class="pue__bar" style="width:15.0%"></span></span><span class="pue__value">1,09</span></li>
    <li class="pue__row"><span class="pue__name">Infomaniak <sub>site D4</sub></span><span class="pue__track"><span class="pue__bar" style="width:15.0%"></span></span><span class="pue__value">1,09</span></li>
    <li class="pue__row"><span class="pue__name">Hetzner</span><span class="pue__track"><span class="pue__bar" style="width:20.0%"></span></span><span class="pue__value">1,12</span></li>
    <li class="pue__row"><span class="pue__name">AWS</span><span class="pue__track"><span class="pue__bar" style="width:25.0%"></span></span><span class="pue__value">1,15</span></li>
    <li class="pue__row"><span class="pue__name">Microsoft Azure</span><span class="pue__track"><span class="pue__bar" style="width:28.3%"></span></span><span class="pue__value">1,17</span></li>
    <li class="pue__row"><span class="pue__name">OVHcloud</span><span class="pue__track"><span class="pue__bar" style="width:40.0%"></span></span><span class="pue__value">1,24</span></li>
    <li class="pue__row"><span class="pue__name">Scaleway</span><span class="pue__track"><span class="pue__bar" style="width:61.7%"></span></span><span class="pue__value">1,37</span></li>
    <li class="pue__row pue__row--avg"><span class="pue__name">Moyenne du secteur</span><span class="pue__track"><span class="pue__bar" style="width:90.0%"></span></span><span class="pue__value">1,54</span></li>
    </ul>
    <p class="pue__note">La barre montre l'énergie perdue (PUE − 1) : refroidissement, électricité, bâtiment.</p>
  </div>
</div>

<div class="source">
  Source : RGESN 8.3 à 8.6. PUE déclarés par les hébergeurs, méthodes non harmonisées : Google 2025, AWS 2024, Microsoft 2025, <a href="https://www.ovhcloud.com/sites/default/files/external_files/kpis_fy25.pdf">OVHcloud FY25</a>, <a href="https://www.scaleway.com/fr/leadership-environnemental/">Scaleway 2024</a>, <a href="https://www.hetzner.com/blog/pue-explained-how-hetzner-achieves-its-value/">Hetzner</a>, Infomaniak (site D4, Genève). Secteur : Uptime Institute. ×40 et ÷5 à 7 : ordres de grandeur, <a href="https://www.electricitymaps.com">Electricity Maps</a>.
</div>

<!--
On a beaucoup parlé du code. Il reste le poste invisible : où tournent les serveurs.
Trois questions suffisent pour couvrir l'essentiel des critères hébergement du RGESN :
- Clic 1 : quelle efficacité ? Le PUE.
- Clic 2 : le classement. Les hyperscalers et Hetzner autour de 1,1, OVHcloud 1,24, Scaleway 1,37, le secteur autour de 1,54. Attention : chiffres déclarés, méthodes non harmonisées, et Infomaniak, c'est un seul site (D4, dont la chaleur chauffe 6 000 logements à Genève).
- Clic 3 : quelle électricité ? Charbon ~800 gCO2/kWh, hydraulique ~20 : ×40. Demander si c'est une consommation directe ou des certificats (garanties d'origine), la nuance est énorme. Un bon PUE en Allemagne (~350 g) peut émettre plus qu'un PUE moyen en France (~55 g).
- Clic 4 : quel pays ? France ~55 gCO2/kWh, Allemagne ~350, Pologne ~700. eu-west-3 (Paris) plutôt que us-east-1 (Virginie) : la décision la plus simple et la plus impactante.
Choisir un hébergeur, c'est choisir son électricité, par procuration.
-->
