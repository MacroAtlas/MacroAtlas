window.COURS_DATA = window.COURS_DATA || [];
window.COURS_DATA.push(...[
  {
    "id": "1",
    "title": "Introduction : comprendre la croissance",
    "explanation": "La macroéconomie cherche à comprendre pourquoi la richesse augmente, pourquoi elle est inégale et pourquoi l'activité varie. On commence par la croissance de long terme avant d'étudier les crises de court terme.",
    "example": "Deux pays peuvent avoir le même PIB aujourd'hui mais des perspectives de croissance très différentes.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "chapter",
    "short": "La macroéconomie cherche à comprendre pourquoi la richesse augmente, pourquoi elle est inégale et pourquoi l'activité varie."
  },
  {
    "id": "1.1",
    "title": "Long terme",
    "explanation": "À long terme, on étudie les forces durables qui font progresser la production : machines, compétences, idées et institutions. À court terme, on regarde plutôt les variations autour de cette tendance.",
    "example": "Une récession de deux ans ne signifie pas forcément que la capacité de production de long terme a disparu.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "À long terme, on étudie les forces durables qui font progresser la production : machines, compétences, idées et institutions."
  },
  {
    "id": "1.1.1",
    "title": "Court terme VS long terme",
    "explanation": "Le court terme correspond aux fluctuations lorsque prix et salaires ne s'ajustent pas immédiatement. Le long terme laisse le temps aux prix, au capital, aux compétences et à la technologie de changer. La frontière est indicative, pas une date exacte.",
    "example": "Après une panne de demande, une entreprise peut réduire ses heures de travail immédiatement ; construire une usine prend plusieurs années.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Le court terme correspond aux fluctuations lorsque prix et salaires ne s'ajustent pas immédiatement."
  },
  {
    "id": "1.1.2",
    "title": "Questions auxquelles on va répondre plus tard :",
    "explanation": "Trois grandes questions structurent le cours : qu'est-ce qui fait croître une économie, pourquoi certains pays sont-ils plus riches et jusqu'où la croissance peut-elle durer sans détruire l'environnement ? Chaque modèle apporte une partie de la réponse.",
    "example": "Solow explique les machines, Lucas l'éducation, Romer les idées et le chapitre 5 les limites environnementales.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Trois grandes questions structurent le cours : qu'est-ce qui fait croître une économie, pourquoi certains pays sont-ils plus riches et jusqu'où la croissance peut-elle durer sans détruire l'environnement ?"
  },
  {
    "id": "1.1.3",
    "title": "Citation de Lucas (1988)",
    "explanation": "Robert Lucas insiste sur l'importance du développement : de petites différences de croissance entraînent des écarts immenses de niveau de vie. Comprendre ces écarts peut changer concrètement le destin de millions de personnes.",
    "example": "À 1 % et 3 % de croissance annuelle pendant 50 ans, les revenus ne suivent pas du tout la même trajectoire.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Robert Lucas insiste sur l'importance du développement : de petites différences de croissance entraînent des écarts immenses de niveau de vie."
  },
  {
    "id": "1.1.4",
    "title": "Monde inégal",
    "explanation": "Le monde présente des écarts de richesse considérables. Comparer les niveaux de vie et leur évolution est le point de départ de l'analyse de croissance.",
    "example": "Une personne ne dispose pas du même pouvoir d'achat selon le pays où elle vit, même si les montants affichés ont l'air proches.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Le monde présente des écarts de richesse considérables."
  },
  {
    "id": "1.2",
    "title": "PIB",
    "explanation": "Le PIB mesure la valeur de la production d'une économie. Pour parler du niveau de vie moyen, on le divise par le nombre d'habitants et on corrige les différences de prix.",
    "example": "Un PIB total énorme dans un pays très peuplé peut correspondre à un faible PIB par habitant.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "Le PIB mesure la valeur de la production d'une économie."
  },
  {
    "id": "1.2.1",
    "title": "Rappel Pib par tête",
    "explanation": "Le PIB réel retire l'effet de l'inflation. Le PIB par tête divise par la population. La parité de pouvoir d'achat (PPA) rend les comparaisons entre pays plus pertinentes en tenant compte du coût de la vie.",
    "example": "100 dollars permettent d'acheter des paniers de biens très différents à New York et à New Delhi.",
    "formulas": [
      {
        "title": "PIB par tête",
        "tex": "y_t=\\frac{Y_t}{Pop_t}",
        "intuition": "Un total élevé n’implique pas un revenu moyen élevé."
      }
    ],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Le PIB réel retire l'effet de l'inflation."
  },
  {
    "id": "1.2.2",
    "title": "Pourquoi regarder le PIB par tête ?",
    "explanation": "Le PIB par tête est un indicateur simple, fortement lié à la santé, à l'éducation et à bien d'autres aspects du développement. Mais il ne mesure directement ni le bonheur, ni les inégalités, ni la qualité environnementale.",
    "example": "Deux pays avec 40 000 de PIB par tête peuvent présenter des systèmes de santé et des inégalités très différents.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Le PIB par tête est un indicateur simple, fortement lié à la santé, à l'éducation et à bien d'autres aspects du développement."
  },
  {
    "id": "1.2.3",
    "title": "Croissance du PIB",
    "explanation": "Un taux de croissance mesure la variation relative d'une variable entre deux dates : on compare la hausse au niveau de départ. Une hausse en francs ne suffit pas pour comparer deux économies de tailles différentes.",
    "example": "Passer de 100 à 103 représente +3 %, alors que passer de 1 000 à 1 003 ne représente que +0,3 %.",
    "formulas": [
      {
        "title": "Croissance exacte",
        "tex": "g_t=\\frac{y_t-y_{t-1}}{y_{t-1}}",
        "intuition": "Diviser le changement par la valeur de départ."
      },
      {
        "title": "Approximation logarithmique",
        "tex": "g_t\\approx\\ln(y_t)-\\ln(y_{t-1})",
        "intuition": "Très pratique pour des variations modestes."
      }
    ],
    "graph": "growth",
    "steps": [
      "Prends la valeur de départ y₀.",
      "Soustrais-la à la valeur d’arrivée y₁.",
      "Divise cette différence par y₀.",
      "Multiplie par 100 pour obtenir un pourcentage."
    ],
    "warning": "Ne confonds pas une variation absolue (3 unités) et une variation relative (3 %).",
    "type": "point",
    "short": "Un taux de croissance mesure la variation relative d'une variable entre deux dates : on compare la hausse au niveau de départ."
  },
  {
    "id": "1.2.4",
    "title": "De l’utilité du log",
    "explanation": "La croissance se cumule : les hausses suivantes portent aussi sur les gains précédents. Le logarithme transforme une trajectoire exponentielle en une droite dont la pente approxime le taux de croissance.",
    "example": "À 2 % par an, 100 devient environ 121,9 après 10 ans, pas simplement 120.",
    "formulas": [
      {
        "title": "Croissance cumulée",
        "tex": "y_t=y_0(1+g)^t",
        "intuition": "Chaque croissance s’applique au nouveau niveau."
      },
      {
        "title": "Taux moyen en log",
        "tex": "\\bar g\\approx\\frac{\\ln(y_t)-\\ln(y_0)}{t}",
        "intuition": "La pente de la trajectoire en logarithmes représente la croissance."
      }
    ],
    "graph": "growth",
    "steps": [
      "Une première hausse crée un nouveau niveau de revenu.",
      "La hausse suivante s’applique sur ce nouveau niveau, pas sur le niveau initial.",
      "Sur plusieurs décennies, de petits écarts de croissance créent de grands écarts de revenus."
    ],
    "warning": "",
    "type": "point",
    "short": "La croissance se cumule : les hausses suivantes portent aussi sur les gains précédents."
  },
  {
    "id": "1.2.5",
    "title": "Quelques rappels sur les log",
    "explanation": "Le logarithme est très utile : le logarithme d'un produit devient une somme. Ainsi, pour un produit de deux facteurs, la croissance totale est approximativement la somme de leurs croissances.",
    "example": "Si le capital croît de 3 % et sa productivité de 2 %, un produit proportionnel aux deux augmente d'environ 5 %.",
    "formulas": [
      {
        "title": "Propriété du produit",
        "tex": "\\ln(xy)=\\ln x+\\ln y",
        "intuition": "Un produit devient une somme."
      },
      {
        "title": "Taux de croissance approximatif",
        "tex": "g_{xy}\\approx g_x+g_y",
        "intuition": "Pour des variations modestes."
      }
    ],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Le logarithme est très utile : le logarithme d'un produit devient une somme."
  },
  {
    "id": "1.2.6",
    "title": "La règle des 70",
    "explanation": "La règle des 70 donne un raccourci pour connaître le temps de doublement : on divise 70 par la croissance annuelle exprimée en pourcentage. Elle est approximative, mais excellente pour raisonner.",
    "example": "À 2 % par an, une richesse double en environ 35 ans ; à 1 %, il faut près de 70 ans.",
    "formulas": [
      {
        "title": "Temps de doublement",
        "tex": "T_{\\times2}\\approx\\frac{70}{G}",
        "intuition": "G est exprimé en pourcentage, pas en décimal."
      }
    ],
    "graph": "growth",
    "steps": [
      "Repère le taux de croissance annuel G en %.",
      "Calcule 70 ÷ G.",
      "Le résultat est le nombre approximatif d’années nécessaires pour doubler."
    ],
    "warning": "Insère G en pourcentage : pour 2 %, on utilise 70/2, pas 70/0,02.",
    "type": "point",
    "short": "La règle des 70 donne un raccourci pour connaître le temps de doublement : on divise 70 par la croissance annuelle exprimée en pourcentage."
  },
  {
    "id": "1.3",
    "title": "Faits stylisés de la croissance et du développement",
    "explanation": "Les faits stylisés sont des régularités observées dans les données. Un bon modèle de croissance doit pouvoir expliquer ces observations, pas seulement produire de jolies équations.",
    "example": "La coexistence de pays riches et pauvres et de changements de classement est un fait à expliquer.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "Les faits stylisés sont des régularités observées dans les données."
  },
  {
    "id": "1.3.1",
    "title": "Fait stylisé 1: il existe une variation considérable du niveau de revenu par tête (y) entre les",
    "explanation": "Les revenus par habitant varient énormément d'un pays à l'autre. Une partie des inégalités mondiales vient des écarts entre pays, une autre des écarts au sein des pays.",
    "example": "Deux habitants de pays différents peuvent avoir des revenus moyens séparés par un facteur de 20 ou davantage.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Les revenus par habitant varient énormément d'un pays à l'autre."
  },
  {
    "id": "1.3.2",
    "title": "Faits stylisés 2 : Les taux de croissance varient considérablement d’un pays à l’autre.",
    "explanation": "Tous les pays ne croissent pas à la même vitesse. Même de faibles écarts de taux, cumulés longtemps, produisent d'énormes divergences.",
    "example": "Un pays à 4 % rattrape potentiellement un pays à 1 % s'il garde longtemps son avance de croissance.",
    "formulas": [],
    "graph": "growth",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Tous les pays ne croissent pas à la même vitesse."
  },
  {
    "id": "1.3.3",
    "title": "Fait stylisé 3: Les taux de croissance ne sont pas nécessairement constants dans le temps",
    "explanation": "Le taux de croissance d'un pays peut changer dans le temps. Un décollage, une crise durable ou une réforme peut modifier sa trajectoire.",
    "example": "Une économie peut stagner pendant des décennies puis accélérer après une industrialisation.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Le taux de croissance d'un pays peut changer dans le temps."
  },
  {
    "id": "1.3.4",
    "title": "Fait stylisé 4: La position relative d’un pays du point de vue de la distribution mondiale des",
    "explanation": "Comme les croissances diffèrent entre pays et dans le temps, la hiérarchie mondiale des niveaux de vie peut évoluer. Être riche aujourd'hui n'est pas une garantie éternelle.",
    "example": "L'Argentine occupait une position relative beaucoup plus favorable à la fin du XIXe siècle.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Comme les croissances diffèrent entre pays et dans le temps, la hiérarchie mondiale des niveaux de vie peut évoluer."
  },
  {
    "id": "1.3.5",
    "title": "Fait stylisé 5: La croissance du PIB/tête et la",
    "explanation": "Croissance économique et commerce international sont liés dans les observations. Ce lien n'implique pas, à lui seul, que l'un cause toujours l'autre : des facteurs communs peuvent jouer.",
    "example": "Une économie plus productive peut vendre davantage à l'étranger, et le commerce peut faciliter l'accès à des idées.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "Une corrélation entre commerce et PIB ne suffit pas à établir une causalité.",
    "type": "point",
    "short": "Croissance économique et commerce international sont liés dans les observations."
  },
  {
    "id": "1.4",
    "title": "Les causes proximales et fondamentales de la croissance",
    "explanation": "On distingue les mécanismes directement visibles dans la production des causes plus profondes qui expliquent pourquoi ces mécanismes fonctionnent.",
    "example": "Les machines augmentent la production, tandis que de bonnes institutions peuvent inciter à les financer.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "On distingue les mécanismes directement visibles dans la production des causes plus profondes qui expliquent pourquoi ces mécanismes fonctionnent."
  },
  {
    "id": "1.4.1",
    "title": "Les causes proximales",
    "explanation": "Les causes proximales sont l'accumulation de capital physique, de capital humain et de connaissances/productivité. Elles entrent directement dans la fonction de production.",
    "example": "Une entreprise produit plus avec un four supplémentaire, des salariés mieux formés ou un meilleur procédé.",
    "formulas": [
      {
        "title": "Décomposition productive",
        "tex": "Y_t=F(A_t,K_t,H_t)",
        "intuition": "A : technologie, K : machines, H : compétences."
      }
    ],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Les causes proximales sont l'accumulation de capital physique, de capital humain et de connaissances/productivité."
  },
  {
    "id": "1.4.2",
    "title": "Les causes fondamentales",
    "explanation": "Les causes fondamentales comprennent notamment institutions, géographie, histoire et culture. Elles influencent les incitations à investir et innover. Attention : deux variables corrélées ne prouvent pas un lien de causalité.",
    "example": "Les pays bien gouvernés sont souvent riches, mais il faut déterminer si la gouvernance crée la richesse ou si d'autres facteurs agissent sur les deux.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Les causes fondamentales comprennent notamment institutions, géographie, histoire et culture."
  },
  {
    "id": "1.5",
    "title": "Histoire rapide des théories de la croissance",
    "explanation": "Les modèles se complètent historiquement : Malthus insiste sur la population et les terres limitées ; Solow sur le capital ; Lucas sur l'éducation ; Romer sur les idées ; les modèles environnementaux sur les limites physiques.",
    "example": "On ne demande pas à Solow d'expliquer seul tous les brevets ni à Malthus d'expliquer les smartphones.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "Les modèles se complètent historiquement : Malthus insiste sur la population et les terres limitées ; Solow sur le capital ; Lucas sur l'éducation ; Romer sur les idées ; les modèles environnementaux sur les limites physiques."
  }
]);
