window.COURS_DATA = window.COURS_DATA || [];
window.COURS_DATA.push(...[
  {
    "id": "6",
    "title": "Introduction au court terme",
    "explanation": "La seconde moitié du cours examine les variations à court terme autour du potentiel de production. Prix rigides et anticipations imparfaites rendent la demande importante.",
    "example": "Une économie peut produire temporairement moins que son potentiel lorsqu'il manque des clients.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "chapter",
    "short": "La seconde moitié du cours examine les variations à court terme autour du potentiel de production."
  },
  {
    "id": "6.1",
    "title": "Conjoncturel et structurel I",
    "explanation": "Le PIB observé combine une tendance structurelle et un écart conjoncturel. La tendance change lentement avec la capacité productive ; l'écart suit les crises et reprises.",
    "example": "Si la tendance vaut 110 et le PIB vaut 105, l'économie produit 5 de moins que son niveau structurel.",
    "formulas": [
      {
        "title": "Décomposition du PIB",
        "tex": "Y_t^{obs}=Y_t^{struct}+Y_t^{conj}",
        "intuition": "La fluctuation conjoncturelle est l’écart à la tendance."
      },
      {
        "title": "Output gap",
        "tex": "Gap_t=\\frac{Y_t^{obs}-Y_t^{struct}}{Y_t^{struct}}\\times100",
        "intuition": "On mesure un écart relatif au potentiel en %."
      }
    ],
    "graph": "cycle",
    "steps": [
      "On estime une trajectoire de PIB structurel, par exemple à l’aide d’une moyenne mobile.",
      "On compare chaque PIB observé à la valeur structurelle correspondante.",
      "La différence est l’écart conjoncturel, positif en surchauffe et négatif en sous-activité."
    ],
    "warning": "",
    "type": "section",
    "short": "Le PIB observé combine une tendance structurelle et un écart conjoncturel."
  },
  {
    "id": "6.1.1",
    "title": "Conséquences des fluctuations : chômage",
    "explanation": "Lorsque la production ralentit, les entreprises peuvent réduire les embauches et augmenter le chômage. Le taux de chômage rapporte les personnes au chômage à la population active.",
    "example": "Avec 100 personnes actives dont 7 sans emploi, le chômage est de 7 %.",
    "formulas": [
      {
        "title": "Taux de chômage",
        "tex": "u_t=\\frac{L_t-N_t}{L_t}",
        "intuition": "L : population active ; N : personnes employées."
      }
    ],
    "graph": "cycle",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Lorsque la production ralentit, les entreprises peuvent réduire les embauches et augmenter le chômage."
  },
  {
    "id": "6.1.2",
    "title": "Conséquences des fluctuations : inflation",
    "explanation": "L'inflation est la hausse du niveau général des prix. Elle peut varier avec la conjoncture et avec des chocs d'offre ; il faut distinguer niveau des prix et taux de variation.",
    "example": "Un prix qui passe de 100 à 103 indique 3 % d'inflation, même s'il n'augmente plus ensuite.",
    "formulas": [
      {
        "title": "Inflation",
        "tex": "\\pi_t=\\frac{P_t-P_{t-1}}{P_{t-1}}",
        "intuition": "Variation relative du niveau général des prix."
      }
    ],
    "graph": "cycle",
    "steps": [],
    "warning": "Inflation plus faible ne signifie pas baisse des prix : il faut distinguer désinflation et déflation.",
    "type": "point",
    "short": "L'inflation est la hausse du niveau général des prix."
  },
  {
    "id": "6.1.3",
    "title": "Aperçu des résultats",
    "explanation": "À long terme, la capacité de production dépend surtout de A, K et L. À court terme, avec prix lents à s'ajuster ou prévisions erronées, les mouvements de demande influencent le PIB observé.",
    "example": "Une baisse de la consommation peut provoquer une récession sans que les usines aient physiquement disparu.",
    "formulas": [
      {
        "title": "Production structurelle",
        "tex": "Y_t^{struct}=A_tF(K_t,L_t)",
        "intuition": "Les facteurs de production déterminent le potentiel de long terme."
      }
    ],
    "graph": "cycle",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "À long terme, la capacité de production dépend surtout de A, K et L."
  }
]);
