"use client";
import {useMemo,useState} from "react";

const kids=[
 {name:"Inès B.",initials:"IB",age:7,level:"2e année primaire",focus:"Lecture syllabique",score:68,tone:"mint"},
 {name:"Yanis K.",initials:"YK",age:6,level:"1re année primaire",focus:"Discrimination visuelle",score:74,tone:"blue"},
 {name:"Lina A.",initials:"LA",age:8,level:"3e année primaire",focus:"Compréhension",score:82,tone:"peach"},
 {name:"Adam M.",initials:"AM",age:5,level:"Préscolaire",focus:"Reconnaissance des lettres",score:51,tone:"purple"}
];
const skills=[['Reconnaissance des lettres','تمييز الحروف',82,'#249276'],['Discrimination visuelle','التمييز البصري',67,'#628dcf'],['Mémoire auditive','الذاكرة السمعية',54,'#e5935c'],['Lecture syllabique','قراءة المقاطع',41,'#9970c2']];
const acts=[['أ','Trouve la lettre','Reconnaissance visuelle','Facile','coral'],['بَ','Écoute et choisis','Discrimination auditive','Moyen','blue'],['بـ ـتـ ـث','Lettres ressemblantes','Attention visuelle','Moyen','violet'],['مَـ + ـاء','Construis le mot','Lecture syllabique','Avancé','green']];
const nav=[['⌂','Tableau de bord'],['♙','Enfants'],['▤','Exercices'],['↗','Progression'],['□','Séances']];

export default function Home(){
 const [active,setActive]=useState('Tableau de bord'),[query,setQuery]=useState(''),[modal,setModal]=useState(''),[toast,setToast]=useState('');
 const filtered=useMemo(()=>kids.filter(k=>k.name.toLowerCase().includes(query.toLowerCase())),[query]);
 const say=(s:string)=>{setToast(s);setTimeout(()=>setToast(''),2300)};
 return <div className="shell">
  <aside><div className="brand"><b lang="ar">ن</b><div><strong>نُطْق</strong><small>Apprendre autrement</small></div></div><nav>{nav.map(([i,n])=><button key={n} className={active===n?'active':''} onClick={()=>setActive(n)}><i>{i}</i>{n}{n==='Enfants'&&<em>24</em>}</button>)}</nav><div className="asideBottom"><button>⚙ Paramètres</button><div className="profile"><span>SB</span><div><b>Dr. Sara B.</b><small>Orthophoniste</small></div><i>•••</i></div></div></aside>
  <main><header><div className="search">⌕ <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Rechercher un enfant..."/><kbd>⌘ K</kbd></div><div className="actions"><button className="bell" onClick={()=>say('Aucune nouvelle notification')}>♢<i/></button><button className="primary" onClick={()=>setModal('enfant')}>＋ <span>Nouvel enfant</span></button></div></header>
   <div className="content"><section className="welcome"><div><p>LUNDI 24 AOÛT</p><h1>Bonjour, Dr. Sara <span>👋</span></h1><small>Voici un aperçu des progrès de vos petits champions.</small></div><div className="next"><label>PROCHAINE SÉANCE</label><strong>14:30</strong><div><span>YK</span><p><b>Yanis K.</b><small>Lecture · 45 min</small></p><button>›</button></div></div></section>
    <section className="stats">{[['♙','Enfants suivis','24','+3 ce mois','green'],['□','Séances ce mois','48','12 cette semaine','blue'],['↗','Progression moyenne','+18%','↑ 4% vs juillet','violet'],['▤','Exercices réalisés','186','86% de réussite','orange']].map(s=><article key={s[1]}><i className={s[4]}>{s[0]}</i><div><small>{s[1]}</small><b>{s[2]}</b><em>{s[3]}</em></div></article>)}</section>
    <div className="grid"><section className="panel"><div className="head"><div><h2>Enfants récents</h2><p>Derniers dossiers consultés</p></div><button>Voir tout ›</button></div><div className="kidlist">{filtered.length?filtered.map(k=><button className="kid" key={k.name} onClick={()=>say(`Dossier de ${k.name} ouvert`)}><span className={k.tone}>{k.initials}</span><p><b>{k.name}</b><small>{k.age} ans · {k.level}</small></p><p className="focus"><small>Travail en cours</small><b>{k.focus}</b></p><div className="score"><i><b style={{width:`${k.score}%`}}/></i><span>{k.score}%</span></div><em>›</em></button>):<div className="empty">Aucun enfant trouvé</div>}</div></section>
     <section className="panel progress"><div className="head"><div><h2>Profil de compétences</h2><p>Inès B. · 30 derniers jours</p></div><i>•••</i></div><div className="skillset">{skills.map(s=><div className="skill" key={s[0]}><p><b>{s[0]}</b><small dir="rtl">{s[1]}</small></p><i><span style={{width:`${s[2]}%`,background:s[3]}}/></i><b style={{color:s[3]}}>{s[2]}%</b></div>)}</div><div className="insight"><i>i</i><p><b>Point d’attention</b>Inès confond encore régulièrement les lettres <strong dir="rtl">ب · ت · ث</strong></p></div><button className="report" onClick={()=>say('Rapport détaillé ouvert')}>Voir le rapport détaillé ›</button></section>
    </div>
    <section className="activities"><div className="sectionhead"><div><h2>Activités recommandées</h2><p>Sélectionnées selon les besoins actuels d’Inès</p></div><button onClick={()=>setModal('exercice')}>＋ Créer un exercice</button></div><div className="actgrid">{acts.map((a,i)=><article key={a[1]}><div className={`art ${a[4]}`} dir="rtl">{a[0]}<button onClick={()=>say(`Exercice « ${a[1]} » démarré`)}>▶</button></div><div><label className={`tag t${i}`}>{a[3]}</label><h3>{a[1]}</h3><p>{a[2]}</p><small>5–8 min　•　8 questions</small></div></article>)}</div></section>
   </div>
  </main>
  <div className="mobileNav">{nav.slice(0,4).map(([i,n])=><button key={n}><i>{i}</i>{n==='Tableau de bord'?'Accueil':n}</button>)}</div>
  {modal&&<div className="backdrop" onMouseDown={()=>setModal('')}><section className="modal" onMouseDown={e=>e.stopPropagation()}><button className="close" onClick={()=>setModal('')}>×</button><div lang="ar">{modal==='enfant'?'طفل':'أ ب'}</div><h2>{modal==='enfant'?'Ajouter un enfant':'Créer un exercice'}</h2><p>{modal==='enfant'?'Créez un nouveau dossier de suivi.':'Préparez une activité adaptée à l’enfant.'}</p><label>{modal==='enfant'?'Nom et prénom':'Titre de l’exercice'}<input autoFocus placeholder={modal==='enfant'?'Ex. Amine B.':'Ex. Reconnaître les lettres'}/></label><label>{modal==='enfant'?'Niveau scolaire':'Compétence travaillée'}<select><option>{modal==='enfant'?'Préscolaire':'Reconnaissance des lettres'}</option><option>{modal==='enfant'?'1re année primaire':'Mémoire auditive'}</option><option>{modal==='enfant'?'2e année primaire':'Lecture syllabique'}</option></select></label><button className="primary submit" onClick={()=>{setModal('');say(modal==='enfant'?'Dossier créé avec succès':'Exercice créé avec succès')}}>Créer</button></section></div>}
  {toast&&<div className="toast">✓ {toast}</div>}
 </div>
}
