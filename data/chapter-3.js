window.COURS_DATA = window.COURS_DATA || [];
window.COURS_DATA.push(...[
  {
    "id": "3",
    "title": "Capital physique et capital humain",
    "explanation": "Solow et Lucas expliquent comment les machines et les compétences modifient la production. Leurs différences sont essentielles pour comprendre la croissance durable.",
    "example": "Installer une machine peut augmenter le revenu, mais former des travailleurs peut aussi changer son rythme de progression.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "chapter",
    "short": "Solow et Lucas expliquent comment les machines et les compétences modifient la production."
  },
  {
    "id": "3.1",
    "title": "Modèle de Solow",
    "explanation": "Solow modélise la production, l'épargne, la dépréciation, la croissance de la population et le progrès technique. Le cœur du modèle est la convergence vers un stock de capital par travailleur efficace.",
    "example": "Une économie pauvre en machines peut croître vite en investissant, mais les gains ralentissent à mesure qu'elle s'équipe.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "Solow modélise la production, l'épargne, la dépréciation, la croissance de la population et le progrès technique."
  },
  {
    "id": "3.1.1",
    "title": "Épistémologie",
    "explanation": "Un modèle simplifie volontairement la réalité. Il est utile lorsqu'il explique des faits observés et permet de formuler des prédictions testables.",
    "example": "Une carte ne dessine pas chaque arbre ; elle reste utile pour trouver une route.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Un modèle simplifie volontairement la réalité."
  },
  {
    "id": "3.1.2",
    "title": "Analyse guidée par les faits stylisés",
    "explanation": "Solow est construit pour expliquer les différences de revenu, les trajectoires de croissance et certains faits relativement stables : rendement du capital et parts du travail et du capital.",
    "example": "Si un modèle prédit une chute permanente de la part des salaires alors que les données restent stables, il faut réexaminer ses hypothèses.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Solow est construit pour expliquer les différences de revenu, les trajectoires de croissance et certains faits relativement stables : rendement du capital et parts du travail et du capital."
  },
  {
    "id": "3.1.3",
    "title": "Hypothèses : un modèle très simple",
    "explanation": "Le modèle suppose un seul bien, une économie fermée, un taux d'épargne fixe, une technologie exogène et des entreprises en concurrence. Ces hypothèses permettent d'isoler les mécanismes du capital.",
    "example": "Dans ce cadre, 20 % du revenu épargné devient automatiquement 20 % d'investissement.",
    "formulas": [
      {
        "title": "Identité épargne-investissement",
        "tex": "I_t=S_t=sY_t",
        "intuition": "En économie fermée, l’épargne finance l’investissement."
      }
    ],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Le modèle suppose un seul bien, une économie fermée, un taux d'épargne fixe, une technologie exogène et des entreprises en concurrence."
  },
  {
    "id": "3.1.4",
    "title": "Firmes et fonction de production",
    "explanation": "La fonction Cobb-Douglas combine capital K et travail rendu plus productif par A. Doubler capital et travail double la production, mais doubler seulement le capital la fait augmenter moins que deux fois.",
    "example": "Des ordinateurs et des développeurs travaillent ensemble ; les ordinateurs seuls ne produisent rien.",
    "formulas": [
      {
        "title": "Fonction Cobb–Douglas",
        "tex": "Y_t=K_t^\\alpha(A_tL_t)^{1-\\alpha}",
        "intuition": "La technologie améliore l’efficacité du travail."
      },
      {
        "title": "Rendement du capital",
        "tex": "r_t=\\alpha\\frac{Y_t}{K_t}",
        "intuition": "À capital plus abondant, le rendement marginal baisse."
      }
    ],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "La fonction Cobb-Douglas combine capital K et travail rendu plus productif par A."
  },
  {
    "id": "3.1.5",
    "title": "Rendement du Capital décroissant",
    "explanation": "Le rendement marginal du capital diminue : la première machine transforme beaucoup la production, la dixième apporte généralement moins. C'est pourquoi le capital seul ne permet pas une croissance par tête éternelle.",
    "example": "Une boulangerie sans four gagne énormément avec le premier four ; le sixième reste parfois inutilisé.",
    "formulas": [
      {
        "title": "Production par tête",
        "tex": "y_t=A_t^{1-\\alpha}k_t^\\alpha",
        "intuition": "Lorsque 0 < α < 1, chaque machine supplémentaire produit un gain plus petit."
      }
    ],
    "graph": "solow",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Le rendement marginal du capital diminue : la première machine transforme beaucoup la production, la dixième apporte généralement moins."
  },
  {
    "id": "3.1.6",
    "title": "Comportement, population et technologie",
    "explanation": "L'épargne finance l'investissement, la dépréciation use le capital, la population croît au taux n et la technologie au taux g. Dans Solow, n et g sont donnés de l'extérieur.",
    "example": "Sur 100 de revenu avec s = 0,2, on investit 20 ; si 10 % des machines disparaissent, il faut d'abord les remplacer.",
    "formulas": [
      {
        "title": "Capital total",
        "tex": "K_{t+1}=(1-\\delta)K_t+sY_t",
        "intuition": "Capital qui survit + investissement nouveau."
      },
      {
        "title": "Travail et technologie",
        "tex": "L_{t+1}=(1+n)L_t,\\quad A_{t+1}=(1+g)A_t",
        "intuition": "Deux forces qui diluent ou accroissent le travail efficace."
      }
    ],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "L'épargne finance l'investissement, la dépréciation use le capital, la population croît au taux n et la technologie au taux g."
  },
  {
    "id": "3.1.7",
    "title": "Équations fondamentales et techniques de résolution",
    "explanation": "La production et la loi d'accumulation du capital sont les deux équations fondamentales. On les divise par A×L pour raisonner en capital par travailleur efficace, ce qui rend l'état stationnaire visible.",
    "example": "Une économie peut avoir de plus en plus de capital total tout en gardant une quantité stable par travailleur efficace.",
    "formulas": [
      {
        "title": "Variable intensive",
        "tex": "\\widetilde k_t=\\frac{K_t}{A_tL_t},\\quad\\widetilde y_t=\\frac{Y_t}{A_tL_t}",
        "intuition": "On compare les machines et le PIB à une unité de travail efficace."
      }
    ],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "La production et la loi d'accumulation du capital sont les deux équations fondamentales."
  },
  {
    "id": "3.1.8",
    "title": "Les deux équations fondamentales en forme intensive",
    "explanation": "En forme intensive, le capital futur dépend du capital conservé et de l'épargne nouvelle, le tout dilué par davantage de travailleurs efficaces. L'investissement doit couvrir usure et dilution.",
    "example": "Avec davantage de salariés et une meilleure technologie, il faut aussi davantage de machines pour garder la même dotation « par unité efficace ».",
    "formulas": [
      {
        "title": "Production intensive",
        "tex": "\\widetilde y_t=\\widetilde k_t^{\\alpha}",
        "intuition": "Version simple de la production."
      },
      {
        "title": "Loi de mouvement exacte",
        "tex": "\\widetilde k_{t+1}=\\frac{(1-\\delta)\\widetilde k_t+s\\widetilde k_t^\\alpha}{(1+n)(1+g)}",
        "intuition": "Le numérateur accumule ; le dénominateur dilue."
      }
    ],
    "graph": "solow",
    "steps": [
      "Le capital existant perd la fraction δ : il en reste (1−δ)K.",
      "L’épargne sY finance l’ajout de nouvelles machines.",
      "Le travail efficace A×L augmente avec la population et la technique.",
      "Divise le capital transmis par ce nouveau nombre d’unités efficaces."
    ],
    "warning": "Dans l’équation exacte du cours, la dilution est (1+n)(1+g). L’approximation n+g+δ néglige n×g.",
    "type": "point",
    "short": "En forme intensive, le capital futur dépend du capital conservé et de l'épargne nouvelle, le tout dilué par davantage de travailleurs efficaces."
  },
  {
    "id": "3.1.9",
    "title": "Diagramme de phase",
    "explanation": "Le diagramme de phase compare l'investissement s×f(k̃) et le capital à maintenir. À leur intersection, k̃ reste constant ; à gauche on accumule, à droite on décumule.",
    "example": "Si les investissements dépassent les besoins de remplacement et de dilution, le capital intensif monte.",
    "formulas": [
      {
        "title": "Condition de l’intersection",
        "tex": "s\\widetilde k^{\\alpha}=(n+g+ng+\\delta)\\widetilde k",
        "intuition": "L’investissement couvre usure et dilution."
      }
    ],
    "graph": "solow",
    "steps": [
      "Trace l’investissement par unité efficace s·f(k̃), croissant mais concave.",
      "Trace le besoin de maintien, une droite passant par l’origine.",
      "À gauche de leur intersection, le capital intensif s’accumule.",
      "À droite, il décroît : le point d’intersection est stable."
    ],
    "warning": "",
    "type": "point",
    "short": "Le diagramme de phase compare l'investissement s×f(k̃) et le capital à maintenir."
  },
  {
    "id": "3.1.10",
    "title": "L’état stationnaire (long terme ≳ 25 ans)",
    "explanation": "L'état stationnaire est la valeur k̃* où le capital par travailleur efficace ne change plus. Il ne signifie pas que tout le PIB est constant : la technologie et la population peuvent encore croître.",
    "example": "Avec g = 2 %, le PIB par personne peut augmenter de 2 % malgré un k̃* stable.",
    "formulas": [
      {
        "title": "Capital intensif stationnaire",
        "tex": "\\widetilde k^*=\\left(\\frac{s}{n+g+ng+\\delta}\\right)^{\\frac{1}{1-\\alpha}}",
        "intuition": "Formule exacte avec la loi discrète utilisée ici."
      },
      {
        "title": "Approximation usuelle",
        "tex": "\\widetilde k^*\\approx\\left(\\frac{s}{n+g+\\delta}\\right)^{\\frac{1}{1-\\alpha}}",
        "intuition": "L’approximation néglige le petit produit n×g."
      }
    ],
    "graph": "solow",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "L'état stationnaire est la valeur k̃* où le capital par travailleur efficace ne change plus."
  },
  {
    "id": "3.1.11",
    "title": "Le sentier de croissance équilibrée SCE (long terme ≳ 25 ans)",
    "explanation": "Sur le sentier de croissance équilibrée (SCE), consommation, capital et revenu par tête croissent au même taux g ; les grandeurs agrégées croissent approximativement à g+n.",
    "example": "Avec g = 2 % et n = 1 %, le revenu par tête gagne 2 % par an et la production totale environ 3 %.",
    "formulas": [
      {
        "title": "Croissance de long terme",
        "tex": "g_y=g_k=g_c=g_A=g",
        "intuition": "En grandeurs par tête."
      },
      {
        "title": "Production totale",
        "tex": "g_Y\\approx g+n",
        "intuition": "En grandeurs agrégées : approximation de taux."
      }
    ],
    "graph": null,
    "steps": [],
    "warning": "À long terme, le capital par travailleur efficace est constant, mais le PIB par tête peut croître au taux g.",
    "type": "point",
    "short": "Sur le sentier de croissance équilibrée (SCE), consommation, capital et revenu par tête croissent au même taux g ; les grandeurs agrégées croissent approximativement à g+n."
  },
  {
    "id": "3.1.12",
    "title": "Règle d’or sur le SCE",
    "explanation": "La règle d'or choisit le stock de capital maximisant la consommation durable, pas la production maximale. Dans le Cobb-Douglas du cours, le taux d'épargne de règle d'or vaut α.",
    "example": "Épargner 100 % permet d'investir beaucoup mais laisse exactement 0 à consommer aujourd'hui.",
    "formulas": [
      {
        "title": "Règle d’or",
        "tex": "s_{OR}=\\alpha",
        "intuition": "Taux d’épargne qui maximise la consommation stationnaire dans ce modèle."
      }
    ],
    "graph": "solow",
    "steps": [
      "Davantage d’épargne signifie davantage de capital et de production.",
      "Mais une part plus faible du revenu est consommée immédiatement.",
      "Cherche le point où la consommation stationnaire atteint son maximum.",
      "Avec Cobb–Douglas, la condition conduit à s = α."
    ],
    "warning": "La règle d’or maximise la consommation, pas le PIB maximal ; épargner davantage n’est pas toujours mieux.",
    "type": "point",
    "short": "La règle d'or choisit le stock de capital maximisant la consommation durable, pas la production maximale."
  },
  {
    "id": "3.1.13",
    "title": "Croissance hors SCE (moyen terme ≲ 25 ans)",
    "explanation": "Hors SCE, la croissance par tête combine le progrès technique g et un effet temporaire de rattrapage du capital. Ce second terme disparaît à mesure que k̃ rejoint k̃*.",
    "example": "Après une catastrophe, reconstruire les premières usines peut provoquer une croissance supérieure à g.",
    "formulas": [
      {
        "title": "Décomposition de la croissance",
        "tex": "g_{y,t}\\approx g+\\alpha\\,g_{\\widetilde k,t}",
        "intuition": "Progrès technique + transition du capital intensif."
      }
    ],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Hors SCE, la croissance par tête combine le progrès technique g et un effet temporaire de rattrapage du capital."
  },
  {
    "id": "3.1.14",
    "title": "Croissance hors SCE (moyen terme ≲ 25 ans)",
    "explanation": "Quand k̃ est inférieur à sa cible, l'accumulation donne une croissance supplémentaire. Quand k̃ dépasse la cible, la décumulation freine la croissance.",
    "example": "Si un pays a construit trop de machines par rapport à son épargne, l'usure finit par ramener le stock vers l'équilibre.",
    "formulas": [
      {
        "title": "Accumulation nette",
        "tex": "\\Delta\\widetilde k_t\\approx s\\widetilde k_t^\\alpha-(n+g+\\delta)\\widetilde k_t",
        "intuition": "Le signe change selon que l’on se trouve avant ou après le SCE."
      }
    ],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Quand k̃ est inférieur à sa cible, l'accumulation donne une croissance supplémentaire."
  },
  {
    "id": "3.1.15",
    "title": "Trajectoires de moyen terme et convergence vers le SCE",
    "explanation": "Les trajectoires convergent progressivement vers le SCE. Un choc déplace provisoirement la trajectoire mais ne change pas nécessairement le taux de croissance durable.",
    "example": "Le revenu d'un pays frappé par une catastrophe peut repartir plus vite puis ralentir jusqu'à retrouver sa tendance.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Les trajectoires convergent progressivement vers le SCE."
  },
  {
    "id": "3.1.16",
    "title": "Convergence vers le SCE",
    "explanation": "La convergence est conditionnelle : un pays loin de son propre SCE peut croître vite, mais les pays ne convergent pas automatiquement vers le même niveau de vie si leurs caractéristiques diffèrent.",
    "example": "Deux pays ayant des institutions ou des taux d'épargne très différents peuvent garder un écart durable de revenu.",
    "formulas": [],
    "graph": "solow",
    "steps": [],
    "warning": "Convergence conditionnelle n’est pas convergence absolue entre tous les pays.",
    "type": "point",
    "short": "La convergence est conditionnelle : un pays loin de son propre SCE peut croître vite, mais les pays ne convergent pas automatiquement vers le même niveau de vie si leurs caractéristiques diffèrent."
  },
  {
    "id": "3.1.17",
    "title": "Destruction de capital (Guerre, catastrophe) et rattrapage",
    "explanation": "Une destruction de capital réduit k̃ immédiatement. Comme le capital est devenu rare, sa productivité marginale augmente et la reconstruction crée un rattrapage temporaire.",
    "example": "Après la Seconde Guerre mondiale, plusieurs économies d'Europe continentale et le Japon connaissent une reconstruction rapide.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Une destruction de capital réduit k̃ immédiatement."
  },
  {
    "id": "3.1.18",
    "title": "Effet sur le niveau d’une augmentation de s",
    "explanation": "Une hausse permanente du taux d'épargne relève l'investissement et déplace le SCE vers un stock de capital et un revenu par tête plus élevés. Mais cela exige de renoncer à une part plus importante de consommation immédiate.",
    "example": "Passer de 15 % à 25 % d'épargne permet d'accumuler davantage de machines à long terme.",
    "formulas": [
      {
        "title": "Réaction du capital stationnaire",
        "tex": "\\widetilde k^*(s)=\\left(\\frac{s}{n+g+\\delta}\\right)^{1/(1-\\alpha)}",
        "intuition": "Augmenter s relève le niveau de la trajectoire."
      }
    ],
    "graph": "solow",
    "steps": [
      "Le taux d’épargne s augmente : la courbe d’investissement se déplace vers le haut.",
      "Pendant la transition, le capital par travailleur efficace augmente.",
      "La production par personne rejoint un niveau plus élevé.",
      "Le taux de croissance durable redevient celui de la technologie g."
    ],
    "warning": "",
    "type": "point",
    "short": "Une hausse permanente du taux d'épargne relève l'investissement et déplace le SCE vers un stock de capital et un revenu par tête plus élevés."
  },
  {
    "id": "3.1.19",
    "title": "Effet sur la croissance d’une augmentation de s",
    "explanation": "Une hausse de s accélère temporairement la croissance pendant la transition vers le nouveau SCE. Une fois le nouveau SCE atteint, le taux de croissance redevient g.",
    "example": "Investir davantage ne permet pas de garder 8 % de croissance éternellement si la technologie ne progresse qu'à 2 %.",
    "formulas": [],
    "graph": "solow",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Une hausse de s accélère temporairement la croissance pendant la transition vers le nouveau SCE."
  },
  {
    "id": "3.1.20",
    "title": "Effet d’une augmentation de s sur les variables intensives",
    "explanation": "Après une hausse de s, le capital et la production intensifs augmentent vers de nouveaux plateaux ; la consommation peut baisser immédiatement puis éventuellement remonter. Le résultat dépend du niveau d'épargne initial.",
    "example": "Si l'on investit plus dès aujourd'hui, on consomme moins au départ pour produire plus plus tard.",
    "formulas": [],
    "graph": "solow",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Après une hausse de s, le capital et la production intensifs augmentent vers de nouveaux plateaux ; la consommation peut baisser immédiatement puis éventuellement remonter."
  },
  {
    "id": "3.1.21",
    "title": "Effet d’une augmentation de s sur les variables par tête",
    "explanation": "Les variables par tête retrouvent leur pente de croissance de long terme g après un déplacement du niveau. Il faut distinguer « trajectoire plus haute » et « pente durablement plus forte ».",
    "example": "Deux lignes parallèles de PIB par tête en logarithme peuvent avoir des niveaux différents mais le même taux de croissance.",
    "formulas": [],
    "graph": "solow",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Les variables par tête retrouvent leur pente de croissance de long terme g après un déplacement du niveau."
  },
  {
    "id": "3.2",
    "title": "Pourquoi certains pays sont-ils plus riches que d’autres ?",
    "explanation": "Le modèle prédit un PIB par personne plus élevé quand l'épargne est forte, et plus faible lorsque population et dépréciation augmentent. Les données permettent de tester ces prédictions.",
    "example": "Un pays qui investit beaucoup et perd peu de machines doit disposer de davantage de capital par travailleur, toutes choses égales par ailleurs.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "Le modèle prédit un PIB par personne plus élevé quand l'épargne est forte, et plus faible lorsque population et dépréciation augmentent."
  },
  {
    "id": "3.2.1",
    "title": "Prédictions théoriques de LT dans le modèle de Solow :",
    "explanation": "Une épargne plus forte augmente le niveau de richesse par tête ; une population croissant plus vite ou une forte dépréciation le réduisent. Le progrès technique détermine la croissance par tête durable.",
    "example": "Avec le même investissement total, une population qui augmente vite dilue les nouvelles machines entre davantage de travailleurs.",
    "formulas": [
      {
        "title": "Revenu par tête stationnaire",
        "tex": "y_t^*=A_t\\left(\\frac{s}{n+g+\\delta}\\right)^{\\frac{\\alpha}{1-\\alpha}}",
        "intuition": "s ↑ relève le niveau, n et δ ↑ le réduisent."
      }
    ],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Une épargne plus forte augmente le niveau de richesse par tête ; une population croissant plus vite ou une forte dépréciation le réduisent."
  },
  {
    "id": "3.2.2",
    "title": "Quelle validation empirique du modèle de Solow?",
    "explanation": "Solow explique qualitativement plusieurs faits stylisés mais traite le progrès technique comme extérieur au modèle. Il faut confronter ses prédictions aux données sans confondre corrélation et causalité.",
    "example": "La richesse d'un pays peut permettre plus d'épargne, et pas seulement l'épargne créer la richesse.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Solow explique qualitativement plusieurs faits stylisés mais traite le progrès technique comme extérieur au modèle."
  },
  {
    "id": "3.2.3",
    "title": "Taux d’investissement et revenu/tête",
    "explanation": "On observe souvent une relation positive entre investissement et revenu par tête. Mais cette corrélation peut refléter des mécanismes dans les deux sens et des facteurs cachés.",
    "example": "Les pays riches ont souvent de bonnes banques, qui facilitent à la fois l'investissement et la croissance.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "On observe souvent une relation positive entre investissement et revenu par tête."
  },
  {
    "id": "3.2.4",
    "title": "Démographie et revenu/tête",
    "explanation": "Une croissance démographique plus élevée est associée, dans les prédictions de Solow, à un capital par travailleur plus faible. Les données ne suffisent pas seules à prouver la causalité.",
    "example": "Une école de 100 places doit être agrandie si la population d'élèves double.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Une croissance démographique plus élevée est associée, dans les prédictions de Solow, à un capital par travailleur plus faible."
  },
  {
    "id": "3.3",
    "title": "Modèle de Lucas",
    "explanation": "Lucas ajoute le capital humain : les connaissances et compétences peuvent être accumulées par l'éducation. Le temps consacré à apprendre crée une croissance durable, mais retire du temps à la production immédiate.",
    "example": "Une personne qui étudie ne produit pas à plein temps aujourd'hui, mais peut être beaucoup plus productive demain.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "Lucas ajoute le capital humain : les connaissances et compétences peuvent être accumulées par l'éducation."
  },
  {
    "id": "3.3.1",
    "title": "Le modèle de Solow + capital humain = Lucas",
    "explanation": "Contrairement au travail brut de Solow, le capital humain est reproductible. Le modèle le fait croître par la formation ; cela permet une croissance endogène même sans progrès technique exogène.",
    "example": "Un ingénieur formé peut ensuite former d'autres ingénieurs, ce qui entretient une dynamique cumulative.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Contrairement au travail brut de Solow, le capital humain est reproductible."
  },
  {
    "id": "3.3.2",
    "title": "Le secteur de l’éducation",
    "explanation": "La fraction u du temps est consacrée à l'éducation, le reste au travail. Le stock de compétences augmente grâce à uH mais se déprécie au taux δH.",
    "example": "Avec u = 0,15, on consacre 15 % du temps à la formation et 85 % à la production.",
    "formulas": [
      {
        "title": "Accumulation du capital humain",
        "tex": "H_{t+1}=(1-\\delta_H+u)H_t",
        "intuition": "Formation nouvelle moins usure des compétences."
      }
    ],
    "graph": "lucas",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "La fraction u du temps est consacrée à l'éducation, le reste au travail."
  },
  {
    "id": "3.3.3",
    "title": "Le modèle de Lucas : fonction de production",
    "explanation": "Les biens sont produits par du capital physique K et le capital humain réellement affecté à la production, soit (1−u)H. Les deux facteurs peuvent s'accumuler.",
    "example": "Former tout le monde 100 % du temps rend la production immédiate impossible : il faut équilibrer les deux usages.",
    "formulas": [
      {
        "title": "Production de Lucas",
        "tex": "Y_t=K_t^\\alpha\\left[(1-u)H_t\\right]^{1-\\alpha}",
        "intuition": "Seule la part (1-u) du capital humain travaille à produire des biens."
      }
    ],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Les biens sont produits par du capital physique K et le capital humain réellement affecté à la production, soit (1−u)H."
  },
  {
    "id": "3.3.4",
    "title": "Le modèle de Lucas : SCE",
    "explanation": "Sur le SCE de Lucas, capital physique, capital humain et production grandissent au même taux. Ce rythme provient de l'effort de formation net de l'usure des compétences.",
    "example": "Si u = 6 % et δH = 1 %, le capital humain croît de 5 % par période dans la version simple du cours.",
    "formulas": [
      {
        "title": "Croissance du capital humain",
        "tex": "g_H=u-\\delta_H",
        "intuition": "La formation nette crée une croissance endogène."
      },
      {
        "title": "Sur le SCE",
        "tex": "g_Y=g_K=g_H",
        "intuition": "En population constante, les trois stocks évoluent au même rythme."
      }
    ],
    "graph": "lucas",
    "steps": [
      "Le temps de formation u augmente H.",
      "L’usure δH fait disparaître une partie des compétences.",
      "Le stock H croît au taux u−δH dans le cadre simple.",
      "Sur le SCE, K et Y grandissent au même taux que H."
    ],
    "warning": "",
    "type": "point",
    "short": "Sur le SCE de Lucas, capital physique, capital humain et production grandissent au même taux."
  },
  {
    "id": "3.3.5",
    "title": "Loi de mouvement",
    "explanation": "On divise K et Y par H pour étudier l'intensité du capital physique relative aux compétences. L'épargne relève ce ratio à l'équilibre, tandis que davantage de temps de formation peut le réduire.",
    "example": "Former les salariés plus vite augmente H : sans machines supplémentaires, K/H diminue.",
    "formulas": [
      {
        "title": "Capital relatif",
        "tex": "\\widehat k_t=\\frac{K_t}{H_t}",
        "intuition": "Un ratio pour comparer les machines à la formation accumulée."
      }
    ],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "On divise K et Y par H pour étudier l'intensité du capital physique relative aux compétences."
  },
  {
    "id": "3.3.6",
    "title": "Ejort de formation sur le SCE",
    "explanation": "Augmenter u réduit la production immédiatement car moins d'heures sont travaillées. À long terme, la formation accélère la croissance de H et donc de Y.",
    "example": "Une année d'étude peut réduire le revenu disponible aujourd'hui mais faire monter les revenus futurs.",
    "formulas": [
      {
        "title": "Arbitrage du temps",
        "tex": "u+(1-u)=1",
        "intuition": "Temps d’étude et temps de travail se partagent une ressource limitée."
      }
    ],
    "graph": "lucas",
    "steps": [
      "Plus de formation : moins de personnes produisent immédiatement.",
      "Les compétences augmentent plus rapidement.",
      "Le stock de capital humain permet une production future plus élevée.",
      "Le résultat net dépend de l’horizon de décision et des rendements de l’éducation."
    ],
    "warning": "Il faut distinguer l’effet négatif immédiat sur la production et l’effet positif sur le taux de croissance futur.",
    "type": "point",
    "short": "Augmenter u réduit la production immédiatement car moins d'heures sont travaillées."
  },
  {
    "id": "3.3.7",
    "title": "Années d’éducation et PIB/tête",
    "explanation": "Les données montrent une association entre éducation et PIB par tête. Elle est compatible avec Lucas, mais ne prouve pas automatiquement une causalité unique.",
    "example": "Un pays riche peut financer plus d'universités, et ces universités peuvent à leur tour accroître sa productivité.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Les données montrent une association entre éducation et PIB par tête."
  },
  {
    "id": "3.3.8",
    "title": "Le modèle de Lucas : externalité",
    "explanation": "L'éducation bénéficie parfois aussi aux autres travailleurs. Comme ces gains collectifs ne sont pas entièrement rémunérés individuellement, les ménages peuvent investir trop peu en formation.",
    "example": "Une personne très qualifiée améliore les méthodes de toute son équipe sans toucher seule tous les bénéfices.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "L'éducation bénéficie parfois aussi aux autres travailleurs."
  },
  {
    "id": "3.3.9",
    "title": "Le rôle des rendements de l’éducation",
    "explanation": "Si les rendements de l'éducation deviennent décroissants, la croissance de capital humain peut ralentir et même tendre vers zéro. Les conclusions optimistes du modèle simple dépendent donc de l'hypothèse de rendements constants.",
    "example": "Former deux fois plus de personnes ne double pas forcément les compétences utiles si les formations se ressemblent trop.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Si les rendements de l'éducation deviennent décroissants, la croissance de capital humain peut ralentir et même tendre vers zéro."
  },
  {
    "id": "3.4",
    "title": "Conclusion",
    "explanation": "Le capital humain est un moteur puissant, mais les externalités, la qualité de l'éducation et ses rendements réels déterminent la politique optimale. Les subventions peuvent corriger une sous-formation.",
    "example": "Subventionner une bonne formation peut profiter aux diplômés et à leurs collègues.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "Le capital humain est un moteur puissant, mais les externalités, la qualité de l'éducation et ses rendements réels déterminent la politique optimale."
  }
]);
