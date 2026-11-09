window.COURS_DATA = window.COURS_DATA || [];
window.COURS_DATA.push(...[
  {
    "id": "5",
    "title": "Croissance, environnement et climat",
    "explanation": "La croissance utilise la nature et modifie le climat. Le chapitre examine l'arbitrage entre consommation immédiate, préservation des ressources et bien-être des générations futures.",
    "example": "Extraire une ressource aujourd'hui procure du revenu mais peut rendre la production de demain plus difficile.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "chapter",
    "short": "La croissance utilise la nature et modifie le climat."
  },
  {
    "id": "5.1",
    "title": "Questions",
    "explanation": "Le défi est de faire entrer les limites naturelles et les dommages climatiques dans les modèles de croissance. L'environnement est à la fois une ressource productive et une source de bien-être.",
    "example": "Une forêt fournit du bois, stocke du carbone et procure aussi un lieu de loisirs.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "Le défi est de faire entrer les limites naturelles et les dommages climatiques dans les modèles de croissance."
  },
  {
    "id": "5.1.1",
    "title": "Une prise de conscience progressive",
    "explanation": "Le rapport Meadows attire l'attention sur les limites physiques ; le rapport Brundtland popularise le développement durable : satisfaire les besoins présents sans compromettre ceux des futurs habitants.",
    "example": "Une décision énergétique doit considérer l'emploi aujourd'hui, les ressources disponibles demain et la pollution.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Le rapport Meadows attire l'attention sur les limites physiques ; le rapport Brundtland popularise le développement durable : satisfaire les besoins présents sans compromettre ceux des futurs habitants."
  },
  {
    "id": "5.2",
    "title": "Préférences et environnement",
    "explanation": "La société doit choisir combien elle valorise l'environnement relativement à la consommation, et combien de poids elle accorde aux générations futures.",
    "example": "Construire une usine peut enrichir les habitants aujourd'hui mais dégrader leur air et celui des enfants à venir.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "La société doit choisir combien elle valorise l'environnement relativement à la consommation, et combien de poids elle accorde aux générations futures."
  },
  {
    "id": "5.2.1",
    "title": "Choix social 1: Consommation matérielle et environnement",
    "explanation": "Une fonction de bien-être combine consommation C et qualité environnementale E. Si les deux sont complémentaires, augmenter C ne peut pas remplacer un environnement effondré ; s'ils sont substituables, la compensation est plus facile.",
    "example": "Un compte en banque plus rempli ne remplace pas forcément de l'eau potable.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Une fonction de bien-être combine consommation C et qualité environnementale E."
  },
  {
    "id": "5.2.2",
    "title": "Choix social 2 : Générations présentes et futures",
    "explanation": "Le taux d'actualisation social ρ mesure le poids donné au futur. Plus il est élevé, moins les bénéfices lointains pèsent dans les décisions présentes.",
    "example": "Avec ρ = 4 %, 100 francs de bien-être dans un an valent environ 96 francs aujourd'hui dans le calcul.",
    "formulas": [
      {
        "title": "Bien-être intertemporel",
        "tex": "W=\\sum_{t=0}^{\\infty}\\frac{U(C_t,E_t)}{(1+\\rho)^t}",
        "intuition": "Plus ρ est grand, moins le futur pèse dans la somme."
      }
    ],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Le taux d'actualisation social ρ mesure le poids donné au futur."
  },
  {
    "id": "5.3",
    "title": "L’environnement comme ressource ou facteur de production",
    "explanation": "Une ressource environnementale peut entrer directement dans la production. Si elle s'épuise et qu'aucun substitut n'est disponible, cela peut limiter la croissance.",
    "example": "Une aciérie dépend de l'énergie et des matières premières, pas seulement des machines et des ouvriers.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "Une ressource environnementale peut entrer directement dans la production."
  },
  {
    "id": "5.3.1",
    "title": "Interaction entre ressource environnementale et intrants",
    "explanation": "On ajoute une ressource R à la fonction de production avec un poids propre. Si elle est indispensable et tend vers zéro, la production chute, sauf substitution ou innovation absente du modèle simplifié.",
    "example": "Une entreprise de fabrication ne produit plus si sa matière première principale disparaît.",
    "formulas": [
      {
        "title": "Production avec ressource",
        "tex": "Y_t=K_t^\\alpha (A_tL_t)^\\beta R_t^\\varphi,\\quad\\alpha+\\beta+\\varphi=1",
        "intuition": "La production dépend aussi du flux de ressource disponible."
      }
    ],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "On ajoute une ressource R à la fonction de production avec un poids propre."
  },
  {
    "id": "5.3.2",
    "title": "Ressource épuisable et croissance : règle d’Hotelling",
    "explanation": "La règle d'Hotelling indique comment répartir une ressource épuisable dans le temps : le prix net ou la valeur marginale doit augmenter au rythme de l'actualisation à l'optimum. Sinon il est plus intéressant d'extraire avant ou après.",
    "example": "Si une ressource rapporte moins en la gardant un an qu'un placement financier, mieux vaut l'extraire aujourd'hui.",
    "formulas": [
      {
        "title": "Règle d’Hotelling",
        "tex": "\\frac{p_{t+1}}{p_t}=1+\\rho",
        "intuition": "Sous les hypothèses de l’exercice, le prix de la ressource épuisable augmente avec le taux d’actualisation."
      },
      {
        "title": "Stock de ressource",
        "tex": "R_{t+1}=R_t-q_t",
        "intuition": "Chaque quantité extraite réduit le stock restant."
      }
    ],
    "graph": "resources",
    "steps": [
      "Extraire aujourd’hui fournit une valeur immédiate.",
      "Garder la ressource permet d’en tirer une valeur future.",
      "Comparer la valeur future actualisée à la valeur actuelle.",
      "À l’optimum, les deux sont égales : le prix net monte au taux ρ."
    ],
    "warning": "Le taux ρ est ici une actualisation sociale, pas la productivité des chercheurs notée aussi ρ chez Romer.",
    "type": "point",
    "short": "La règle d'Hotelling indique comment répartir une ressource épuisable dans le temps : le prix net ou la valeur marginale doit augmenter au rythme de l'actualisation à l'optimum."
  },
  {
    "id": "5.3.3",
    "title": "Ressource épuisable et croissance",
    "explanation": "Une ressource qui diminue chaque année pèse sur la croissance. Pour que le revenu par tête continue d'augmenter, les gains technologiques doivent suffisamment compenser son épuisement et l'augmentation de la population.",
    "example": "Même une technologie qui progresse de 2 % peut ne pas suffire si l'énergie indispensable se raréfie trop vite.",
    "formulas": [
      {
        "title": "Croissance du revenu par tête",
        "tex": "g_y\\approx\\frac{\\beta g_A-\\varphi(p+n)}{1-\\alpha}",
        "intuition": "Progrès technique positif contre pression démographique et épuisement."
      }
    ],
    "graph": "resources",
    "steps": [
      "L’extraction fait diminuer le flux de ressource au fil du temps.",
      "Une population plus grande partage ce flux.",
      "Le progrès technique compense en partie la rareté.",
      "La croissance par tête reste positive seulement si le progrès technique compense assez la pression sur les ressources."
    ],
    "warning": "",
    "type": "point",
    "short": "Une ressource qui diminue chaque année pèse sur la croissance."
  },
  {
    "id": "5.3.4",
    "title": "Ressource renouvelable",
    "explanation": "Une ressource renouvelable se reconstitue au taux r. La pression nette sur le stock dépend de l'extraction p moins la régénération r ; dépasser durablement le renouvellement entraîne un déclin.",
    "example": "Une forêt qui repousse de 3 % par an mais est coupée à 5 % voit son stock diminuer.",
    "formulas": [
      {
        "title": "Ressource renouvelable",
        "tex": "R_{t+1}=(1-p+r)R_t",
        "intuition": "Prélèvement p, régénération r ; si p > r, stock en déclin."
      }
    ],
    "graph": "resources",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Une ressource renouvelable se reconstitue au taux r."
  },
  {
    "id": "5.3.5",
    "title": "Dans les données : des raisons d’espérer ?",
    "explanation": "Trois pistes aident à concilier croissance et ressources : innover, réduire la quantité de ressources nécessaire par unité produite et remplacer les ressources épuisables par des renouvelables.",
    "example": "Une économie peut produire plus de services avec moins d'énergie fossile par franc de PIB.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Trois pistes aident à concilier croissance et ressources : innover, réduire la quantité de ressources nécessaire par unité produite et remplacer les ressources épuisables par des renouvelables."
  },
  {
    "id": "5.4",
    "title": "Croissance et climat",
    "explanation": "Le climat et l'économie s'influencent dans les deux sens. La production crée des émissions ; ces émissions augmentent la température, qui peut diminuer la productivité et détériorer les ressources.",
    "example": "Une économie émet du CO₂ et subit ensuite davantage de sécheresses affectant sa production.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "Le climat et l'économie s'influencent dans les deux sens."
  },
  {
    "id": "5.4.1",
    "title": "Fonction de dommage",
    "explanation": "La fonction de dommage D(T) réduit la production lorsque l'anomalie climatique augmente. Elle modélise une perte de productivité liée au réchauffement.",
    "example": "Deux économies avec les mêmes machines et travailleurs ne produisent pas forcément autant si l'une subit des dégâts climatiques.",
    "formulas": [
      {
        "title": "Production avec dommage",
        "tex": "Y_t=D_tK_t^\\alpha(A_tL_t)^{1-\\alpha}",
        "intuition": "D < 1 réduit la quantité réalisable avec les mêmes facteurs."
      }
    ],
    "graph": "climate",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "La fonction de dommage D(T) réduit la production lorsque l'anomalie climatique augmente."
  },
  {
    "id": "5.4.2",
    "title": "Activités économiques et émissions de carbone",
    "explanation": "Les émissions totales sont égales à l'intensité carbone multipliée par la production. Elles peuvent diminuer si l'économie se décarbone plus vite que son PIB n'augmente.",
    "example": "Si le PIB monte de 3 % mais l'intensité carbone baisse de 5 %, les émissions baissent approximativement de 2 %.",
    "formulas": [
      {
        "title": "Émissions totales",
        "tex": "E_t^{CO_2}=\\sigma_tY_t",
        "intuition": "Décarbonation si σ baisse, mais Y peut continuer de croître."
      }
    ],
    "graph": "climate",
    "steps": [
      "La production totale Y augmente avec la croissance économique.",
      "L’intensité carbone σ diminue grâce à la décarbonation.",
      "Les émissions sont le produit σ×Y.",
      "Les émissions chutent seulement si l’effet de σ l’emporte sur la hausse de Y."
    ],
    "warning": "Une baisse de l’intensité carbone n’implique pas forcément une baisse du total des émissions.",
    "type": "point",
    "short": "Les émissions totales sont égales à l'intensité carbone multipliée par la production."
  },
  {
    "id": "5.4.3",
    "title": "Rétroaction sur la damage function",
    "explanation": "Les émissions s'accumulent et font monter la température, qui renforce la fonction de dommage. C'est une boucle de rétroaction : les dommages futurs dépendent des émissions passées.",
    "example": "Une tonne de CO₂ émise aujourd'hui contribue au problème climatique longtemps après sa production.",
    "formulas": [
      {
        "title": "Température et émissions cumulées",
        "tex": "T_t\\propto C_0+\\sum_{j=0}^{t}\\sigma_jY_j",
        "intuition": "Le climat réagit aux émissions accumulées, pas seulement au flux du jour."
      }
    ],
    "graph": "climate",
    "steps": [
      "Produire des biens polluants émet du carbone à la date t.",
      "Le carbone s’accumule sur plusieurs années.",
      "Le cumul des émissions contribue à faire monter la température.",
      "La hausse de température réduit D et freine la production future."
    ],
    "warning": "",
    "type": "point",
    "short": "Les émissions s'accumulent et font monter la température, qui renforce la fonction de dommage."
  },
  {
    "id": "5.4.4",
    "title": "Simulation d’un modèle de Solow environnemental",
    "explanation": "Le cours simule une version de Solow avec dommages climatiques pour comparer la trajectoire observée à une trajectoire hypothétique sans dommages. Les résultats dépendent des paramètres choisis.",
    "example": "On peut suivre comment le PIB par tête, les émissions et les températures divergent entre scénarios.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Le cours simule une version de Solow avec dommages climatiques pour comparer la trajectoire observée à une trajectoire hypothétique sans dommages."
  },
  {
    "id": "5.4.5",
    "title": "Synthèse",
    "explanation": "La simulation simple du cours suggère des pertes de produit par tête croissantes à long terme ; les habitants peuvent continuer à s'enrichir, mais moins qu'en absence de dommages.",
    "example": "Un revenu de 100 sans dégâts peut ne valoir que 94,5 dans une simulation avec 5,5 % de dommages.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "La simulation simple du cours suggère des pertes de produit par tête croissantes à long terme ; les habitants peuvent continuer à s'enrichir, mais moins qu'en absence de dommages."
  },
  {
    "id": "5.5",
    "title": "Dépréciation du capital et progrès technique",
    "explanation": "Le réchauffement ne réduit pas seulement la production du jour : il peut user plus rapidement le capital et ralentir l'innovation. Ces effets secondaires sont parfois plus graves que le dommage direct.",
    "example": "Des inondations détruisent des machines, tandis que des chercheurs doivent consacrer leur temps à gérer des urgences.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "Le réchauffement ne réduit pas seulement la production du jour : il peut user plus rapidement le capital et ralentir l'innovation."
  },
  {
    "id": "5.5.1",
    "title": "Deux autres externalités",
    "explanation": "Le cours ajoute une dépréciation δ qui augmente avec la température et une croissance technologique gA qui diminue avec elle. Ces canaux peuvent modifier profondément le sentier futur.",
    "example": "Plus de tempêtes détruisent les infrastructures et la baisse de productivité freine chaque année l'accumulation.",
    "formulas": [
      {
        "title": "Dépréciation climatique",
        "tex": "\\delta_t=\\delta_0+\\delta_1T_t",
        "intuition": "Des températures plus élevées accentuent les dommages au capital."
      },
      {
        "title": "Croissance technologique climatique",
        "tex": "g_{A,t}=g_A-\\gamma T_t",
        "intuition": "Un frein durable à la productivité peut s’accumuler fortement."
      }
    ],
    "graph": "climate",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Le cours ajoute une dépréciation δ qui augmente avec la température et une croissance technologique gA qui diminue avec elle."
  },
  {
    "id": "5.5.2",
    "title": "Résultats des simulations",
    "explanation": "Les simulations comparent les effets directs et indirects du réchauffement. Le résultat clé : les pertes deviennent nettement plus sévères lorsque la productivité future est touchée.",
    "example": "Perdre 1 % de capacité d'innover chaque année peut s'accumuler bien davantage qu'un choc ponctuel.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Les simulations comparent les effets directs et indirects du réchauffement."
  },
  {
    "id": "5.5.3",
    "title": "Simulations",
    "explanation": "Dans les scénarios du cours, l'effet sur la productivité technique est particulièrement dangereux : il peut rendre la croissance du revenu par tête négative à long horizon. Ce sont des simulations conditionnelles, pas des prédictions certaines.",
    "example": "Une petite perte de croissance répétée 100 ans produit un grand écart de revenu final.",
    "formulas": [],
    "graph": "climate",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Dans les scénarios du cours, l'effet sur la productivité technique est particulièrement dangereux : il peut rendre la croissance du revenu par tête négative à long horizon."
  },
  {
    "id": "5.5.4",
    "title": "Quelles solutions",
    "explanation": "Les réponses possibles combinent innovations propres, sobriété, prix du carbone, quotas et réglementation. Chaque outil a des coûts, des incitations et des difficultés de coordination.",
    "example": "Taxer le carbone décourage les émissions ; subventionner une énergie propre facilite l'alternative.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Les réponses possibles combinent innovations propres, sobriété, prix du carbone, quotas et réglementation."
  },
  {
    "id": "5.5.5",
    "title": "La décroissance",
    "explanation": "La décroissance consiste à réduire volontairement l'activité matérielle pour diminuer la pression environnementale. Elle soulève des problèmes d'acceptabilité, de justice et d'efficacité climatique.",
    "example": "Réduire la consommation totale peut aussi réduire l'emploi, sans faire baisser proportionnellement les émissions si le mix énergétique reste polluant.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "La décroissance consiste à réduire volontairement l'activité matérielle pour diminuer la pression environnementale."
  },
  {
    "id": "5.5.6",
    "title": "Les outils de politique environnementale",
    "explanation": "Les taxes, subventions, quotas échangeables et normes cherchent à faire supporter le coût de la pollution à ceux qui la génèrent. La difficulté est de choisir les niveaux et de vérifier l'application.",
    "example": "Une taxe de 100 francs par tonne émise incite une entreprise à réduire ses émissions lorsque cela coûte moins de 100 francs.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Les taxes, subventions, quotas échangeables et normes cherchent à faire supporter le coût de la pollution à ceux qui la génèrent."
  },
  {
    "id": "5.5.7",
    "title": "Contraintes globales",
    "explanation": "Le climat est mondial : chaque pays peut vouloir laisser les autres agir, c'est le problème du passager clandestin. Les accords internationaux doivent gérer aussi compétitivité et équité entre pays.",
    "example": "Un pays qui taxe fortement le carbone peut voir la production partir là où les règles sont moins strictes.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Le climat est mondial : chaque pays peut vouloir laisser les autres agir, c'est le problème du passager clandestin."
  },
  {
    "id": "5.6",
    "title": "Conclusion",
    "explanation": "Le cours conclut que croissance et environnement ne sont pas nécessairement incompatibles, mais que les rétroactions du climat, les ressources et les décisions politiques doivent être prises au sérieux.",
    "example": "Une technologie propre peut soutenir le niveau de vie tout en limitant les émissions.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "Le cours conclut que croissance et environnement ne sont pas nécessairement incompatibles, mais que les rétroactions du climat, les ressources et les décisions politiques doivent être prises au sérieux."
  },
  {
    "id": "5.6.1",
    "title": "Conclusion sur environnement et climat",
    "explanation": "Le résultat dépend des préférences, du poids du futur, de la substituabilité des ressources et de l'innovation. Les instruments existent, mais leur efficacité exige souvent une coordination internationale.",
    "example": "Une réduction coordonnée des émissions est plus crédible qu'un effort isolé que d'autres compensent.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Le résultat dépend des préférences, du poids du futur, de la substituabilité des ressources et de l'innovation."
  }
]);
