window.COURS_DATA = window.COURS_DATA || [];
window.COURS_DATA.push(...[
  {
    "id": "4",
    "title": "Circulation des idées et mobilité du capital",
    "explanation": "Le chapitre donne un rôle central aux idées et à l'allocation internationale du capital. Il montre pourquoi innover coûte cher, mais peut bénéficier simultanément à beaucoup de personnes.",
    "example": "Un logiciel exige un gros investissement initial puis peut être utilisé par des millions de clients.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "chapter",
    "short": "Le chapitre donne un rôle central aux idées et à l'allocation internationale du capital."
  },
  {
    "id": "4.1",
    "title": "Principaux concepts de l’économie des idées",
    "explanation": "Une idée est non rivale : plusieurs personnes peuvent l'utiliser sans la détruire. Sa création est coûteuse, sa diffusion souvent peu coûteuse, ce qui bouleverse les règles habituelles de concurrence.",
    "example": "On peut réutiliser une formule scientifique sans devoir la redécouvrir.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "Une idée est non rivale : plusieurs personnes peuvent l'utiliser sans la détruire."
  },
  {
    "id": "4.1.1",
    "title": "L’économie de la connaissance",
    "explanation": "Dans une économie de la connaissance, la recherche et les incitations à innover deviennent des moteurs de la croissance de productivité. La technologie n'est plus simplement « donnée » comme chez Solow.",
    "example": "Une entreprise finance des chercheurs parce qu'elle espère transformer leurs découvertes en nouveaux produits.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Dans une économie de la connaissance, la recherche et les incitations à innover deviennent des moteurs de la croissance de productivité."
  },
  {
    "id": "4.1.2",
    "title": "Exemple du médicament",
    "explanation": "Le médicament illustre le coût fixe énorme de R&D, les échecs nombreux et le coût marginal relativement faible d'une dose supplémentaire. Seuls les produits commercialisés financent aussi les recherches ratées.",
    "example": "Créer une molécule peut demander des années et beaucoup de tests ; fabriquer une boîte de plus coûte beaucoup moins.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Le médicament illustre le coût fixe énorme de R&D, les échecs nombreux et le coût marginal relativement faible d'une dose supplémentaire."
  },
  {
    "id": "4.1.3",
    "title": "Le concept de non-rivalité",
    "explanation": "Une idée peut être copiée et utilisée plusieurs fois. Son coût moyen baisse avec le nombre de clients, car le coût fixe est réparti sur davantage de ventes.",
    "example": "Si développer une application coûte 100 000 francs, le coût fixe par utilisateur est 100 francs pour 1 000 utilisateurs mais 1 franc pour 100 000.",
    "formulas": [
      {
        "title": "Coût total et moyen",
        "tex": "CT(Y)=\\overline C+cY,\\quad CM(Y)=\\frac{\\overline C}{Y}+c",
        "intuition": "Le coût fixe est réparti entre de plus en plus d’acheteurs."
      }
    ],
    "graph": "ideas",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Une idée peut être copiée et utilisée plusieurs fois."
  },
  {
    "id": "4.1.4",
    "title": "Non-rivalité et concurrence",
    "explanation": "Sans protection, un imitateur peut copier une idée à bas coût et empêcher son inventeur de rentabiliser sa recherche. Les brevets encouragent l'innovation mais donnent aussi du pouvoir de marché : c'est un compromis.",
    "example": "Un brevet pharmaceutique peut soutenir la découverte de médicaments tout en rendant les traitements plus chers pendant sa protection.",
    "formulas": [],
    "graph": "ideas",
    "steps": [
      "La première idée nécessite de financer un coût fixe important.",
      "Un imitateur peut copier une fois le coût de recherche payé par l’inventeur.",
      "Sans protection, les prix risquent de ne pas couvrir la R&D initiale.",
      "Une protection stimule l’innovation, mais peut rendre le produit plus cher."
    ],
    "warning": "",
    "type": "point",
    "short": "Sans protection, un imitateur peut copier une idée à bas coût et empêcher son inventeur de rentabiliser sa recherche."
  },
  {
    "id": "4.2",
    "title": "Le modèle de Romer",
    "explanation": "Romer fait du progrès technique le résultat de la recherche. Des travailleurs sont répartis entre production de biens et création de nouvelles idées ; chaque choix a un coût actuel et un bénéfice futur.",
    "example": "Un ingénieur travaillant en R&D n'assemble pas les produits du jour, mais peut améliorer la méthode pour demain.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "Romer fait du progrès technique le résultat de la recherche."
  },
  {
    "id": "4.2.1",
    "title": "La dynamique apparente de la technologie",
    "explanation": "Dans une première approche, le nombre de nouvelles idées est proportionnel au nombre de chercheurs. Le taux apparent de découvertes par chercheur peut toutefois dépendre de la connaissance disponible et du nombre de chercheurs.",
    "example": "Doubler une équipe peut accélérer la recherche, mais pas forcément doubler les découvertes inédites.",
    "formulas": [
      {
        "title": "Production d’idées, apparente",
        "tex": "\\Delta A_t=\\tau L_{A,t},\\quad L_{A,t}=s_RL_t",
        "intuition": "Dans un premier temps, chaque chercheur produit τ idées."
      }
    ],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Dans une première approche, le nombre de nouvelles idées est proportionnel au nombre de chercheurs."
  },
  {
    "id": "4.2.2",
    "title": "Les externalités dans la R&D",
    "explanation": "Deux externalités s'opposent : les anciennes idées facilitent les nouvelles (effet positif) ; les équipes peuvent dupliquer leurs efforts sur les mêmes problèmes (effet négatif). Les paramètres φ et λ mesurent ces forces.",
    "example": "Deux laboratoires réinventant la même molécule n'ajoutent pas deux fois plus de savoir utile.",
    "formulas": [
      {
        "title": "Taux apparent",
        "tex": "\\tau=\\rho A_t^\\phi L_{A,t}^{\\lambda-1}",
        "intuition": "φ : diffusion positive des savoirs ; λ < 1 : duplication."
      }
    ],
    "graph": "ideas",
    "steps": [
      "La connaissance déjà découverte facilite les projets suivants : effet φ positif.",
      "Plus de chercheurs travaillent simultanément sur des sujets proches.",
      "Une part des efforts se duplique : λ plus faible traduit cette inefficacité.",
      "La productivité de la recherche dépend du bilan entre ces deux forces."
    ],
    "warning": "",
    "type": "point",
    "short": "Deux externalités s'opposent : les anciennes idées facilitent les nouvelles (effet positif) ; les équipes peuvent dupliquer leurs efforts sur les mêmes problèmes (effet négatif)."
  },
  {
    "id": "4.2.3",
    "title": "La dynamique effective de la technologie",
    "explanation": "La croissance effective des idées dépend du stock existant et du nombre de chercheurs avec des rendements potentiellement non proportionnels. Les entreprises peuvent ignorer ces externalités dans leurs décisions individuelles.",
    "example": "Une découverte publiée ouvre de nouvelles pistes à d'autres équipes, même sans paiement entre elles.",
    "formulas": [
      {
        "title": "Production effective d’idées",
        "tex": "\\Delta A_t=\\rho A_t^\\phi L_{A,t}^{\\lambda}",
        "intuition": "Le rendement effectif tient compte des externalités."
      }
    ],
    "graph": "ideas",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "La croissance effective des idées dépend du stock existant et du nombre de chercheurs avec des rendements potentiellement non proportionnels."
  },
  {
    "id": "4.2.4",
    "title": "SCE dans le modèle de Romer",
    "explanation": "Sur le SCE, le revenu, le capital et la technologie croissent ensemble à un rythme déterminé par la dynamique des idées. Les ressources consacrées à la recherche modifient aussi les niveaux.",
    "example": "À long terme, un pays avec un secteur R&D efficace peut soutenir la croissance de la productivité.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Sur le SCE, le revenu, le capital et la technologie croissent ensemble à un rythme déterminé par la dynamique des idées."
  },
  {
    "id": "4.2.5",
    "title": "Croissance du PT sur le SCE – Cas général",
    "explanation": "Dans la version générale avec φ inférieur à 1, le taux de croissance de la technologie de long terme dépend de la croissance de la population de chercheurs, de l'externalité de connaissance et de la duplication.",
    "example": "La même croissance du nombre de chercheurs donne davantage de progrès si la duplication est faible.",
    "formulas": [
      {
        "title": "Croissance du PT sur SCE",
        "tex": "g_A^*=\\frac{\\lambda n}{1-\\phi}",
        "intuition": "Dans le cas général du cours avec φ < 1 et part de chercheurs constante."
      }
    ],
    "graph": "ideas",
    "steps": [],
    "warning": "La formule générale nécessite notamment φ < 1 ; le cas particulier φ = 1 demande une analyse séparée.",
    "type": "point",
    "short": "Dans la version générale avec φ inférieur à 1, le taux de croissance de la technologie de long terme dépend de la croissance de la population de chercheurs, de l'externalité de connaissance et de la duplication."
  },
  {
    "id": "4.2.6",
    "title": "Résumé du modèle",
    "explanation": "Affecter plus de personnes à la R&D a deux effets contraires : moins de travailleurs produisent maintenant, mais plus d'idées augmentent la production future. Le niveau du PIB dépend des deux forces.",
    "example": "Passer de 5 % à 10 % de chercheurs réduit le personnel de production aujourd'hui mais augmente le potentiel technique demain.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Affecter plus de personnes à la R&D a deux effets contraires : moins de travailleurs produisent maintenant, mais plus d'idées augmentent la production future."
  },
  {
    "id": "4.2.7",
    "title": "Dynamique du modèle",
    "explanation": "La dynamique du capital ressemble à Solow, mais la productivité vient de la recherche et les travailleurs productifs ne sont qu'une fraction de la population. On doit tenir compte de l'effet de dilution du progrès technique.",
    "example": "Les nouvelles machines ne suffisent pas si une part croissante des salariés quitte l'atelier pour le laboratoire.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "La dynamique du capital ressemble à Solow, mais la productivité vient de la recherche et les travailleurs productifs ne sont qu'une fraction de la population."
  },
  {
    "id": "4.2.8",
    "title": "Cas simplifié – à connaitre pour l’examen",
    "explanation": "Le cas simplifié φ = 0 et λ = 1 est important à l'examen : les nouvelles idées dépendent directement du nombre de chercheurs, sans externalité de connaissance ni duplication. La taille du marché crée un effet d'échelle.",
    "example": "Avec deux fois plus de chercheurs et les mêmes hypothèses, on crée deux fois plus de nouvelles idées par période.",
    "formulas": [
      {
        "title": "Cas simplifié",
        "tex": "\\phi=0,\\quad\\lambda=1,\\quad\\Delta A_t=\\rho s_R L_t",
        "intuition": "Pas d’externalité de connaissance ni de duplication."
      },
      {
        "title": "Croissance en équilibre",
        "tex": "g_A^*=n",
        "intuition": "Pour cette version et une population croissant au taux n."
      }
    ],
    "graph": "ideas",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Le cas simplifié φ = 0 et λ = 1 est important à l'examen : les nouvelles idées dépendent directement du nombre de chercheurs, sans externalité de connaissance ni duplication."
  },
  {
    "id": "4.3",
    "title": "Globalisation financière et mobilité du capital",
    "explanation": "En économie ouverte, l'épargne nationale peut financer l'investissement à l'étranger et les fonds étrangers peuvent financer l'investissement national. Les flux dépendent notamment des rendements du capital.",
    "example": "L'épargne suisse peut financer une usine en Inde au lieu d'une nouvelle usine en Suisse.",
    "formulas": [],
    "graph": null,
    "steps": [],
    "warning": "",
    "type": "section",
    "short": "En économie ouverte, l'épargne nationale peut financer l'investissement à l'étranger et les fonds étrangers peuvent financer l'investissement national."
  },
  {
    "id": "4.3.1",
    "title": "Introduction au modèle de Solow en économie ouverte",
    "explanation": "La différence entre épargne et investissement correspond au compte courant. Un déficit courant peut signaler des entrées de capitaux. Dans le modèle présenté, ces flux accélèrent ou freinent la transition sans modifier le SCE de long terme.",
    "example": "Un pays reçoit des financements étrangers et installe plus de machines aujourd'hui, mais ne change pas automatiquement sa technologie fondamentale.",
    "formulas": [
      {
        "title": "Compte courant",
        "tex": "CC_t=S_t-I_t",
        "intuition": "Une épargne supérieure à l’investissement signifie un prêt net au reste du monde."
      },
      {
        "title": "Capital domestique",
        "tex": "K_{t+1}=(1-\\delta)K_t+sY_t-CC_t",
        "intuition": "Une sortie de capitaux réduit l’investissement local."
      }
    ],
    "graph": "capital",
    "steps": [
      "Le revenu domestique finance consommation, investissement local ou créances étrangères.",
      "Si S dépasse I, le compte courant est positif : sortie nette de capitaux.",
      "Si I dépasse S, le compte courant est négatif : entrée nette de capitaux.",
      "Ces flux modifient l’accumulation transitoire du capital domestique."
    ],
    "warning": "En économie ouverte, l’égalité nationale S = I n’est plus vraie : il faut compter le compte courant.",
    "type": "point",
    "short": "La différence entre épargne et investissement correspond au compte courant."
  },
  {
    "id": "4.3.2",
    "title": "Paradoxe de Lucas",
    "explanation": "Solow prédit des flux du capital des pays riches, où son rendement marginal est faible, vers les pays pauvres, où il devrait être élevé. En réalité, beaucoup de capitaux circulent entre pays riches : c'est le paradoxe de Lucas.",
    "example": "Investir dans un pays pauvre peut être risqué à cause des institutions, de l'information limitée ou de la fiscalité, même si la productivité marginale brute est élevée.",
    "formulas": [
      {
        "title": "Productivité marginale",
        "tex": "PMK_t=\\alpha\\frac{Y_t}{K_t}",
        "intuition": "Une machine supplémentaire est souvent plus rentable là où elles sont rares."
      },
      {
        "title": "Fisher",
        "tex": "r_t\\approx i_t-\\pi_t",
        "intuition": "Le rendement réel enlève l’inflation attendue ou observée selon le contexte."
      }
    ],
    "graph": "capital",
    "steps": [],
    "warning": "",
    "type": "point",
    "short": "Solow prédit des flux du capital des pays riches, où son rendement marginal est faible, vers les pays pauvres, où il devrait être élevé."
  }
]);
