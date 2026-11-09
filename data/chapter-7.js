window.COURS_DATA = window.COURS_DATA || [];
window.COURS_DATA.push(...[
  {
    "id": "7",
    "title": "IS–LM et demande agrégée",
    "explanation": "Le chapitre construit la demande agrégée grâce aux marchés des biens (IS) et de la monnaie (LM). Il montre comment les politiques publiques modifient les dépenses et les taux d'intérêt.",
    "example": "Réduire les taux peut stimuler les investissements, tandis que l'État peut soutenir directement la demande avec ses dépenses.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "chapter",
    "short": "Le chapitre construit la demande agrégée grâce aux marchés des biens (IS) et de la monnaie (LM)."
  },
  {
    "id": "7.1",
    "title": "Relations IS et LM",
    "explanation": "IS décrit la demande de biens et services. LM décrit l'équilibre monétaire. Leur interaction détermine le niveau de demande compatible avec les marchés.",
    "example": "Une hausse de l'investissement fait monter la demande, mais peut aussi faire pression sur les taux si la monnaie est fixée.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "IS décrit la demande de biens et services."
  },
  {
    "id": "7.1.1",
    "title": "La relation IS – Invest &Savings",
    "explanation": "Sur le marché des biens, la demande est composée de consommation C, investissement I et dépenses publiques G en économie fermée. L'équilibre exige Y = C + I + G.",
    "example": "Un gouvernement construit un pont : c'est une dépense publique qui entre directement dans la demande de biens.",
    "formulas": [
      {
        "title": "Relation IS",
        "tex": "Y^d=C(Y^d-T,r)+I(Y^d,r)+G",
        "intuition": "La demande de biens additionne dépenses privées et publiques."
      }
    ],
    "graph": "islm",
    "steps": [
      "Les ménages consomment C selon leur revenu disponible et les taux.",
      "Les entreprises investissent I selon leurs perspectives et les taux.",
      "L’État ajoute ses dépenses G.",
      "L’égalité entre Y et C+I+G définit la condition IS."
    ],
    "warning": "",
    "type": "point",
    "short": "Sur le marché des biens, la demande est composée de consommation C, investissement I et dépenses publiques G en économie fermée."
  },
  {
    "id": "7.1.2",
    "title": "La Consommation agrégée",
    "explanation": "Les ménages répartissent leur revenu disponible Y−T entre consommation et épargne. La consommation augmente avec le revenu disponible, mais en général moins que proportionnellement.",
    "example": "Avec une propension marginale à consommer de 0,8, 100 francs de revenu disponible supplémentaire engendrent 80 francs de consommation.",
    "formulas": [
      {
        "title": "Revenu disponible",
        "tex": "Y-T=C+S_{privee}",
        "intuition": "Ce qui n’est pas consommé est épargné."
      },
      {
        "title": "Consommation linéaire",
        "tex": "C=c(Y-T),\\quad0<c<1",
        "intuition": "c : propension marginale à consommer."
      }
    ],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Les ménages répartissent leur revenu disponible Y−T entre consommation et épargne."
  },
  {
    "id": "7.1.3",
    "title": "Propension à consommer dans les données",
    "explanation": "Les données suggèrent des propensions marginales à consommer différentes selon les pays et situations. Cette réaction est cruciale pour calculer les multiplicateurs de demande.",
    "example": "Si les ménages consomment presque tout leur revenu supplémentaire, une injection de dépense circule longtemps dans l'économie.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Les données suggèrent des propensions marginales à consommer différentes selon les pays et situations."
  },
  {
    "id": "7.1.4",
    "title": "L’investissement Agrégé",
    "explanation": "L'investissement réagit positivement aux ventes attendues et négativement au taux d'intérêt réel de long terme. Le taux mesure aussi le coût d'opportunité des fonds propres.",
    "example": "Une machine rentable à 2 % de coût du crédit peut devenir non rentable à 8 %.",
    "formulas": [
      {
        "title": "Investissement simplifié",
        "tex": "I=I_0-br,\\quad b>0",
        "intuition": "Un taux réel plus élevé décourage les projets d’investissement."
      }
    ],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "L'investissement réagit positivement aux ventes attendues et négativement au taux d'intérêt réel de long terme."
  },
  {
    "id": "7.1.5",
    "title": "Relation IS simplifiée",
    "explanation": "On simplifie souvent en supposant la consommation surtout liée au revenu et l'investissement surtout lié aux taux. Cela conserve les mécanismes principaux et facilite les calculs.",
    "example": "On peut écrire une demande simple où C = c(Y−T) et I = I₀−br.",
    "formulas": [
      {
        "title": "IS simplifiée",
        "tex": "Y=c(Y-T)+I_0-br+G",
        "intuition": "Comportements linéarisés pour analyser le multiplicateur."
      }
    ],
    "graph": "islm",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "On simplifie souvent en supposant la consommation surtout liée au revenu et l'investissement surtout lié aux taux."
  },
  {
    "id": "7.1.6",
    "title": "La relation LM",
    "explanation": "L'identité quantitative M×V = P×transactions relie quantité de monnaie, vitesse de circulation, prix et activité. La vitesse dépend notamment du taux nominal.",
    "example": "Quand les placements rémunèrent davantage, garder du cash devient plus coûteux et la monnaie circule différemment.",
    "formulas": [
      {
        "title": "Équation quantitative",
        "tex": "M_tV_t=P_tTR_t",
        "intuition": "M : monnaie ; V : vitesse ; P : prix ; TR : transactions."
      }
    ],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "L'identité quantitative M×V = P×transactions relie quantité de monnaie, vitesse de circulation, prix et activité."
  },
  {
    "id": "7.1.7",
    "title": "La relation LM",
    "explanation": "La relation LM met face à face offre réelle de monnaie M/P et demande réelle de liquidités. Avec M fixée, une activité plus forte accroît la demande de monnaie et pousse le taux d'intérêt à la hausse.",
    "example": "Plus de transactions réclament des liquidités ; si leur quantité ne bouge pas, leur coût d'opportunité s'ajuste.",
    "formulas": [
      {
        "title": "LM",
        "tex": "\\frac{M}{P}=L(Y,i)",
        "intuition": "La quantité réelle de monnaie offerte égale celle demandée."
      }
    ],
    "graph": "islm",
    "steps": [
      "Davantage de production exige plus de transactions.",
      "La demande de monnaie réelle augmente avec Y.",
      "Si M/P est fixé, le taux nominal doit augmenter pour limiter la liquidité désirée.",
      "La relation LM est donc croissante dans le graphique (Y,i) à masse fixée."
    ],
    "warning": "Le taux nominal intervient dans la demande de monnaie, alors que le taux réel influe sur l’investissement.",
    "type": "point",
    "short": "La relation LM met face à face offre réelle de monnaie M/P et demande réelle de liquidités."
  },
  {
    "id": "7.2",
    "title": "Macroéconomie financière",
    "explanation": "Le marché financier transmet les taux de court terme aux décisions de long terme. Les primes de risque et de maturité expliquent pourquoi tous les actifs n'ont pas le même rendement.",
    "example": "La banque centrale pilote surtout les taux très courts, mais les ménages empruntent souvent sur plusieurs années.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "Le marché financier transmet les taux de court terme aux décisions de long terme."
  },
  {
    "id": "7.2.1",
    "title": "Les marchés financiers",
    "explanation": "Actions, obligations et produits monétaires financent des projets et répartissent les risques. Les marchés primaire et secondaire servent à créer puis échanger ces actifs.",
    "example": "Une entreprise émet une obligation pour financer une usine ; des investisseurs la revendent ensuite sur le marché secondaire.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Actions, obligations et produits monétaires financent des projets et répartissent les risques."
  },
  {
    "id": "7.2.2",
    "title": "Classe d’actifs et rendements",
    "explanation": "Les actions donnent droit à des dividendes et à un prix futur incertain ; les obligations promettent des coupons et un remboursement avec risque de défaut ; la monnaie est liquide mais rapporte peu.",
    "example": "Une obligation de dix ans peut offrir un taux supérieur à un dépôt à vue parce que l'argent est immobilisé plus longtemps.",
    "formulas": [
      {
        "title": "Rendement d’une action",
        "tex": "R_{t+1}=\\frac{P_{t+1}+Div_{t+1}}{P_t}",
        "intuition": "Prix futur plus dividende, rapportés au prix d’achat."
      }
    ],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Les actions donnent droit à des dividendes et à un prix futur incertain ; les obligations promettent des coupons et un remboursement avec risque de défaut ; la monnaie est liquide mais rapporte peu."
  },
  {
    "id": "7.2.3",
    "title": "Arbitrage et marchés efficaces",
    "explanation": "L'arbitrage pousse les prix des actifs à s'ajuster jusqu'à égaliser les rendements espérés corrigés du risque. Un actif plus risqué doit normalement promettre une compensation.",
    "example": "Si deux actifs ont le même rendement espéré mais un seul peut faire défaut, les investisseurs exigeront une prime du plus risqué.",
    "formulas": [],
    "graph": null,
    "steps": [
      "Un actif paraît plus attractif que les autres à rendement espéré corrigé du risque.",
      "Les investisseurs achètent cet actif et vendent les alternatives.",
      "Son prix augmente, ce qui réduit son rendement attendu.",
      "L’arbitrage se poursuit jusqu’à disparition de l’avantage."
    ],
    "warning": "",
    "type": "point",
    "short": "L'arbitrage pousse les prix des actifs à s'ajuster jusqu'à égaliser les rendements espérés corrigés du risque."
  },
  {
    "id": "7.2.4",
    "title": "La courbe des taux",
    "explanation": "La courbe des taux associe maturité et taux exigé. Elle est souvent croissante ; une inversion peut traduire des anticipations de récession ou une forte demande d'actifs sûrs à certaines échéances.",
    "example": "Un emprunt à 10 ans peut payer moins qu'un emprunt à 2 ans lorsque le marché anticipe des baisses futures de taux.",
    "formulas": [
      {
        "title": "Taux long et prime",
        "tex": "i_{t+m}=i_t+\\Delta(m)",
        "intuition": "La maturité et le risque ajoutent un écart au taux court."
      }
    ],
    "graph": "yield",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "La courbe des taux associe maturité et taux exigé."
  },
  {
    "id": "7.3",
    "title": "Interventions de la banque centrale",
    "explanation": "La banque centrale agit sur le marché interbancaire par ses taux directeurs et les achats/ventes de titres. Les effets se propagent aux taux de financement des entreprises et ménages.",
    "example": "Acheter des obligations injecte des liquidités et peut faire baisser certains rendements.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "La banque centrale agit sur le marché interbancaire par ses taux directeurs et les achats/ventes de titres."
  },
  {
    "id": "7.3.1",
    "title": "Les instruments de la politique monétaire",
    "explanation": "Deux instruments : cibler le taux directeur, auquel cas la quantité de monnaie s'ajuste ; ou cibler la quantité de monnaie, auquel cas le taux s'ajuste. Les achats de titres à long terme jouent aussi un rôle.",
    "example": "Quand la banque centrale fixe un taux plancher/plafond, le taux interbancaire reste généralement encadré.",
    "formulas": [],
    "graph": null,
    "steps": [
      "Cible de taux : la banque centrale fixe i et fournit la monnaie demandée à ce taux.",
      "Cible monétaire : elle fixe M et laisse i équilibrer le marché.",
      "Open-market : acheter des titres injecte de la liquidité, en vendre en retire."
    ],
    "warning": "",
    "type": "point",
    "short": "Deux instruments : cibler le taux directeur, auquel cas la quantité de monnaie s'ajuste ; ou cibler la quantité de monnaie, auquel cas le taux s'ajuste."
  },
  {
    "id": "7.3.2",
    "title": "Transmission de la politique monétaire",
    "explanation": "Une baisse de taux à court terme se transmet, via les marchés financiers, aux taux de plus long terme puis à C et I. Cette transmission n'est pas parfaite et dépend des primes.",
    "example": "Si les taux hypothécaires baissent, un ménage peut avancer son projet d'achat immobilier.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Une baisse de taux à court terme se transmet, via les marchés financiers, aux taux de plus long terme puis à C et I."
  },
  {
    "id": "7.3.3",
    "title": "Conséquences pour la relation LM – I",
    "explanation": "Avec une cible de taux, LM est horizontale dans le graphique IS-LM. Avec une masse monétaire fixée, LM est croissante : davantage de demande nécessite un taux plus élevé.",
    "example": "Une hausse de la demande ne fait pas forcément monter le taux si la banque centrale le maintient volontairement constant.",
    "formulas": [
      {
        "title": "LM de taux",
        "tex": "i_t=i^*",
        "intuition": "Un taux directeur fixé : LM horizontale."
      },
      {
        "title": "LM de quantité",
        "tex": "M_t=M^*",
        "intuition": "La quantité est fixée : le taux s’ajuste."
      }
    ],
    "graph": "islm",
    "steps": [],
    "warning": "LM horizontale si i fixé ; LM croissante si M fixé. Ne mélange pas les deux régimes.",
    "type": "point",
    "short": "Avec une cible de taux, LM est horizontale dans le graphique IS-LM."
  },
  {
    "id": "7.4",
    "title": "Politique macroéconomique de la demande",
    "explanation": "Le modèle IS-LM mesure les effets des politiques budgétaires, fiscales et monétaires. Il faut toujours préciser comment la dépense publique est financée.",
    "example": "Un même accroissement de G peut être financé par dette, impôts ou création monétaire, avec des conséquences différentes.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "Le modèle IS-LM mesure les effets des politiques budgétaires, fiscales et monétaires."
  },
  {
    "id": "7.4.1",
    "title": "Le modèle IS/LM",
    "explanation": "À l'équilibre, la demande de biens égale la production demandée et le marché monétaire est équilibré. Le croisement IS-LM détermine simultanément Y et i dans la version à masse monétaire fixée.",
    "example": "Quand les dépenses publiques augmentent, IS se déplace vers la droite ; Y et éventuellement i montent.",
    "formulas": [
      {
        "title": "Deux conditions d’équilibre",
        "tex": "\\left\\{\\begin{array}{l}Y=C(Y-T,r)+I(Y,r)+G\\\\M/P=L(Y,i)\\end{array}\\right.",
        "intuition": "Le marché des biens et celui de la monnaie doivent être simultanément équilibrés."
      }
    ],
    "graph": "islm",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "À l'équilibre, la demande de biens égale la production demandée et le marché monétaire est équilibré."
  },
  {
    "id": "7.4.2",
    "title": "Statique Comparative",
    "explanation": "La statique comparative compare deux équilibres après la modification d'un paramètre exogène. On différencie les équations pour mesurer l'effet sur Y et i.",
    "example": "Pour calculer l'effet d'une hausse de G, on dérive IS et LM puis on résout les variations dY et di.",
    "formulas": [
      {
        "title": "Multiplicateur simple",
        "tex": "\\frac{dY}{dG}=\\frac{1}{1-c}",
        "intuition": "Cas d’une politique de taux fixée, investissement constant par rapport à Y et sans fuites."
      }
    ],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "La statique comparative compare deux équilibres après la modification d'un paramètre exogène."
  },
  {
    "id": "7.4.3",
    "title": "Contrainte budgétaire",
    "explanation": "Le budget de l'État impose une compensation : dépenses moins impôts doivent être financées par dette ou création monétaire, selon le cadre du cours. Les instruments ne peuvent pas être choisis indépendamment.",
    "example": "Un déficit de 100 doit correspondre à un financement de 100, en respectant les écritures et conventions du modèle.",
    "formulas": [
      {
        "title": "Contrainte budgétaire",
        "tex": "G-T=\\frac{\\Delta M}{P}+\\frac{\\Delta Dette}{P}",
        "intuition": "Représentation simplifiée : le déficit doit être financé."
      }
    ],
    "graph": null,
    "steps": [],
    "warning": "Toute relance doit respecter une contrainte de financement : dette, impôts ou monnaie ne sont pas indépendants.",
    "type": "point",
    "short": "Le budget de l'État impose une compensation : dépenses moins impôts doivent être financées par dette ou création monétaire, selon le cadre du cours."
  },
  {
    "id": "7.4.4",
    "title": "Impact sur la demande agrégée des politiques macroéconomiques",
    "explanation": "Une relance budgétaire augmente directement la demande, puis crée des dépenses additionnelles via les revenus. Le multiplicateur peut être atténué si les taux montent et freinent l'investissement.",
    "example": "Une dépense initiale de 100 avec c = 0,8 engendre un multiplicateur théorique de 5 si le taux reste fixe et sans fuites.",
    "formulas": [
      {
        "title": "Multiplicateur keynésien",
        "tex": "\\Delta Y=\\frac{1}{1-c}\\Delta G",
        "intuition": "Sans éviction et sous hypothèses du modèle simplifié."
      },
      {
        "title": "Impôts",
        "tex": "\\Delta Y=-\\frac{c}{1-c}\\Delta T",
        "intuition": "Une baisse d’impôt stimule la consommation moins directement qu’une dépense de G."
      }
    ],
    "graph": "islm",
    "steps": [
      "L’État dépense un montant supplémentaire ΔG.",
      "Ce montant augmente le revenu des vendeurs et travailleurs.",
      "Ils consomment une fraction c de ce revenu additionnel.",
      "La nouvelle consommation crée du revenu supplémentaire, et le processus continue.",
      "Avec un taux fixé, sans fuites et c constant, le multiplicateur est 1/(1−c)."
    ],
    "warning": "Le multiplicateur 1/(1−c) ne vaut pas universellement : éviction par les taux, impôts ou importations peuvent le réduire.",
    "type": "point",
    "short": "Une relance budgétaire augmente directement la demande, puis crée des dépenses additionnelles via les revenus."
  },
  {
    "id": "7.4.5",
    "title": "La politique monétaire",
    "explanation": "Une politique monétaire expansionniste baisse les taux ou augmente la liquidité, stimulant principalement l'investissement et la consommation sensible au crédit. L'effet dépend de la transmission financière.",
    "example": "Une baisse du taux de 4 % à 2 % peut rendre davantage de projets rentables.",
    "formulas": [],
    "graph": "islm",
    "steps": [
      "La banque centrale réduit le taux court ou injecte des liquidités.",
      "Les marchés transmettent une partie du mouvement aux taux longs.",
      "L’emprunt et l’investissement deviennent plus attractifs.",
      "La demande agrégée augmente, sous réserve de transmission effective."
    ],
    "warning": "",
    "type": "point",
    "short": "Une politique monétaire expansionniste baisse les taux ou augmente la liquidité, stimulant principalement l'investissement et la consommation sensible au crédit."
  },
  {
    "id": "7.4.6",
    "title": "Remarques diverses",
    "explanation": "Il faut distinguer instruments, variables endogènes et conditions de financement. Les résultats dépendent aussi de la pente de LM, de la sensibilité des dépenses au taux et des anticipations.",
    "example": "Une relance fonctionne différemment si l'investissement ne réagit presque pas aux intérêts.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Il faut distinguer instruments, variables endogènes et conditions de financement."
  },
  {
    "id": "7.5",
    "title": "Stabilisation et politique de taux",
    "explanation": "La banque centrale veut stabiliser l'activité et l'inflation plutôt que simplement fixer une quantité de monnaie. Une règle de taux peut réagir systématiquement aux déséquilibres.",
    "example": "Face à une forte inflation, relever le taux peut freiner la demande et limiter la hausse des prix.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "La banque centrale veut stabiliser l'activité et l'inflation plutôt que simplement fixer une quantité de monnaie."
  },
  {
    "id": "7.5.1",
    "title": "Modèle IS/LM augmenté",
    "explanation": "Le modèle IS-LM augmenté autorise notamment des chocs de demande monétaire et une règle de taux. Il aide à choisir l'instrument le plus stabilisateur.",
    "example": "Une demande de monnaie imprévisible provoque de fortes variations de taux si la masse M est rigidement fixée.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Le modèle IS-LM augmenté autorise notamment des chocs de demande monétaire et une règle de taux."
  },
  {
    "id": "7.5.2",
    "title": "Quel instrument ?",
    "explanation": "Le choix entre politique de taux et de masse monétaire dépend des chocs dominants. Une cible de taux amortit mieux certains chocs financiers ; une cible de masse peut réagir différemment.",
    "example": "Si les ménages décident soudain de garder beaucoup de liquidités, fixer le taux évite une hausse brutale de celui-ci.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Le choix entre politique de taux et de masse monétaire dépend des chocs dominants."
  },
  {
    "id": "7.5.3",
    "title": "Règle de taux",
    "explanation": "Une règle de taux fait réagir le taux directeur aux variables macroéconomiques, par exemple à une inflation supérieure à la cible ou à une demande trop forte.",
    "example": "Si l'inflation dépasse sa cible, une règle peut prescrire de relever i pour refroidir les dépenses.",
    "formulas": [
      {
        "title": "Règle de taux, forme stylisée",
        "tex": "i=i_0+\\phi_\\pi(\\pi-\\pi^*)+\\phi_y(Y-Y^*)",
        "intuition": "La banque centrale réagit à l’inflation et à l’écart d’activité."
      }
    ],
    "graph": "da",
    "steps": [
      "L’inflation s’éloigne de la cible π*.",
      "La règle de politique monétaire prescrit une hausse du taux nominal.",
      "Si cette hausse dépasse l’inflation attendue, le taux réel augmente.",
      "Consommation et investissement ralentissent : la demande baisse."
    ],
    "warning": "",
    "type": "point",
    "short": "Une règle de taux fait réagir le taux directeur aux variables macroéconomiques, par exemple à une inflation supérieure à la cible ou à une demande trop forte."
  },
  {
    "id": "7.6",
    "title": "Courbe de demande agrégée",
    "explanation": "La courbe de demande agrégée relie l'inflation au volume de biens et services demandés. Elle est généralement décroissante dans le cadre du cours à cause de la réponse de la banque centrale.",
    "example": "Une inflation plus élevée pousse la banque centrale à augmenter les taux réels, ce qui réduit C et I.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "La courbe de demande agrégée relie l'inflation au volume de biens et services demandés."
  },
  {
    "id": "7.6.1",
    "title": "La relation décroissante entre inflation et demande agrégée",
    "explanation": "Si la banque centrale augmente assez fortement son taux nominal lorsque l'inflation monte, le taux réel augmente et la demande ralentit. C'est le mécanisme de pente négative de DA.",
    "example": "Une inflation qui passe de 2 à 4 % peut conduire à une hausse des taux suffisamment grande pour freiner l'investissement.",
    "formulas": [
      {
        "title": "Fisher",
        "tex": "r=i-\\pi^a",
        "intuition": "Le taux réel pertinent dépend de l’inflation anticipée."
      }
    ],
    "graph": "da",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Si la banque centrale augmente assez fortement son taux nominal lorsque l'inflation monte, le taux réel augmente et la demande ralentit."
  },
  {
    "id": "7.6.2",
    "title": "Construction de la courbe DA",
    "explanation": "Pour construire DA, on résout IS-LM pour plusieurs niveaux possibles d'inflation et on reporte, pour chacun, la demande obtenue. On ne cherche pas encore l'équilibre avec l'offre.",
    "example": "À inflation faible la demande peut être forte ; à inflation élevée, les taux pèsent davantage sur l'activité.",
    "formulas": [],
    "graph": "da",
    "steps": [
      "Choisis un taux d’inflation possible π₁.",
      "Déduis le taux d’intérêt décidé par la banque centrale à π₁.",
      "Résous IS-LM pour obtenir la demande Yᵈ(π₁).",
      "Répète à d’autres taux d’inflation : les points forment la courbe DA."
    ],
    "warning": "",
    "type": "point",
    "short": "Pour construire DA, on résout IS-LM pour plusieurs niveaux possibles d'inflation et on reporte, pour chacun, la demande obtenue."
  },
  {
    "id": "7.6.3",
    "title": "Effet des politiques macroéconomiques sur la courbe DA",
    "explanation": "Les politiques qui soutiennent les dépenses déplacent DA vers la droite ; celles qui les freinent la déplacent vers la gauche. Ce mouvement est différent d'un déplacement le long de la courbe.",
    "example": "Augmenter G décale DA ; modifier le taux directeur en réaction à une inflation différente déplace le point le long de DA.",
    "formulas": [],
    "graph": "da",
    "steps": [],
    "warning": "Un choc de politique déplace DA, un changement de π à politique inchangée fait se déplacer le long de DA.",
    "type": "point",
    "short": "Les politiques qui soutiennent les dépenses déplacent DA vers la droite ; celles qui les freinent la déplacent vers la gauche."
  },
  {
    "id": "7.6.4",
    "title": "Conclusion",
    "explanation": "La demande agrégée dépend des comportements privés et des politiques économiques. Pour déterminer le PIB et l'inflation effectivement observés, il faudra ajouter l'offre agrégée.",
    "example": "La courbe DA, seule, ne prédit pas si l'inflation sera de 2 % ou de 5 % : il faut la croiser avec OA.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "La demande agrégée dépend des comportements privés et des politiques économiques."
  }
]);
