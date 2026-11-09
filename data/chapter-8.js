window.COURS_DATA = window.COURS_DATA || [];
window.COURS_DATA.push(...[
  {
    "id": "8",
    "title": "Marché du travail et offre agrégée",
    "explanation": "Le chapitre explique comment salaires, prix, chômage et anticipations déterminent l'offre agrégée. Le modèle WS-PS conduit à la courbe de Phillips et à l'offre de court terme.",
    "example": "Une hausse inattendue des prix peut temporairement pousser les entreprises à employer davantage de personnes.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "chapter",
    "short": "Le chapitre explique comment salaires, prix, chômage et anticipations déterminent l'offre agrégée."
  },
  {
    "id": "8.1",
    "title": "Introduction",
    "explanation": "Le marché du travail permet de relier les décisions des ménages et entreprises au niveau de production. Les salaires réels et le chômage jouent un rôle central.",
    "example": "Une entreprise embauche tant que la recette d'un travailleur supplémentaire couvre son coût.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "Le marché du travail permet de relier les décisions des ménages et entreprises au niveau de production."
  },
  {
    "id": "8.2",
    "title": "Macroéconomie du marché du travail",
    "explanation": "WS représente la fixation des salaires ; PS représente la fixation des prix par les entreprises. Leur intersection explique le chômage structurel dans le modèle.",
    "example": "Un salaire réel exigé trop élevé par rapport à celui que les entreprises peuvent payer crée des tensions sur l'emploi.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "WS représente la fixation des salaires ; PS représente la fixation des prix par les entreprises."
  },
  {
    "id": "8.2.1",
    "title": "Contexte",
    "explanation": "Le marché du travail n'est pas parfaitement instantané : rechercher un emploi, recruter et négocier prend du temps. Cette friction explique une partie du chômage même dans une économie saine.",
    "example": "Des postes peuvent rester vacants pendant que des candidats cherchent encore un employeur adapté.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Le marché du travail n'est pas parfaitement instantané : rechercher un emploi, recruter et négocier prend du temps."
  },
  {
    "id": "8.2.2",
    "title": "Chômage - Vue d’ensemble",
    "explanation": "Le chômage peut venir des recherches d'emploi, des changements sectoriels et des fluctuations économiques. Le taux de chômage se calcule parmi les actifs, pas parmi tous les habitants.",
    "example": "Un étudiant inactif qui ne cherche pas d'emploi ne compte normalement pas comme chômeur au sens statistique.",
    "formulas": [
      {
        "title": "Chômage",
        "tex": "u=\\frac{L-N}{L}",
        "intuition": "Seules les personnes actives entrent au dénominateur."
      }
    ],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Le chômage peut venir des recherches d'emploi, des changements sectoriels et des fluctuations économiques."
  },
  {
    "id": "8.2.3",
    "title": "Rigidités réelles [WS]",
    "explanation": "WS indique le salaire réel revendiqué par les travailleurs. Il dépend notamment du chômage, des allocations, du pouvoir de négociation et des rigidités institutionnelles.",
    "example": "Quand le chômage est faible, il devient plus facile de changer d'entreprise et de négocier un meilleur salaire.",
    "formulas": [
      {
        "title": "Fixation salariale WS",
        "tex": "W=P^eF(u,z)",
        "intuition": "Le salaire négocié dépend des prix attendus, du chômage et des institutions."
      }
    ],
    "graph": "wsps",
    "steps": [
      "Quand le chômage baisse, l’employé dispose de meilleures alternatives.",
      "Son pouvoir de négociation augmente.",
      "Le salaire réel revendiqué selon WS tend à monter.",
      "Une hausse des allocations ou des protections peut déplacer WS à niveau de chômage donné."
    ],
    "warning": "",
    "type": "point",
    "short": "WS indique le salaire réel revendiqué par les travailleurs."
  },
  {
    "id": "8.2.4",
    "title": "Fixation des prix (PS)",
    "explanation": "PS décrit le salaire réel compatible avec les prix choisis par les entreprises. Une marge plus élevée réduit, toutes choses égales par ailleurs, le salaire réel que les firmes peuvent offrir.",
    "example": "Avec une forte concurrence, les entreprises appliquent des marges plus faibles et peuvent laisser une plus grande part aux salaires réels.",
    "formulas": [
      {
        "title": "Fixation des prix PS",
        "tex": "P=(1+\\mu)\\frac{W}{A}",
        "intuition": "Le prix comprend le coût salarial corrigé par la productivité et la marge."
      }
    ],
    "graph": "wsps",
    "steps": [
      "L’entreprise paie un salaire nominal W par unité de travail.",
      "La productivité A permet de produire davantage avec le même travail.",
      "Une marge μ est appliquée au coût salarial unitaire.",
      "Une marge plus élevée diminue le salaire réel compatible avec PS."
    ],
    "warning": "",
    "type": "point",
    "short": "PS décrit le salaire réel compatible avec les prix choisis par les entreprises."
  },
  {
    "id": "8.2.5",
    "title": "Le modèle WS-PS",
    "explanation": "L'intersection WS-PS détermine le chômage structurel et le salaire réel d'équilibre dans la version simplifiée. Ce chômage ne disparaît pas automatiquement avec une relance de demande.",
    "example": "Si les exigences salariales augmentent durablement mais pas la productivité, l'équilibre peut nécessiter davantage de chômage.",
    "formulas": [
      {
        "title": "Salaire réel PS",
        "tex": "\\frac{W}{P}=\\frac{A}{1+\\mu}",
        "intuition": "Plus de marge réduit le salaire réel compatible avec les prix."
      }
    ],
    "graph": "wsps",
    "steps": [
      "WS donne le salaire réel souhaité par les travailleurs à chaque chômage u.",
      "PS donne le salaire réel compatible avec les prix des firmes.",
      "Leur intersection définit le salaire réel et le chômage structurel."
    ],
    "warning": "Ne confonds pas chômage conjoncturel et chômage structurel défini par WS-PS.",
    "type": "point",
    "short": "L'intersection WS-PS détermine le chômage structurel et le salaire réel d'équilibre dans la version simplifiée."
  },
  {
    "id": "8.2.6",
    "title": "Chômage structurel",
    "explanation": "Le chômage structurel dépend des institutions, des frictions et des marges, pas des fluctuations temporaires de demande. Une politique de demande ne peut pas l'éliminer durablement à elle seule.",
    "example": "Améliorer l'appariement emploi-candidats peut réduire le chômage structurel autrement qu'une baisse de taux.",
    "formulas": [
      {
        "title": "Chômage naturel / structurel",
        "tex": "WS(u_n,z)=PS(\\mu,A)",
        "intuition": "u_n rend compatibles les revendications salariales et les prix."
      }
    ],
    "graph": "wsps",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Le chômage structurel dépend des institutions, des frictions et des marges, pas des fluctuations temporaires de demande."
  },
  {
    "id": "8.3",
    "title": "Courbe de Phillips et offre agrégée",
    "explanation": "À partir de WS-PS, on relie le chômage, l'inflation et la production. On distingue offre de long terme verticale et offre de court terme influencée par les anticipations.",
    "example": "Une demande plus forte peut augmenter le PIB à court terme, mais surtout les prix après ajustement complet.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "À partir de WS-PS, on relie le chômage, l'inflation et la production."
  },
  {
    "id": "8.3.1",
    "title": "Offre agrégée de long terme (OALT)",
    "explanation": "L'offre agrégée de long terme est verticale au niveau de production structurelle. À long terme, prix et anticipations s'ajustent, donc la demande ne modifie pas durablement la production potentielle.",
    "example": "Doubler la quantité de monnaie ne double pas les machines ni la qualification des salariés.",
    "formulas": [
      {
        "title": "Offre de long terme",
        "tex": "Y=Y^{struct}",
        "intuition": "La production potentielle est indépendante de l’inflation à long terme."
      }
    ],
    "graph": "oada",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "L'offre agrégée de long terme est verticale au niveau de production structurelle."
  },
  {
    "id": "8.3.2",
    "title": "Courbe de Phillips",
    "explanation": "La courbe de Phillips relie l'inflation inattendue à l'écart de chômage par rapport au chômage structurel. Un chômage plus faible va souvent de pair avec une inflation plus forte à court terme.",
    "example": "Si les entreprises cherchent davantage de salariés que prévu, les tensions salariales peuvent alimenter les prix.",
    "formulas": [
      {
        "title": "Phillips, forme stylisée",
        "tex": "\\pi_t=\\pi_t^a-\\kappa(u_t-u_n)",
        "intuition": "Moins de chômage que le structurel correspond à davantage d’inflation."
      }
    ],
    "graph": "phillips",
    "steps": [
      "Quand u descend sous uₙ, le marché du travail devient plus tendu.",
      "Les salaires et les prix augmentent plus rapidement que prévu.",
      "L’inflation réalisée dépasse l’inflation anticipée.",
      "Lorsque u rejoint uₙ, l’inflation retrouve le rythme anticipé."
    ],
    "warning": "La courbe de Phillips de court terme dépend des anticipations : ce n’est pas une relation fixe exploitable indéfiniment.",
    "type": "point",
    "short": "La courbe de Phillips relie l'inflation inattendue à l'écart de chômage par rapport au chômage structurel."
  },
  {
    "id": "8.3.3",
    "title": "Offre agrégée de court terme (OACT)",
    "explanation": "L'offre agrégée de court terme est croissante dans le plan production-inflation : produire au-dessus du potentiel nécessite généralement une inflation supérieure aux anticipations. Sa position dépend des prévisions.",
    "example": "Si les entreprises avaient prévu 2 % d'inflation mais réalisent 4 %, elles peuvent temporairement augmenter la production.",
    "formulas": [
      {
        "title": "Offre de court terme",
        "tex": "\\pi_t=\\pi_t^a+\\eta(Y_t-Y^{struct})",
        "intuition": "Une activité au-dessus du potentiel accroît l’inflation relative aux attentes."
      }
    ],
    "graph": "phillips",
    "steps": [
      "Les agents négocient les salaires avec des anticipations de prix.",
      "Une demande inattendue pousse la production au-delà du potentiel.",
      "L’inflation réalisée est supérieure à l’inflation attendue.",
      "Quand les anticipations montent, toute OACT se déplace vers le haut."
    ],
    "warning": "",
    "type": "point",
    "short": "L'offre agrégée de court terme est croissante dans le plan production-inflation : produire au-dessus du potentiel nécessite généralement une inflation supérieure aux anticipations."
  },
  {
    "id": "8.3.4",
    "title": "Les anticipations des marchés",
    "explanation": "Les anticipations déplacent l'offre de court terme. Des anticipations rationnelles peuvent être correctes en moyenne, sans être parfaites face aux chocs imprévus.",
    "example": "Si tout le monde finit par prévoir 4 % plutôt que 2 %, les salaires et prix négociés s'ajustent et l'avantage de surprise disparaît.",
    "formulas": [
      {
        "title": "Anticipations adaptatives",
        "tex": "\\pi_{t+1}^a=\\pi_t",
        "intuition": "Dans la version adaptative, on prévoit demain à partir de l’inflation d’aujourd’hui."
      }
    ],
    "graph": "phillips",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Les anticipations déplacent l'offre de court terme."
  },
  {
    "id": "8.3.5",
    "title": "Chocs sur les fondamentaux de l’offre",
    "explanation": "Des chocs d'offre sur la productivité, les coûts ou le fonctionnement du marché du travail déplacent le potentiel et/ou l'offre de court terme. Ils peuvent engendrer inflation et baisse de production simultanément.",
    "example": "Une forte hausse du coût de l'énergie rend la production plus chère et réduit l'activité.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Des chocs d'offre sur la productivité, les coûts ou le fonctionnement du marché du travail déplacent le potentiel et/ou l'offre de court terme."
  }
]);
