# Plan
**Green Craft : 10 actions concrètes pour un numérique soutenable que tu peux appliquer dès lundi (30 min + 10 min de Q&A)**

**Ouverture (4 min)**
- Qui suis-je, puis « je viens du dev, et plus exactement du monde du Craft »
- Le manifeste du Software Craftsmanship, puis EcoIndex live d'un site que j'utilise
- Terminaux 50 %, data centers 46 % : on a la main sur les deux
- Le manifeste Green Craft
- Le fil rouge Letterflop, clone de Letterboxd (30 M de membres), en mini-vidéo de 20 s

**Valeur 1 : des partenariats conscients de leur impact (6 min)**
- Event Storming avec une couleur éco / a11y
- Grille RGESN sur 3 user stories : construire, retravailler ou abandonner

**Valeur 2 : des logiciels bien conçus et aussi sobres et durables (11 min)**
- Sobriété et accessibilité comme caractéristiques d'architecture
- Preuves sur Letterflop : images Docker (−80 %), pagination + projection + index (+77 % req/s)

**Valeur 3 : de la valeur respectueuse des ressources (6 min)**
- Les fitness functions dans la CI : EcoIndex, `ab`, Playwright + axe-core
- Un badge de transparence en pied de page

**Valeur 4 et clôture : une communauté dédiée à un numérique soutenable (3 min)**
- Récap, règle des 2 actions, QR code des ressources
- « Bien conçus *et* sobres, ça se pratique »

# Green Craft : le Craft à l'heure du numérique responsable

## Format et fil rouge

Format « talk classique » : **30 minutes de présentation + 10 minutes de Q&A**. Le talk est construit sur les **4 valeurs du [manifeste Green Craft](https://green-craft.fr)**. Chaque valeur est illustrée par des pratiques concrètes et des chiffres mesurés, pas par des intentions.

L'ordre des valeurs suit la vie d'une feature (avant de coder, concevoir et coder, mesurer en continu, partager) plutôt que l'ordre du manifeste.

**Fil rouge : [Letterflop](https://github.com/ythirion/letter-flop)**, le journal de visionnage de films de l'atelier « RGESN en action » (Spring Boot 3.5 / Java 25, TypeScript / Vite, PostgreSQL, Docker Compose, API TMDB). La codebase contient volontairement des mauvaises pratiques sur toutes les familles du RGESN. La branche `rgesn` porte les corrections, ce qui donne de **vrais chiffres avant / après** pour les slides. Le PO demande une feature « rendant captif » : la bande-annonce HD en autoplay.

**Sources de contenu à réutiliser :**
- `../rgesn-en-action` : exercices 03 (grille de décision), 04 (Docker multi-stage), 08 et 09 (pagination, index), 12 (usage de l'IA), 13 (EcoIndex dans la CI), 14 (badge)
- `../coda/rgesn-b2` : `05.architecture` (critères 3.1, 3.2, 3.3, 3.7 et mesures Docker), `10.benchmarks` (rapports `ab` avant / après)
- [Fundamentals of Software Architecture](https://yoan-thirion.gitbook.io/knowledge-base/software-architecture/fundamentals-of-software-architecture) pour les caractéristiques d'architecture

## Ouverture : d'où je parle, le choc, puis le manifeste (4 min)

1. **Qui suis-je ?** (repris du DevFest 2026) : responsable de la pédagogie à Coda Dijon, Software Crafter, Coach Agile, juste un dév.
2. **« Je viens du dev, et plus exactement du monde du Craft »** : qualité, pragmatisme, produit, orientation client. Je ne parle pas en expert carbone mais en dev qui cherche à faire du logiciel de qualité.
3. **Du Craft…** (1 min) : les 4 valeurs du Manifeste du Software Craftsmanship (2009). Un logiciel bien conçu peut très bien être lourd.
4. **EcoIndex en live** sur un site que j'utilise tous les jours. Note F ou G à l'écran. On ne culpabilise personne : on constate.
5. **Les ordres de grandeur** : d'après la [mise à jour ADEME-Arcep de janvier 2025](https://ecoresponsable.numerique.gouv.fr/docs/2024/etude-ademe-impacts-environnementaux-numerique.pdf) (données 2022), les terminaux pèsent 50 % de l'empreinte carbone du numérique, les centres de données 46 % et les réseaux 4 %. Un dev a la main sur les deux leviers. Et le numérique représente déjà [40 % du budget climat soutenable](https://www.greenit.fr/2025/02/04/le-numerique-cest-40-du-budget-climat-soutenable/) d'un·e internaute. Le premier indicateur n'est d'ailleurs pas le carbone mais l'épuisement des ressources (minéraux et métaux).
6. **La question** : *et si les valeurs du Craft pouvaient orienter le logiciel vers un numérique plus responsable ?*
7. **Le manifeste Green Craft à l'écran**, les 4 valeurs, une par ligne. Elles deviennent le sommaire du talk :

> Des logiciels bien conçus, ET aussi **sobres et durables**.
> Pas seulement ajouter constamment de la valeur, mais aussi **de la valeur respectueuse des ressources**.
> Plus qu'une communauté de professionnels, une communauté dédiée à **un numérique soutenable**.
> Des partenariats productifs permettant de co-construire des solutions **conscientes de leur impact environnemental et sociétal**.

Rappel en une phrase des 3 piliers du numérique responsable (éthique, inclusif, durable). Ils expliquent pourquoi on parle **d'écoconception et d'accessibilité ensemble** dans tout le talk.

## Valeur 1 : des partenariats conscients de leur impact (6 min)

*Le meilleur code vert est celui qu'on n'écrit pas. Un artisan sait dire non, ou plutôt « pas comme ça ».*

**Event Storming avec une couleur éco / a11y** (2 min). On refait l'atelier sur la feature autoplay, avec une couleur de post-it dédiée. On fait apparaître les événements fantômes : vidéos lancées jamais regardées, données préchargées pour rien, et l'utilisateur·rice au lecteur d'écran à qui l'autoplay coupe la parole. Mentionner les autres outils de découverte (User Story Mapping, Impact Mapping) et les outils d'éthique (Tarot Cards of Tech, Scandal Card).

**La grille RGESN pour arbitrer avec le PO** (3 min, exercice 03 de `rgesn-en-action`). La question habituelle est « laquelle a le plus de valeur ? ». La question Green Craft est « laquelle a le meilleur **ratio valeur / impact** ? ».

| Critère RGESN | Question | US-A : affiche générée par IA | US-B : bande-annonce HD autoplay | US-C : formulaire de log |
| --- | --- | --- | --- | --- |
| 2.3 | Fonctionne sur connexion lente ? | ❌ | ❌ | ✅ |
| 2.6 | Impact évalué avant construction ? | ❌ | ❌ | ✅ |
| 2.10 | Impact des services tiers évalué ? | ❌ | ❌ | ✅ |
| **Décision** | | Abandonner | **Retravailler** | Construire |

US-B retravaillée : pas d'autoplay, une image par défaut, la vidéo chargée à la demande. Pour US-A, un mot sur l'IA : le champ `overview` de TMDB suffit-il ? Avec 46 % de l'empreinte côté data centers et des chiffres 2022 qui n'intègrent pas encore l'essor de l'IA générative, l'IA par défaut n'est pas neutre (arbre de décision de l'exercice 12).

**Donner un ordre de grandeur au PO** (1 min). Une estimation express en kgCO2e/an de l'autoplay suffit pour arbitrer. Deux mises en garde : une ACV est multicritère (eau, ressources abiotiques, pas que le carbone), et attention à l'effet rebond.

## Valeur 2 : des logiciels bien conçus, et aussi sobres et durables (11 min)

*C'est le cœur du talk : la sobriété et l'accessibilité ne sont pas des « features » à ajouter à la fin, ce sont des caractéristiques d'architecture.*

### Sobriété et accessibilité comme caractéristiques d'architecture (5 min)

**Rappel** ([Fundamentals of Software Architecture](https://yoan-thirion.gitbook.io/knowledge-base/software-architecture/fundamentals-of-software-architecture)). Une caractéristique d'architecture (les « -ilities ») est un critère de succès du système, orthogonal au fonctionnel. Elle doit remplir 3 conditions :
1. elle spécifie une considération de conception non fonctionnelle,
2. elle influence la structure du design,
3. elle est critique pour le succès de l'application.

On les classe en **opérationnelles** (disponibilité, performance, scalabilité, élasticité…), **structurelles** (extensibilité, maintenabilité…) et **transverses** (sécurité, accessibilité…). Certaines sont **explicites** (dans les exigences), d'autres **implicites** : personne ne les écrit, mais le système échoue sans elles.

**Le constat** : aujourd'hui, la sobriété n'apparaît dans aucune liste, et l'accessibilité figure bien parmi les caractéristiques transverses mais n'est presque jamais retenue dans le top 3. Elles restent implicites, donc invisibles, donc sacrifiées.

**La proposition Green Craft** : les rendre **explicites** et les mettre en concurrence avec les autres.

| Caractéristique | Catégorie | Ce qu'elle exige de la structure | Exemple de critère source |
| --- | --- | --- | --- |
| **Sobriété** (écoconception) | Opérationnelle et structurelle | Ressources proportionnelles à l'usage, images et dépendances minimales, données transférées strictement utiles | RGESN 3.1, 3.2, 3.7, 6.5, 7.1 |
| **Durabilité** (longévité) | Structurelle | Fonctionne sur des terminaux anciens et des connexions lentes, ne force pas le renouvellement du matériel | RGESN 2.3, 4.x |
| **Accessibilité** | Transverse | Composants natifs et sémantiques, navigation clavier, contrastes, testabilité a11y | RGAA, RGESN 4.x |

**Comment les identifier, comme les autres** : on traduit les préoccupations du domaine en « -ilities ». Le RGESN et le GR491 deviennent une **source de caractéristiques implicites**, au même titre que l'expertise métier.

**Les compromis, toujours** : « Tout en architecture logicielle est un compromis. » Exemples sur Letterflop :
- **Disponibilité 24/7 vs sobriété** : trois conteneurs toujours actifs, qu'il y ait zéro ou mille utilisateurs (critère 3.2). L'**élasticité** (scale-to-zero, autoscaling) devient un levier de sobriété.
- **Performance et sobriété convergent** souvent : moins de données, moins de calcul, réponse plus rapide.
- **Agilité du choix techno vs coût d'exécution** : le choix d'un langage ou d'un runtime se paie sur un batch lourd ou un service à fort trafic. On l'assume, on ne le subit pas.

On ne vise pas la meilleure architecture, mais **la moins pire, en comptant enfin l'empreinte et l'inclusion**.

**Des fitness functions pour les rendre mesurables** : une caractéristique sans fitness function reste un vœu pieux. On annonce celles qu'on branchera dans la CI (Valeur 3) :
- sobriété : budget de taille d'image Docker, budget de payload par endpoint, seuil EcoIndex,
- accessibilité : zéro violation axe-core sur les parcours critiques,
- performance : seuil de req/s et de latence p50 avec `ab`.

### Les preuves sur Letterflop (6 min)

**Architecture : le gorille et la banane** (2 min, `rgesn-b2/05.architecture`). Pari à la salle : « Combien pèse la stack Docker de Letterflop ? » Le JDK complet et un serveur Vite de dev servis en production. Multi-stage build + JRE Alpine + nginx :

| Service | Avant | Après | Gain |
| --- | --- | --- | --- |
| frontend | 904 MB | 62,4 MB | −93 % |
| backend | 1,28 GB | 284 MB | −78 % |
| **Total** | **~2,63 GB** | **~791 MB** | **−80 %** |

« Ce n'est pas une optimisation, c'est retirer ce qui n'aurait jamais dû être là. » En bonus, nginx apporte HTTP/2, brotli et les headers de cache (critère 3.3).

**Code : ne transférer que l'utile** (4 min, démo phare, exercices 08 et 09). On part d'un endpoint qui renvoie tout, puis on applique pagination serveur (`Pageable`), projection DTO et index B-tree. Mesures `ab` (`rgesn-b2/10.benchmarks`) :

| Correction | Impact mesuré |
| --- | --- |
| Pagination + index sur `GET /api/logs` | **+77 % req/s**, **−45 % latence p50** |
| `size=20` au lieu de `size=1000` | **−94 % de données transférées** (123 KB → 7,4 KB) |
| Simplification du service | +27 à +37 % req/s sur POST / PUT |

Mesuré sur ~330 lignes : avec des millions de lignes, l'écart O(n) vs O(log n) est d'un ordre de grandeur. `SELECT *` est un anti-pattern écologique autant qu'un anti-pattern de perf.

Une slide « dans la vraie vie » pour montrer que ce n'est pas théorique : Google Maps Places API rend le field mask **obligatoire**, alors que WordPress REST API renvoie tout par défaut. Quand le surplus coûte au fournisseur, la projection devient la norme. Le tableau complet des API est gardé pour le Q&A.

## Valeur 3 : de la valeur respectueuse des ressources (6 min)

*Ajouter constamment de la valeur, c'est aussi ne pas laisser l'empreinte dériver à chaque sprint. La sobriété est une métrique, pas une intention.*

**Les fitness functions dans la CI** (4 min, exercice 13). On montre un pipeline qui **casse** :
- sur une régression EcoIndex ([greenit-analysis-action](https://github.com/ythirion/greenit-analysis-action) en quality gate),
- sur une régression de req/s ou de latence (`ab`),
- sur une violation d'accessibilité : un test **Playwright + axe-core** sur le premier parcours, qui échoue puis passe. Un site inclusif dès le jour 1, c'est un site qu'on n'a pas à reconstruire.

C'est la boucle qui referme la Valeur 2 : les caractéristiques d'architecture choisies sont vérifiées à chaque commit.

**Le badge de transparence** (2 min, exercice 14). On boucle avec l'ouverture : Letterflop affiche son [badge EcoIndex](https://github.com/cnumr/ecoindex_badge) en pied de page, avec le score et la date de dernière mesure, et une page « Notre empreinte ». C'est le Nutri-Score du numérique.

## Valeur 4 et clôture : une communauté dédiée à un numérique soutenable (3 min)

1. **Slide récap** : les 4 valeurs du manifeste, avec sous chacune les pratiques vues (Event Storming éco/a11y, grille RGESN, caractéristiques d'architecture, multi-stage, pagination / projection / index, fitness functions en CI, badge).
2. **Rappels de crédibilité** : ordres de grandeur et comparaisons relatives, ACV multicritère, effet rebond.
3. **La règle des 2** : chacun choisit deux pratiques à appliquer cette semaine. On fait lever la main.
4. **La communauté** : partager ses mesures, ses échecs et ses retours. Invitation à signer et diffuser le manifeste sur [green-craft.fr](https://green-craft.fr), et à rejouer l'atelier « RGESN en action » en équipe.
5. **QR code ressources** : manifeste Green Craft, repo Letterflop (branches `main` et `rgesn`), atelier RGESN en action, RGESN, GR491, étude ADEME-Arcep (janvier 2025), EcoIndex, Boavizta, CO2.js.
6. **Punchline** : « des logiciels bien conçus *et* sobres, ça ne se décrète pas, ça se pratique ».

## Réserve pour le Q&A (10 min)

Contenu retiré du talk pour tenir les 30 minutes, à garder en slides cachées pour répondre aux questions :

- **ACV : la slide 3 colonnes** (quick wins en 10 min / diagnostic en 3 jours / ACV normée en semaines), pour la question « comment je mesure vraiment ? ».
- **Le tableau des API publiques** : WordPress (`_fields` divise la réponse par ~10), Hacker News (N+1 à l'échelle d'Internet : 31 appels pour la front page), CoinGecko (liste rafraîchie toutes les 30 min, à mettre en cache 30 min), Google Maps (field mask obligatoire).
- **`Result` plutôt que `throw`** pour les cas métier attendus : le coût de `fillInStackTrace` sur un chemin chaud, le benchmark JMH, la nuance (`writableStackTrace = false`). Règle : exceptions pour l'exceptionnel, valeurs de retour pour l'attendu.
- **Java vs Rust** : le benchmark du même algo, pour illustrer le compromis « choix de langage » de la Valeur 2.
- **Cache applicatif et N+1** (exercice 10), **images adaptées et lazy loading** (exercice 07 : 4,5 MB → 274 KB), **hébergement responsable** (exercice 05 : PUE, WUE).
- **Éco-concevoir avec un agent IA** : [article de l'INR](https://institutnr.org/ecoconcevoir-avec-un-assistant-de-code).

## Préparation : plan B démos

- [ ] Enregistrer en vidéo la démo pagination / projection / index (avant / après + mesure `ab`)
- [ ] Captures `docker images` avant / après pour la slide multi-stage
- [ ] Enregistrer le pipeline qui casse sur régression EcoIndex et sur violation axe-core
- [ ] Mettre tous les résultats de benchmark en capture dans les slides, au cas où le réseau ou l'API TMDB lâche
- [ ] Préparer le site obèse de l'ouverture avec une capture EcoIndex de secours
- [ ] Répétition chronométrée : viser 28 min pour garder une marge sur les 30
