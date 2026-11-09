/* Macro Atlas : application statique et hors ligne. */
(()=>{'use strict';
const DATA=window.COURS_DATA||[];
const GLOSSARY=window.COURS_GLOSSARY||[];
const BY_ID=Object.fromEntries(DATA.map(p=>[p.id,p]));
const CHAPTERS=DATA.filter(p=>p.type==='chapter');
const POINTS=DATA.filter(p=>p.type==='point');
const ALL_SECTIONS=DATA.filter(p=>p.type==='section');
const MAIN=document.querySelector('#main'),NAV=document.querySelector('#chapter-nav');
const NAMES={home:'Vue d’ensemble',graphs:'Laboratoire de graphiques',glossary:'Lexique des variables',review:'Révisions & progression'};
const THEMES_KEY='macro-atlas-theme-v1',PROGRESS_KEY='macro-atlas-mastered-v1';
const SIDEBAR_KEY='macro-atlas-sidebar-collapsed-v4';
let completed=new Set(readStore(PROGRESS_KEY,[]));let searchTerm='',glossaryFilter='',glossaryChapter='all',reviewIndex=0,reviewShow=false;
let current='home';
// The user, not the active route, decides which groups stay expanded.
const expandedChapters=new Set(),expandedSections=new Set();
let navigationInitialized=false;
function activeNavIds(){
 const m=current.match(/^(?:chapter|point):(\d+)(?:\.(\d+))?/);
 return m?{chapter:m[1],section:m[2]?m[1]+'.'+m[2]:null}:null;
}
function initialiseNavigation(){
 if(navigationInitialized)return;
 navigationInitialized=true;
 const focus=activeNavIds();
 if(focus){expandedChapters.add(focus.chapter);if(focus.section)expandedSections.add(focus.section)}
}

function readStore(key,fallback){try{let raw=localStorage.getItem(key);return raw?JSON.parse(raw):fallback}catch(e){return fallback}}
function store(key,val){try{localStorage.setItem(key,JSON.stringify(val))}catch(e){}}
function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function normal(s){return String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()}
function count(ch){return POINTS.filter(p=>p.id.startsWith(ch+'.')).length}
function done(ch){return POINTS.filter(p=>p.id.startsWith(ch+'.')&&completed.has(p.id)).length}
function nfmt(n){return n.toLocaleString('fr-CH')}
function percent(){return Math.round(completed.size/POINTS.length*100)}
function pointName(x){return esc(x.title.length>97?x.title.slice(0,94)+'…':x.title)}
function primaryGraph(ch){return ({1:'growth',2:'malthus',3:'solow',4:'ideas',5:'climate',6:'cycle',7:'islm',8:'wsps',9:'oada'})[ch]}
function closeSidebar(){document.querySelector('#sidebar').classList.remove('open');document.querySelector('#sidebar-overlay').classList.remove('visible')}
function compactRail(){
 const rail=document.querySelector('#chapter-rail');
 rail.innerHTML=`<button type="button" class="rail-home" data-go="home" aria-label="Vue d’ensemble" title="Vue d’ensemble"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 12 8-7 8 7v8H4z"/><path d="M10 20v-6h4v6"/></svg></button><span class="rail-rule" aria-hidden="true"></span><div class="rail-chapters">${CHAPTERS.map((ch,i)=>`<button type="button" class="rail-bubble" style="--rail-i:${i}" data-to="#chapitre-${ch.id}" aria-label="Chapitre ${ch.id} : ${esc(ch.title)}" title="Chapitre ${ch.id} · ${esc(ch.title)}"><span>${ch.id.padStart(2,'0')}</span></button>`).join('')}</div>`;
}
function updateRail(){
 document.querySelectorAll('.rail-bubble').forEach(b=>{
  const ch=b.dataset.to.slice('#chapitre-'.length);
  const active=current==='chapter:'+ch||current.startsWith('point:'+ch+'.');
  b.classList.toggle('active',active);
  if(active)b.setAttribute('aria-current','location');else b.removeAttribute('aria-current');
 });
 const home=document.querySelector('.rail-home');
 if(home){home.classList.toggle('active',current==='home');if(current==='home')home.setAttribute('aria-current','page');else home.removeAttribute('aria-current')}
}
function setSidebarCollapsed(collapsed,save=true){
 document.body.classList.toggle('sidebar-collapsed',!!collapsed);
 const button=document.querySelector('#toggle-sidebar');
 button.setAttribute('aria-expanded',String(!collapsed));
 button.setAttribute('aria-label',collapsed?'Déployer la navigation':'Réduire la navigation');
 button.setAttribute('title',collapsed?'Déployer la navigation':'Réduire la navigation');
 if(save)store(SIDEBAR_KEY,!!collapsed);
}

function link(to,label,cls='btn btn-outline'){return `<a class="${cls}" href="${to}" data-to="${to}">${label}</a>`}
function sectionOf(p){let parts=p.id.split('.');return BY_ID[parts[0]+'.'+parts[1]]||BY_ID[parts[0]]}
function getRoute(){let r=decodeURIComponent(location.hash.slice(1));if(r==='variables')return 'glossary';if(r==='graphiques')return 'graphs';if(r==='revision')return 'review';if(r.startsWith('chapitre-')){let n=r.slice(9);return BY_ID[n]?.type==='chapter'?'chapter:'+n:'home'}if(r.startsWith('point-')){let id=r.slice(6);return BY_ID[id]?'point:'+id:'home'}return 'home'}
function navRender(){
 initialiseNavigation();
 const terms=normal(searchTerm).trim();
 const oldScroll=NAV.scrollTop;
 const parts=[];
 CHAPTERS.forEach(ch=>{
  const n=ch.id,items=DATA.filter(p=>p.id.startsWith(n+'.'));
  const matches=terms?items.filter(p=>normal(p.id+' '+p.title+' '+p.explanation+' '+p.example).includes(terms)):items;
  const matchingChapter=!terms||normal(ch.title+' '+ch.id).includes(terms);
  if(terms&&!matches.length&&!matchingChapter)return;
  const open=terms.length>0||expandedChapters.has(n);
  const active=current==='chapter:'+n||current.startsWith('point:'+n+'.');
  parts.push(`<div class="chapter-group ${open?'open':''} ${active?'active':''}" data-chap-group="${n}">
   <div class="chapter-trigger">
    <span class="chapter-num">${n.padStart(2,'0')}</span>
    <button type="button" class="chapter-title" data-to="#chapitre-${n}" title="Voir le plan du chapitre ${n}">${esc(ch.title)}</button>
    <button type="button" class="chapter-chevron" data-toggle-chapter="${n}" aria-label="${open?'Replier':'Déplier'} le chapitre ${n}" aria-expanded="${open}" aria-controls="chapter-items-${n}"><span class="toggle-mark" aria-hidden="true"></span></button>
   </div><div class="chapter-children" id="chapter-items-${n}" ${open?'':'inert'}><div class="chapter-children-inner">`);
  const listed=new Set();
  ALL_SECTIONS.filter(s=>s.id.startsWith(n+'.')).forEach(section=>{
   const childAll=items.filter(p=>p.type==='point'&&p.id.startsWith(section.id+'.'));
   const shown=childAll.filter(p=>matchingChapter||!terms||matches.includes(p));
   if(terms&&!matchingChapter&&!shown.length&&!matches.includes(section))return;
   const sectionOpen=!!terms||expandedSections.has(section.id);
   parts.push(`<div class="nav-section ${sectionOpen?'open':''} ${current==='point:'+section.id||current.startsWith('point:'+section.id+'.')?'active-section':''}">
    <div class="nav-section-head"><button type="button" class="section-label" data-to="#point-${section.id}" title="Ouvrir la section ${section.id}"><span class="section-id">${esc(section.id)}</span> ${pointName(section)}</button>
    ${childAll.length?`<button type="button" class="section-chevron" data-toggle-section="${section.id}" aria-label="${sectionOpen?'Replier':'Déplier'} les points de la section ${section.id}" aria-expanded="${sectionOpen}" aria-controls="section-items-${section.id}"><span class="toggle-mark" aria-hidden="true"></span></button>`:''}</div>`);
   if(childAll.length){
    parts.push(`<div class="section-children" id="section-items-${section.id}" ${sectionOpen?'':'inert'}><div class="section-children-inner">`);
    shown.forEach(p=>{listed.add(p.id);parts.push(`<button type="button" class="point-link ${current==='point:'+p.id?'active':''}" data-to="#point-${p.id}" ${current==='point:'+p.id?'aria-current="page"':''}><span class="point-id">${esc(p.id)}</span><span class="point-link-title">${pointName(p)}</span>${completed.has(p.id)?'<span class="mini-check" aria-label="Maîtrisé">✓</span>':''}</button>`)});
    parts.push('</div></div>');
   }
   parts.push('</div>');
  });
  // Rare points without a numbered parent section.
  items.filter(p=>p.type==='point'&&!listed.has(p.id)&&!ALL_SECTIONS.some(s=>p.id.startsWith(s.id+'.'))&&(matchingChapter||!terms||matches.includes(p)))
   .forEach(p=>parts.push(`<button type="button" class="point-link ${current==='point:'+p.id?'active':''}" data-to="#point-${p.id}"><span class="point-id">${esc(p.id)}</span><span class="point-link-title">${pointName(p)}</span></button>`));
  parts.push('</div></div></div>');
 });
 NAV.innerHTML=parts.join('')||'<div class="nav-empty">Aucun résultat pour cette recherche.</div>';
 NAV.scrollTop=oldScroll;
 document.querySelector('#side-progress-bar').style.width=percent()+'%';
 document.querySelector('#side-progress-val').textContent=percent()+' %';
 updateRail();
 document.querySelectorAll('[data-go]').forEach(el=>el.classList.toggle('active',current===el.dataset.go));
 const foldButton=document.querySelector('#fold-all');
 if(foldButton){const any=expandedChapters.size>0;foldButton.textContent=any?'Tout replier':'Tout déplier';foldButton.setAttribute('aria-label',any?'Replier tous les chapitres et sections':'Déplier tous les chapitres et sections')}
}
function revealSelectedInSidebar(){
 const active=NAV.querySelector('.point-link.active')||NAV.querySelector('.nav-section.active-section > .nav-section-head .section-label')||NAV.querySelector('.chapter-group.active .chapter-trigger');
 if(!active)return;
 const viewport=NAV.getBoundingClientRect(),rect=active.getBoundingClientRect();
 if(rect.bottom>viewport.bottom-10)NAV.scrollTop+=rect.bottom-viewport.bottom+15;
 else if(rect.top<viewport.top+10)NAV.scrollTop-=viewport.top-rect.top+15;
}
function crumbs(type,p){let v=type==='home'?'Cours <span>/</span> Vue d’ensemble':type==='chapter'?`Cours <span>/</span> Chapitre ${p.id}`:type==='point'?`Chapitre ${p.id.split('.')[0]} <span>/</span> ${esc(p.id)} · ${pointName(p)}`:`Cours <span>/</span> ${esc(NAMES[type])}`;document.querySelector('#breadcrumb').innerHTML=v;document.title=(type==='point'?p.id+' · '+p.title:type==='chapter'?p.title:NAMES[type])+' | Macro Atlas'}
function hero(eyebrow,title,description,actions='',stats=''){return `<section class="hero"><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p>${description}</p>${actions?'<div class="hero-actions">'+actions+'</div>':''}${stats?'<div class="hero-stats">'+stats+'</div>':''}</section>`}
function home(){
return `<div class="home-page">
<section class="home-splash" aria-labelledby="home-title">
 <div class="home-aurora home-aurora-a" aria-hidden="true"></div><div class="home-aurora home-aurora-b" aria-hidden="true"></div>
 <div class="home-splash-content">
  <span class="home-kicker"><span class="home-kicker-dot"></span> ANALYSE ÉCONOMIQUE · MACROÉCONOMIE</span>
  <h1 id="home-title">La macroéconomie,<br><em>plus claire.</em></h1>
  <p>Comprends les grands mécanismes économiques, du long terme aux fluctuations. Un parcours simple, à ton rythme.</p>
  <div class="home-main-actions">${link('#chapitre-1','Commencer le cours <span aria-hidden="true">→</span>','btn home-start')}${link('#home-chapters','Voir les chapitres <span aria-hidden="true">↘</span>','btn home-see-chapters')}</div>
 </div>
 <div class="home-art" aria-hidden="true">
  <div class="home-art-orbit home-art-orbit-one"></div><div class="home-art-orbit home-art-orbit-two"></div>
  <div class="home-art-center"><svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="home-art-grid" d="M20 76H380M20 126H380M20 176H380M20 226H380M78 45V282M158 45V282M238 45V282M318 45V282"/><path class="home-art-wave-back" d="M23 239C70 236 83 188 128 198S187 260 229 216S301 116 376 123"/><path class="home-art-wave" d="M22 225C69 220 79 165 128 173S188 220 227 170S304 77 377 86"/><circle class="home-art-node home-art-node-a" cx="128" cy="173" r="7"/><circle class="home-art-node home-art-node-b" cx="227" cy="170" r="7"/><circle class="home-art-node home-art-node-c" cx="318" cy="92" r="7"/></svg></div>
  <span class="home-art-spark home-art-spark-one"></span><span class="home-art-spark home-art-spark-two"></span><span class="home-art-spark home-art-spark-three"></span>
 </div>
</section>
<section class="home-directory" id="home-chapters" aria-labelledby="home-chapters-title">
 <div class="home-directory-heading"><div><span class="home-small-label">TON PARCOURS</span><h2 id="home-chapters-title">Explorer les 9 chapitres</h2></div><span class="home-directory-hint">Choisis un chapitre pour commencer.</span></div>
 <div class="home-directory-grid">${CHAPTERS.map((ch,i)=>`<a href="#chapitre-${ch.id}" data-to="#chapitre-${ch.id}" class="home-chapter-card" style="--card-i:${i}"><span class="home-chapter-id">${ch.id.padStart(2,'0')}</span><strong>${esc(ch.title)}</strong><span class="home-chapter-next" aria-hidden="true">↗</span></a>`).join('')}</div>
</section>
<div class="home-tools" aria-label="Outils de révision"><a href="#graphiques" data-to="#graphiques"><span class="home-tool-icon">⌁</span><span>Graphiques interactifs</span><span aria-hidden="true">↗</span></a><a href="#variables" data-to="#variables"><span class="home-tool-icon">ƒ</span><span>Lexique des variables</span><span aria-hidden="true">↗</span></a><a href="#revision" data-to="#revision"><span class="home-tool-icon">✓</span><span>Réviser le cours</span><span aria-hidden="true">↗</span></a></div>
</div>`;
}
function chapterView(n){let ch=BY_ID[n],sections=DATA.filter(p=>p.type==='section'&&p.id.startsWith(n+'.')),pts=POINTS.filter(p=>p.id.startsWith(n+'.')),first=pts[0]||sections[0],formulaCount=DATA.filter(p=>p.id.startsWith(n+'.')).reduce((s,p)=>s+p.formulas.length,0);
let cards=sections.map(s=>{let child=pts.filter(p=>p.id.startsWith(s.id+'.'));return `<article class="panel" style="margin-top:0"><div class="point-meta"><span class="chip blue">Section ${s.id}</span><span class="chip">${child.length||1} point${child.length>1?'s':''}</span></div><h3>${esc(s.title)}</h3><p class="subtle">${esc(s.explanation)}</p><div style="margin-top:15px">${link('#point-'+s.id,'Explorer cette section →','btn btn-outline')}</div></article>`}).join('');
return hero(`CHAPITRE ${n} / 9`,esc(ch.title),esc(ch.explanation),link('#point-'+first.id,'Commencer le chapitre →','btn btn-primary')+link('#graphiques','Ouvrir les simulations','btn btn-ghost'),`<div class="hero-stat"><b>${pts.length}</b><span>Points</span></div><div class="hero-stat"><b>${sections.length}</b><span>Sections</span></div><div class="hero-stat"><b>${formulaCount}</b><span>Équations clés</span></div><div class="hero-stat"><b>${done(n)}</b><span>Maîtrisés</span></div>`)+
`<div class="section-head"><div><div class="eyebrow">OBJECTIF</div><h2>Ce que tu dois comprendre</h2></div></div><section class="panel" style="margin-top:0"><p>${esc(ch.explanation)}</p><div class="info-strip" style="margin-top:17px"><strong>Exemple intuitif :</strong> ${esc(ch.example)}</div></section>`+
`<div class="section-head"><div><div class="eyebrow">PLAN DÉTAILLÉ</div><h2>Les sections du chapitre</h2></div></div><div class="two-col equal">${cards}</div>`+
`<div class="section-head"><div><div class="eyebrow">SOUS-POINTS</div><h2>Parcourir chaque notion</h2><p>Choisis un sous-point pour accéder directement à son explication.</p></div></div><div class="chapter-index">${pts.map(p=>`<button class="index-item" data-to="#point-${p.id}"><span class="index-num">${esc(p.id)}</span><span><strong>${pointName(p)}</strong><small>${[p.formulas.length?'Formules':null,p.graph?'Simulation':null,completed.has(p.id)?'✓ Maîtrisé':null].filter(Boolean).join(' · ')}</small></span></button>`).join('')}</div>`+
`<div class="section-head"><div><div class="eyebrow">SIMULATION DU CHAPITRE</div><h2>Explorer le mécanisme principal</h2></div></div>${window.GraphLab.html(primaryGraph(n))}`;
}
function fmCard(f){return `<div class="formula-card"><div class="formula-label">${esc(f.title)}</div><div class="math-display">\\[${f.tex}\\]</div><p><strong>Intuition :</strong> ${esc(f.intuition)}</p></div>`}
function pointView(id){
 const p=BY_ID[id],ch=BY_ID[id.split('.')[0]],section=p.type==='point'?sectionOf(p):p;
 const peers=DATA.filter(x=>x.type==='point'),idx=peers.findIndex(x=>x.id===id);
 let previous=idx>0?peers[idx-1]:null,next=idx>=0&&idx<peers.length-1?peers[idx+1]:null;
 if(p.type==='section'){
  const firstChild=peers.find(x=>x.id.startsWith(id+'.'));
  if(firstChild)next=firstChild;
  previous=peers.slice().reverse().find(x=>DATA.indexOf(x)<DATA.indexOf(p))||null;
 }
 const masteryLabel=completed.has(id)?'✓ Point maîtrisé':'Marquer comme compris';
 return `<div class="lesson-page">
  <div class="lesson-header"><div class="lesson-kicker"><span class="lesson-number">${esc(p.id)}</span><span>Chapitre ${ch.id} · ${esc(ch.title)}</span></div>
   <h1 class="point-title">${esc(p.title)}</h1>
   <div class="lesson-toolbar"><span>Section ${esc(section.id)}</span><div class="lesson-toolbar-actions"><button type="button" class="lesson-master ${completed.has(id)?'is-mastered':''}" data-master="${id}">${masteryLabel}</button>${link('#chapitre-'+ch.id,'Voir le plan du chapitre','lesson-plan-link')}</div></div>
  </div>
  <div class="lesson-flow">
   <section class="lesson-explanation" aria-labelledby="explanation-heading"><div class="lesson-section-heading"><span class="soft-symbol">✦</span><h2 id="explanation-heading">Comprendre l’idée</h2></div><p class="lesson-core">${esc(p.explanation)}</p></section>
   ${p.example?`<section class="lesson-example" aria-labelledby="example-heading"><h2 id="example-heading"><span class="example-symbol" aria-hidden="true">↳</span> Exemple concret</h2><p>${esc(p.example)}</p></section>`:''}
   ${p.steps?.length?`<section class="lesson-main-section"><div class="lesson-section-heading"><span class="soft-symbol neutral-symbol">↗</span><h2>Le mécanisme, étape par étape</h2></div><ol class="mechanism-list">${p.steps.map(st=>`<li>${esc(st)}</li>`).join('')}</ol></section>`:''}
   ${p.warning?`<p class="lesson-caution"><strong>À ne pas confondre :</strong> ${esc(p.warning)}</p>`:''}
   ${p.formulas.length?`<section class="lesson-main-section formulas-section"><div class="lesson-section-heading"><span class="soft-symbol neutral-symbol">ƒ</span><h2>Les formules à connaître</h2></div><p class="section-supporting-text">Chaque formule est accompagnée de son intuition, sans calcul inutile.</p><div class="formula-list">${p.formulas.map(fmCard).join('')}</div></section>`:''}
   ${p.graph?`<section class="lesson-graph-section"><div class="lesson-section-heading"><span class="soft-symbol neutral-symbol">⌁</span><h2>Visualiser le mécanisme</h2></div><p class="section-supporting-text">Modifie les curseurs et observe les conséquences sur le graphique.</p>${window.GraphLab.html(p.graph)}</section>`:''}
   <section class="lesson-extras" aria-label="Compléments facultatifs"><div class="extras-title"><h2>Pour aller plus loin</h2><span>Compléments facultatifs</span></div>
    <details class="extra-detail"><summary><span class="extra-icon" aria-hidden="true">?</span><span>Tester ma compréhension<small>Une question rapide pour vérifier ce que tu retiens</small></span><span class="extra-arrow" aria-hidden="true">⌄</span></summary><div class="extra-body"><p class="self-check-question">Sans relire le texte : comment expliquerais-tu <strong>${esc(p.title)}</strong> à quelqu’un qui découvre ce sujet ?</p><details class="source-details self-check-answer"><summary>Voir une piste de réponse</summary><div class="source-content">${esc(p.explanation)}${p.example?' &nbsp;Exemple : '+esc(p.example):''}</div></details></div></details>
   </section>
  </div>
  <nav class="point-bottom-nav" aria-label="Passer à un autre point">${previous?link('#point-'+previous.id,'← '+esc(previous.id)+' · Précédent','btn btn-outline'):link('#chapitre-'+ch.id,'← Plan du chapitre','btn btn-outline')}${next?link('#point-'+next.id,'Suivant · '+esc(next.id)+' →','btn btn-primary'):link('#revision','Terminer : révisions →','btn btn-primary')}</nav>
 </div>`;
}
function glossaryView(){let q=normal(glossaryFilter).trim(),filtered=GLOSSARY.filter(g=>(glossaryChapter==='all'||g.chapter===+glossaryChapter)&&(!q||normal(g.symbol+' '+g.name+' '+g.explanation+' '+g.formula).includes(q)));
return `<div class="point-meta"><span class="chip blue">LEXIQUE COMPLET</span><span class="chip">${GLOSSARY.length} entrées</span></div><h1 class="point-title">Toutes les variables du cours</h1><p class="point-lead">Un dictionnaire des symboles, notations, significations et formules utilisés dans les neuf chapitres. Les mêmes lettres peuvent avoir des significations différentes selon le modèle : la catégorie le précise.</p><div class="glossary-tools"><input id="glossary-search" class="wide-search" type="search" placeholder="Chercher une variable, une formule, une notion…" value="${esc(glossaryFilter)}"><select id="glossary-chapter" class="select" aria-label="Filtrer par chapitre"><option value="all">Tous les chapitres</option>${CHAPTERS.map(c=>`<option value="${c.id}" ${glossaryChapter===c.id?'selected':''}>Chapitre ${c.id} · ${esc(c.title)}</option>`).join('')}</select></div><p class="subtle" id="glossary-count" style="margin-bottom:16px">${filtered.length} variable${filtered.length>1?'s':''} affichée${filtered.length>1?'s':''}</p><div id="glossary-grid" class="glossary-grid">${glossaryCards(filtered)}</div>`;
}
function glossaryCards(xs){return xs.length?xs.map(g=>`<article class="glossary-card"><div class="glossary-head"><span class="glossary-symbol">\\(${g.symbol}\\)</span><span><strong>${esc(g.name)}</strong><small>Chapitre ${g.chapter}</small></span></div><p>${esc(g.explanation)}</p><div class="glossary-formula">\\(${g.formula}\\)</div></article>`).join(''):'<div class="empty-state"><strong>Pas de correspondance</strong>Essaie une autre notation ou un autre chapitre.</div>'}
function labView(){return `<div class="point-meta"><span class="chip blue">LABORATOIRE</span><span class="chip">${Object.keys(window.GraphLab.defs).length} modèles interactifs</span></div><h1 class="point-title">Comprendre les modèles en les manipulant</h1><p class="point-lead">Chaque courbe réagit immédiatement à tes choix. Observe les intersections, les déplacements et la différence entre un effet temporaire sur le niveau et un effet durable sur la croissance.</p><div class="info-strip"><strong>Mode d’emploi :</strong> déplace les curseurs sous chaque graphique, puis lis l’interprétation qui se met à jour. Les nombres sont illustratifs : il ne s’agit pas de données historiques.</div><div class="cards-grid" style="margin:20px 0">${CHAPTERS.map(ch=>`<button class="topic-card" data-scroll-to="lab-${primaryGraph(ch.id)}" style="min-height:80px;justify-content:center;text-align:left"><span style="font-size:11px;color:var(--blue);font-weight:800">CHAPITRE ${ch.id}</span><h3>${esc(ch.title)}</h3></button>`).join('')}</div>${Object.keys(window.GraphLab.defs).map(g=>`<div id="lab-${g}" class="lab-anchor">${window.GraphLab.html(g)}</div>`).join('')}`}
function reviewView(){let flash=POINTS[reviewIndex%POINTS.length],finished=POINTS.filter(p=>completed.has(p.id)).length;
return `<div class="point-meta"><span class="chip blue">RÉVISER</span><span class="chip">Cartes de compréhension</span></div><h1 class="point-title">Révisions et progression</h1><p class="point-lead">Teste-toi point par point. Essaie d’expliquer l’idée avant de révéler la réponse, puis valide ce que tu maîtrises. Ta progression est conservée uniquement dans ton navigateur.</p><div class="review-stats"><div class="stat-card"><strong>${finished}</strong><span>Points maîtrisés</span></div><div class="stat-card"><strong>${POINTS.length-finished}</strong><span>Points à revoir</span></div><div class="stat-card"><strong>${percent()} %</strong><span>Progression totale</span></div></div><div class="panel"><div class="section-head" style="margin:0 0 12px"><div><h2>Choisir un chapitre à réviser</h2></div></div><div class="glossary-tools"><select id="review-chapter" class="select"><option value="all">Tout le cours</option>${CHAPTERS.map(ch=>`<option value="${ch.id}">Chapitre ${ch.id} · ${esc(ch.title)}</option>`).join('')}</select><button class="btn btn-outline" data-action="review-unmastered">Uniquement les points à revoir</button></div><div class="flashcard"><div class="eyebrow">CARTE DE RÉVISION <span id="flash-counter">${reviewIndex+1}</span></div><p id="flash-id" class="subtle">Point ${flash.id} · Chapitre ${flash.id.split('.')[0]}</p><div class="prompt" id="flash-prompt">Explique simplement : ${esc(flash.title)}</div><div class="flash-actions"><button class="btn btn-primary" data-action="flash-reveal" id="flash-reveal">Voir la réponse</button><button class="btn btn-outline" data-action="flash-next">Question suivante →</button></div><div id="flash-answer"></div></div></div><div class="section-head"><div><h2>Progression par chapitre</h2></div></div><div class="cards-grid">${CHAPTERS.map(ch=>`<article class="topic-card"><h3>${esc(ch.title)}</h3><p>${done(ch.id)} points maîtrisés sur ${count(ch.id)}.</p><div class="progress-track" style="background:var(--line)"><span style="width:${100*done(ch.id)/count(ch.id)}%"></span></div>${link('#chapitre-'+ch.id,'Ouvrir ce chapitre →','btn btn-outline')}</article>`).join('')}</div>`;
}
function updateFlash(){const filter=document.querySelector('#review-chapter')?.value||'all',unmastered=window.__onlyUnmastered===true;let deck=POINTS.filter(p=>(filter==='all'||p.id.startsWith(filter+'.'))&&(!unmastered||!completed.has(p.id)));if(!deck.length){document.querySelector('.flashcard').innerHTML='<div class="empty-state">Tous les points de cette sélection sont maîtrisés. Tu peux changer de filtre.</div>';return}
let flash=deck[reviewIndex%deck.length];document.querySelector('#flash-counter').textContent=(reviewIndex%deck.length+1)+' / '+deck.length;document.querySelector('#flash-id').textContent='Point '+flash.id+' · Chapitre '+flash.id.split('.')[0];document.querySelector('#flash-prompt').textContent='Explique simplement : '+flash.title;document.querySelector('#flash-answer').innerHTML=reviewShow?`<div class="flash-answer"><strong>Réponse :</strong> ${esc(flash.explanation)}<p style="margin-top:10px"><strong>Exemple :</strong> ${esc(flash.example)}</p><button class="btn btn-teal" data-master="${flash.id}">${completed.has(flash.id)?'✓ Maîtrisé : annuler':'✓ Je maîtrise ce point'}</button> ${link('#point-'+flash.id,'Revoir le cours','btn btn-outline')}</div>`:'';document.querySelector('#flash-reveal').textContent=reviewShow?'Masquer la réponse':'Voir la réponse'}
function typeset(){if(!window.MathJax)return;let mj=window.MathJax;let func=()=>{if(mj.typesetPromise)mj.typesetPromise([MAIN]).catch(e=>console.warn('Formule',e))};if(mj.startup&&mj.startup.promise)mj.startup.promise.then(func).catch(()=>{});else func()}
function render(){window.GraphLab.dispose?.(MAIN);current=getRoute();const [route,arg]=current.split(':');let page=null;
try {if(route==='home'){MAIN.innerHTML=home();crumbs('home')}else if(route==='chapter'){MAIN.innerHTML=chapterView(arg);crumbs('chapter',BY_ID[arg])}else if(route==='point'){MAIN.innerHTML=pointView(arg);crumbs('point',BY_ID[arg])}else if(route==='glossary'){MAIN.innerHTML=glossaryView();crumbs('glossary')}else if(route==='graphs'){MAIN.innerHTML=labView();crumbs('graphs')}else if(route==='review'){MAIN.innerHTML=reviewView();crumbs('review');updateFlash()}else{MAIN.innerHTML=home();crumbs('home')}
 navRender();revealSelectedInSidebar();window.GraphLab.init(MAIN);typeset();window.scrollTo({top:0,behavior:'instant'});closeSidebar();
 MAIN.classList.remove('view-enter');void MAIN.offsetWidth;MAIN.classList.add('view-enter');
}catch(e){console.error(e);MAIN.innerHTML='<section class="panel"><h2>Problème d’affichage</h2><p>Une partie du cours n’a pas été chargée. Vérifie que tous les fichiers sont restés dans leurs dossiers.</p></section>'}}
function go(to){
 const m=to.match(/^#(?:point|chapitre)-(\d+)(?:\.(\d+))?/);
 if(m){expandedChapters.add(m[1]);if(m[2])expandedSections.add(m[1]+'.'+m[2])}
 if(location.hash===to){render()}else{location.hash=to}
}
function handleClick(e){let sc=e.target.closest('[data-scroll-to]');if(sc){document.getElementById(sc.dataset.scrollTo)?.scrollIntoView({behavior:'smooth',block:'start'});return}
let togg=e.target.closest('[data-toggle-chapter]');if(togg){let n=togg.dataset.toggleChapter;if(expandedChapters.has(n))expandedChapters.delete(n);else expandedChapters.add(n);navRender();return}
let sectionToggle=e.target.closest('[data-toggle-section]');if(sectionToggle){const n=sectionToggle.dataset.toggleSection;if(expandedSections.has(n))expandedSections.delete(n);else expandedSections.add(n);navRender();return}
if(e.target.closest('#fold-all')){if(expandedChapters.size){expandedChapters.clear();expandedSections.clear()}else{CHAPTERS.forEach(ch=>expandedChapters.add(ch.id));ALL_SECTIONS.forEach(s=>expandedSections.add(s.id))}navRender();return}
let a=e.target.closest('[data-to]');if(a){e.preventDefault();let target=a.dataset.to||'#accueil';if(target==='#home-chapters'){document.querySelector('#home-chapters')?.scrollIntoView({behavior:'smooth',block:'start'});return}if(target==='home')target='#accueil';if(target==='graphs')target='#graphiques';if(target==='glossary')target='#variables';if(target==='review')target='#revision';go(target);return}
let master=e.target.closest('[data-master]');if(master){let id=master.dataset.master;if(completed.has(id))completed.delete(id);else completed.add(id);store(PROGRESS_KEY,[...completed]);if(current==='review'){render()}else{
  navRender();
  const btn=MAIN.querySelector('.lesson-master');
  if(btn&&btn.dataset.master===id){const learned=completed.has(id);btn.classList.toggle('is-mastered',learned);btn.textContent=learned?'✓ Point maîtrisé':'Marquer comme compris'}
 }return}
let goName=e.target.closest('[data-go]');if(goName){go(({home:'#accueil',graphs:'#graphiques',glossary:'#variables',review:'#revision'})[goName.dataset.go]);return}
let action=e.target.closest('[data-action]');if(action){if(action.dataset.action==='flash-reveal'){reviewShow=!reviewShow;updateFlash()}else if(action.dataset.action==='flash-next'){reviewIndex++;reviewShow=false;updateFlash()}else if(action.dataset.action==='review-unmastered'){window.__onlyUnmastered=!window.__onlyUnmastered;action.classList.toggle('btn-teal',window.__onlyUnmastered);reviewIndex=0;reviewShow=false;updateFlash()}return}
if(e.target.closest('[data-close-sidebar]'))closeSidebar();}
function setup(){if(DATA.length<180){MAIN.innerHTML='<div class="panel"><h2>Les chapitres n’ont pas été trouvés</h2><p>Conserve index.html, data/, graphs.js et script.js dans leur emplacement.</p></div>';return}
if(readStore(THEMES_KEY,'light')==='dark')document.body.classList.add('dark');compactRail();setSidebarCollapsed(readStore(SIDEBAR_KEY,false),false);document.querySelector('#toggle-sidebar').addEventListener('click',()=>setSidebarCollapsed(!document.body.classList.contains('sidebar-collapsed')));document.querySelector('#theme-btn').addEventListener('click',()=>{let dark=document.body.classList.toggle('dark');store(THEMES_KEY,dark?'dark':'light');render()});
document.addEventListener('click',handleClick);document.querySelector('#open-menu').addEventListener('click',()=>{document.querySelector('#sidebar').classList.add('open');document.querySelector('#sidebar-overlay').classList.add('visible')});
document.querySelector('#nav-search').addEventListener('input',e=>{searchTerm=e.target.value;navRender()});document.querySelector('#nav-search').addEventListener('keydown',e=>{if(e.key==='Enter'){let first=NAV.querySelector('.point-link');if(first)go(first.dataset.to)}});
document.addEventListener('keydown',e=>{if(e.key==='/'&&!/input|textarea/i.test(document.activeElement.tagName)){e.preventDefault();document.querySelector('#nav-search').focus()}if(e.key==='Escape')closeSidebar()});
document.addEventListener('input',e=>{if(e.target.id==='glossary-search'){glossaryFilter=e.target.value;let filtered=GLOSSARY.filter(g=>(glossaryChapter==='all'||g.chapter===+glossaryChapter)&&normal(g.symbol+' '+g.name+' '+g.explanation+' '+g.formula).includes(normal(glossaryFilter)));document.querySelector('#glossary-grid').innerHTML=glossaryCards(filtered);document.querySelector('#glossary-count').textContent=filtered.length+' variables affichées';typeset()}});
document.addEventListener('change',e=>{if(e.target.id==='glossary-chapter'){glossaryChapter=e.target.value;let focus=glossaryFilter;MAIN.innerHTML=glossaryView();document.querySelector('#glossary-search').focus();document.querySelector('#glossary-search').setSelectionRange(focus.length,focus.length);typeset()}if(e.target.id==='review-chapter'){reviewIndex=0;reviewShow=false;updateFlash()}});
window.addEventListener('hashchange',()=>{
 const route=getRoute();const m=route.match(/^(?:chapter|point):(\d+)(?:\.(\d+))?/);
 if(m){expandedChapters.add(m[1]);if(m[2])expandedSections.add(m[1]+'.'+m[2])}
 render();
});render()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup);else setup();
})();
