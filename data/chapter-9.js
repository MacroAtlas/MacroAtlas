window.COURS_DATA = window.COURS_DATA || [];
window.COURS_DATA.push(...[
  {
    "id": "9",
    "title": "Modèle OA–DA",
    "explanation": "Le modèle OA-DA met ensemble la demande, le marché du travail, les prix et les anticipations pour expliquer l'équilibre macroéconomique, les chocs et le rôle de la banque centrale.",
    "example": "Après une hausse inattendue de demande, le PIB monte provisoirement, puis les prix et les anticipations s'ajustent.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "chapter",
    "short": "Le modèle OA-DA met ensemble la demande, le marché du travail, les prix et les anticipations pour expliquer l'équilibre macroéconomique, les chocs et le rôle de la banque centrale."
  },
  {
    "id": "9.1",
    "title": "Équilibre macroéconomique",
    "explanation": "L'équilibre se trouve à l'intersection de la demande agrégée et de l'offre agrégée de court terme ; l'offre de long terme indique le niveau structurel. La réaction des anticipations gouverne la transition.",
    "example": "Au point de rencontre OA-DA, producteurs et acheteurs acceptent le même niveau de PIB et d'inflation.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "L'équilibre se trouve à l'intersection de la demande agrégée et de l'offre agrégée de court terme ; l'offre de long terme indique le niveau structurel."
  },
  {
    "id": "9.1.1",
    "title": "Aperçu, rappel des résultats - Modèle OA/DA",
    "explanation": "DA est décroissante, OACT croissante et OALT verticale au potentiel. Leur intersection permet de comprendre où se situent la production observée et l'inflation.",
    "example": "Si l'intersection est à droite de OALT, l'activité dépasse temporairement son potentiel et le marché du travail est tendu.",
    "formulas": [],
    "graph": "oada",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "DA est décroissante, OACT croissante et OALT verticale au potentiel."
  },
  {
    "id": "9.1.2",
    "title": "Structure du modèle OA/DA",
    "explanation": "On assemble la relation de demande issue d'IS-LM et la relation d'offre issue de Phillips/WS-PS. On sépare soigneusement variables exogènes, prévisions et valeurs réalisées.",
    "example": "DA dépend de G et des taux ; OACT dépend des anticipations de prix et du chômage structurel.",
    "formulas": [
      {
        "title": "Deux équations",
        "tex": "\\left\\{\\begin{array}{l}Y^d=D(\\pi;G,T,i_0,\\dots)\\\\\\pi=\\pi^a+\\eta(Y^s-Y^{struct})\\end{array}\\right.",
        "intuition": "L’équilibre exige Y^d = Y^s."
      }
    ],
    "graph": "oada",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "On assemble la relation de demande issue d'IS-LM et la relation d'offre issue de Phillips/WS-PS."
  },
  {
    "id": "9.1.3",
    "title": "Résolution algébrique",
    "explanation": "Pour résoudre le système, on égalise les expressions de l'inflation ou de la production données par DA et OACT. On obtient l'équilibre de court terme puis on compare au potentiel.",
    "example": "Deux droites π = 10 − 0,1Y et π = 0,1Y − 4 se croisent pour un Y précis et une seule inflation.",
    "formulas": [
      {
        "title": "Exemple linéaire",
        "tex": "\\pi=a-bY,\\quad\\pi=\\pi^a+\\eta(Y-Y^*)",
        "intuition": "Égaliser les deux expressions donne Y et π."
      }
    ],
    "graph": "oada",
    "steps": [
      "Écris la demande DA sous la forme d’une relation entre Y et π.",
      "Écris l’offre OACT sous une autre relation entre Y et π.",
      "Égalise les deux expressions, car production demandée et offerte doivent coïncider.",
      "Calcule le revenu d’équilibre, puis remplace-le pour obtenir l’inflation."
    ],
    "warning": "",
    "type": "point",
    "short": "Pour résoudre le système, on égalise les expressions de l'inflation ou de la production données par DA et OACT."
  },
  {
    "id": "9.1.4",
    "title": "L’équilibre à anticipations rationnelles",
    "explanation": "À anticipations rationnelles et sans surprise, l'inflation anticipée rejoint l'inflation réalisée et la production se situe au potentiel. Des chocs imprévus peuvent produire des écarts temporaires.",
    "example": "Une annonce parfaitement anticipée peut changer les prix sans modifier la production réelle dans la version idéale du modèle.",
    "formulas": [
      {
        "title": "Anticipations réalisées",
        "tex": "\\pi^a=\\pi\\quad\\Rightarrow\\quad Y=Y^*",
        "intuition": "Sans surprise, l’offre revient au potentiel dans le cadre du cours."
      }
    ],
    "graph": "oada",
    "steps": [
      "Les agents anticipent le fonctionnement de l’économie et les politiques.",
      "Sans choc imprévu, leurs anticipations coïncident en moyenne avec l’inflation réalisée.",
      "Sans surprise de prix, l’offre retourne au niveau de production structurel."
    ],
    "warning": "",
    "type": "point",
    "short": "À anticipations rationnelles et sans surprise, l'inflation anticipée rejoint l'inflation réalisée et la production se situe au potentiel."
  },
  {
    "id": "9.2",
    "title": "Chocs et politiques macroéconomiques",
    "explanation": "Un choc déplace DA ou OA. On étudie son effet immédiat, la façon dont les anticipations se corrigent, et l'état final de long terme.",
    "example": "Une relance budgétaire et une hausse des prix pétroliers n'ont pas les mêmes conséquences pour inflation et production.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "Un choc déplace DA ou OA."
  },
  {
    "id": "9.2.1",
    "title": "Choc sur la demande agrégée",
    "explanation": "Un choc positif de demande déplace DA à droite. Si les prix/anticipations sont rigides, la production et l'inflation montent d'abord ; l'ajustement des anticipations ramène l'activité vers son potentiel à long terme.",
    "example": "Une hausse de dépenses publiques fait embaucher davantage à court terme ; à long terme les salaires et prix rattrapent le choc.",
    "formulas": [
      {
        "title": "Offre de court terme",
        "tex": "\\pi_t=\\pi_t^a+\\eta(Y_t-Y^*)",
        "intuition": "Une demande plus forte déplace l’intersection ; les anticipations déterminent le retour."
      }
    ],
    "graph": "oada",
    "steps": [
      "Le choc positif déplace DA vers la droite.",
      "Avec OACT initialement fixe, la nouvelle intersection donne davantage de Y et de π.",
      "Les salaires et anticipations s’ajustent progressivement à l’inflation.",
      "OACT monte et l’activité revient vers Y*, avec une inflation différente à long terme."
    ],
    "warning": "Un choc de demande peut avoir un effet réel à court terme, mais pas sur le niveau structurel de long terme dans ce modèle.",
    "type": "point",
    "short": "Un choc positif de demande déplace DA à droite."
  },
  {
    "id": "9.2.2",
    "title": "Chocs sur l’offre agrégée",
    "explanation": "Un choc d'offre négatif déplace l'offre vers le haut ou la gauche et peut réduire la production potentielle. Il crée un dilemme : soutenir l'emploi risque d'aggraver l'inflation.",
    "example": "Une flambée des coûts énergétiques pousse les prix à la hausse tout en réduisant les quantités produites.",
    "formulas": [
      {
        "title": "Choc d’offre",
        "tex": "Y^*\\downarrow,\\quad OACT\\uparrow",
        "intuition": "Des coûts plus élevés peuvent produire inflation ↑ et activité ↓."
      }
    ],
    "graph": "oada",
    "steps": [
      "La capacité productive recule ou les coûts unitaires augmentent.",
      "L’offre à court terme se déplace vers le haut et/ou le potentiel se décale.",
      "Le PIB recule tandis que l’inflation peut monter.",
      "Stabiliser les prix et soutenir l’emploi devient plus difficile simultanément."
    ],
    "warning": "Choc d’offre et choc de demande peuvent faire bouger l’inflation dans le même sens mais pas le PIB.",
    "type": "point",
    "short": "Un choc d'offre négatif déplace l'offre vers le haut ou la gauche et peut réduire la production potentielle."
  },
  {
    "id": "9.2.3",
    "title": "Choc sur les anticipations",
    "explanation": "Un changement d'anticipations, même sans variation immédiate des fondamentaux, déplace l'offre de court terme. Il peut devenir autoréalisateur par les négociations salariales et la fixation des prix.",
    "example": "Si entreprises et salariés anticipent une inflation élevée, ils peuvent relever salaires et prix dès maintenant.",
    "formulas": [
      {
        "title": "Déplacement d’anticipations",
        "tex": "\\pi^a\\uparrow\\Rightarrow OACT\\uparrow",
        "intuition": "Anticiper une inflation plus forte peut la rendre effectivement plus élevée."
      }
    ],
    "graph": "oada",
    "steps": [
      "Les ménages et entreprises révisent leurs anticipations d’inflation à la hausse.",
      "Les travailleurs exigent des salaires nominaux plus élevés.",
      "Les entreprises répercutent les coûts dans leurs prix.",
      "L’inflation augmente même avant un choc supplémentaire de demande."
    ],
    "warning": "",
    "type": "point",
    "short": "Un changement d'anticipations, même sans variation immédiate des fondamentaux, déplace l'offre de court terme."
  },
  {
    "id": "9.3",
    "title": "Inflation et Banque centrale",
    "explanation": "L'inflation a des coûts économiques, et la banque centrale cherche à la stabiliser. Sa crédibilité influence la vitesse et le coût des ajustements.",
    "example": "Une banque centrale jugée crédible peut réduire les anticipations d'inflation plus facilement.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "L'inflation a des coûts économiques, et la banque centrale cherche à la stabiliser."
  },
  {
    "id": "9.3.1",
    "title": "Les coûts économiques de l’inflation",
    "explanation": "L'inflation perturbe les prix relatifs, les contrats, l'épargne et l'information ; l'inflation imprévue redistribue entre créanciers et débiteurs. Les coûts sont particulièrement forts quand elle est élevée ou instable.",
    "example": "Un prêt à taux fixe devient moins coûteux en valeur réelle pour l'emprunteur si l'inflation dépasse les prévisions.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "L'inflation perturbe les prix relatifs, les contrats, l'épargne et l'information ; l'inflation imprévue redistribue entre créanciers et débiteurs."
  },
  {
    "id": "9.3.2",
    "title": "Lutte contre l’inflation",
    "explanation": "La désinflation demande souvent de ralentir la demande, au prix d'un chômage temporairement supérieur au niveau structurel. Le ratio de sacrifice mesure le coût en activité ou chômage de la baisse de l'inflation.",
    "example": "Relever les taux freine les dépenses et les prix, mais peut faire reculer l'emploi pendant la transition.",
    "formulas": [
      {
        "title": "Ratio de sacrifice",
        "tex": "RS=\\frac{\\text{perte cumulée de production}}{\\text{baisse de l’inflation}}",
        "intuition": "Coût de la désinflation rapporté au gain de stabilité des prix."
      }
    ],
    "graph": "oada",
    "steps": [
      "La banque centrale cherche à réduire l’inflation.",
      "Elle augmente son taux réel et freine la demande.",
      "La production peut passer temporairement sous son potentiel et le chômage monter.",
      "À mesure que les anticipations baissent, l’économie retrouve son niveau structurel."
    ],
    "warning": "Désinflation = inflation qui ralentit ; déflation = baisse du niveau des prix.",
    "type": "point",
    "short": "La désinflation demande souvent de ralentir la demande, au prix d'un chômage temporairement supérieur au niveau structurel."
  },
  {
    "id": "9.3.3",
    "title": "Problème de crédibilité",
    "explanation": "Une banque centrale peut annoncer une inflation faible mais avoir ensuite intérêt à stimuler l'économie : c'est le problème d'incohérence temporelle. Une institution indépendante et crédible aide à ancrer les anticipations.",
    "example": "Si les marchés ne croient pas à la promesse de stabilité, ils prévoient davantage d'inflation et exigent des hausses de salaires plus fortes.",
    "formulas": [],
    "graph": "oada",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Une banque centrale peut annoncer une inflation faible mais avoir ensuite intérêt à stimuler l'économie : c'est le problème d'incohérence temporelle."
  }
]);
