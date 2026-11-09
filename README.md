# MACRO ATLAS

Site de révision en français pour **Analyse économique : Macroéconomie**.

## Démarrer

1. **Décompresser entièrement le fichier ZIP** (ne pas ouvrir le fichier HTML directement dans l'archive).
2. Dans le dossier `site-macroeconomie`, double-cliquer sur **`index.html`**.
3. Utiliser le menu de gauche pour sélectionner un chapitre, une section ou un sous-point.

**Connexion Internet et serveur web non nécessaires.** Les formules sont affichées avec une copie locale de MathJax. Les graphiques fonctionnent avec le canvas du navigateur. L'état de révision est conservé localement par le navigateur ; changer d'appareil ou effacer les données locales réinitialise la progression.

## Organisation

- `index.html` : structure de l'application, éléments de navigation et chargement des scripts.
- `style.css` : interface responsive, thèmes clair et sombre, styles des pages et graphiques.
- `script.js` : navigation, recherche, lecture du cours, lexique, révisions, stockage local.
- `graphs.js` : calculs et dessin des **15 simulations interactives**.
- `data/chapter-1.js` à `data/chapter-9.js` : contenu pédagogique, exemples et formules, organisés par chapitre.
- `data/glossary.js` : dictionnaire de **104 variables et notations** avec explications et formules.
- `lib/tex-svg.js` : bibliothèque MathJax fournie localement pour les formules.

## Contenu

- **9 chapitres**, **202 entrées** (chapitres, sections, sous-points), dont **159 sous-points numérotés**.
- **100 formules** associées aux notions du cours, avec une interprétation.
- Explications intuitives, exemples simples, mécanismes détaillés étape par étape pour les points clés.
- 15 simulations dynamiques : croissance exponentielle, Malthus, Solow, Lucas, Romer, mobilité du capital, ressources naturelles, climat, cycle économique, IS-LM, courbe des taux, demande agrégée, WS-PS, Phillips, OA-DA.
- Recherche par texte, filtres du lexique, révision et suivi des points maîtrisés.

## Contenu pédagogique

Les explications, les exemples, les formules et les simulations sont disponibles directement sur le site, sans document supplémentaire. Les graphiques servent à comprendre les mécanismes économiques et ne constituent pas des estimations empiriques.

## Adapter le contenu

Modifier les objets correspondants dans `data/chapter-N.js`. Chaque entrée contient `id`, `title`, `explanation`, `example`, `formulas`, `steps`, `warning`. Pour changer un graphique ou ses curseurs, modifier l'objet concerné dans `graphs.js`. Aucun système de build n'est requis.

## Version 2 — interface de lecture simplifiée (9 novembre 2026)

- **Explication unique et prioritaire :** chaque page commence par le titre, puis un bloc « Comprendre l'idée » avec l'explication affichée une seule fois. L'exemple se situe juste dessous dans un encart discret.
- **Compléments facultatifs :** la question d'auto-évaluation est repliée par défaut dans « Pour aller plus loin ». Les étapes, formules et graphiques utiles à la compréhension restent directement accessibles.
- **Navigation à deux niveaux :** le bouton + / − d'un chapitre permet de le replier même lorsqu'on consulte l'un de ses points. Chaque section dispose aussi d'un bouton + / − indépendant pour afficher/masquer ses sous-points. « Tout replier / Tout déplier » agit sur l'ensemble du plan.
- **Plus d'espace pour le cours :** les outils d'étude du menu sont regroupés dans un panneau repliable en bas de la barre latérale. Les liens restent accessibles d'un clic.
- **Design renouvelé :** bords doux et arrondis organiques, hiérarchie claire, cartes moins contrastées, animations courtes et adaptées aux personnes ayant activé la réduction des animations dans leur système.
- **Performances :** les simulations canvas restent légères ; les observateurs de redimensionnement sont libérés lorsque l'on quitte une page. La validation d'un point ne réinitialise plus sa simulation.
- **Téléphone :** affichage adapté aux petits écrans et formules longues consultables par défilement horizontal **dans leur carte**, sans débordement de la page.

Les données pédagogiques et le lexique sont identiques à la première version. L'application fonctionne toujours hors connexion, en ouvrant `index.html` **après extraction du ZIP**.

## Version 3 — diffusion autonome (9 novembre 2026)

- Tous les liens, numéros de pages et panneaux renvoyant à un document extérieur ont été retirés.
- Le fichier du document de référence et les extraits de son texte ne sont pas livrés dans le site.
- Les flèches de déploiement de la barre latérale sont remplacées par des indicateurs + / − discrets.
- Les explications, exemples, formules, graphiques, animations, quiz et fonctions de navigation restent inchangés.


## Version 4 — Interface d’accueil et navigation compacte

Sur ordinateur, le bouton de la barre supérieure permet de réduire la navigation à une colonne de neuf bulles numérotées. Chaque bulle ouvre directement la page principale de son chapitre. La préférence est conservée dans le navigateur. Sur téléphone, le menu latéral traditionnel reste accessible via le bouton de menu.

La vue d’ensemble est désormais une page d’accueil épurée, avec une introduction courte, des liens vers les neuf chapitres et les trois outils de révision. Les fichiers de données des neuf chapitres, le glossaire et le moteur des graphiques sont inchangés.
