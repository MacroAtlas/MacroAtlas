window.COURS_GLOSSARY = [
  {
    "symbol": "Y_t",
    "name": "Production agrégée / PIB",
    "chapter": 1,
    "explanation": "Quantité totale de biens et services produite pendant la période.",
    "formula": "Y_t=C_t+I_t+G_t\\quad(\\text{économie fermée})"
  },
  {
    "symbol": "y_t",
    "name": "PIB par tête",
    "chapter": 1,
    "explanation": "PIB rapporté au nombre d’habitants ; indicateur du niveau de vie moyen.",
    "formula": "y_t=Y_t/Pop_t"
  },
  {
    "symbol": "Pop_t",
    "name": "Population totale",
    "chapter": 1,
    "explanation": "Nombre d’habitants, distinct de la population active.",
    "formula": "Pop_{t+1}=Pop_t(1+b_t-m_t)"
  },
  {
    "symbol": "g_t",
    "name": "Taux de croissance",
    "chapter": 1,
    "explanation": "Variation relative du niveau entre deux dates.",
    "formula": "g_t=(y_t-y_{t-1})/y_{t-1}"
  },
  {
    "symbol": "G",
    "name": "Croissance en pourcentage",
    "chapter": 1,
    "explanation": "Version en pourcentage d’un taux exprimé en décimal ; attention à la conversion.",
    "formula": "G=100g"
  },
  {
    "symbol": "\\bar g",
    "name": "Croissance moyenne",
    "chapter": 1,
    "explanation": "Taux moyen associé à une évolution cumulée.",
    "formula": "\\bar g\\approx(\\ln y_t-\\ln y_0)/t"
  },
  {
    "symbol": "PPA",
    "name": "Parité de pouvoir d’achat",
    "chapter": 1,
    "explanation": "Conversion tenant compte des écarts de prix entre pays.",
    "formula": "\\text{PIB réel par tête en PPA}"
  },
  {
    "symbol": "\\Delta",
    "name": "Variation / différence",
    "chapter": 1,
    "explanation": "Changement entre deux périodes.",
    "formula": "\\Delta x_t=x_t-x_{t-1}"
  },
  {
    "symbol": "\\ln",
    "name": "Logarithme naturel",
    "chapter": 1,
    "explanation": "Transforme produits en sommes et croissances en pentes.",
    "formula": "\\ln(xy)=\\ln x+\\ln y"
  },
  {
    "symbol": "A_t",
    "name": "Productivité / technologie",
    "chapter": 3,
    "explanation": "Efficacité de la production ; chez Solow, elle est exogène.",
    "formula": "A_{t+1}=(1+g)A_t"
  },
  {
    "symbol": "K_t",
    "name": "Capital physique",
    "chapter": 3,
    "explanation": "Stock de machines, bâtiments et équipements productifs.",
    "formula": "K_{t+1}=(1-\\delta)K_t+I_t"
  },
  {
    "symbol": "L_t",
    "name": "Travail / main-d’œuvre",
    "chapter": 3,
    "explanation": "Effectif de travail ou population active selon le modèle.",
    "formula": "L_{t+1}=(1+n)L_t"
  },
  {
    "symbol": "H_t",
    "name": "Capital humain",
    "chapter": 3,
    "explanation": "Stock de compétences et connaissances des travailleurs.",
    "formula": "H_{t+1}=(1-\\delta_H+u)H_t"
  },
  {
    "symbol": "k_t",
    "name": "Capital par travailleur",
    "chapter": 3,
    "explanation": "Stock de capital physique divisé par le travail.",
    "formula": "k_t=K_t/L_t"
  },
  {
    "symbol": "c_t",
    "name": "Consommation par tête",
    "chapter": 3,
    "explanation": "Consommation totale par habitant ou travailleur selon la convention.",
    "formula": "c_t=C_t/L_t"
  },
  {
    "symbol": "\\widetilde k_t",
    "name": "Capital par travailleur efficace",
    "chapter": 3,
    "explanation": "Capital physique par unité de travail corrigée de la technologie.",
    "formula": "\\widetilde k_t=K_t/(A_tL_t)"
  },
  {
    "symbol": "\\widetilde y_t",
    "name": "Produit par travailleur efficace",
    "chapter": 3,
    "explanation": "Production rapportée au nombre de travailleurs efficaces.",
    "formula": "\\widetilde y_t=Y_t/(A_tL_t)=\\widetilde k_t^\\alpha"
  },
  {
    "symbol": "\\widetilde c_t",
    "name": "Consommation par travailleur efficace",
    "chapter": 3,
    "explanation": "Consommation normalisée par technologie et travail.",
    "formula": "\\widetilde c_t=C_t/(A_tL_t)"
  },
  {
    "symbol": "\\alpha",
    "name": "Élasticité du capital",
    "chapter": 3,
    "explanation": "Part exponentielle du capital dans la fonction Cobb–Douglas ; entre 0 et 1.",
    "formula": "Y=K^\\alpha(AL)^{1-\\alpha}"
  },
  {
    "symbol": "s",
    "name": "Taux d’épargne",
    "chapter": 3,
    "explanation": "Part du revenu qui finance l’investissement dans Solow.",
    "formula": "s=S/Y=1-c"
  },
  {
    "symbol": "c",
    "name": "Propension à consommer",
    "chapter": 7,
    "explanation": "Part marginale du revenu disponible consommée dans le modèle simplifié.",
    "formula": "c=\\partial C/\\partial(Y-T)"
  },
  {
    "symbol": "\\delta",
    "name": "Dépréciation du capital",
    "chapter": 3,
    "explanation": "Fraction du stock de capital perdue par période.",
    "formula": "\\text{Capital survivant}=(1-\\delta)K"
  },
  {
    "symbol": "n",
    "name": "Croissance de la population",
    "chapter": 3,
    "explanation": "Taux de croissance de la main-d’œuvre dans Solow.",
    "formula": "n=L_{t+1}/L_t-1"
  },
  {
    "symbol": "g",
    "name": "Croissance technique exogène",
    "chapter": 3,
    "explanation": "Taux annuel de croissance de A dans Solow.",
    "formula": "g=A_{t+1}/A_t-1"
  },
  {
    "symbol": "r_t",
    "name": "Taux d’intérêt réel",
    "chapter": 7,
    "explanation": "Rendement nominal corrigé de l’inflation.",
    "formula": "r_t\\approx i_t-\\pi_t"
  },
  {
    "symbol": "w_t",
    "name": "Salaire réel",
    "chapter": 3,
    "explanation": "Rémunération du travail en pouvoir d’achat réel.",
    "formula": "w_t=W_t/P_t"
  },
  {
    "symbol": "S_t",
    "name": "Épargne agrégée",
    "chapter": 3,
    "explanation": "Revenu non consommé, qui finance l’investissement et les actifs extérieurs.",
    "formula": "S_t=Y_t-C_t\\quad(\\text{Solow simple})"
  },
  {
    "symbol": "I_t",
    "name": "Investissement",
    "chapter": 3,
    "explanation": "Flux de nouvelles machines, logements et équipements.",
    "formula": "I_t=K_{t+1}-(1-\\delta)K_t"
  },
  {
    "symbol": "C_t",
    "name": "Consommation",
    "chapter": 7,
    "explanation": "Dépenses des ménages en biens et services.",
    "formula": "C=c(Y-T)\\quad(\\text{version simple})"
  },
  {
    "symbol": "SCE",
    "name": "Sentier de croissance équilibrée",
    "chapter": 3,
    "explanation": "Trajectoire où des taux de croissance des grandeurs pertinentes sont constants.",
    "formula": "g_y=g_k=g_c=g"
  },
  {
    "symbol": "k^*",
    "name": "Capital d’état stationnaire",
    "chapter": 3,
    "explanation": "Dotation de capital qui ne varie plus dans la dimension intensive.",
    "formula": "\\widetilde k^*\\approx[s/(n+g+\\delta)]^{1/(1-\\alpha)}"
  },
  {
    "symbol": "s_{OR}",
    "name": "Épargne de règle d’or",
    "chapter": 3,
    "explanation": "Taux d’épargne maximisant la consommation stationnaire.",
    "formula": "s_{OR}=\\alpha"
  },
  {
    "symbol": "u",
    "name": "Effort de formation",
    "chapter": 3,
    "explanation": "Part du temps consacré à l’éducation chez Lucas (symbole u dans le cours).",
    "formula": "u\\in[0,1]"
  },
  {
    "symbol": "\\delta_H",
    "name": "Dépréciation humaine",
    "chapter": 3,
    "explanation": "Perte de compétences par vieillissement ou obsolescence.",
    "formula": "g_H=u-\\delta_H"
  },
  {
    "symbol": "E_t^{edu}",
    "name": "Investissement éducatif",
    "chapter": 3,
    "explanation": "Formation additionnelle générée par le capital humain.",
    "formula": "E_t^{edu}=uH_t"
  },
  {
    "symbol": "\\phi_H",
    "name": "Rendements de la formation",
    "chapter": 3,
    "explanation": "Paramètre d’un secteur éducatif à rendements potentiellement décroissants.",
    "formula": "\\phi_H<1\\Rightarrow\\text{rendements décroissants}"
  },
  {
    "symbol": "s_R",
    "name": "Part des chercheurs",
    "chapter": 4,
    "explanation": "Fraction des travailleurs affectés à la recherche.",
    "formula": "L_{A,t}=s_RL_t"
  },
  {
    "symbol": "L_{A,t}",
    "name": "Chercheurs",
    "chapter": 4,
    "explanation": "Effectif de personnes travaillant à créer des idées.",
    "formula": "L_{A,t}=s_RL_t"
  },
  {
    "symbol": "L_{Y,t}",
    "name": "Travailleurs de production",
    "chapter": 4,
    "explanation": "Effectif consacré aux biens finaux et non à la R&D.",
    "formula": "L_{Y,t}=(1-s_R)L_t"
  },
  {
    "symbol": "\\tau",
    "name": "Productivité apparente des chercheurs",
    "chapter": 4,
    "explanation": "Nombre apparent de nouvelles idées par chercheur.",
    "formula": "\\tau=\\rho A^\\phi L_A^{\\lambda-1}"
  },
  {
    "symbol": "\\rho_R",
    "name": "Efficacité de recherche",
    "chapter": 4,
    "explanation": "Paramètre ρ dans la production d’idées de Romer.",
    "formula": "\\Delta A=\\rho A^\\phi L_A^\\lambda"
  },
  {
    "symbol": "\\phi_R",
    "name": "Externalité des connaissances",
    "chapter": 4,
    "explanation": "Paramètre φ de diffusion des idées existantes, positif dans Romer.",
    "formula": "\\partial\\Delta A/\\partial A>0\\ (\\phi>0)"
  },
  {
    "symbol": "\\lambda",
    "name": "Duplication des recherches",
    "chapter": 4,
    "explanation": "Paramètre entre 0 et 1 ; faible λ indique de forts rendements décroissants du nombre de chercheurs.",
    "formula": "\\Delta A\\propto L_A^\\lambda"
  },
  {
    "symbol": "\\bar C",
    "name": "Coût fixe d’innovation",
    "chapter": 4,
    "explanation": "Dépense initiale de création d’une idée ou d’un produit.",
    "formula": "CM=\\bar C/Y+c"
  },
  {
    "symbol": "c_m",
    "name": "Coût marginal",
    "chapter": 4,
    "explanation": "Coût de produire une unité supplémentaire du bien-idée.",
    "formula": "CT=\\bar C+c_mY"
  },
  {
    "symbol": "CC_t",
    "name": "Compte courant",
    "chapter": 4,
    "explanation": "Épargne nationale nette de l’investissement domestique.",
    "formula": "CC_t=S_t-I_t"
  },
  {
    "symbol": "F_t",
    "name": "Actifs extérieurs nets",
    "chapter": 4,
    "explanation": "Stock de créances nettes sur le reste du monde.",
    "formula": "\\Delta F=CC\\quad(\\text{simplifié})"
  },
  {
    "symbol": "r_t^w",
    "name": "Taux mondial",
    "chapter": 4,
    "explanation": "Rendement des créances/dettes internationales.",
    "formula": "\\text{Revenu extérieur}=r_t^wF_t"
  },
  {
    "symbol": "NX_t",
    "name": "Exportations nettes",
    "chapter": 4,
    "explanation": "Valeur des exportations diminuée des importations.",
    "formula": "NX=X-M_{imp}"
  },
  {
    "symbol": "PMK",
    "name": "Productivité marginale du capital",
    "chapter": 4,
    "explanation": "Gain de production d’une unité de capital supplémentaire.",
    "formula": "PMK=\\alpha Y/K"
  },
  {
    "symbol": "T_t^{env}",
    "name": "Anomalie de température",
    "chapter": 5,
    "explanation": "Écart thermique dans le modèle climatique ; convention propre au support.",
    "formula": "T_t\\mapsto D(T_t)"
  },
  {
    "symbol": "D_t",
    "name": "Fonction de dommage climatique",
    "chapter": 5,
    "explanation": "Facteur qui réduit la production en raison du climat.",
    "formula": "Y_t=D_tK_t^\\alpha(A_tL_t)^{1-\\alpha}"
  },
  {
    "symbol": "R_t",
    "name": "Stock de ressource naturelle",
    "chapter": 5,
    "explanation": "Quantité de ressource restant à une date.",
    "formula": "R_{t+1}=R_t-q_t"
  },
  {
    "symbol": "q_t",
    "name": "Extraction",
    "chapter": 5,
    "explanation": "Volume extrait du stock de ressources dans une période.",
    "formula": "q_1+q_2=R_0\\quad(\\text{deux périodes})"
  },
  {
    "symbol": "p_t^{R}",
    "name": "Prix de la ressource",
    "chapter": 5,
    "explanation": "Valeur marchande unitaire ; à Hotelling elle croît au taux d’actualisation.",
    "formula": "p_2/p_1=1+\\rho"
  },
  {
    "symbol": "p",
    "name": "Taux de prélèvement",
    "chapter": 5,
    "explanation": "Fraction de ressource extraite par période.",
    "formula": "R_{t+1}=(1-p)R_t\\quad(\\text{non renouvelable})"
  },
  {
    "symbol": "r^{ren}",
    "name": "Taux de renouvellement",
    "chapter": 5,
    "explanation": "Vitesse de régénération biologique d’une ressource.",
    "formula": "R_{t+1}=(1-p+r^{ren})R_t"
  },
  {
    "symbol": "\\varphi",
    "name": "Part de la ressource",
    "chapter": 5,
    "explanation": "Exposant de la ressource dans la Cobb–Douglas environnementale.",
    "formula": "\\alpha+\\beta+\\varphi=1"
  },
  {
    "symbol": "\\beta",
    "name": "Part du travail efficace",
    "chapter": 5,
    "explanation": "Exposant du travail efficace dans la fonction de production environnementale.",
    "formula": "Y=K^\\alpha(AL)^\\beta R^\\varphi"
  },
  {
    "symbol": "\\rho",
    "name": "Taux d’actualisation social",
    "chapter": 5,
    "explanation": "Poids de préférence pour le présent ; ne pas confondre avec la productivité de R&D.",
    "formula": "\\text{Poids futur}=(1+\\rho)^{-t}"
  },
  {
    "symbol": "\\sigma_{CES}",
    "name": "Élasticité de substitution",
    "chapter": 5,
    "explanation": "Mesure de substituabilité entre consommation et environnement.",
    "formula": "\\sigma<1\\Rightarrow\\text{complémentarité}"
  },
  {
    "symbol": "U_t",
    "name": "Bien-être instantané",
    "chapter": 5,
    "explanation": "Satisfaction collective provenant de C et de E environnemental.",
    "formula": "U_t=U(C_t,E_t)"
  },
  {
    "symbol": "W",
    "name": "Bien-être intertemporel",
    "chapter": 5,
    "explanation": "Somme des bien-être futurs actualisés.",
    "formula": "W=\\sum_t U_t/(1+\\rho)^t"
  },
  {
    "symbol": "E_t",
    "name": "Qualité environnementale",
    "chapter": 5,
    "explanation": "État de l’environnement affectant directement les préférences.",
    "formula": "U=U(C,E)"
  },
  {
    "symbol": "\\sigma_t",
    "name": "Intensité carbone",
    "chapter": 5,
    "explanation": "Émissions émises par unité de PIB.",
    "formula": "E_t^{CO_2}=\\sigma_tY_t"
  },
  {
    "symbol": "E_t^{CO_2}",
    "name": "Émissions totales",
    "chapter": 5,
    "explanation": "Flux de carbone rejeté pendant une période.",
    "formula": "E_t^{CO_2}=\\sigma_tY_t"
  },
  {
    "symbol": "\\gamma",
    "name": "Sensibilité climatique de la technologie",
    "chapter": 5,
    "explanation": "Diminution de croissance technologique attribuée à la température.",
    "formula": "g_{A,t}=g_A-\\gamma T_t"
  },
  {
    "symbol": "\\delta_1",
    "name": "Sensibilité climatique de l’usure",
    "chapter": 5,
    "explanation": "Accroissement de la dépréciation avec la température.",
    "formula": "\\delta_t=\\delta_0+\\delta_1T_t"
  },
  {
    "symbol": "Y_t^{struct}",
    "name": "PIB structurel",
    "chapter": 6,
    "explanation": "Capacité de production déterminée par les fondamentaux de l’offre.",
    "formula": "Y_t^{struct}=A_tF(K_t,L_t)"
  },
  {
    "symbol": "Y_t^{conj}",
    "name": "Fluctuation conjoncturelle",
    "chapter": 6,
    "explanation": "Écart de l’activité observée à la tendance structurelle.",
    "formula": "Y_t^{conj}=Y_t-Y_t^{struct}"
  },
  {
    "symbol": "Gap_t",
    "name": "Écart de production",
    "chapter": 6,
    "explanation": "Écart relatif entre PIB observé et structurel.",
    "formula": "Gap=100(Y-Y^*)/Y^*"
  },
  {
    "symbol": "u_t",
    "name": "Taux de chômage",
    "chapter": 8,
    "explanation": "Part des actifs qui cherchent un emploi sans en avoir.",
    "formula": "u_t=(L_t-N_t)/L_t"
  },
  {
    "symbol": "N_t",
    "name": "Emploi",
    "chapter": 8,
    "explanation": "Nombre de travailleurs occupés dans la population active.",
    "formula": "N_t=(1-u_t)L_t"
  },
  {
    "symbol": "u_n",
    "name": "Chômage structurel",
    "chapter": 8,
    "explanation": "Niveau de chômage compatible avec WS et PS de long terme.",
    "formula": "WS(u_n,z)=PS(\\mu,A)"
  },
  {
    "symbol": "W_t^{nom}",
    "name": "Salaire nominal",
    "chapter": 8,
    "explanation": "Rémunération affichée en monnaie courante.",
    "formula": "w_t=W_t^{nom}/P_t"
  },
  {
    "symbol": "P_t",
    "name": "Niveau des prix",
    "chapter": 7,
    "explanation": "Indice agrégé des prix à la consommation ou à la production selon le modèle.",
    "formula": "\\pi_t=P_t/P_{t-1}-1"
  },
  {
    "symbol": "\\pi_t",
    "name": "Inflation réalisée",
    "chapter": 7,
    "explanation": "Taux de croissance du niveau général des prix.",
    "formula": "\\pi_t=(P_t-P_{t-1})/P_{t-1}"
  },
  {
    "symbol": "\\pi_t^a",
    "name": "Inflation anticipée",
    "chapter": 8,
    "explanation": "Prévision utilisée dans les contrats et négociations.",
    "formula": "\\pi_t=\\pi_t^a+\\eta(Y-Y^*)"
  },
  {
    "symbol": "M_t",
    "name": "Masse monétaire",
    "chapter": 7,
    "explanation": "Quantité nominale de monnaie disponible.",
    "formula": "M/P=L(Y,i)"
  },
  {
    "symbol": "V_t",
    "name": "Vitesse de circulation",
    "chapter": 7,
    "explanation": "Nombre de fois qu’une unité monétaire sert aux transactions.",
    "formula": "MV=P\\,TR"
  },
  {
    "symbol": "TR_t",
    "name": "Volume de transactions",
    "chapter": 7,
    "explanation": "Nombre ou valeur réelle des transactions approximé par Y dans le cours.",
    "formula": "MV=P\\,TR"
  },
  {
    "symbol": "L(Y,i)",
    "name": "Demande de monnaie réelle",
    "chapter": 7,
    "explanation": "Liquidités souhaitées selon activité et taux nominal.",
    "formula": "\\partial L/\\partial Y>0,\\quad\\partial L/\\partial i<0"
  },
  {
    "symbol": "i_t",
    "name": "Taux d’intérêt nominal court",
    "chapter": 7,
    "explanation": "Taux de référence du marché interbancaire influencé par la banque centrale.",
    "formula": "i=r+\\pi^a"
  },
  {
    "symbol": "i_t^{LT}",
    "name": "Taux nominal long",
    "chapter": 7,
    "explanation": "Taux d’emprunt à maturité longue pertinent pour C et I.",
    "formula": "i^{LT}=i_t+\\Delta(m)"
  },
  {
    "symbol": "\\Delta(m)",
    "name": "Prime de maturité",
    "chapter": 7,
    "explanation": "Surcroît de rendement associé au temps et au risque.",
    "formula": "\\Delta(m)=i^{LT}-i_t"
  },
  {
    "symbol": "T_t^{fisc}",
    "name": "Impôts",
    "chapter": 7,
    "explanation": "Prélèvements publics réduisant le revenu disponible.",
    "formula": "Y-T=C+S_{privee}"
  },
  {
    "symbol": "G_t",
    "name": "Dépenses publiques",
    "chapter": 7,
    "explanation": "Achats de biens et services par le gouvernement.",
    "formula": "Y^d=C+I+G"
  },
  {
    "symbol": "B_t",
    "name": "Dette publique",
    "chapter": 7,
    "explanation": "Stock de financement public emprunté.",
    "formula": "\\text{Déficit}=\\Delta B/P+\\Delta M/P"
  },
  {
    "symbol": "m",
    "name": "Maturité",
    "chapter": 7,
    "explanation": "Durée restant jusqu’au remboursement d’un actif de dette.",
    "formula": "i_{t+m}=i_t+\\Delta(m)"
  },
  {
    "symbol": "\\mu",
    "name": "Marge des entreprises",
    "chapter": 8,
    "explanation": "Markup appliqué aux coûts de production lors de la fixation des prix.",
    "formula": "P=(1+\\mu)W/A"
  },
  {
    "symbol": "z",
    "name": "Institutions salariales",
    "chapter": 8,
    "explanation": "Paramètres influençant le salaire négocié : assurance chômage, négociation, normes.",
    "formula": "WS=F(u,z)"
  },
  {
    "symbol": "WS",
    "name": "Wage-setting",
    "chapter": 8,
    "explanation": "Relation de fixation du salaire réel exigé.",
    "formula": "W/P^e=F(u,z)"
  },
  {
    "symbol": "PS",
    "name": "Price-setting",
    "chapter": 8,
    "explanation": "Relation de salaire réel compatible avec les prix des entreprises.",
    "formula": "W/P=A/(1+\\mu)"
  },
  {
    "symbol": "\\kappa",
    "name": "Pente de Phillips",
    "chapter": 8,
    "explanation": "Sensibilité de l’inflation à l’écart de chômage.",
    "formula": "\\pi=\\pi^a-\\kappa(u-u_n)"
  },
  {
    "symbol": "\\eta",
    "name": "Pente OACT",
    "chapter": 8,
    "explanation": "Sensibilité de l’inflation à l’écart de production.",
    "formula": "\\pi=\\pi^a+\\eta(Y-Y^*)"
  },
  {
    "symbol": "Y^*",
    "name": "Production potentielle",
    "chapter": 9,
    "explanation": "PIB structurel autour duquel l’activité fluctue.",
    "formula": "Y^*=Y^{struct}"
  },
  {
    "symbol": "Y_t^d",
    "name": "Demande agrégée",
    "chapter": 7,
    "explanation": "Quantité demandée pour un niveau d’inflation donné.",
    "formula": "Y^d=D(\\pi,\\text{politiques})"
  },
  {
    "symbol": "Y_t^s",
    "name": "Offre agrégée",
    "chapter": 9,
    "explanation": "Quantité proposée par les entreprises compatible avec les salaires/prix.",
    "formula": "\\pi=\\pi^a+\\eta(Y^s-Y^*)"
  },
  {
    "symbol": "DA",
    "name": "Courbe de demande agrégée",
    "chapter": 7,
    "explanation": "Lien négatif entre inflation possible et demande de biens dans le cadre du cours.",
    "formula": "\\pi=a-bY^d"
  },
  {
    "symbol": "OACT",
    "name": "Offre de court terme",
    "chapter": 8,
    "explanation": "Relation de production-inflation conditionnelle aux anticipations.",
    "formula": "\\pi=\\pi^a+\\eta(Y-Y^*)"
  },
  {
    "symbol": "OALT",
    "name": "Offre de long terme",
    "chapter": 8,
    "explanation": "Verticale au PIB structurel.",
    "formula": "Y=Y^*"
  },
  {
    "symbol": "\\phi_\\pi",
    "name": "Réaction monétaire à l’inflation",
    "chapter": 7,
    "explanation": "Paramètre de la règle de taux.",
    "formula": "i=i_0+\\phi_\\pi(\\pi-\\pi^*)+\\cdots"
  },
  {
    "symbol": "\\pi^*",
    "name": "Cible d’inflation",
    "chapter": 7,
    "explanation": "Inflation souhaitée par la banque centrale.",
    "formula": "\\pi-\\pi^*"
  },
  {
    "symbol": "RS",
    "name": "Ratio de sacrifice",
    "chapter": 9,
    "explanation": "Coût cumulé de production nécessaire à une désinflation.",
    "formula": "RS=\\text{perte de PIB}/\\text{désinflation}"
  }
];
