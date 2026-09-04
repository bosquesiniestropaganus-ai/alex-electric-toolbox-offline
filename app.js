const KEY='alexElectricToolboxV2';
const LEGACY_KEY='alexElectricToolboxV1';

const modules=[
{id:'and',code:'TEAU03AND02',name:'ANÁLISIS DE CIRCUITOS ELECTRÓNICOS ANALÓGICOS Y DIGITALES',short:'Electrónica analógica y digital',icon:'🔬',topics:[['Semiconductores','Conductor, aislante, semiconductor y unión PN.'],['Diodos','Polarización directa/inversa y aplicaciones básicas.'],['Rectificación','Media onda, onda completa y filtrado.'],['Transistores','BJT/MOSFET como interruptor y amplificación básica.'],['Amplificador operacional','Entradas, salida, ganancia y realimentación.'],['Sistema binario','Bits y conversión decimal/binario.'],['Compuertas lógicas','AND, OR, NOT, NAND, NOR y XOR.'],['Circuitos combinacionales','Combinar compuertas para una función lógica.']],formulas:[['Ley de Ohm','V = I × R'],['Potencia DC','P = V × I'],['No inversor ideal','Av = 1 + Rf/Rg']]},
{id:'corr',code:'TEAU03CORR02',name:'ANÁLISIS DE CIRCUITOS ELÉCTRICOS EN CORRIENTE ALTERNA',short:'Corriente alterna',icon:'🌀',topics:[['Onda senoidal','Amplitud, frecuencia, período y valor instantáneo.'],['Valor RMS','Interpretación del valor eficaz.'],['Fase y desfase','Relación temporal entre tensión y corriente.'],['Fasores','Magnitud y ángulo.'],['R, L y C','Comportamiento en corriente alterna.'],['Reactancia','Cálculo de XL y XC.'],['Impedancia','Combinación de resistencia y reactancia.'],['Potencias en CA','P, Q, S y factor de potencia.'],['Circuitos RLC','Impedancia, corriente, ángulo y resonancia.'],['Sistemas trifásicos','Conceptos de línea, fase y potencia.']],formulas:[['Período','T = 1/f'],['Reactancia inductiva','XL = 2πfL'],['Reactancia capacitiva','XC = 1/(2πfC)'],['Impedancia RLC serie','Z = √(R² + (XL−XC)²)'],['Potencia trifásica','P = √3 × V × I × cosφ']]},
{id:'emp',code:'TEAU03EMP02',name:'EMPRENDIMIENTO Y LIDERAZGO',short:'Emprendimiento y liderazgo',icon:'🚀',topics:[['Problema y necesidad','Detectar un problema real.'],['Propuesta de valor','Explicar por qué una solución aporta valor.'],['Cliente objetivo','Definir quién necesita el servicio.'],['Costos e ingresos','Distinguir costos, precio e ingresos.'],['Presupuesto básico','Materiales, mano de obra e imprevistos.'],['Comunicación','Instrucciones claras y escucha activa.'],['Liderazgo','Coordinar objetivos y responsabilidades.'],['Pitch','Presentar una idea de forma breve.']],formulas:[['Utilidad','Utilidad = Ingresos − Costos'],['Margen','Margen % = Utilidad / Venta × 100']]},
{id:'herr',code:'TEAU03HERR02',name:'HERRAMIENTAS, MATERIALES E INSTRUMENTACIÓN INDUSTRIAL',short:'Herramientas e instrumentación',icon:'🛠️',topics:[['Multímetro','Tensión, resistencia, continuidad y corriente.'],['Pinza amperimétrica','Medición de corriente alrededor de un conductor.'],['Megóhmetro','Concepto de resistencia de aislamiento.'],['Osciloscopio','Forma de onda, amplitud, período y frecuencia.'],['Instrumentación','Sensor, transmisor, variable y controlador.'],['Señales industriales','Analógicas/digitales; 0–10 V y 4–20 mA.'],['Errores de medición','Precisión, resolución y rango.'],['Materiales eléctricos','Conductores, aislantes, terminales y canalizaciones.'],['Herramientas manuales','Selección, inspección y uso correcto.']],formulas:[['Error absoluto','Ea = |medido − referencia|'],['Error %','Error % = Ea / referencia × 100']]},
{id:'proy',code:'TEAU03PROYEL02',name:'PROYECTO ELÉCTRICO',short:'Proyecto eléctrico',icon:'📐',topics:[['Levantamiento','Necesidades, cargas, ubicación y restricciones.'],['Cuadro de cargas','Ordenar circuitos y potencias.'],['Circuitos','Separación funcional de cargas.'],['Cálculo de corriente','Obtener I desde P y V.'],['Conductores','Sección, material y caída de tensión.'],['Protecciones','Función general de las protecciones eléctricas.'],['Planos','Esquemas unifilares y distribución.'],['Metrado','Cantidades y longitudes.'],['Presupuesto','Cantidades, precios y costo total.'],['Memoria técnica','Criterios, cálculos, planos y especificaciones.']],formulas:[['Corriente simplificada','I ≈ P / V'],['Caída resistiva','ΔV ≈ 2ρLI/S'],['Energía','E = P × t']]},
{id:'seg',code:'TEAU03SEG02',name:'SEGURIDAD INDUSTRIAL',short:'Seguridad industrial',icon:'🦺',topics:[['Peligro y riesgo','Distinguir fuente de daño y nivel de riesgo.'],['Identificación de peligros','Energía eléctrica, mecánica, térmica y entorno.'],['Jerarquía de controles','Eliminar, sustituir, ingeniería, administración y EPP.'],['Energías peligrosas','Aislamiento, bloqueo y verificación.'],['EPP','Selección según riesgo y tarea.'],['Trabajo eléctrico seguro','Controlar energía y área de trabajo.'],['Orden y limpieza','Prevenir accidentes mediante organización.'],['Reporte de incidentes','Hechos, causas y acciones correctivas.'],['Emergencias','Comunicación, rutas y primeros pasos.']],formulas:[['Modelo didáctico','Riesgo ≈ Probabilidad × Consecuencia']]}
];

const quizBank=[
{id:'b-and-1',m:'and',topic:'Compuertas',q:'¿Qué compuerta entrega 1 solo cuando ambas entradas son 1?',o:['OR','AND','XOR','NOT'],a:1,e:'AND requiere que ambas entradas sean verdaderas.',source:'base'},
{id:'b-and-2',m:'and',topic:'Diodos',q:'¿Qué componente conduce preferentemente en un sentido?',o:['Diodo','Transformador','Inductor','Relé'],a:0,e:'El diodo conduce principalmente en polarización directa.',source:'base'},
{id:'b-and-3',m:'and',topic:'Binario',q:'1010 en binario equivale a:',o:['8','9','10','12'],a:2,e:'1010₂ = 8 + 2 = 10.',source:'base'},
{id:'b-and-4',m:'and',topic:'Transistores',q:'Un transistor como interruptor trabaja principalmente entre:',o:['Corte y conducción','Dos frecuencias','Serie y paralelo','CA y CC'],a:0,e:'Como switch se usan estados de apagado y encendido.',source:'base'},
{id:'b-and-5',m:'and',topic:'Rectificación',q:'Un rectificador convierte principalmente:',o:['CA en CC pulsante','CC en CA','Frecuencia en resistencia','Temperatura en presión'],a:0,e:'La rectificación obtiene una señal unidireccional desde CA.',source:'base'},
{id:'b-and-6',m:'and',topic:'OpAmp',q:'En un amplificador operacional ideal, la impedancia de entrada se considera:',o:['Muy alta','Cero','Igual a 1 Ω','Siempre inductiva'],a:0,e:'El modelo ideal considera impedancia de entrada infinita.',source:'base'},
{id:'b-corr-1',m:'corr',topic:'Frecuencia',q:'A 50 Hz, el período es:',o:['0,02 s','0,2 s','2 s','50 s'],a:0,e:'T=1/50=0,02 s.',source:'base'},
{id:'b-corr-2',m:'corr',topic:'Reactancia',q:'La reactancia inductiva aumenta cuando:',o:['Baja la frecuencia','Sube la frecuencia','R vale cero','V vale cero'],a:1,e:'XL=2πfL.',source:'base'},
{id:'b-corr-3',m:'corr',topic:'Impedancia',q:'La impedancia se mide en:',o:['W','V','Ω','F'],a:2,e:'Z se expresa en ohm.',source:'base'},
{id:'b-corr-4',m:'corr',topic:'Potencias',q:'La potencia aparente S se expresa en:',o:['VA','W exclusivamente','V','Ω'],a:0,e:'La potencia aparente se expresa en volt-amperes.',source:'base'},
{id:'b-corr-5',m:'corr',topic:'RLC',q:'En un RLC serie, si XL = XC:',o:['La reactancia neta es 0','La resistencia desaparece','La corriente siempre es 0','La frecuencia es 0'],a:0,e:'Las reactancias se cancelan en resonancia ideal.',source:'base'},
{id:'b-corr-6',m:'corr',topic:'Fase',q:'Un ángulo de fase describe principalmente:',o:['Desfase entre señales','Longitud del cable','Color de conductor','Precio de energía'],a:0,e:'Representa la separación angular entre señales sinusoidales.',source:'base'},
{id:'b-emp-1',m:'emp',topic:'Negocio',q:'La propuesta de valor explica:',o:['Por qué la solución es útil para el cliente','Solo el nombre de la empresa','El color del logo','La fecha de inicio'],a:0,e:'Resume el beneficio que recibe el cliente.',source:'base'},
{id:'b-emp-2',m:'emp',topic:'Costos',q:'Utilidad se puede expresar como:',o:['Ingresos − Costos','Costos − Ingresos','Ingresos + Costos','Venta ÷ 0'],a:0,e:'La utilidad es el excedente después de costos.',source:'base'},
{id:'b-emp-3',m:'emp',topic:'Cliente',q:'Definir el cliente objetivo ayuda a:',o:['Enfocar la solución y comunicación','Eliminar costos automáticamente','Evitar presupuestos','Sustituir la calidad'],a:0,e:'Permite adaptar la oferta a una necesidad concreta.',source:'base'},
{id:'b-emp-4',m:'emp',topic:'Liderazgo',q:'Una conducta útil de liderazgo es:',o:['Aclarar objetivos y responsabilidades','Ocultar información','Evitar escuchar','No asignar tareas'],a:0,e:'La coordinación requiere objetivos y responsabilidades claras.',source:'base'},
{id:'b-emp-5',m:'emp',topic:'Presupuesto',q:'Un presupuesto técnico debería considerar:',o:['Materiales, mano de obra e imprevistos','Solo materiales','Solo nombre del cliente','Solo impuestos'],a:0,e:'Debe incluir los componentes relevantes del costo.',source:'base'},
{id:'b-herr-1',m:'herr',topic:'Multímetro',q:'Para medir tensión con multímetro, el instrumento se conecta normalmente:',o:['En paralelo','En serie siempre','A tierra solamente','Sin puntas'],a:0,e:'La tensión se mide entre dos puntos, por eso se conecta en paralelo.',source:'base'},
{id:'b-herr-2',m:'herr',topic:'Osciloscopio',q:'Para observar una forma de onda se usa:',o:['Megóhmetro','Osciloscopio','Torquímetro','Calibrador'],a:1,e:'El osciloscopio muestra señal en función del tiempo.',source:'base'},
{id:'b-herr-3',m:'herr',topic:'Señales',q:'4–20 mA es un ejemplo de:',o:['Señal analógica industrial','Rosca','Fusible','Cable de red'],a:0,e:'Es una señal analógica industrial muy utilizada.',source:'base'},
{id:'b-herr-4',m:'herr',topic:'Megóhmetro',q:'El megóhmetro se usa principalmente para evaluar:',o:['Resistencia de aislamiento','RPM','Presión','Iluminancia'],a:0,e:'Aplica una tensión de prueba y mide altas resistencias de aislamiento.',source:'base'},
{id:'b-herr-5',m:'herr',topic:'Medición',q:'Resolución de un instrumento es:',o:['El cambio más pequeño que puede distinguir','Su color','Su masa','El valor máximo de red'],a:0,e:'La resolución indica el menor incremento observable.',source:'base'},
{id:'b-proy-1',m:'proy',topic:'Cuadro de cargas',q:'El cuadro de cargas sirve para:',o:['Organizar circuitos y potencias','Medir aislamiento','Soldar','Programar PLC'],a:0,e:'Resume las cargas previstas.',source:'base'},
{id:'b-proy-2',m:'proy',topic:'Planos',q:'Un esquema unifilar representa:',o:['Una instalación de forma simplificada','Una foto','Un presupuesto','Una señal'],a:0,e:'Representa la instalación con símbolos simplificados.',source:'base'},
{id:'b-proy-3',m:'proy',topic:'Metrado',q:'El metrado permite:',o:['Cuantificar materiales y longitudes','Medir rpm','Calcular frecuencia','Programar lógica'],a:0,e:'Sirve para cantidades y presupuesto.',source:'base'},
{id:'b-proy-4',m:'proy',topic:'Caída de tensión',q:'La caída de tensión depende de:',o:['Longitud, corriente, material y sección','Color del cable','Hora del día','Nombre del tablero'],a:0,e:'Esos factores influyen en la caída de tensión.',source:'base'},
{id:'b-proy-5',m:'proy',topic:'Levantamiento',q:'Antes de cubicar un proyecto conviene conocer:',o:['Dimensiones, cargas y recorridos','Solo la marca de interruptor','Solo el nombre del cliente','Solo el precio del cobre'],a:0,e:'El levantamiento entrega la base geométrica y funcional.',source:'base'},
{id:'b-seg-1',m:'seg',topic:'Riesgo',q:'Peligro y riesgo se diferencian porque:',o:['Son iguales','Peligro es fuente de daño; riesgo considera probabilidad y consecuencia','Riesgo siempre es eléctrico','Peligro es una lesión'],a:1,e:'El peligro es la fuente y el riesgo evalúa el posible daño.',source:'base'},
{id:'b-seg-2',m:'seg',topic:'Controles',q:'En la jerarquía de controles, el EPP es:',o:['La única medida','Una medida complementaria','Innecesario','Un reemplazo del diseño seguro'],a:1,e:'Se prioriza controlar el peligro antes de depender solo del EPP.',source:'base'},
{id:'b-seg-3',m:'seg',topic:'Energías peligrosas',q:'Antes de intervenir energías peligrosas se busca:',o:['Aislar/controlar y verificar','Trabajar más rápido','Quitar señalética','Trabajar solo'],a:0,e:'El control de la energía es fundamental.',source:'base'},
{id:'b-seg-4',m:'seg',topic:'Incidentes',q:'Reportar un incidente ayuda a:',o:['Analizar causas y prevenir repetición','Ocultarlo','Aumentar riesgo','Evitar acciones'],a:0,e:'Permite definir medidas correctivas.',source:'base'},
{id:'b-seg-5',m:'seg',topic:'EPP',q:'La selección de EPP debe basarse principalmente en:',o:['El riesgo de la tarea','El color favorito','La hora del día','El precio más bajo'],a:0,e:'El EPP se selecciona según peligros y exposición.',source:'base'}
];

const awg=[[18,.823,1.024],[16,1.31,1.291],[14,2.08,1.628],[12,3.31,2.053],[10,5.26,2.588],[8,8.37,3.264],[6,13.30,4.115],[4,21.15,5.189],[2,33.63,6.544],[1,42.41,7.348],[0,53.48,8.251],[-1,67.43,9.266],[-2,85.01,10.405]];

const SCHEDULE_VERSION='2026-2-oficial-2026-08-18';

const professorData={
and:{professor:'Carlos Vera',schedule:'Miércoles 20:20–23:10',room:'CC304',start:'2026-08-03',end:'2026-12-20'},
corr:{professor:'Jaime Vallejos',schedule:'Viernes 20:20–23:10',room:'CC304',start:'2026-08-03',end:'2026-12-20'},
emp:{professor:'Valentina Sepúlveda',schedule:'Lunes 21:50–23:10',room:'CC304',start:'2026-08-03',end:'2026-12-20'},
herr:{professor:'Dylan González',schedule:'Lunes 20:20–21:40 / Miércoles 18:50–20:10',room:'CC304',start:'2026-08-03',end:'2026-12-20'},
proy:{professor:'Jaime Vallejos',schedule:'Martes 21:00–23:10 / Viernes 18:50–20:10',room:'CC101 (martes) / CC304 (viernes)',start:'2026-08-03',end:'2026-12-20'},
seg:{professor:'Liliana López',schedule:'Martes 18:50–21:00',room:'CC304',start:'2026-08-03',end:'2026-12-20'}
};

const defaultSemester=Object.fromEntries(modules.map(m=>[m.id,{...professorData[m.id],notes:''}]));

let state=loadState();
let activeModule=state.lastModule||'corr';
let remote={access:{authorized:false,role:'guest',email:''},config:{location:'Angol',kwh:291,source:'Valor referencial',updated:'',normative:'SEC · RIC vigentes'},ai:{configured:false,model:''},guides:[],progress:{items:[],weakest:[]}};
let quizState=null,currentGuideId='',areaSum=0,lastTakeoff=null;

function loadState(){
  let d={progress:{},notes:{},semester:{...defaultSemester},quizCorrect:0,quizTotal:0,lastModule:'corr',scheduleVersion:SCHEDULE_VERSION};
  try{
    const raw=localStorage.getItem(KEY)||localStorage.getItem(LEGACY_KEY);
    if(raw){
      const x=JSON.parse(raw);
      if(x.scheduleVersion!==SCHEDULE_VERSION){
        const oldSemester=x.semester||{};
        const migrated={};
        modules.forEach(m=>{
          const old=oldSemester[m.id]||{};
          migrated[m.id]={
            ...defaultSemester[m.id],
            start:old.start||defaultSemester[m.id].start,
            end:old.end||defaultSemester[m.id].end,
            notes:old.notes||''
          };
        });
        d={...d,...x,progress:{...(x.progress||{})},notes:{...(x.notes||{})},semester:migrated,scheduleVersion:SCHEDULE_VERSION};
        localStorage.setItem(KEY,JSON.stringify(d));
      }else{
        d={...d,...x,progress:{...(x.progress||{})},notes:{...(x.notes||{})},semester:{...defaultSemester,...(x.semester||{})},scheduleVersion:SCHEDULE_VERSION};
      }
    }
  }catch(e){}
  return d;
}
function save(){localStorage.setItem(KEY,JSON.stringify(state))}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function v(id){const el=document.getElementById(id);return el&&el.value!==''?Number(el.value):NaN}
function good(...x){return x.every(Number.isFinite)}
function f(n,d=3){return Number(n).toLocaleString('es-CL',{maximumFractionDigits:d})}
function money(n){return '$'+Math.round(Number(n)||0).toLocaleString('es-CL')}
function out(id,html,cls=''){const e=document.getElementById(id);if(!e)return;e.className='result '+cls;e.innerHTML=html}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toast._t);toast._t=setTimeout(()=>t.classList.remove('show'),2600)}
function clearIds(ids,result){ids.forEach(id=>document.getElementById(id).value='');out(result,'Resultado: —')}
const ACCESS_TOKEN_KEY='aet_offline_owner_v3';
const ACCESS_EMAIL_KEY='aet_offline_owner_email_v3';
const OFFLINE_DB_NAME='AlexElectricToolboxOfflineV3';
const OFFLINE_DB_VERSION=1;
const OFFLINE_STORE='data';
const OFFLINE_PROGRESS_KEY='aet_offline_progress_v3';
const OFFLINE_QUIZ_HISTORY_KEY='aet_offline_quiz_history_v3';
const OFFLINE_CUB_KEY='aet_offline_cubicaciones_v3';

let accessToken='offline-owner';
let offlinePackage=null;

function openOfflineDb(){
  return new Promise((resolve,reject)=>{
    const req=indexedDB.open(OFFLINE_DB_NAME,OFFLINE_DB_VERSION);

    req.onupgradeneeded=()=>{
      const db=req.result;
      if(!db.objectStoreNames.contains(OFFLINE_STORE)){
        db.createObjectStore(OFFLINE_STORE);
      }
    };

    req.onsuccess=()=>resolve(req.result);
    req.onerror=()=>reject(req.error||new Error('No pude abrir el almacenamiento offline.'));
  });
}

async function offlineDbGet(key){
  const db=await openOfflineDb();

  return new Promise((resolve,reject)=>{
    const tx=db.transaction(OFFLINE_STORE,'readonly');
    const req=tx.objectStore(OFFLINE_STORE).get(key);
    req.onsuccess=()=>resolve(req.result);
    req.onerror=()=>reject(req.error);
  });
}

async function offlineDbSet(key,value){
  const db=await openOfflineDb();

  return new Promise((resolve,reject)=>{
    const tx=db.transaction(OFFLINE_STORE,'readwrite');
    tx.objectStore(OFFLINE_STORE).put(value,key);
    tx.oncomplete=()=>resolve(true);
    tx.onerror=()=>reject(tx.error);
  });
}

function emptyOfflinePackage(){
  return {
    format:'alex-electric-toolbox-offline',
    schemaVersion:1,
    appVersion:'3.0-offline',
    exportedAt:'',
    config:{
      location:'Angol',
      kwh:291,
      source:'Valor referencial',
      normative:'SEC · RIC vigentes'
    },
    guides:[],
    knowledge:[],
    questions:[],
    progress:{items:[],weakest:[]}
  };
}

function offlineProgressMap(){
  try{
    return JSON.parse(localStorage.getItem(OFFLINE_PROGRESS_KEY)||'{}');
  }catch(e){
    return {};
  }
}

function buildOfflineProgress(){
  const base=new Map();

  (((offlinePackage||{}).progress||{}).items||[]).forEach(x=>{
    const key=String(x.moduleId||'')+'|'+String(x.topic||'General');

    base.set(key,{
      moduleId:String(x.moduleId||''),
      topic:String(x.topic||'General'),
      attempts:Number(x.attempts||0),
      correct:Number(x.correct||0),
      incorrect:Number(x.incorrect||0),
      percent:Number(x.percent||0),
      last:String(x.last||'')
    });
  });

  const local=offlineProgressMap();

  Object.values(local).forEach(x=>{
    const key=String(x.moduleId||'')+'|'+String(x.topic||'General');
    const old=base.get(key)||{
      moduleId:String(x.moduleId||''),
      topic:String(x.topic||'General'),
      attempts:0,
      correct:0,
      incorrect:0,
      percent:0,
      last:''
    };

    old.attempts+=Number(x.attempts||0);
    old.correct+=Number(x.correct||0);
    old.incorrect+=Number(x.incorrect||0);
    old.percent=old.attempts?Math.round(old.correct/old.attempts*100):0;
    old.last=String(x.last||old.last||'');
    base.set(key,old);
  });

  const items=[...base.values()];
  const weakest=items
    .filter(x=>x.attempts>=2)
    .sort((a,b)=>a.percent-b.percent||b.attempts-a.attempts)
    .slice(0,8);

  return {items,weakest};
}

function offlineQuestions(moduleId,guideId,limit=100){
  const list=((offlinePackage||{}).questions||[])
    .filter(q=>!moduleId||moduleId==='all'||String(q.moduleId)===String(moduleId))
    .filter(q=>!guideId||String(q.guideId)===String(guideId))
    .slice(0,Math.max(1,Math.min(Number(limit||100),300)))
    .map(q=>({
      id:String(q.id||''),
      guideId:String(q.guideId||''),
      m:String(q.moduleId||''),
      topic:String(q.topic||'General'),
      q:String(q.q||''),
      o:Array.isArray(q.options)?q.options.map(String):[],
      a:Number(q.answerIndex||0),
      e:String(q.explanation||''),
      difficulty:String(q.difficulty||'media'),
      source:'guia'
    }));

  return list.filter(q=>q.o.length===4);
}

function offlineGuideStudy(guideId){
  const guide=((offlinePackage||{}).guides||[])
    .find(g=>String(g.id)===String(guideId));

  if(!guide)throw new Error('Guía no encontrada en el paquete offline.');

  const rows=((offlinePackage||{}).knowledge||[])
    .filter(r=>String(r.guideId)===String(guideId));

  const knowledge={
    summaryShort:'',
    summaryStudy:'',
    concepts:[],
    formulas:[]
  };

  rows.forEach(r=>{
    const type=String(r.type||'');
    const content=String(r.content||'');

    if(type==='RESUMEN_CORTO')knowledge.summaryShort=content;
    if(type==='RESUMEN_ESTUDIO')knowledge.summaryStudy=content;

    if(type==='CONCEPTO'){
      knowledge.concepts.push({
        title:String(r.title||'Concepto'),
        explanation:content
      });
    }

    if(type==='FORMULA'){
      let obj={};

      try{
        obj=JSON.parse(content);
      }catch(e){
        obj={expression:content,use:''};
      }

      knowledge.formulas.push({
        name:String(r.title||'Fórmula'),
        expression:String(obj.expression||''),
        use:String(obj.use||'')
      });
    }
  });

  return {
    guide:{...guide,fileId:'',url:''},
    knowledge,
    questions:offlineQuestions(guide.moduleId,guideId,100)
  };
}

async function localRpc(name,...args){
  offlinePackage=offlinePackage||await offlineDbGet('package')||emptyOfflinePackage();

  switch(name){
    case 'getBootstrapData':
      return {
        access:{
          authorized:true,
          role:'owner',
          email:'bosquesiniestropaganus@gmail.com',
          name:'Alex Offline'
        },
        version:'3.1.0-offline',
        config:{
          location:String((offlinePackage.config||{}).location||'Angol'),
          kwh:Number((offlinePackage.config||{}).kwh||291),
          source:String((offlinePackage.config||{}).source||'Valor referencial'),
          updated:String(offlinePackage.exportedAt||''),
          normative:String((offlinePackage.config||{}).normative||'SEC · RIC vigentes'),
          aiModel:'offline'
        },
        ai:{configured:false,model:'offline'},
        guides:(offlinePackage.guides||[]).map(g=>({...g,fileId:'',url:''})),
        generatedQuestions:(offlinePackage.questions||[]).length,
        quizRecords:JSON.parse(localStorage.getItem(OFFLINE_QUIZ_HISTORY_KEY)||'[]').length,
        progress:buildOfflineProgress()
      };

    case 'getGuideStudyData':
      return offlineGuideStudy(args[0]);

    case 'getGeneratedQuestions':
      return offlineQuestions(args[0],args[1],args[2]);

    case 'recordQuizResult':{
      const p=args[0]||{};
      const map=offlineProgressMap();
      const key=String(p.moduleId||'')+'|'+String(p.topic||'General');
      const old=map[key]||{
        moduleId:String(p.moduleId||''),
        topic:String(p.topic||'General'),
        attempts:0,
        correct:0,
        incorrect:0,
        last:''
      };

      old.attempts++;
      if(p.correct)old.correct++;
      else old.incorrect++;
      old.last=new Date().toISOString();
      map[key]=old;
      localStorage.setItem(OFFLINE_PROGRESS_KEY,JSON.stringify(map));

      let history=[];

      try{
        history=JSON.parse(localStorage.getItem(OFFLINE_QUIZ_HISTORY_KEY)||'[]');
      }catch(e){}

      history.push({
        ...p,
        at:new Date().toISOString()
      });

      if(history.length>1000)history=history.slice(-1000);
      localStorage.setItem(OFFLINE_QUIZ_HISTORY_KEY,JSON.stringify(history));
      return {ok:true};
    }

    case 'getProgressSummary':
      return buildOfflineProgress();

    case 'saveCubicacion':{
      let items=[];

      try{
        items=JSON.parse(localStorage.getItem(OFFLINE_CUB_KEY)||'[]');
      }catch(e){}

      items.push({
        ...(args[0]||{}),
        createdAt:new Date().toISOString()
      });

      if(items.length>500)items=items.slice(-500);
      localStorage.setItem(OFFLINE_CUB_KEY,JSON.stringify(items));
      return {ok:true};
    }

    case 'saveEnergySettings':{
      const [location,value,source]=args;
      offlinePackage.config=offlinePackage.config||{};
      offlinePackage.config.location=String(location||'Angol');
      offlinePackage.config.kwh=Number(value||291);
      offlinePackage.config.source=String(source||'Valor local');
      await offlineDbSet('package',offlinePackage);

      return {
        ok:true,
        location:offlinePackage.config.location,
        kwh:offlinePackage.config.kwh,
        source:offlinePackage.config.source,
        updated:new Date().toISOString()
      };
    }

    case 'summarizeModule':{
      const moduleId=String(args[0]||'');
      const guideMap=new Map(
        (offlinePackage.guides||[])
          .filter(g=>String(g.moduleId)===moduleId)
          .map(g=>[String(g.id),g])
      );

      const rows=(offlinePackage.knowledge||[])
        .filter(r=>String(r.moduleId)===moduleId)
        .filter(r=>['RESUMEN_ESTUDIO','RESUMEN_CORTO'].includes(String(r.type)));

      if(!rows.length){
        throw new Error('No hay resúmenes procesados de este ramo en el paquete offline.');
      }

      let summary='# Repaso offline del ramo\n\n';

      rows.forEach(r=>{
        const g=guideMap.get(String(r.guideId));
        summary+=`## ${g?g.title:(r.source||'Guía')}\n\n${String(r.content||'')}\n\n---\n\n`;
      });

      return {ok:true,summary};
    }

    case 'listAuthorizedUsers':
      return [];

    case 'getAiStatus':
      return {configured:false,model:'offline'};

    case 'testGeminiConnection':
    case 'saveGeminiApiKey':
    case 'clearGeminiApiKey':
    case 'analyzeGuide':
    case 'processModuleGuides':
    case 'uploadStudyFile':
    case 'deleteGuide':
    case 'askGuide':
    case 'addAuthorizedUser':
    case 'removeAuthorizedUser':
      throw new Error('Esta función requiere internet. Usa Alex Electric Toolbox Online.');

    default:
      throw new Error('Función no disponible en modo offline: '+name);
  }
}

function rawRpc(name,...args){
  return localRpc(name,...args);
}

function rpc(name,...args){
  return localRpc(name,...args);
}

function setAccessUI(access){
  remote.access=access||{authorized:false,role:'guest',email:''};
  const ok=!!remote.access.authorized;
  document.getElementById('accessGate').classList.toggle('hidden',ok);
  document.getElementById('appShell').classList.toggle('hidden',!ok);
  document.body.classList.toggle('companion',ok&&remote.access.role!=='owner');
  const badge=document.getElementById('accessUserBadge');
  if(badge){
    badge.style.display=ok?'inline':'none';
    badge.textContent=ok?(remote.access.role==='owner'?'Propietario':remote.access.email):'';
  }
}

async function loginAccess(){
  const email=document.getElementById('accessEmail').value.trim().toLowerCase();
  const pin=document.getElementById('accessPin').value.trim();
  const btn=document.getElementById('accessBtn');

  if(!email||!pin){
    return out('accessStatus','Ingresa correo y PIN.','bad');
  }

  setBusy(btn,true,'Verificando…');
  out('accessStatus','<span class="loader"></span> Verificando acceso…');

  try{
    const access=await rawRpc('authorizeAccess',email,pin);

    if(!access||!access.authorized||!access.token){
      throw new Error('No se pudo crear una sesión autorizada.');
    }

    accessToken=access.token;
    localStorage.setItem(ACCESS_TOKEN_KEY,accessToken);

    document.getElementById('accessPin').value='';
    setAccessUI(access);
    await bootstrapAuthorized();

  }catch(e){
    accessToken='';
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    out('accessStatus',esc(e.message),'bad');

  }finally{
    setBusy(btn,false);
  }
}

async function logoutCurrentAccess(){
  if(!confirm('¿Cerrar el acceso en este dispositivo?'))return;

  try{
    if(accessToken){
      await rawRpc('logoutAccess',accessToken);
    }
  }catch(e){}

  accessToken='';
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(ACCESS_EMAIL_KEY);
  location.reload();
}

async function loadAuthorizedUsers(){
  const box=document.getElementById('authorizedUsersList');
  if(!box)return;

  try{
    const users=await rpc('listAuthorizedUsers');
    renderAuthorizedUsers(users);
  }catch(e){
    out('authorizedUsersList',esc(e.message),'bad');
  }
}

function renderAuthorizedUsers(users){
  const box=document.getElementById('authorizedUsersList');
  if(!box)return;

  if(!users||!users.length){
    box.innerHTML='No hay usuarios adicionales.';
    return;
  }

  box.className='result';
  box.innerHTML=users.map(u=>`
    <div class="user-row">
      <div>
        <strong>${esc(u.name||'Usuario')}</strong>
        <small>${esc(u.email)}</small>
      </div>
      <button class="btn red" onclick="removeAuthorizedUserUi('${encodeURIComponent(u.email)}')">Eliminar</button>
    </div>
  `).join('');
}

async function addAuthorizedUserUi(){
  const name=document.getElementById('newUserName').value.trim();
  const email=document.getElementById('newUserEmail').value.trim().toLowerCase();
  const pin=document.getElementById('newUserPin').value.trim();

  if(!email||!pin)return toast('Ingresa correo y PIN');

  try{
    const r=await rpc('addAuthorizedUser',name,email,pin);
    document.getElementById('newUserName').value='';
    document.getElementById('newUserEmail').value='';
    document.getElementById('newUserPin').value='';
    renderAuthorizedUsers(r.users);
    toast('Usuario autorizado');
  }catch(e){
    toast(e.message);
  }
}

async function removeAuthorizedUserUi(encodedEmail){
  const email=decodeURIComponent(encodedEmail);

  if(!confirm(`¿Eliminar el acceso de ${email}?`))return;

  try{
    const r=await rpc('removeAuthorizedUser',email);
    renderAuthorizedUsers(r.users);
    toast('Acceso eliminado');
  }catch(e){
    toast(e.message);
  }
}

function setBusy(btn,on,label){
  if(!btn)return;
  if(on){
    btn.dataset.old=btn.innerHTML;
    btn.disabled=true;
    btn.innerHTML='<span class="loader"></span> '+(label||'Procesando…');
  }else{
    btn.disabled=false;
    btn.innerHTML=btn.dataset.old||'Listo';
  }
}

function showView(id){
  document.querySelectorAll('.view').forEach(x=>x.classList.toggle('active',x.id===id));
  document.querySelectorAll('.nav').forEach(x=>x.classList.toggle('active',x.dataset.view===id));
  if(id==='study'){renderStudy();renderGuides()}
  if(id==='semester')renderSemester();
  if(id==='settings')renderSettings();
  window.scrollTo({top:0,behavior:'smooth'});
}

function openCalc(name){
  showView('calculators');
  document.querySelectorAll('.calc-panel').forEach(x=>x.style.display=x.id==='calc-'+name?'block':'none');
  document.querySelectorAll('#calcTabs .tab').forEach(x=>x.classList.toggle('active',x.dataset.calc===name));
  const names={ohm:'Ley de Ohm',power:'Potencia AC',resistors:'Resistencias',divider:'Divisores',energy:'Consumo y costo',area:'Metros cuadrados',takeoff:'Cubicación eléctrica',drop:'Caída de tensión',concentric:'Cuadro de carga + cable concéntrico',rlc:'RLC en CA',transformer:'Transformador',awg:'AWG ↔ mm²',frequency:'Frecuencia',motor:'Motor',pf:'Factor de potencia'};
  document.getElementById('calcTitle').textContent=names[name]||'Herramientas eléctricas';
}
document.getElementById('calcTabs').addEventListener('click',e=>{const b=e.target.closest('[data-calc]');if(b)openCalc(b.dataset.calc)});

function calcOhm(){
  let V=v('ohmV'),I=v('ohmI'),R=v('ohmR'),P=v('ohmP');
  const vals=[V,I,R,P].filter(Number.isFinite).length;
  if(vals<2)return out('ohmResult','Ingresa al menos dos valores conocidos.','bad');
  if(!Number.isFinite(V)){if(good(I,R))V=I*R;else if(good(P,I)&&I!==0)V=P/I;else if(good(P,R))V=Math.sqrt(P*R)}
  if(!Number.isFinite(I)){if(good(V,R)&&R!==0)I=V/R;else if(good(P,V)&&V!==0)I=P/V;else if(good(P,R)&&R!==0)I=Math.sqrt(P/R)}
  if(!Number.isFinite(R)){if(good(V,I)&&I!==0)R=V/I;else if(good(V,P)&&P!==0)R=V*V/P}
  if(!Number.isFinite(P)&&good(V,I))P=V*I;
  if(!good(V,I,R,P))return out('ohmResult','No pude resolver con esos datos. Revisa ceros y valores.','bad');
  out('ohmResult',`<strong>V:</strong> ${f(V)} V · <strong>I:</strong> ${f(I)} A<br><strong>R:</strong> ${f(R)} Ω · <strong>P:</strong> ${f(P)} W`,'good')
}
function calcPower(){
  const ph=document.getElementById('pSystem').value,V=v('pV'),I=v('pI'),pf=v('pPF');
  if(!good(V,I,pf)||V<=0||I<0||pf<=0||pf>1)return out('pResult','Revisa V, I y factor de potencia (0–1).','bad');
  const S=(ph==='3'?Math.sqrt(3):1)*V*I,P=S*pf,Q=Math.sqrt(Math.max(0,S*S-P*P));
  out('pResult',`<strong>P:</strong> ${f(P/1000)} kW<br><strong>S:</strong> ${f(S/1000)} kVA · <strong>Q:</strong> ${f(Q/1000)} kVAr`,'good')
}
function calcResistors(){
  const a=document.getElementById('resValues').value.split(/[,;\s]+/).map(Number).filter(x=>Number.isFinite(x)&&x>0);
  if(!a.length)return out('resResult','Ingresa resistencias positivas.','bad');
  const mode=document.getElementById('resMode').value;
  const R=mode==='series'?a.reduce((s,x)=>s+x,0):1/a.reduce((s,x)=>s+1/x,0);
  out('resResult',`<strong>Req:</strong> ${f(R)} Ω · ${mode==='series'?'serie':'paralelo'}`,'good')
}
function calcMixed(){const a=v('mixR1'),b=v('mixR2'),c=v('mixR3');if(!good(a,b,c)||a<=0||b<=0||c<=0)return out('mixResult','Valores positivos requeridos.','bad');const p=b*c/(b+c);out('mixResult',`R2 || R3 = ${f(p)} Ω<br><strong>Req = ${f(a+p)} Ω</strong>`,'good')}
function calcVoltageDivider(){const Vin=v('dvVin'),a=v('dvR1'),b=v('dvR2');if(!good(Vin,a,b)||a<=0||b<=0)return out('dvResult','Revisa los valores.','bad');out('dvResult',`<strong>Vout:</strong> ${f(Vin*b/(a+b))} V`,'good')}
function calcCurrentDivider(){const It=v('diIt'),a=v('diR1'),b=v('diR2');if(!good(It,a,b)||a<=0||b<=0)return out('diResult','Revisa los valores.','bad');const i1=It*b/(a+b),i2=It*a/(a+b);out('diResult',`<strong>I1:</strong> ${f(i1)} A · <strong>I2:</strong> ${f(i2)} A`,'good')}
function calcEnergy(){const P=v('ePower'),h=v('eHours'),d=v('eDays'),price=v('ePrice');if(!good(P,h,d,price)||P<0||h<0||d<0||price<0)return out('eResult','Revisa potencia, horas, días y tarifa.','bad');const kwh=P/1000*h*d,cost=kwh*price;out('eResult',`<strong>Consumo:</strong> ${f(kwh,2)} kWh<br><strong>Costo estimado:</strong> ${money(cost)}<br><small>${esc(remote.config.location)} · ${money(price)}/kWh</small>`,'good')}

let concentricRowSeq=0;

function addConcentricRow(data={}){
  const body=document.getElementById('ccLoadBody');
  if(!body)return;

  const id=++concentricRowSeq;
  const tr=document.createElement('tr');
  tr.dataset.row=id;
  tr.innerHTML=`
    <td><input class="cc-desc" placeholder="Ej: Alumbrado" value="${esc(data.desc||'')}"></td>
    <td><input class="cc-qty" type="number" min="0" step="1" value="${Number.isFinite(Number(data.qty))?Number(data.qty):1}"></td>
    <td><input class="cc-w" type="number" min="0" step="any" value="${Number.isFinite(Number(data.w))?Number(data.w):''}" placeholder="W"></td>
    <td><input class="cc-fd" type="number" min="0" max="100" step="any" value="${Number.isFinite(Number(data.fd))?Number(data.fd):100}"></td>
    <td class="cc-installed cc-total">0 W</td>
    <td class="cc-demand cc-total">0 W</td>
    <td><button class="btn red cc-remove" onclick="removeConcentricRow(${id})">×</button></td>
  `;

  body.appendChild(tr);

  tr.querySelectorAll('input').forEach(inp=>{
    inp.addEventListener('input',()=>updateConcentricRow(tr));
  });

  updateConcentricRow(tr);
}

function removeConcentricRow(id){
  const row=document.querySelector(`#ccLoadBody tr[data-row="${id}"]`);
  if(row)row.remove();
  if(!document.querySelector('#ccLoadBody tr'))addConcentricRow();
}

function resetConcentricRows(){
  const body=document.getElementById('ccLoadBody');
  if(!body)return;
  body.innerHTML='';
  concentricRowSeq=0;
  addConcentricRow({desc:'Alumbrado',qty:1,fd:100});
  addConcentricRow({desc:'Enchufes',qty:1,fd:100});
  addConcentricRow({desc:'Carga especial',qty:1,fd:100});
  out('ccResult','Resultado: —');
}

function updateConcentricRow(tr){
  const qty=Number(tr.querySelector('.cc-qty').value||0);
  const watts=Number(tr.querySelector('.cc-w').value||0);
  const fd=Number(tr.querySelector('.cc-fd').value||0);

  const installed=Math.max(0,qty)*Math.max(0,watts);
  const demand=installed*Math.max(0,Math.min(100,fd))/100;

  tr.querySelector('.cc-installed').textContent=`${f(installed,0)} W`;
  tr.querySelector('.cc-demand').textContent=`${f(demand,0)} W`;

  return {installed,demand};
}

function getConcentricRows(){
  return [...document.querySelectorAll('#ccLoadBody tr')].map(tr=>{
    const x=updateConcentricRow(tr);
    return {
      desc:tr.querySelector('.cc-desc').value.trim(),
      qty:Number(tr.querySelector('.cc-qty').value||0),
      watts:Number(tr.querySelector('.cc-w').value||0),
      fd:Number(tr.querySelector('.cc-fd').value||0),
      installed:x.installed,
      demand:x.demand
    };
  });
}

function nextConcentricBreaker(currentA){
  const steps=[
    {a:6,kw:1,kva:1.3,type:'A-6'},
    {a:10,kw:2,kva:2.2,type:'A-6'},
    {a:16,kw:3,kva:3.5,type:'A-6'},
    {a:20,kw:4,kva:4.4,type:'A-6'},
    {a:25,kw:5,kva:5.5,type:'A-6'},
    {a:30,kw:6,kva:6.6,type:'A-9'},
    {a:32,kw:6.5,kva:7.0,type:'A-9'},
    {a:35,kw:7,kva:7.7,type:'A-9'},
    {a:40,kw:8,kva:8.8,type:'A-9'},
    {a:50,kw:10,kva:11,type:'A-16'},
    {a:63,kw:13,kva:13.8,type:'A-16'}
  ];
  return steps.find(x=>currentA<=x.a)||null;
}

function selectFrontelConcentric(currentA,lengthM){
  if(currentA<=25&&lengthM<=10){
    return {ok:true,cable:'2 × 4 mm²',maxA:25,maxL:10};
  }
  if(currentA<=40&&lengthM<=30){
    return {ok:true,cable:'2 × 6 mm²',maxA:40,maxL:30};
  }
  return {ok:false,cable:'Fuera de tabla A-6/A-9',maxA:40,maxL:30};
}

function calcConcentricLoad(){
  const voltage=v('ccVoltage');
  const pf=v('ccPF');
  const length=v('ccLength');
  const reserve=v('ccReserve');

  if(!good(voltage,pf,length,reserve)||voltage<=0||pf<=0||pf>1||length<0||reserve<0){
    return out('ccResult','Revisa voltaje, factor de potencia, longitud y reserva.','bad');
  }

  const rows=getConcentricRows();
  if(!rows.length)return out('ccResult','Agrega al menos una carga.','bad');

  const installed=rows.reduce((s,x)=>s+x.installed,0);
  const demanded=rows.reduce((s,x)=>s+x.demand,0);

  if(demanded<=0){
    return out('ccResult','Ingresa la potencia de al menos una carga.','bad');
  }

  const demandWithReserve=demanded*(1+reserve/100);
  const current=demandWithReserve/(voltage*pf);
  const breaker=nextConcentricBreaker(current);
  const frontel=selectFrontelConcentric(current,length);

  let statusClass='good';
  let empalmeHtml='';

  if(breaker){
    empalmeHtml=`
      <div class="cc-summary-card">
        <small>Escalón normalizado RIC N°01</small>
        <strong>${breaker.a} A · ${breaker.type}</strong>
        <div class="muted">${breaker.kw} kW nominal · ${breaker.kva} kVA máx.</div>
      </div>`;
  }else{
    statusClass='bad';
    empalmeHtml=`
      <div class="cc-summary-card">
        <small>Empalme normalizado</small>
        <strong>Sobre 63 A</strong>
        <div class="muted">Requiere revisar alternativa de empalme/proyecto con distribuidora.</div>
      </div>`;
  }

  let cableHtml='';
  if(frontel.ok){
    cableHtml=`
      <div class="cc-summary-card">
        <small>Cable concéntrico Frontel A-6/A-9</small>
        <strong>${frontel.cable}</strong>
        <div class="muted">Tabla: hasta ${frontel.maxA} A · longitud máx. ${frontel.maxL} m.</div>
      </div>`;
  }else{
    statusClass='bad';
    cableHtml=`
      <div class="cc-summary-card">
        <small>Cable concéntrico Frontel</small>
        <strong>Fuera del rango 2×4 / 2×6 mm²</strong>
        <div class="muted">La carga o longitud excede la tabla A-6/A-9 usada por esta calculadora.</div>
      </div>`;
  }

  const rowSummary=rows
    .filter(x=>x.installed>0)
    .map(x=>`${esc(x.desc||'Carga')}: ${f(x.demand,0)} W demandados`)
    .join('<br>');

  out(
    'ccResult',
    `
      <div class="cc-summary-grid">
        <div class="cc-summary-card">
          <small>Potencia instalada</small>
          <strong>${f(installed/1000,3)} kW</strong>
        </div>
        <div class="cc-summary-card">
          <small>Potencia demandada ${reserve?'+ reserva '+f(reserve,1)+'%':''}</small>
          <strong>${f(demandWithReserve/1000,3)} kW</strong>
        </div>
        <div class="cc-summary-card">
          <small>Corriente calculada</small>
          <strong>${f(current,2)} A</strong>
          <div class="muted">${f(voltage,0)} V · FP ${f(pf,2)}</div>
        </div>
        <div class="cc-summary-card">
          <small>Longitud acometida</small>
          <strong>${f(length,1)} m</strong>
        </div>
        ${empalmeHtml}
        ${cableHtml}
      </div>
      <div style="margin-top:12px"><strong>Detalle del cuadro:</strong><br>${rowSummary||'—'}</div>
      <div style="margin-top:10px" class="muted">
        Resultado preliminar para empalme monofásico. Verificar factibilidad, potencia a contratar, protección, material aprobado y norma vigente de Frontel/SEC antes de ejecutar.
      </div>
    `,
    statusClass
  );
}

function calcVoltageDrop(){const sys=document.getElementById('vdSystem').value,rho=Number(document.getElementById('vdMaterial').value),V=v('vdV'),I=v('vdI'),L=v('vdL'),S=v('vdS');if(!good(rho,V,I,L,S)||V<=0||I<0||L<0||S<=0)return out('vdResult','Revisa los datos.','bad');const k=sys==='3'?Math.sqrt(3):2,dv=k*rho*L*I/S,pct=dv/V*100;out('vdResult',`<strong>ΔV ≈ ${f(dv)} V</strong><br>Caída porcentual ≈ ${f(pct,2)} %`,'good')}
function calcRLC(){const V=v('rlcV'),freq=v('rlcF'),R=v('rlcR'),L=v('rlcL'),Cu=v('rlcC');if(!good(V,freq,R,L,Cu)||freq<=0||R<0||L<0||Cu<=0)return out('rlcResult','Completa valores válidos; C debe ser mayor que 0.','bad');const C=Cu*1e-6,XL=2*Math.PI*freq*L,XC=1/(2*Math.PI*freq*C),X=XL-XC,Z=Math.sqrt(R*R+X*X),I=Z?V/Z:Infinity,ang=Math.atan2(X,R)*180/Math.PI;out('rlcResult',`XL=${f(XL)} Ω · XC=${f(XC)} Ω<br><strong>Z=${f(Z)} Ω · I=${f(I)} A</strong><br>Ángulo=${f(ang,2)}°`,'good')}
function calcTransformer(){const V1=v('trV1'),V2=v('trV2');if(!good(V1,V2)||V1===0||V2===0)return out('trResult','V1 y V2 son obligatorios y distintos de cero.','bad');const ratio=V1/V2;let html=`<strong>V1/V2 = ${f(ratio)}</strong>`;const N1=v('trN1'),N2=v('trN2'),I1=v('trI1'),I2=v('trI2');if(Number.isFinite(N1)&&!Number.isFinite(N2))html+=`<br>N2 ≈ ${f(N1/ratio)} espiras`;if(Number.isFinite(N2)&&!Number.isFinite(N1))html+=`<br>N1 ≈ ${f(N2*ratio)} espiras`;if(Number.isFinite(I1)&&!Number.isFinite(I2))html+=`<br>I2 ≈ ${f(I1*ratio)} A`;if(Number.isFinite(I2)&&!Number.isFinite(I1))html+=`<br>I1 ≈ ${f(I2/ratio)} A`;out('trResult',html,'good')}
function initAwg(){const s=document.getElementById('awgSelect');s.innerHTML=awg.map(x=>`<option value="${x[0]}">${x[0]<0?'0'.repeat(Math.abs(x[0])+1):x[0]} AWG</option>`).join('');document.getElementById('awgTable').innerHTML=awg.map(x=>`<tr><td>${x[0]<0?'0'.repeat(Math.abs(x[0])+1):x[0]}</td><td>${x[1]}</td><td>${x[2]}</td></tr>`).join('');s.onchange=()=>{const r=awg.find(x=>String(x[0])===s.value);document.getElementById('awgMM').value=r[1]+' mm²';out('awgInfo',`Diámetro desnudo aproximado: <strong>${r[2]} mm</strong>`,'good')};s.onchange()}
function calcFrequency(){const F=v('fqF'),T=v('fqT');if(Number.isFinite(F)&&F>0)return out('fqResult',`T = <strong>${f(1/F,6)} s</strong> (${f(1000/F,3)} ms)`,'good');if(Number.isFinite(T)&&T>0)return out('fqResult',`f = <strong>${f(1/T,3)} Hz</strong>`,'good');out('fqResult','Ingresa frecuencia o período.','bad')}
function calcSyncSpeed(){const F=v('nsF'),P=v('nsP');if(!good(F,P)||F<=0||P<=0)return out('nsResult','Revisa frecuencia y polos.','bad');out('nsResult',`Velocidad sincrónica: <strong>${f(120*F/P,0)} rpm</strong>`,'good')}
function calcMotor(){const ph=document.getElementById('mPhase').value,k=v('mKW'),V=v('mV'),eff=v('mEff'),pf=v('mPF');if(!good(k,V,eff,pf)||k<0||V<=0||eff<=0||eff>1||pf<=0||pf>1)return out('mResult','Revisa potencia, voltaje, eficiencia y FP.','bad');const Pin=k*1000/eff,I=ph==='3'?Pin/(Math.sqrt(3)*V*pf):Pin/(V*pf);out('mResult',`<strong>Potencia eléctrica estimada:</strong> ${f(Pin/1000)} kW<br><strong>Corriente estimada:</strong> ${f(I)} A`,'good')}
function calcPF(){const P=v('pfKW'),a=v('pfInitial'),b=v('pfTarget');if(!good(P,a,b)||a>1||b>1||a<=0||b<=a)return out('pfResult','El FP objetivo debe ser mayor que el inicial y ambos entre 0 y 1.','bad');const p1=Math.acos(a),p2=Math.acos(b),Q=P*(Math.tan(p1)-Math.tan(p2));out('pfResult',`<strong>Compensación:</strong> ${f(Q)} kVAr<br><strong>φ inicial:</strong> ${f(p1*180/Math.PI,2)}° · <strong>φ objetivo:</strong> ${f(p2*180/Math.PI,2)}°`,'good')}

function renderAreaFields(){const s=document.getElementById('areaShape').value,a=document.getElementById('areaALabel'),b=document.getElementById('areaBLabel');b.style.display='block';if(s==='rect'){a.childNodes[0].nodeValue='Largo m';b.childNodes[0].nodeValue='Ancho m'}if(s==='square'){a.childNodes[0].nodeValue='Lado m';b.style.display='none'}if(s==='tri'){a.childNodes[0].nodeValue='Base m';b.childNodes[0].nodeValue='Altura m'}if(s==='circle'){a.childNodes[0].nodeValue='Radio m';b.style.display='none'}}
function getArea(){const s=document.getElementById('areaShape').value,A=v('areaA'),B=v('areaB');if(!Number.isFinite(A)||A<0)return NaN;if((s==='rect'||s==='tri')&&(!Number.isFinite(B)||B<0))return NaN;if(s==='rect')return A*B;if(s==='square')return A*A;if(s==='tri')return A*B/2;if(s==='circle')return Math.PI*A*A;return NaN}
function calcArea(add){const x=getArea();if(!Number.isFinite(x))return out('areaResult','Completa dimensiones válidas.','bad');out('areaResult',`Área = <strong>${f(x,3)} m²</strong>`,'good');if(add){areaSum+=x;document.getElementById('areaTotal').textContent=f(areaSum,3)}}
function resetAreaTotal(){areaSum=0;document.getElementById('areaTotal').textContent='0';out('areaResult','Área: —')}

function parseRuns(text){const nums=[];String(text||'').split(/\n/).forEach(line=>{const m=line.match(/(?:=|:)?\s*(-?\d+(?:[.,]\d+)?)\s*m?\s*$/i);if(m){nums.push(Number(m[1].replace(',','.')))}else{line.split(/[,;]+/).forEach(x=>{const n=Number(x.trim().replace(',','.'));if(Number.isFinite(n))nums.push(n)})}});return nums.filter(n=>n>=0)}
function calcTakeoff(){
  const L=v('cubL'),W=v('cubW'),waste=v('cubWaste'),cond=v('cubConductors');
  if(!good(L,W,waste,cond)||L<0||W<0||waste<0||cond<1)return out('cubResult','Revisa dimensiones, merma y cantidad de conductores.','bad');
  const runs=parseRuns(document.getElementById('cubRuns').value);
  if(!runs.length)return out('cubResult','Ingresa al menos un recorrido o tramo en metros.','bad');
  const route=runs.reduce((s,x)=>s+x,0),factor=1+waste/100,conduit=route*factor,wire=route*cond*factor;
  const lights=Math.max(0,Math.floor(v('cubLights')||0)),sw=Math.max(0,Math.floor(v('cubSwitches')||0)),outlets=Math.max(0,Math.floor(v('cubOutlets')||0)),boxes=Math.max(0,Math.floor(v('cubBoxes')||0)),circuits=Math.max(1,Math.floor(v('cubCircuits')||1));
  const area=L*W;
  lastTakeoff={project:document.getElementById('cubProject').value||'Sin nombre',type:document.getElementById('cubType').value,location:document.getElementById('cubLocation').value||remote.config.location,area,waste,notes:document.getElementById('cubNotes').value,data:{length:L,width:W,runs,route,conductorsPerRoute:cond,lights,switches:sw,outlets,boxes,circuits},result:{routeM:route,conduitWithWasteM:conduit,totalConductorWithWasteM:wire,points:lights+sw+outlets,boxes,circuits}};
  document.getElementById('saveCubBtn').disabled=false;
  out('cubResult',`<strong>Área:</strong> ${f(area,2)} m²<br><strong>Recorridos:</strong> ${f(route,2)} m<br><strong>Canalización con ${f(waste,1)}%:</strong> ${f(conduit,2)} m<br><strong>Conductor total (${cond} por recorrido) con reserva:</strong> ${f(wire,2)} m<br><strong>Puntos declarados:</strong> ${lights+sw+outlets} · <strong>Cajas derivación:</strong> ${boxes}<br><strong>Circuitos declarados:</strong> ${circuits}<br><small>No se asigna sección ni calibre de protección automáticamente.</small>`,'good')
}
async function saveTakeoff(){if(!lastTakeoff)return;const btn=document.getElementById('saveCubBtn');setBusy(btn,true,'Guardando…');try{await rpc('saveCubicacion',lastTakeoff);toast('Cubicación guardada en la planilla')}catch(e){toast(e.message)}finally{setBusy(btn,false)}}

function renderHomeModules(){document.getElementById('homeModules').innerHTML=modules.map(m=>`<div class="modulecard" onclick="activeModule='${m.id}';state.lastModule='${m.id}';save();showView('study')" style="cursor:pointer"><div><b>${m.icon} ${esc(m.short)}</b><small>${m.code}</small></div><span class="pill">Estudiar</span></div>`).join('')}
function tkey(m,i){return m+':'+i}
function renderStudy(){
  document.getElementById('studyChips').innerHTML=modules.map(m=>`<button class="chip ${m.id===activeModule?'active':''}" onclick="activeModule='${m.id}';state.lastModule='${m.id}';save();renderStudy();renderGuides()">${m.icon} ${esc(m.short)}</button>`).join('');
  const m=modules.find(x=>x.id===activeModule)||modules[0],done=m.topics.filter((_,i)=>state.progress[tkey(m.id,i)]).length;
  document.getElementById('moduleStudy').innerHTML=`<article class="studybox"><p class="kicker">${m.code}</p><h3>${m.icon} ${esc(m.name)}</h3><p class="muted">${done}/${m.topics.length} temas base repasados.</p>${m.topics.map((t,i)=>`<label class="topic"><input type="checkbox" ${state.progress[tkey(m.id,i)]?'checked':''} onchange="toggleTopic('${m.id}',${i},this.checked)"><span><b>${esc(t[0])}</b><small>${esc(t[1])}</small></span></label>`).join('')}</article><div class="panel"><h3>Formulario inicial</h3>${m.formulas.map(x=>`<div class="formula"><code>${esc(x[1])}</code><small>${esc(x[0])}</small></div>`).join('')}</div><div class="panel"><h3>Mis apuntes</h3><textarea id="moduleNotes" placeholder="Dudas, apuntes, ejemplos...">${esc(state.notes[m.id]||'')}</textarea><div class="btnrow"><button class="btn green" onclick="saveNotes('${m.id}')">Guardar apuntes</button><button class="btn secondary" onclick="document.getElementById('quizModule').value='${m.id}';showView('quiz')">Practicar quiz</button></div></div>`;
  renderStudyProgress();
}
function toggleTopic(m,i,c){state.progress[tkey(m,i)]=c;save();renderStudyProgress()}
function saveNotes(m){state.notes[m]=document.getElementById('moduleNotes').value;save();toast('Apuntes guardados')}
function renderStudyProgress(){const total=modules.reduce((s,m)=>s+m.topics.length,0),done=modules.reduce((s,m)=>s+m.topics.filter((_,i)=>state.progress[tkey(m.id,i)]).length,0),p=total?Math.round(done/total*100):0;const b=document.getElementById('studyBar'),x=document.getElementById('studyPct');if(b)b.style.width=p+'%';if(x)x.textContent=p+'%';renderStats()}
function renderStats(){const total=modules.reduce((s,m)=>s+m.topics.length,0),done=modules.reduce((s,m)=>s+m.topics.filter((_,i)=>state.progress[tkey(m.id,i)]).length,0);document.getElementById('homeProgress').textContent=(total?Math.round(done/total*100):0)+'%';document.getElementById('homeQuiz').textContent=(state.quizCorrect||0)+'/'+(state.quizTotal||0);document.getElementById('homeGuides').textContent=remote.guides.length||0}

function guidePill(status){const s=String(status||'').toUpperCase();if(s==='PROCESADA')return '<span class="pill ok">Procesada</span>';if(s==='ERROR')return '<span class="pill bad">Error</span>';if(s==='PROCESANDO')return '<span class="pill warn">Procesando</span>';return '<span class="pill">Cargada</span>'}
function renderGuides(){
  const list=remote.guides.filter(g=>g.moduleId===activeModule);
  const box=document.getElementById('guideList');

  if(!list.length){
    box.innerHTML='<p class="muted">No hay guías offline en este ramo. Importa un paquete más reciente desde Ajustes.</p>';
    return;
  }

  box.innerHTML=list.map(g=>`
    <div class="guidecard">
      <div>
        <b>${esc(g.title)}</b>
        <small>${esc(g.fileName||'')} · ${esc(g.uploadedAt||'')}</small>
        <div class="guide-actions">
          <button class="btn green" onclick="studyGuide('${g.id}')">Estudiar</button>
          <button class="btn secondary" onclick="quizFromGuide('${g.id}')">Quiz</button>
        </div>
      </div>
      ${guidePill(g.status)}
    </div>
  `).join('');
}

async function uploadGuide(){const file=document.getElementById('guideFile').files[0],title=document.getElementById('guideTitle').value.trim();if(!file)return toast('Selecciona un archivo');if(file.size>25*1024*1024)return toast('El archivo supera 25 MB');const btn=document.getElementById('uploadGuideBtn');setBusy(btn,true,'Subiendo…');try{const b64=await fileToBase64(file);const m=modules.find(x=>x.id===activeModule);const res=await rpc('uploadStudyFile',{moduleId:activeModule,title:title||file.name,fileName:file.name,mimeType:file.type||'application/octet-stream',base64:b64});remote.guides.unshift(res.guide);document.getElementById('guideFile').value='';document.getElementById('guideTitle').value='';renderGuides();renderStats();toast('Guía guardada en Drive')}catch(e){toast(e.message)}finally{setBusy(btn,false)}}
function fileToBase64(file){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(String(r.result).split(',')[1]||'');r.onerror=reject;r.readAsDataURL(file)})}
async function processGuide(id,btn){if(!remote.ai.configured){toast('Primero configura tu Gemini API key en Ajustes');showView('settings');return}setBusy(btn,true,'Analizando…');try{const res=await rpc('analyzeGuide',id);const g=remote.guides.find(x=>x.id===id);if(g)g.status='PROCESADA';renderGuides();toast(`Listo: ${res.questions} preguntas creadas`)}catch(e){const g=remote.guides.find(x=>x.id===id);if(g)g.status='ERROR';renderGuides();toast(e.message)}finally{setBusy(btn,false)}}
async function processAllCurrentModule(btn){
  if(!remote.ai.configured){
    toast('Primero configura Gemini');
    return showView('settings');
  }

  const pending=remote.guides.filter(g=>{
    const s=String(g.status||'').toUpperCase();
    return g.moduleId===activeModule&&(!s||s==='CARGADA');
  });

  if(!pending.length){
    return toast('No hay guías pendientes de procesar en este ramo');
  }

  if(!confirm(`Se procesarán ${pending.length} guía(s) pendientes de este ramo. ¿Continuar?`))return;

  setBusy(btn,true,'Procesando…');
  const statusBox=document.getElementById('bulkProcessStatus');
  statusBox.style.display='block';

  let ok=0,failed=0;

  try{
    while(true){
      const r=await rpc('processModuleGuides',activeModule,3);
      ok+=Number(r.processed||0);
      failed+=Number(r.failed||0);

      (r.results||[]).forEach(item=>{
        const g=remote.guides.find(x=>x.id===item.id);
        if(g)g.status=item.ok?'PROCESADA':'ERROR';
      });

      renderGuides();

      statusBox.className='result';
      statusBox.innerHTML=`Procesadas: <strong>${ok}</strong> · Con error: <strong>${failed}</strong> · Pendientes: <strong>${r.remaining}</strong>`;

      if(!r.remaining)break;

      await new Promise(resolve=>setTimeout(resolve,700));
    }

    toast(`Proceso terminado: ${ok} guía(s) procesadas`);

  }catch(e){
    statusBox.className='result bad';
    statusBox.innerHTML=esc(e.message);
    toast(e.message);

  }finally{
    setBusy(btn,false);
  }
}

async function studyGuide(id){
  try{
    toast('Cargando guía…');
    const data=await rpc('getGuideStudyData',id);
    currentGuideId=id;
    document.getElementById('guideStudyTitle').textContent=data.guide.title;
    const k=data.knowledge;
    let html='';

    if(!k.summaryStudy&&!k.summaryShort){
      html='<p class="note">Esta guía todavía no tiene contenido procesado. Vuelve a Biblioteca y pulsa “Procesar IA”.</p>';
    }

    if(k.summaryShort){
      html+=`<h3>Resumen corto</h3>${renderMarkdown(k.summaryShort)}`;
    }

    if(k.summaryStudy){
      html+=`<h3>Resumen de estudio</h3>${renderMarkdown(k.summaryStudy)}`;
    }

    if(k.concepts.length){
      html+=`<h4>Conceptos importantes</h4><ul>${k.concepts.map(c=>`<li><strong>${esc(c.title)}:</strong> ${mdInline(c.explanation)}</li>`).join('')}</ul>`;
    }

    if(k.formulas.length){
      html+=`<h4>Fórmulas</h4>${k.formulas.map(x=>`<div class="formula"><code>${esc(x.expression)}</code><small>${esc(x.name)}<br>${esc(x.use)}</small></div>`).join('')}`;
    }

    html+=`<p class="muted">${data.questions.length} preguntas disponibles desde esta guía.</p><button class="btn green full" onclick="quizFromGuide('${id}')">Practicar esta guía</button>`;

    document.getElementById('guideStudyContent').innerHTML=html;
    out('guideAnswer','Respuesta: —');
    showView('guideStudy');

  }catch(e){
    toast(e.message);
  }
}

function nl2br(s){return esc(s).replace(/\n/g,'<br>')}

function mdInline(text){
  let s=esc(String(text||''));
  s=s.replace(/`([^`]+)`/g,'<code>$1</code>');
  s=s.replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>');
  s=s.replace(/__([^_]+)__/g,'<strong>$1</strong>');
  s=s.replace(/\*([^*\n]+)\*/g,'<em>$1</em>');
  return s;
}

function renderMarkdown(text){
  const lines=String(text||'').replace(/\r/g,'').split('\n');
  let html='',ul=false,ol=false,quote=false,codeBlock=false,codeLines=[];

  function closeLists(){
    if(ul){html+='</ul>';ul=false}
    if(ol){html+='</ol>';ol=false}
  }

  function closeQuote(){
    if(quote){html+='</blockquote>';quote=false}
  }

  for(const raw of lines){
    const line=raw.trimEnd();
    const t=line.trim();

    if(/^```/.test(t)){
      closeLists();closeQuote();
      if(!codeBlock){
        codeBlock=true;
        codeLines=[];
      }else{
        html+='<pre><code>'+esc(codeLines.join('\n'))+'</code></pre>';
        codeBlock=false;
        codeLines=[];
      }
      continue;
    }

    if(codeBlock){
      codeLines.push(raw);
      continue;
    }

    if(!t){
      closeLists();closeQuote();
      continue;
    }

    if(/^---+$/.test(t)||/^\*\*\*+$/.test(t)){
      closeLists();closeQuote();
      html+='<hr>';
      continue;
    }

    let m=t.match(/^(#{1,4})\s+(.+)$/);
    if(m){
      closeLists();closeQuote();
      const level=m[1].length;
      html+=`<h${level}>${mdInline(m[2])}</h${level}>`;
      continue;
    }

    m=t.match(/^>\s?(.*)$/);
    if(m){
      closeLists();
      if(!quote){html+='<blockquote>';quote=true}
      html+=`<p>${mdInline(m[1])}</p>`;
      continue;
    }else{
      closeQuote();
    }

    m=t.match(/^[-*+]\s+(.+)$/);
    if(m){
      if(ol){html+='</ol>';ol=false}
      if(!ul){html+='<ul>';ul=true}
      html+=`<li>${mdInline(m[1])}</li>`;
      continue;
    }

    m=t.match(/^\d+[.)]\s+(.+)$/);
    if(m){
      if(ul){html+='</ul>';ul=false}
      if(!ol){html+='<ol>';ol=true}
      html+=`<li>${mdInline(m[1])}</li>`;
      continue;
    }

    closeLists();
    html+=`<p>${mdInline(t)}</p>`;
  }

  if(codeBlock){
    html+='<pre><code>'+esc(codeLines.join('\n'))+'</code></pre>';
  }

  closeLists();
  closeQuote();

  return `<div class="markdown-body">${html}</div>`;
}
async function askCurrentGuide(){
  out(
    'guideAnswer',
    '<strong>Sin conexión:</strong> las preguntas nuevas a Gemini requieren internet. Puedes estudiar el resumen y hacer el quiz guardado.',
    'warn'
  );
}

async function summarizeCurrentModule(){if(!remote.ai.configured){toast('Configura la IA primero');return showView('settings')}try{toast('Creando resumen del ramo…');const r=await rpc('summarizeModule',activeModule);currentGuideId='';document.getElementById('guideStudyTitle').textContent='Resumen conjunto · '+modules.find(x=>x.id===activeModule).short;document.getElementById('guideStudyContent').innerHTML=`<h3>Resumen de todas las guías procesadas</h3>${renderMarkdown(r.summary)}`;showView('guideStudy')}catch(e){toast(e.message)}}
async function removeGuide(id,title){if(!confirm(`¿Eliminar "${title}" de la biblioteca y enviar su archivo a la papelera?`))return;try{await rpc('deleteGuide',id);remote.guides=remote.guides.filter(x=>x.id!==id);renderGuides();renderStats();toast('Guía eliminada')}catch(e){toast(e.message)}}

function populateQuiz(){const e=document.getElementById('quizModule');e.innerHTML='<option value="all">Todos los ramos</option>'+modules.map(m=>`<option value="${m.id}">${esc(m.short)}</option>`).join('')}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
async function startQuiz(){const m=document.getElementById('quizModule').value,n=Number(document.getElementById('quizCount').value);document.getElementById('quizArea').innerHTML='<div class="panel"><span class="loader"></span> Preparando preguntas…</div>';try{let generated=[];try{generated=await rpc('getGeneratedQuestions',m,'',100)}catch(e){}let pool=[...quizBank.filter(x=>m==='all'||x.m===m),...generated];pool=shuffle(pool).slice(0,Math.min(n,pool.length));quizState={items:pool,index:0,score:0,answered:false};renderQuizQuestion()}catch(e){toast(e.message)}}
async function quizFromGuide(id){try{const g=remote.guides.find(x=>x.id===id);if(!g)return;const items=await rpc('getGeneratedQuestions',g.moduleId,id,100);if(!items.length)return toast('Primero procesa esta guía para crear preguntas');quizState={items:shuffle(items),index:0,score:0,answered:false};document.getElementById('quizModule').value=g.moduleId;showView('quiz');renderQuizQuestion()}catch(e){toast(e.message)}}
function renderQuizQuestion(){const area=document.getElementById('quizArea');if(!quizState||!quizState.items.length){area.innerHTML='<div class="panel"><p class="muted">No hay preguntas disponibles. Procesa una guía para ampliar el banco.</p></div>';return}if(quizState.index>=quizState.items.length){area.innerHTML=`<div class="panel"><p class="kicker">Resultado</p><h3>${quizState.score}/${quizState.items.length}</h3><p class="big-number">${Math.round(quizState.score/quizState.items.length*100)}%</p><button class="btn full" onclick="startQuiz()">Nuevo quiz</button></div>`;return}const q=quizState.items[quizState.index],m=modules.find(x=>x.id===q.m);area.innerHTML=`<div class="panel"><p class="kicker">Pregunta ${quizState.index+1} de ${quizState.items.length}</p><p class="muted">${m?esc(m.short):''} · ${esc(q.topic||'General')} · ${q.source==='guia'?'Guía':'Base'}</p><h3>${esc(q.q)}</h3><div id="quizOpts">${q.o.map((x,i)=>`<button class="quizopt" onclick="answerQuiz(${i})">${String.fromCharCode(65+i)}. ${esc(x)}</button>`).join('')}</div><div id="quizExplain"></div></div>`}
function answerQuiz(i){if(!quizState||quizState.answered)return;quizState.answered=true;const q=quizState.items[quizState.index],ok=i===q.a;document.querySelectorAll('#quizOpts .quizopt').forEach((b,j)=>{if(j===q.a)b.classList.add('correct');else if(j===i)b.classList.add('wrong');b.disabled=true});if(ok)quizState.score++;state.quizTotal=(state.quizTotal||0)+1;state.quizCorrect=(state.quizCorrect||0)+(ok?1:0);save();renderStats();document.getElementById('quizExplain').innerHTML=`<div class="result ${ok?'good':'bad'}"><strong>${ok?'Correcto':'Incorrecto'}</strong><br>${esc(q.e||'')}<div style="margin-top:9px"><button class="btn" onclick="nextQuiz()">Siguiente</button></div></div>`;rpc('recordQuizResult',{moduleId:q.m,guideId:q.guideId||'',questionId:q.id||'',correct:ok,userAnswer:q.o[i]||'',correctAnswer:q.o[q.a]||'',topic:q.topic||'General'}).catch(()=>{})}
function nextQuiz(){quizState.index++;quizState.answered=false;renderQuizQuestion()}

function renderSemester(){document.getElementById('semesterList').innerHTML=modules.map(m=>{const s=state.semester[m.id]||{};return`<div class="studybox"><p class="kicker">${m.code}</p><h3>${m.icon} ${esc(m.short)}</h3><div class="form2"><label>Profesor<input value="${esc(s.professor||'')}" onchange="setSem('${m.id}','professor',this.value)" placeholder="Pendiente"></label><label>Horario<input value="${esc(s.schedule||'')}" onchange="setSem('${m.id}','schedule',this.value)" placeholder="Pendiente"></label><label>Sala<input value="${esc(s.room||'')}" onchange="setSem('${m.id}','room',this.value)" placeholder="Pendiente"></label><label>Fecha inicio<input type="date" value="${esc(s.start||'')}" onchange="setSem('${m.id}','start',this.value)"></label><label>Fecha término<input type="date" value="${esc(s.end||'')}" onchange="setSem('${m.id}','end',this.value)"></label></div><label>Notas<textarea onchange="setSem('${m.id}','notes',this.value)" placeholder="Evaluaciones, materiales, recordatorios...">${esc(s.notes||'')}</textarea></label></div>`}).join('')}
function setSem(m,k,x){if(!state.semester[m])state.semester[m]={};state.semester[m][k]=x;save()}

function renderSettings(){document.getElementById('setLocation').value=remote.config.location||'Angol';document.getElementById('setKwh').value=remote.config.kwh||291;document.getElementById('setKwhSource').value=remote.config.source||'';renderAiStatus();if(remote.access&&remote.access.role==='owner')loadAuthorizedUsers()}
function renderAiStatus(){const on=remote.ai&&remote.ai.configured;document.getElementById('aiDot').classList.toggle('on',on);document.getElementById('aiLabel').textContent=on?`Clave Gemini configurada · ${remote.ai.model||''}`:'IA no configurada';document.getElementById('aiStatusBox').innerHTML=on?`<strong>Clave configurada</strong> · pulsa “Probar conexión” para validarla · modelo ${esc(remote.ai.model||'')}`:'No hay API key configurada.'}
async function saveTariff(){const loc=document.getElementById('setLocation').value,val=Number(document.getElementById('setKwh').value),src=document.getElementById('setKwhSource').value;try{const r=await rpc('saveEnergySettings',loc,val,src);remote.config={...remote.config,location:r.location,kwh:r.kwh,source:r.source,updated:r.updated};applyRemoteConfig();out('tariffSaved',`Guardado: <strong>${esc(r.location)} · ${money(r.kwh)}/kWh</strong><br>${esc(r.source)}`,'good');toast('Tarifa actualizada')}catch(e){out('tariffSaved',esc(e.message),'bad')}}
async function saveAiKey(){const key=document.getElementById('geminiKey').value.trim();if(!key)return toast('Pega la API key');try{remote.ai=await rpc('saveGeminiApiKey',key);document.getElementById('geminiKey').value='';renderAiStatus();toast('API key guardada')}catch(e){toast(e.message)}}
async function removeAiKey(){if(!confirm('¿Eliminar la API key de este proyecto?'))return;try{remote.ai=await rpc('clearGeminiApiKey');renderAiStatus();toast('API key eliminada')}catch(e){toast(e.message)}}
async function testAi(){out('aiStatusBox','<span class="loader"></span> Probando Gemini…');try{const r=await rpc('testGeminiConnection');out('aiStatusBox',`<strong>Conexión correcta</strong> · HTTP ${r.status} · ${esc(r.model)} · respuesta: ${esc(r.answer)}`,'good');document.getElementById('aiDot').classList.add('on');document.getElementById('aiLabel').textContent=`IA conectada · ${r.model}`;toast('Gemini conectado correctamente')}catch(e){out('aiStatusBox',esc(e.message),'bad');document.getElementById('aiDot').classList.remove('on');document.getElementById('aiLabel').textContent='Clave configurada, conexión con error';toast('Gemini no pudo autenticarse')}}
function applyRemoteConfig(){const price=document.getElementById('ePrice');if(price)price.value=remote.config.kwh||291;const loc=document.getElementById('cubLocation');if(loc&&!loc.value)loc.value=remote.config.location||'Angol';out('energyTariffInfo',`<strong>${esc(remote.config.location||'Angol')}:</strong> ${money(remote.config.kwh||291)}/kWh<br><small>${esc(remote.config.source||'Valor referencial')} · editable en Ajustes</small>`,'good')}

async function downloadOfflinePackage(btn){
  setBusy(btn,true,'Preparando…');
  out('offlineExportStatus','<span class="loader"></span> Preparando contenido offline…');

  try{
    const data=await rpc('exportOfflinePackage');

    const blob=new Blob(
      [JSON.stringify(data,null,2)],
      {type:'application/json'}
    );

    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');

    a.href=url;
    a.download='alex-toolbox-offline-data.json';
    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(url);

    out(
      'offlineExportStatus',
      `<strong>Listo.</strong> ${data.guides.length} guía(s) · ${data.questions.length} pregunta(s) exportadas.`,
      'good'
    );

    toast('Contenido offline descargado');

  }catch(e){
    out('offlineExportStatus',esc(e.message),'bad');
    toast(e.message);

  }finally{
    setBusy(btn,false);
  }
}

function exportData(){const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='alex-electric-toolbox-respaldo-local.json';a.click();URL.revokeObjectURL(url);toast('Respaldo local exportado')}
async function importData(e){const file=e.target.files&&e.target.files[0];if(!file)return;try{const d=JSON.parse(await file.text());state={...state,...d,progress:{...(d.progress||{})},notes:{...(d.notes||{})},semester:{...defaultSemester,...(d.semester||{})}};save();renderStudy();renderSemester();renderStats();toast('Respaldo importado')}catch(err){toast('Archivo no válido')}e.target.value=''}
function clearData(){if(!confirm('¿Borrar progreso, apuntes y datos locales del semestre? Las guías y datos de la planilla NO se borrarán.'))return;localStorage.removeItem(KEY);localStorage.removeItem(LEGACY_KEY);state=loadState();activeModule='corr';renderStudy();renderSemester();renderStats();toast('Datos locales borrados')}

let appInitialized=false;
async function bootstrapAuthorized(){
  if(!appInitialized){
    document.querySelectorAll('.calc-panel').forEach(x=>x.style.display='none');
    initAwg();renderAreaFields();resetConcentricRows();renderHomeModules();renderStats();populateQuiz();openCalc('ohm');showView('home');
    appInitialized=true;
  }
  try{
    const data=await rpc('getBootstrapData');
    remote={...remote,...data,access:data.access||remote.access};
    setAccessUI(remote.access);
    applyRemoteConfig();renderStats();renderAiStatus();renderGuides();
  }catch(e){
    console.error(e);
    const msg=String(e.message||'').toLowerCase();
    if(msg.includes('sesión vencida')||msg.includes('no autorizada')||msg.includes('no autorizado')){
      accessToken='';
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      setAccessUI({authorized:false,role:'guest',email:''});
      out('accessStatus','Sesión vencida. Ingresa nuevamente.','bad');
      return;
    }
    applyRemoteConfig();toast(e.message||'Error al cargar la app');
  }
}
async function importOfflinePackageFile(e){
  const file=e.target.files&&e.target.files[0];
  if(!file)return;

  try{
    const data=JSON.parse(await file.text());

    if(
      data.format!=='alex-electric-toolbox-offline' ||
      !Array.isArray(data.guides) ||
      !Array.isArray(data.knowledge) ||
      !Array.isArray(data.questions)
    ){
      throw new Error('Este archivo no es un paquete válido de Alex Toolbox Offline.');
    }

    offlinePackage=data;
    await offlineDbSet('package',data);

    out(
      'offlineGateStatus',
      `<strong>Importado:</strong> ${data.guides.length} guía(s) · ${data.questions.length} pregunta(s).`,
      'good'
    );

    const info=document.getElementById('offlinePackageInfo');
    if(info){
      out(
        'offlinePackageInfo',
        `<strong>${data.guides.length} guía(s)</strong> · ${data.questions.length} pregunta(s)<br><small>Exportado: ${esc(data.exportedAt||'sin fecha')}</small>`,
        'good'
      );
    }

    setAccessUI({
      authorized:true,
      role:'owner',
      email:'bosquesiniestropaganus@gmail.com',
      name:'Alex Offline'
    });

    await bootstrapAuthorized();

    const homeInfo=document.getElementById('homeOfflineInfo');
    if(homeInfo){
      out(
        'homeOfflineInfo',
        `<strong>${data.guides.length} guía(s)</strong> y <strong>${data.questions.length} pregunta(s)</strong> disponibles offline.`,
        'good'
      );
    }

    showView('home');
    toast('Contenido offline actualizado');

  }catch(err){
    out('offlineGateStatus',esc(err.message),'bad');
  }

  e.target.value='';
}

async function startOfflineEmpty(){
  offlinePackage=emptyOfflinePackage();
  await offlineDbSet('package',offlinePackage);

  setAccessUI({
    authorized:true,
    role:'owner',
    email:'bosquesiniestropaganus@gmail.com',
    name:'Alex Offline'
  });

  await bootstrapAuthorized();
}

async function bootstrap(){
  try{
    offlinePackage=await offlineDbGet('package');

    if(!offlinePackage){
      offlinePackage=emptyOfflinePackage();
      await offlineDbSet('package',offlinePackage);
    }

    // V3.1: entra directo como administrador local, sin correo ni PIN.
    setAccessUI({
      authorized:true,
      role:'owner',
      email:'bosquesiniestropaganus@gmail.com',
      name:'Alex Offline'
    });

    await bootstrapAuthorized();

    const guideCount=(offlinePackage.guides||[]).length;
    const questionCount=(offlinePackage.questions||[]).length;

    const info=document.getElementById('offlinePackageInfo');
    if(info){
      out(
        'offlinePackageInfo',
        guideCount
          ? `<strong>${guideCount} guía(s)</strong> · ${questionCount} pregunta(s)<br><small>Exportado: ${esc(offlinePackage.exportedAt||'sin fecha')}</small>`
          : 'Todavía no has importado contenido de estudio. Las calculadoras ya funcionan offline.',
        guideCount ? 'good' : ''
      );
    }

    const homeInfo=document.getElementById('homeOfflineInfo');
    if(homeInfo){
      out(
        'homeOfflineInfo',
        guideCount
          ? `<strong>${guideCount} guía(s)</strong> y <strong>${questionCount} pregunta(s)</strong> disponibles offline.`
          : 'Puedes usar las calculadoras inmediatamente. Importa <strong>alex-toolbox-offline-data.json</strong> para cargar tus guías y quiz.',
        guideCount ? 'good' : ''
      );
    }

  }catch(e){
    console.error(e);

    // Incluso si falla IndexedDB, mostramos la app para que las calculadoras
    // sigan siendo utilizables.
    offlinePackage=emptyOfflinePackage();

    setAccessUI({
      authorized:true,
      role:'owner',
      email:'bosquesiniestropaganus@gmail.com',
      name:'Alex Offline'
    });

    try{
      await bootstrapAuthorized();
    }catch(inner){
      console.error(inner);
    }
  }
}


if('serviceWorker' in navigator){
  window.addEventListener('load',()=>{
    navigator.serviceWorker
      .register('./service-worker.js')
      .catch(err=>console.warn('Service Worker:',err));
  });
}

bootstrap();