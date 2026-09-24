const KEY='alexElectricToolboxV2';
const LEGACY_KEY='alexElectricToolboxV1';
const NORMATIVE_DOCS=Array.isArray(window.ALEX_NORMATIVA)?window.ALEX_NORMATIVA:[];
const NORMATIVE_CACHE='alex-electric-toolbox-hybrid-v4-5-0';

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
let activeNorm=state.lastNorm||'ric-10';
let remote={access:{authorized:false,role:'guest',email:''},config:{location:'Angol',kwh:291,source:'Valor referencial',updated:'',normative:'SEC · RIC vigentes'},ai:{configured:false,provider:'gemini',providerLabel:'Gemini',model:'',providers:{}},guides:[],progress:{items:[],weakest:[]}};
let quizState=null,currentGuideId='',areaSum=0,lastTakeoff=null;

function loadState(){
  let d={progress:{},notes:{},semester:{...defaultSemester},quizCorrect:0,quizTotal:0,lastModule:'corr',lastNorm:'ric-10',normRead:{},normFavorites:{},normNotes:{},scheduleVersion:SCHEDULE_VERSION};
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
        d={...d,...x,progress:{...(x.progress||{})},notes:{...(x.notes||{})},normRead:{...(x.normRead||{})},normFavorites:{...(x.normFavorites||{})},normNotes:{...(x.normNotes||{})},semester:migrated,scheduleVersion:SCHEDULE_VERSION};
        localStorage.setItem(KEY,JSON.stringify(d));
      }else{
        d={...d,...x,progress:{...(x.progress||{})},notes:{...(x.notes||{})},normRead:{...(x.normRead||{})},normFavorites:{...(x.normFavorites||{})},normNotes:{...(x.normNotes||{})},semester:{...defaultSemester,...(x.semester||{})},scheduleVersion:SCHEDULE_VERSION};
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
const ACCESS_TOKEN_KEY='aet_hybrid_access_token_v4';
const ACCESS_EMAIL_KEY='aet_hybrid_access_email_v4';
const CONNECTION_MODE_KEY='aet_hybrid_connection_mode_v4';
const CONNECTION_MODES=new Set(['auto','online','offline']);
const LEGACY_ACCESS_TOKEN_KEY='aet_offline_owner_v3';
const OFFLINE_DB_NAME='AlexElectricToolboxOfflineV3';
const OFFLINE_DB_VERSION=1;
const OFFLINE_STORE='data';
const OFFLINE_PROGRESS_KEY='aet_hybrid_unsynced_progress_v4';
const OFFLINE_QUIZ_HISTORY_KEY='aet_hybrid_quiz_history_v4';
const OFFLINE_CUB_KEY='aet_hybrid_cubicaciones_v4';
const LEGACY_OFFLINE_PROGRESS_KEY='aet_offline_progress_v3';
const LEGACY_OFFLINE_QUIZ_HISTORY_KEY='aet_offline_quiz_history_v3';
const LEGACY_OFFLINE_CUB_KEY='aet_offline_cubicaciones_v3';
const LEGACY_QUEUE_MIGRATION_KEY='aet_hybrid_v3_queue_migrated';
const SYNC_QUEUE_DB_KEY='hybridSyncQueue';
const SYNC_QUEUE_FALLBACK_KEY='aet_hybrid_sync_queue_v4';
const HYBRID_CONFIG=window.ALEX_HYBRID_CONFIG||{};
const BACKEND_URL=String(HYBRID_CONFIG.backendUrl||'').replace(/\/$/,'');
const PUBLISHED_APP_URL=String(HYBRID_CONFIG.appUrl||'https://bosquesiniestropaganus-ai.github.io/alex-electric-toolbox-offline/');
const IS_LOCAL_FILE=location.protocol==='file:';
const BRIDGE_TIMEOUT_MS=Math.max(8000,Number(HYBRID_CONFIG.bridgeTimeoutMs||45000));
const ONLINE_ONLY_METHODS=new Set([
  'addAuthorizedUser','analyzeGuide','clearGeminiApiKey','clearOpenAIApiKey','deleteGuide',
  'exportOfflinePackage','listAuthorizedUsers','processModuleGuides',
  'removeAuthorizedUser','saveGeminiApiKey','saveOpenAIApiKey','setAiProvider',
  'testGeminiConnection','testOpenAIConnection','getAiProviderStatus',
  'uploadStudyFile','askGuide','askNormativa'
]);
const QUEUEABLE_METHODS=new Set(['recordQuizResult','saveCubicacion','saveEnergySettings']);
const LONG_RUNNING_METHODS=new Set(['analyzeGuide','processModuleGuides','summarizeModule','askGuide','askNormativa','testOpenAIConnection','uploadStudyFile']);

let accessToken=localStorage.getItem(ACCESS_TOKEN_KEY)||'';
let offlinePackage=null;
let hybrid={
  bridgeReady:false,
  backendReachable:false,
  checking:true,
  syncing:false,
  connectionMode:CONNECTION_MODES.has(localStorage.getItem(CONNECTION_MODE_KEY))?localStorage.getItem(CONNECTION_MODE_KEY):'auto',
  pending:new Map(),
  channelId:'',
  lastOnlineAt:'',
  lastError:''
};

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

function migrateLegacyLocalData(){
  const pairs=[
    [LEGACY_OFFLINE_PROGRESS_KEY,OFFLINE_PROGRESS_KEY],
    [LEGACY_OFFLINE_QUIZ_HISTORY_KEY,OFFLINE_QUIZ_HISTORY_KEY],
    [LEGACY_OFFLINE_CUB_KEY,OFFLINE_CUB_KEY]
  ];
  pairs.forEach(([oldKey,newKey])=>{
    if(localStorage.getItem(newKey)===null&&localStorage.getItem(oldKey)!==null){
      localStorage.setItem(newKey,localStorage.getItem(oldKey));
    }
  });
}

async function migrateLegacySyncQueue(){
  if(localStorage.getItem(LEGACY_QUEUE_MIGRATION_KEY)==='1')return;
  let history=[];
  let cubicaciones=[];
  try{history=JSON.parse(localStorage.getItem(LEGACY_OFFLINE_QUIZ_HISTORY_KEY)||'[]')}catch(e){}
  try{cubicaciones=JSON.parse(localStorage.getItem(LEGACY_OFFLINE_CUB_KEY)||'[]')}catch(e){}
  const queue=await getSyncQueue();
  history.forEach(item=>{
    const payload={...item};
    delete payload.at;
    queue.push({
      id:makeEventId(),
      method:'recordQuizResult',
      args:[payload],
      createdAt:String(item.at||new Date().toISOString())
    });
  });
  cubicaciones.forEach(item=>{
    const payload={...item};
    delete payload.createdAt;
    queue.push({
      id:makeEventId(),
      method:'saveCubicacion',
      args:[payload],
      createdAt:String(item.createdAt||new Date().toISOString())
    });
  });
  await saveSyncQueue(queue.slice(-1000));
  localStorage.setItem(LEGACY_QUEUE_MIGRATION_KEY,'1');
}

function makeEventId(){
  if(globalThis.crypto&&typeof globalThis.crypto.randomUUID==='function')return globalThis.crypto.randomUUID();
  return 'evt-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
}

async function getSyncQueue(){
  let fallback=[];
  try{
    const saved=JSON.parse(localStorage.getItem(SYNC_QUEUE_FALLBACK_KEY)||'[]');
    fallback=Array.isArray(saved)?saved:[];
  }catch(ignore){}
  try{
    const queue=await offlineDbGet(SYNC_QUEUE_DB_KEY);
    const stored=Array.isArray(queue)?queue:[];
    return stored.length?stored:fallback;
  }catch(e){
    return fallback;
  }
}

async function saveSyncQueue(queue){
  const safeQueue=Array.isArray(queue)?queue:[];
  try{
    await offlineDbSet(SYNC_QUEUE_DB_KEY,safeQueue);
    localStorage.removeItem(SYNC_QUEUE_FALLBACK_KEY);
  }catch(e){
    localStorage.setItem(SYNC_QUEUE_FALLBACK_KEY,JSON.stringify(safeQueue));
  }
  updateSyncUi(safeQueue.length);
}

async function enqueueSyncEvent(method,args){
  const queue=await getSyncQueue();
  const event={id:makeEventId(),method,args,createdAt:new Date().toISOString()};
  queue.push(event);
  await saveSyncQueue(queue.slice(-1000));
  return event;
}

function bridgeMessageError(value){
  if(value&&typeof value==='object')return String(value.message||value.error||'El backend no respondió correctamente.');
  return String(value||'El backend no respondió correctamente.');
}

function bridgeCall(method,args=[],timeoutMs=BRIDGE_TIMEOUT_MS){
  if(!hybrid.bridgeReady) return Promise.reject(new Error('El backend todavía no está disponible.'));
  const id=makeEventId();
  return new Promise((resolve,reject)=>{
    const frame=document.createElement('iframe');
    const frameName='alex-hybrid-'+id.replace(/[^a-zA-Z0-9_-]/g,'');
    frame.name=frameName;
    frame.className='backend-bridge';
    frame.title='Conexión segura con Apps Script';
    frame.setAttribute('aria-hidden','true');

    const form=document.createElement('form');
    form.method='POST';
    form.enctype='multipart/form-data';
    form.action=BACKEND_URL;
    form.target=frameName;
    form.className='backend-form';

    const bridgeField=document.createElement('input');
    bridgeField.type='hidden';
    bridgeField.name='hybridBridge';
    bridgeField.value='1';

    const payloadField=document.createElement('input');
    payloadField.type='hidden';
    payloadField.name='payload';
    payloadField.value=JSON.stringify({
      type:'alex-toolbox-rpc-request',
      channelId:hybrid.channelId,
      id,
      method,
      args,
      origin:location.origin
    });

    form.append(bridgeField,payloadField);
    document.body.append(frame,form);

    const timer=setTimeout(()=>{
      frame.remove();
      form.remove();
      hybrid.pending.delete(id);
      reject(new Error('El backend tardó demasiado en responder.'));
    },timeoutMs);
    hybrid.pending.set(id,{resolve,reject,timer,frame});
    form.submit();
    setTimeout(()=>form.remove(),0);
  });
}

function rejectBridgePending(message){
  for(const [id,pending] of hybrid.pending){
    clearTimeout(pending.timer);
    if(pending.frame)pending.frame.remove();
    pending.reject(new Error(message));
    hybrid.pending.delete(id);
  }
}

function updateSyncUi(forcedCount){
  const apply=count=>{
    const box=document.getElementById('syncStatus');
    const button=document.getElementById('syncNowBtn');
    const text=hybrid.syncing
      ? 'Sincronizando cambios…'
      : count
        ? `${count} cambio(s) pendiente(s) de sincronizar.`
        : 'Todo el progreso está sincronizado.';
    if(box){
      box.textContent=text;
      box.className='result '+(count?'warn':'good');
    }
    if(button){
      button.textContent=hybrid.syncing?'Sincronizando…':count?`Sincronizar (${count})`:'Sincronizado';
      button.disabled=hybrid.syncing||!hybrid.backendReachable||!accessToken||count===0;
    }
  };
  if(Number.isFinite(forcedCount))return apply(forcedCount);
  getSyncQueue().then(queue=>apply(queue.length)).catch(()=>apply(0));
}

function renderAccountState(){
  const connected=!!accessToken;
  const disconnected=document.getElementById('accountDisconnected');
  const connectedBox=document.getElementById('accountConnected');
  if(disconnected)disconnected.classList.toggle('hidden',connected);
  if(connectedBox)connectedBox.classList.toggle('hidden',!connected);
  const email=localStorage.getItem(ACCESS_EMAIL_KEY)||remote.access.email||'';
  const accountStatus=document.getElementById('accountStatus');
  if(accountStatus){
    accountStatus.innerHTML=connected
      ? `<strong>${esc(email||'Cuenta conectada')}</strong><br><small>La sesión se recordará en este dispositivo.</small>`
      : 'Trabajando solo con los datos guardados en este dispositivo.';
  }
  const settingsEmail=document.getElementById('settingsAccessEmail');
  if(settingsEmail&&!settingsEmail.value)settingsEmail.value=email;
}

function renderConnectionControls(){
  document.querySelectorAll('[data-connection-mode]').forEach(button=>{
    const active=button.dataset.connectionMode===hybrid.connectionMode;
    button.classList.toggle('active',active);
    button.setAttribute('aria-pressed',active?'true':'false');
  });

  const toggle=document.getElementById('modeToggleBtn');
  if(toggle){
    toggle.textContent=IS_LOCAL_FILE
      ? 'Abrir app online'
      : hybrid.connectionMode==='offline'
      ? 'Activar online'
      : 'Activar offline';
  }

  const status=document.getElementById('connectionModeStatus');
  if(!status)return;
  if(hybrid.connectionMode==='offline'){
    status.className='result warn';
    status.innerHTML='<strong>Offline activo.</strong> Toca Online cuando quieras conectarte.';
    return;
  }
  if(IS_LOCAL_FILE){
    status.className='result bad';
    status.innerHTML='<strong>Esta es una vista local.</strong> Para conectarte a Apps Script debes abrir la app publicada.<div style="margin-top:9px"><button class="btn green compact" onclick="openPublishedApp()">Abrir app online</button></div>';
    return;
  }
  if(hybrid.connectionMode==='online'){
    status.className='result '+(hybrid.backendReachable?'good':'bad');
    status.innerHTML=hybrid.backendReachable
      ? '<strong>Online activo.</strong>'
      : navigator.onLine
        ? '<strong>No respondió el servidor.</strong> Toca Online para reintentar.'
        : '<strong>Sin internet.</strong> Tus datos siguen guardados.';
    return;
  }
  status.className='result '+(hybrid.backendReachable?'good':'warn');
  status.innerHTML=hybrid.backendReachable
    ? '<strong>Automático · Online</strong>'
    : '<strong>Automático · Offline</strong>';
}

async function setConnectionMode(mode){
  if(!CONNECTION_MODES.has(mode))return false;
  hybrid.connectionMode=mode;
  localStorage.setItem(CONNECTION_MODE_KEY,mode);
  renderConnectionControls();

  if(mode==='offline'){
    rejectBridgePending('Modo offline activado manualmente.');
    setBackendState(false,'Modo offline activado manualmente.');
    toast('Modo offline manual activado');
    return true;
  }

  toast(mode==='online'?'Intentando activar el modo online…':'Modo automático activado');
  const available=await probeBackend();
  if(mode==='online'){
    toast(available?'Modo online activado':'No fue posible conectar. Tus datos siguen seguros offline.');
  }
  return available;
}

function toggleManualConnection(){
  if(IS_LOCAL_FILE)return openPublishedApp();
  return setConnectionMode(hybrid.connectionMode==='offline'?'online':'offline');
}

function openPublishedApp(){
  location.href=PUBLISHED_APP_URL;
}

function setBackendState(reachable,error=''){
  hybrid.backendReachable=!!reachable;
  hybrid.checking=false;
  hybrid.lastError=String(error||'');
  if(reachable)hybrid.lastOnlineAt=new Date().toISOString();
  document.body.classList.toggle('is-online',!!reachable);
  document.body.classList.toggle('is-offline',!reachable);

  const badge=document.getElementById('connectionBadge');
  const label=document.getElementById('connectionLabel');
  const banner=document.getElementById('modeBanner');
  const offline=!navigator.onLine;
  const localFile=IS_LOCAL_FILE;
  const manualOffline=hybrid.connectionMode==='offline';
  const manualOnline=hybrid.connectionMode==='online';
  const connected=!!accessToken;
  document.body.classList.toggle('has-online-session',!!reachable&&connected);
  const stateClass=reachable?'is-online':manualOffline||offline?'is-offline':'is-backend-down';
  const stateLabel=reachable
    ? manualOnline?'Online manual':connected?'Online':'Online · modo local'
    : manualOffline?'Offline manual':localFile?'Vista local':offline?'Offline · sin internet':manualOnline?'Online sin respuesta':'Backend sin respuesta';
  if(badge){badge.className='connection-badge '+stateClass;badge.title=error||stateLabel;badge.setAttribute('aria-label',manualOffline?'Activar modo online':'Activar modo offline')}
  if(label)label.textContent=stateLabel;
  if(banner){
    banner.className='mode-banner '+stateClass;
    const strong=banner.querySelector('strong');
    const small=banner.querySelector('small');
    const icon=banner.querySelector('.mode-icon');
    if(strong)strong.textContent=reachable
      ? 'Online activo'
      : manualOffline?'Offline activo':localFile?'Abre la app publicada':offline?'Offline activo':'Servidor sin respuesta';
    if(small)small.textContent=reachable
      ? connected?'Sincronización e IA disponibles.':'Conecta tu cuenta para usar IA y sincronización.'
      : manualOffline?'Toca “Activar online” para volver.':localFile?'Usa el enlace publicado.':offline?'La app sigue funcionando sin señal.':'Tus datos siguen disponibles.';
    if(icon)icon.textContent=reachable?'●':'↓';
  }
  const notice=document.getElementById('studyModeNotice');
  if(notice){
    notice.className='result '+(reachable?'good':'warn');
    notice.innerHTML=reachable
      ? '<strong>Online:</strong> puedes subir, procesar y actualizar las guías. La copia offline se renueva automáticamente.'
      : manualOffline
        ? '<strong>Offline manual:</strong> puedes estudiar las guías guardadas y continuar los quiz. Elige Online para sincronizar.'
        : '<strong>Offline:</strong> puedes estudiar las guías guardadas y continuar los quiz. El progreso queda pendiente de sincronización.';
  }
  renderConnectionControls();
  renderAiStatus();
  renderAccountState();
  updateSyncUi();
}

async function probeBackend(){
  if(hybrid.connectionMode==='offline'){
    setBackendState(false,'Modo offline activado manualmente.');
    return false;
  }
  if(IS_LOCAL_FILE){
    setBackendState(false,'Abre la dirección publicada de GitHub Pages para usar el modo online.');
    return false;
  }
  if(!navigator.onLine||!hybrid.bridgeReady){
    setBackendState(false,!navigator.onLine?'Sin conexión a internet.':'El puente de Apps Script no respondió.');
    return false;
  }
  try{
    const pong=await bridgeCall('hybridPing',[],10000);
    if(!pong||pong.ok!==true)throw new Error('Respuesta de salud no válida.');
    setBackendState(true);
    await restoreOnlineSession();
    return true;
  }catch(e){
    setBackendState(false,e.message);
    return false;
  }
}

function initBackendBridge(){
  if(!BACKEND_URL){
    setBackendState(false,'Falta configurar la URL de Apps Script en config.js.');
    return;
  }
  hybrid.channelId=makeEventId();
  hybrid.bridgeReady=true;
  probeBackend();
}

function isTrustedBridgeOrigin(origin){
  try{
    const host=new URL(origin).hostname.toLowerCase();
    return host==='script.google.com'||host==='script.googleusercontent.com'||host.endsWith('-script.googleusercontent.com');
  }catch(e){
    return false;
  }
}

window.addEventListener('message',event=>{
  const data=event.data||{};
  if(data.channelId!==hybrid.channelId)return;
  if(!isTrustedBridgeOrigin(event.origin))return;
  if(data.type!=='alex-toolbox-rpc-response')return;
  const pending=hybrid.pending.get(data.id);
  if(!pending)return;
  clearTimeout(pending.timer);
  if(pending.frame)pending.frame.remove();
  hybrid.pending.delete(data.id);
  if(data.ok)pending.resolve(data.result);
  else{
    const error=new Error(bridgeMessageError(data.error));
    error.isRemoteApplicationError=true;
    pending.reject(error);
  }
});

window.addEventListener('online',()=>{
  if(hybrid.connectionMode==='offline')setBackendState(false,'Modo offline activado manualmente.');
  else probeBackend();
});
window.addEventListener('offline',()=>{
  rejectBridgePending('Se perdió la conexión a internet.');
  setBackendState(false,'Sin conexión a internet.');
});

function emptyOfflinePackage(){
  return {
    format:'alex-electric-toolbox-offline',
    schemaVersion:1,
    appVersion:'4.2-hybrid',
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
          email:'',
          name:'Modo local'
        },
        version:'4.2.0-hybrid-local',
        config:{
          location:String((offlinePackage.config||{}).location||'Angol'),
          kwh:Number((offlinePackage.config||{}).kwh||291),
          source:String((offlinePackage.config||{}).source||'Valor referencial'),
          updated:String(offlinePackage.exportedAt||''),
          normative:String((offlinePackage.config||{}).normative||'SEC · RIC vigentes'),
          aiModel:'offline'
        },
        ai:{configured:false,provider:'offline',providerLabel:'IA offline',model:'offline',providers:{}},
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
      throw new Error('Esta función requiere conexión con Apps Script. Se activará al volver el modo online.');

    default:
      throw new Error('Función no disponible en modo offline: '+name);
  }
}

async function markLocalQuizSynced(payload){
  const map=offlineProgressMap();
  const key=String(payload.moduleId||'')+'|'+String(payload.topic||'General');
  const item=map[key];
  if(!item)return;
  item.attempts=Math.max(0,Number(item.attempts||0)-1);
  if(payload.correct)item.correct=Math.max(0,Number(item.correct||0)-1);
  else item.incorrect=Math.max(0,Number(item.incorrect||0)-1);
  if(item.attempts===0)delete map[key];
  else map[key]=item;
  localStorage.setItem(OFFLINE_PROGRESS_KEY,JSON.stringify(map));
}

async function rawRpc(name,...args){
  if(hybrid.connectionMode==='offline'){
    throw new Error('El modo offline está activado manualmente. Elige Online o Automático para conectar Apps Script.');
  }
  if(!hybrid.backendReachable||!hybrid.bridgeReady){
    throw new Error(navigator.onLine?'Apps Script no está respondiendo.':'No hay conexión a internet.');
  }
  try{
    return await bridgeCall(name,args);
  }catch(e){
    if(!e.isRemoteApplicationError)setBackendState(false,e.message);
    throw e;
  }
}

async function rpc(name,...args){
  if(QUEUEABLE_METHODS.has(name)){
    const localResult=await localRpc(name,...args);
    const event=await enqueueSyncEvent(name,args);
    if(hybrid.backendReachable&&accessToken){
      try{
        const serverResult=await bridgeCall('hybridApplySyncEvent',[accessToken,event]);
        let queue=await getSyncQueue();
        queue=queue.filter(item=>item.id!==event.id);
        await saveSyncQueue(queue);
        if(name==='recordQuizResult')await markLocalQuizSynced(args[0]||{});
        return (serverResult&&serverResult.result)||serverResult||localResult;
      }catch(e){
        const lower=String(e.message||'').toLowerCase();
        if(lower.includes('sesión vencida')||lower.includes('no autorizada')||lower.includes('no autorizado'))forgetOnlineSession(false);
        else if(!e.isRemoteApplicationError)setBackendState(false,e.message);
      }
    }
    return {...(localResult||{}),queued:true};
  }

  if(hybrid.backendReachable&&accessToken){
    try{
      return await bridgeCall(name,[accessToken,...args],LONG_RUNNING_METHODS.has(name)?300000:BRIDGE_TIMEOUT_MS);
    }catch(e){
      const lower=String(e.message||'').toLowerCase();
      if(lower.includes('sesión vencida')||lower.includes('no autorizada')||lower.includes('no autorizado')){
        forgetOnlineSession(false);
      }else if(!e.isRemoteApplicationError){
        setBackendState(false,e.message);
      }
      if(e.isRemoteApplicationError||ONLINE_ONLY_METHODS.has(name))throw e;
    }
  }

  return localRpc(name,...args);
}

async function flushSyncQueue(showToast=false){
  if(hybrid.syncing)return false;
  if(hybrid.connectionMode==='offline'){
    if(showToast)toast('Activa Online o Automático para sincronizar.');
    updateSyncUi();
    return false;
  }
  if(!hybrid.backendReachable||!accessToken){
    if(showToast)toast(accessToken?'El backend todavía no está disponible.':'Conecta tu cuenta para sincronizar.');
    updateSyncUi();
    return false;
  }
  hybrid.syncing=true;
  let queue=await getSyncQueue();
  updateSyncUi(queue.length);
  let sent=0;
  try{
    for(const event of [...queue]){
      await bridgeCall('hybridApplySyncEvent',[accessToken,event]);
      queue=queue.filter(item=>item.id!==event.id);
      await saveSyncQueue(queue);
      if(event.method==='recordQuizResult')await markLocalQuizSynced((event.args||[])[0]||{});
      sent++;
    }
    if(showToast)toast(sent?`${sent} cambio(s) sincronizado(s)`:'No había cambios pendientes');
    return true;
  }catch(e){
    const lower=String(e.message||'').toLowerCase();
    if(lower.includes('sesión vencida')||lower.includes('no autorizada')||lower.includes('no autorizado'))forgetOnlineSession(false);
    else if(!e.isRemoteApplicationError)setBackendState(false,e.message);
    if(showToast)toast('La sincronización continuará cuando vuelva el backend.');
    return false;
  }finally{
    hybrid.syncing=false;
    updateSyncUi(queue.length);
  }
}

async function syncNow(){
  if(hybrid.connectionMode==='offline'){
    return toast('Activa Online o Automático para sincronizar.');
  }
  if(!hybrid.backendReachable){
    const ok=await probeBackend();
    if(!ok)return toast('Seguimos en modo offline.');
  }
  await flushSyncQueue(true);
  if(accessToken)await refreshOfflineCache(false);
}

async function refreshOfflineCache(showToast=false){
  if(hybrid.connectionMode==='offline'){
    if(showToast)toast('Activa Online o Automático para actualizar la copia.');
    return false;
  }
  if(!hybrid.backendReachable||!accessToken){
    if(showToast)toast('Conecta la cuenta y comprueba internet.');
    return false;
  }
  try{
    const data=await bridgeCall('exportOfflinePackage',[accessToken],120000);
    if(!data||data.format!=='alex-electric-toolbox-offline'||!Array.isArray(data.guides)||!Array.isArray(data.knowledge)||!Array.isArray(data.questions)){
      throw new Error('El backend devolvió una copia offline no válida.');
    }
    data.appVersion='4.2-hybrid';
    offlinePackage=data;
    await offlineDbSet('package',data);
    const info=document.getElementById('offlinePackageInfo');
    if(info)out('offlinePackageInfo',`<strong>${data.guides.length} guía(s)</strong> · ${data.questions.length} pregunta(s)<br><small>Actualizado: ${esc(data.exportedAt||new Date().toISOString())}</small>`,'good');
    const homeInfo=document.getElementById('homeOfflineInfo');
    if(homeInfo)out('homeOfflineInfo',`<strong>${data.guides.length} guía(s)</strong> y <strong>${data.questions.length} pregunta(s)</strong> guardadas para trabajar sin conexión.`,'good');
    if(showToast)toast('Copia offline actualizada');
    return true;
  }catch(e){
    if(showToast)toast(e.message);
    return false;
  }
}

function forgetOnlineSession(showMessage=true){
  accessToken='';
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  renderAccountState();
  document.body.classList.remove('has-online-session');
  if(hybrid.backendReachable)setBackendState(true);
  if(showMessage)toast('Este dispositivo quedó en modo local.');
}

async function refreshAiProviderStatus(){
  if(!hybrid.backendReachable||!accessToken)return remote.ai;
  try{
    const status=await bridgeCall('getAiProviderStatus',[accessToken]);
    if(status&&typeof status==='object')remote.ai=status;
  }catch(e){
    console.warn('Estado IA:',e);
  }
  return remote.ai;
}

async function restoreOnlineSession(){
  renderAccountState();
  if(!accessToken)return;
  try{
    const data=await bridgeCall('getBootstrapData',[accessToken]);
    remote={...remote,...data,access:data.access||remote.access};
    await refreshAiProviderStatus();
    setAccessUI(remote.access);
    applyRemoteConfig();renderStats();renderAiStatus();renderGuides();
    await flushSyncQueue(false);
    await refreshOfflineCache(false);
  }catch(e){
    const lower=String(e.message||'').toLowerCase();
    if(lower.includes('sesión vencida')||lower.includes('no autorizada')||lower.includes('no autorizado')){
      forgetOnlineSession(false);
      setAccessUI({authorized:true,role:'owner',email:'',name:'Modo local'});
      toast('La sesión online venció. Conéctala otra vez en Ajustes.');
    }else{
      setBackendState(false,e.message);
    }
  }
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
    if(!hybrid.backendReachable){
      const available=await probeBackend();
      if(!available)throw new Error('Apps Script no está disponible. Puedes continuar en modo local.');
    }
    const access=await rawRpc('authorizeAccess',email,pin);

    if(!access||!access.authorized||!access.token){
      throw new Error('No se pudo crear una sesión autorizada.');
    }

    accessToken=access.token;
    localStorage.setItem(ACCESS_TOKEN_KEY,accessToken);
    localStorage.setItem(ACCESS_EMAIL_KEY,email);

    document.getElementById('accessPin').value='';
    setAccessUI(access);
    await bootstrapAuthorized();
    await flushSyncQueue(false);
    await refreshOfflineCache(false);
    renderAccountState();
    toast('Cuenta conectada en este dispositivo');
    return true;

  }catch(e){
    accessToken='';
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    out('accessStatus',esc(e.message),'bad');
    return false;

  }finally{
    setBusy(btn,false);
  }
}

async function loginFromSettings(){
  const email=document.getElementById('settingsAccessEmail').value.trim().toLowerCase();
  const pin=document.getElementById('settingsAccessPin').value.trim();
  const accessEmail=document.getElementById('accessEmail');
  const accessPin=document.getElementById('accessPin');
  const accessBtn=document.getElementById('accessBtn');
  if(accessEmail)accessEmail.value=email;
  if(accessPin)accessPin.value=pin;
  const settingsBtn=document.getElementById('settingsAccessBtn');
  setBusy(settingsBtn,true,'Conectando…');
  try{
    const ok=await loginAccess();
    if(ok){
      document.getElementById('settingsAccessPin').value='';
      renderSettings();
    }else{
      toast('No se pudo conectar la cuenta.');
    }
  }finally{
    setBusy(settingsBtn,false);
    if(accessBtn)accessBtn.disabled=false;
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
  if(id==='normativa')renderNormativa();
  if(id==='semester')renderSemester();
  if(id==='settings')renderSettings();
  window.scrollTo({top:0,behavior:'smooth'});
}

function openCalc(name){
  showView('calculators');
  document.querySelectorAll('.calc-panel').forEach(x=>x.style.display=x.id==='calc-'+name?'block':'none');
  document.querySelectorAll('#calcTabs .tab').forEach(x=>x.classList.toggle('active',x.dataset.calc===name));
  const names={ohm:'Ley de Ohm',power:'Potencia y Ley de Watt',kirchhoff:'Leyes de Kirchhoff',concentric:'Cuadro de carga',conductors:'Conductores y protección',takeoff:'Cubicación eléctrica',empalme:'Empalme y cable concéntrico','ric-home':'Vivienda RIC',resistors:'Resistencias',divider:'Divisores',energy:'Consumo y costo',area:'Metros cuadrados',drop:'Caída de tensión',rlc:'RLC en CA',transformer:'Transformador',awg:'AWG ↔ mm²',frequency:'Frecuencia',motor:'Motor',pf:'Factor de potencia'};
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

function parsePositiveList(id){
  return String(document.getElementById(id).value||'')
    .split(/[,;\s]+/)
    .map(x=>Number(x.replace(',','.')))
    .filter(x=>Number.isFinite(x)&&x>=0);
}

function calcKirchhoffCurrent(){
  const incoming=parsePositiveList('kclIn'),outgoing=parsePositiveList('kclOut');
  if(!incoming.length&&!outgoing.length)return out('kclResult','Ingresa al menos una corriente conocida.','bad');
  const sumIn=incoming.reduce((s,x)=>s+x,0),sumOut=outgoing.reduce((s,x)=>s+x,0),balance=sumIn-sumOut;
  let missing='El nodo ya está equilibrado.';
  if(Math.abs(balance)>1e-9)missing=balance>0
    ? `Falta una corriente de <strong>${f(balance)} A que salga</strong> del nodo.`
    : `Falta una corriente de <strong>${f(Math.abs(balance))} A que entre</strong> al nodo.`;
  out('kclResult',`Σ entrada = <strong>${f(sumIn)} A</strong> · Σ salida = <strong>${f(sumOut)} A</strong><br>${missing}`,'good');
}

function calcKirchhoffVoltage(){
  const rises=parsePositiveList('kvlRise'),drops=parsePositiveList('kvlDrop');
  if(!rises.length&&!drops.length)return out('kvlResult','Ingresa al menos una tensión conocida.','bad');
  const sumRise=rises.reduce((s,x)=>s+x,0),sumDrop=drops.reduce((s,x)=>s+x,0),balance=sumRise-sumDrop;
  let missing='El lazo ya está equilibrado.';
  if(Math.abs(balance)>1e-9)missing=balance>0
    ? `Falta una caída de <strong>${f(balance)} V</strong>.`
    : `Falta una elevación de <strong>${f(Math.abs(balance))} V</strong>.`;
  out('kvlResult',`Σ elevaciones = <strong>${f(sumRise)} V</strong> · Σ caídas = <strong>${f(sumDrop)} V</strong><br>${missing}`,'good');
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

function calcEmpalme(){
  const kw=v('empKW'),voltage=v('empV'),pf=v('empPF'),length=v('empLength');
  if(!good(kw,voltage,pf,length)||kw<=0||voltage<=0||pf<=0||pf>1||length<0){
    return out('empResult','Revisa potencia, voltaje, factor de potencia y longitud.','bad');
  }
  const current=kw*1000/(voltage*pf),breaker=nextConcentricBreaker(current),frontel=selectFrontelConcentric(current,length);
  const status=breaker&&frontel.ok?'good':'warn';
  const breakerText=breaker
    ? `${breaker.a} A · ${breaker.type} (${breaker.kw} kW nominal)`
    : 'Sobre 63 A: requiere una solución de empalme distinta';
  const cableText=frontel.ok
    ? `${frontel.cable} · tabla hasta ${frontel.maxA} A y ${frontel.maxL} m`
    : 'Fuera del rango 2×4 / 2×6 mm² incorporado';
  out('empResult',`<div class="cc-summary-grid"><div class="cc-summary-card"><small>Corriente calculada</small><strong>${f(current,2)} A</strong></div><div class="cc-summary-card"><small>Escalón de empalme</small><strong>${breakerText}</strong></div><div class="cc-summary-card"><small>Cable concéntrico Frontel</small><strong>${cableText}</strong></div><div class="cc-summary-card"><small>Revisión necesaria</small><strong>Factibilidad con distribuidora</strong></div></div>`,status);
}

function calcConductors(){
  const type=document.getElementById('cdType').value,system=document.getElementById('cdSystem').value;
  const kw=v('cdKW'),voltage=v('cdV'),pf=v('cdPF'),length=v('cdLength'),rho=Number(document.getElementById('cdMaterial').value),section=v('cdSection'),ampacity=v('cdAmpacity'),breaker=v('cdBreaker'),upstream=v('cdUpstream');
  if(!good(kw,voltage,pf,length,rho,section,ampacity,breaker,upstream)||kw<=0||voltage<=0||pf<=0||pf>1||length<0||section<=0||ampacity<=0||breaker<=0||upstream<0){
    return out('cdResult','Completa todos los datos con valores válidos.','bad');
  }
  const current=kw*1000/((system==='3'?Math.sqrt(3):1)*voltage*pf);
  const deltaV=(system==='3'?Math.sqrt(3):2)*rho*length*current/section;
  const dropPct=deltaV/voltage*100,totalDrop=dropPct+upstream;
  const minSection=type==='feeder'?4:type==='subfeeder'?2.5:0;
  const sectionOk=!minSection||section>=minSection;
  const loadProtected=current<=breaker&&breaker<=ampacity;
  const segmentOk=dropPct<=3,totalOk=totalDrop<=5;
  const checks=[
    {ok:current<=breaker,text:`Carga ${f(current,2)} A ≤ protección ${f(breaker,2)} A`},
    {ok:breaker<=ampacity,text:`Protección ${f(breaker,2)} A ≤ ampacidad corregida ${f(ampacity,2)} A`},
    {ok:sectionOk,text:minSection?`Sección ${f(section,2)} mm² ${sectionOk?'cumple':'no alcanza'} el mínimo de ${f(minSection,1)} mm²`:'La sección mínima del circuito final debe verificarse con su pliego aplicable'},
    {ok:segmentOk,text:`Caída del tramo ${f(dropPct,2)}% ${segmentOk?'≤':'>'} 3%`},
    {ok:totalOk,text:`Caída total estimada ${f(totalDrop,2)}% ${totalOk?'≤':'>'} 5%`}
  ];
  const favorable=sectionOk&&loadProtected&&segmentOk&&totalOk;
  const list=checks.map((x,i)=>`<div class="check-item ${i===2&&!minSection?'warn':x.ok?'ok':'bad'}">${x.ok?'✓':'⚠'} ${x.text}</div>`).join('');
  out('cdResult',`<strong>${favorable?'Revisión preliminar favorable':'Hay puntos que corregir o verificar'}</strong><br>Corriente de diseño: <strong>${f(current,2)} A</strong> · ΔV: <strong>${f(deltaV,2)} V</strong><div class="check-list">${list}</div><div class="muted" style="margin-top:10px">No reemplaza el cálculo con ampacidades y factores de corrección de RIC N°04.</div>`,favorable?'good':'warn');
}

function calcRicHome(){
  const room=document.getElementById('ricRoom').value,area=v('ricRoomArea'),perimeter=v('ricPerimeter'),homeArea=v('ricHomeArea'),lux=v('ricLux'),lumens=v('ricLumens'),uf=v('ricUF'),mf=v('ricMF');
  const oven=document.getElementById('ricOven').value==='1',cooktop=document.getElementById('ricCooktop').value==='1';
  const perimeterRooms=['dormitorio','living','comedor','estar'];
  if(!good(area,homeArea,lux,lumens,uf,mf)||area<=0||homeArea<=0||lux<=0||lumens<=0||uf<=0||uf>1||mf<=0||mf>1||perimeterRooms.includes(room)&&(!Number.isFinite(perimeter)||perimeter<0)){
    return out('ricHomeResult','Revisa superficie, perímetro y datos de iluminación.','bad');
  }
  const centers=area<=10?1:2;
  let outlets=null;
  if(perimeterRooms.includes(room))outlets=Math.max(1,Math.ceil(perimeter/8));
  if(room==='cocina')outlets=3;
  if(room==='lavadero')outlets=1;
  const extraOutlets=room==='cocina'?((oven?1:0)+(cooktop?1:0)):0;
  if(outlets!==null)outlets+=extraOutlets;
  const luminaires=Math.max(1,Math.ceil(area*lux/(lumens*uf*mf)));
  const circuits=homeArea<30?2:3;
  const applianceNote=extraOutlets
    ? `<div class="check-item warn">Horno/cocina eléctrica: ${extraOutlets} enchufe(s) adicional(es), cada uno de al menos 16 A, y un circuito adicional independiente de mínimo 16 A según la potencia real.</div>`
    : '';
  const outletText=outlets===null
    ? 'El RIC N°10 no entrega en esta regla un mínimo automático para el recinto seleccionado; revisar el proyecto y pliegos aplicables.'
    : `${outlets} enchufe(s) doble(s) o triple(s) como mínimo${perimeterRooms.includes(room)?' (1 por cada 8 m de perímetro o fracción)':''}.`;
  out('ricHomeResult',`<div class="cc-summary-grid"><div class="cc-summary-card"><small>Centros de iluminación RIC</small><strong>${centers} mínimo</strong></div><div class="cc-summary-card"><small>Luminarias estimadas</small><strong>${luminaires}</strong><div class="muted">${f(lux,0)} lux · ${f(lumens,0)} lm/unidad</div></div><div class="cc-summary-card"><small>Enchufes del recinto</small><strong>${outlets===null?'Revisión específica':outlets+' mínimo'}</strong></div><div class="cc-summary-card"><small>Circuitos de vivienda</small><strong>${circuits} mínimo</strong><div class="muted">Uno exclusivo para cocina/lavadero, mínimo 16 A.</div></div></div><div class="check-list"><div class="check-item ok">${outletText}</div>${applianceNote}</div><div class="muted" style="margin-top:10px">La estimación de luminarias no sustituye un diseño luminotécnico ni modifica los centros mínimos exigidos.</div>`,'good');
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
async function saveTakeoff(){if(!lastTakeoff)return;const btn=document.getElementById('saveCubBtn');setBusy(btn,true,'Guardando…');try{const r=await rpc('saveCubicacion',lastTakeoff);toast(r&&r.queued?'Cubicación guardada; se sincronizará al volver internet':'Cubicación guardada en la planilla')}catch(e){toast(e.message)}finally{setBusy(btn,false)}}

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
    box.innerHTML=`<p class="muted">${hybrid.backendReachable?'No hay guías en este ramo. Puedes subir la primera ahora.':'No hay guías guardadas para este ramo. Se actualizarán cuando vuelva la conexión.'}</p>`;
    return;
  }

  box.innerHTML=list.map(g=>{
    const status=String(g.status||'').toUpperCase();
    const processButton=status==='PROCESADA'
      ? ''
      : `<button class="btn secondary online-only owner-only" onclick="processGuide('${g.id}',this)">Procesar IA</button>`;
    const driveButton=g.url
      ? `<button class="btn secondary online-only" onclick="window.open('${esc(g.url)}','_blank','noopener')">Abrir archivo</button>`
      : '';
    return `
    <div class="guidecard">
      <div>
        <b>${esc(g.title)}</b>
        <small>${esc(g.fileName||'')} · ${esc(g.uploadedAt||'')}</small>
        <div class="guide-actions">
          <button class="btn green" onclick="studyGuide('${g.id}')">Estudiar</button>
          <button class="btn secondary" onclick="quizFromGuide('${g.id}')">Quiz</button>
          ${processButton}
          ${driveButton}
          <button class="btn red online-only owner-only" onclick="removeGuide('${g.id}',decodeURIComponent('${encodeURIComponent(g.title||'Guía')}'))">Eliminar</button>
        </div>
      </div>
      ${guidePill(g.status)}
    </div>
  `}).join('');
}

async function uploadGuide(){const file=document.getElementById('guideFile').files[0],title=document.getElementById('guideTitle').value.trim();if(!file)return toast('Selecciona un archivo');if(file.size>25*1024*1024)return toast('El archivo supera 25 MB');const btn=document.getElementById('uploadGuideBtn');setBusy(btn,true,'Subiendo…');try{const b64=await fileToBase64(file);const res=await rpc('uploadStudyFile',{moduleId:activeModule,title:title||file.name,fileName:file.name,mimeType:file.type||'application/octet-stream',base64:b64});remote.guides.unshift(res.guide);document.getElementById('guideFile').value='';document.getElementById('guideTitle').value='';renderGuides();renderStats();toast('Guía guardada en Drive')}catch(e){toast(e.message)}finally{setBusy(btn,false)}}
function fileToBase64(file){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(String(r.result).split(',')[1]||'');r.onerror=reject;r.readAsDataURL(file)})}
async function processGuide(id,btn){if(!remote.ai.configured){toast('Primero configura OpenAI o Gemini en Ajustes');showView('settings');return}setBusy(btn,true,'Analizando…');try{const res=await rpc('analyzeGuide',id);const g=remote.guides.find(x=>x.id===id);if(g)g.status='PROCESADA';renderGuides();await refreshOfflineCache(false);toast(`Listo con ${res.provider==='openai'?'OpenAI':remote.ai.providerLabel||'IA'}: ${res.questions} preguntas creadas`)}catch(e){const g=remote.guides.find(x=>x.id===id);if(g)g.status='ERROR';renderGuides();toast(e.message)}finally{setBusy(btn,false)}}
async function processAllCurrentModule(btn){
  if(!remote.ai.configured){
    toast('Primero configura OpenAI o Gemini');
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

    await refreshOfflineCache(false);
    toast(`Proceso terminado: ${ok} guía(s) procesadas y guardadas offline`);

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

  for(let index=0;index<lines.length;index++){
    const raw=lines[index];
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

    if(t.includes('|')&&index+1<lines.length&&/^\s*\|?\s*:?-{3,}/.test(lines[index+1])){
      closeLists();closeQuote();
      const cells=row=>row.trim().replace(/^\||\|$/g,'').split('|').map(x=>x.trim());
      const headers=cells(t);
      index+=2;
      const rows=[];
      while(index<lines.length&&lines[index].includes('|')&&lines[index].trim()){
        rows.push(cells(lines[index]));
        index++;
      }
      index--;
      html+='<div class="tablewrap"><table><thead><tr>'+headers.map(x=>`<th>${mdInline(x)}</th>`).join('')+'</tr></thead><tbody>'+rows.map(row=>'<tr>'+headers.map((_,i)=>`<td>${mdInline(row[i]||'')}</td>`).join('')+'</tr>').join('')+'</tbody></table></div>';
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

function normText(value){
  return String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
}

function normDoc(id){return NORMATIVE_DOCS.find(x=>x.id===id)||null}

function autoRouteNormativa(question){
  const q=normText(question);
  const explicit=q.match(/ric\s*(?:n|nro|numero)?\s*[°º#]?\s*(\d{1,2})/);
  if(explicit){
    const id='ric-'+String(Number(explicit[1])).padStart(2,'0');
    if(normDoc(id))return normDoc(id);
  }
  if(/decreto|reglamento base|responsabilidad|fiscalizacion/.test(q))return normDoc('decreto-8');
  if(/33877|resolucion|diario oficial|vigencia de los pliegos/.test(q))return normDoc('res-33877-do');
  const words=q.split(/[^a-z0-9]+/).filter(x=>x.length>=4);
  let best=normDoc('ric-10'),bestScore=0;
  NORMATIVE_DOCS.filter(x=>x.type==='ric').forEach(doc=>{
    const hay=normText([doc.code,doc.title,doc.summary,doc.tags].join(' '));
    let score=0;
    words.forEach(word=>{if(hay.includes(word))score+=word.length});
    if(score>bestScore){best=doc;bestScore=score}
  });
  return best;
}

function renderNormativa(){
  if(!NORMATIVE_DOCS.length)return out('normOfflineStatus','No se pudo cargar el catálogo normativo.','bad');
  if(!normDoc(activeNorm))activeNorm='ric-10';
  const select=document.getElementById('normDocSelect');
  if(select&&!select.options.length){
    select.innerHTML='<option value="auto">Elegir automáticamente por tema</option>'+NORMATIVE_DOCS.map(d=>`<option value="${d.id}">${esc(d.code)} · ${esc(d.title)}</option>`).join('');
  }
  if(select)select.value=activeNorm;

  const chips=document.getElementById('normChips');
  if(chips){
    chips.innerHTML=NORMATIVE_DOCS.filter(doc=>doc.type==='ric').map(doc=>`<button class="chip ${doc.id===activeNorm?'active':''}" onclick="setActiveNorm('${doc.id}')">${esc(doc.code.replace('N°',''))}</button>`).join('');
  }

  renderActiveNorm();
  renderNormativaList();

  const read=NORMATIVE_DOCS.filter(d=>d.type==='ric'&&state.normRead[d.id]).length;
  const readLabel=document.getElementById('normReadCount');
  const bar=document.getElementById('normStudyBar');
  if(readLabel)readLabel.textContent=`${read}/19`;
  if(bar)bar.style.width=`${Math.round(read/19*100)}%`;
  updateNormOfflineCount();
}

function renderActiveNorm(){
  const doc=normDoc(activeNorm)||normDoc('ric-10');
  const box=document.getElementById('normStudy');
  const badge=document.getElementById('normSelectedBadge');
  if(!doc||!box)return;
  if(badge)badge.textContent=doc.code;
  box.innerHTML=`<article class="studybox norm-study-card">
    <div class="norm-study-head"><div><p class="kicker">${esc(doc.code)} · ${doc.pages} páginas</p><h3>${esc(doc.title)}</h3></div><button class="icon" onclick="toggleNormFavorite('${doc.id}')" aria-label="Favorito">${state.normFavorites[doc.id]?'★':'☆'}</button></div>
    <p class="muted">${esc(doc.summary)}</p>
    <div class="btnrow"><button class="btn green" onclick="openNormDocument('${doc.id}')">Abrir PDF</button><button class="btn secondary" onclick="focusNormQuestion()">Preguntar</button></div>
    <label class="norm-check"><input type="checkbox" ${state.normRead[doc.id]?'checked':''} onchange="toggleNormRead('${doc.id}',this.checked)"> ${doc.type==='ric'?'Estudiado':'Revisado'}</label>
    <details class="simple-details"><summary>Mis apuntes</summary><textarea id="normNotes" placeholder="Escribe tus apuntes…">${esc(state.normNotes[doc.id]||'')}</textarea><button class="btn secondary compact" onclick="saveNormNotes('${doc.id}')">Guardar apuntes</button></details>
  </article>`;
}

function renderNormativaList(){
  const search=normText(document.getElementById('normSearch')?.value||'');
  const filter=document.getElementById('normFilter')?.value||'all';
  const docs=NORMATIVE_DOCS.filter(doc=>{
    const matches=!search||normText([doc.code,doc.title,doc.summary,doc.tags].join(' ')).includes(search)||search.split(/\s+/).every(w=>normText([doc.title,doc.tags].join(' ')).includes(w));
    if(!matches)return false;
    if(filter==='base')return doc.type==='base';
    if(filter==='ric')return doc.type==='ric';
    if(filter==='pending')return doc.type==='ric'&&!state.normRead[doc.id];
    if(filter==='read')return doc.type==='ric'&&state.normRead[doc.id];
    return true;
  }).sort((a,b)=>Number(Boolean(state.normFavorites[b.id]))-Number(Boolean(state.normFavorites[a.id])));
  const box=document.getElementById('normList');
  if(!box)return;
  box.innerHTML=docs.length?docs.map(doc=>`
    <article class="norm-card compact ${state.normRead[doc.id]?'is-read':''} ${state.normFavorites[doc.id]?'is-favorite':''}" onclick="setActiveNorm('${doc.id}')">
      <div><span class="norm-code">${esc(doc.code)}</span><h4>${esc(doc.title)}</h4></div><span class="norm-arrow">›</span>
    </article>`).join(''):'<div class="result warn">No encontré documentos con ese filtro.</div>';
}

function setActiveNorm(id){
  if(!normDoc(id))return;
  activeNorm=id;
  state.lastNorm=id;
  save();
  renderNormativa();
  document.getElementById('normStudy')?.scrollIntoView({behavior:'smooth',block:'start'});
}

function toggleNormRead(id,checked){state.normRead[id]=Boolean(checked);save();renderNormativa()}
function toggleNormFavorite(id){state.normFavorites[id]=!state.normFavorites[id];save();renderNormativa()}
function saveNormNotes(id){state.normNotes[id]=document.getElementById('normNotes')?.value||'';save();toast('Apuntes guardados')}

function openNormDocument(id){
  const doc=normDoc(id);if(!doc)return;
  window.open(doc.file,'_blank','noopener');
}

function openActiveNormDocument(){openNormDocument(activeNorm)}
function focusNormQuestion(){document.getElementById('normQuestion')?.focus();document.getElementById('normQuestion')?.scrollIntoView({behavior:'smooth',block:'center'})}

function selectNormForAi(id){
  activeNorm=id;
  state.lastNorm=id;
  save();
  const select=document.getElementById('normDocSelect');
  if(select)select.value=id;
  renderNormativa();
  focusNormQuestion();
}

async function updateNormOfflineCount(){
  const el=document.getElementById('normOfflineCount');
  if(!el)return;
  if(IS_LOCAL_FILE||!('caches' in window)){el.textContent='3/22';return}
  try{
    const cache=await caches.open(NORMATIVE_CACHE);
    let count=0;
    for(const doc of NORMATIVE_DOCS){if(await cache.match(doc.file))count++}
    el.textContent=`${count}/22`;
    if(count===NORMATIVE_DOCS.length){
      out('normOfflineStatus','<strong>Biblioteca completa disponible offline.</strong> Puedes abrir los 22 documentos sin conexión.','good');
      const btn=document.getElementById('normOfflineBtn');if(btn)btn.textContent='Biblioteca offline lista';
    }
  }catch(ignore){el.textContent='3/22'}
}

async function downloadNormativaOffline(){
  if(IS_LOCAL_FILE)return out('normOfflineStatus','Abre la app desde GitHub Pages para descargar la biblioteca offline.','warn');
  if(!navigator.onLine)return out('normOfflineStatus','Conéctate a internet una vez para descargar los 19 pliegos RIC.','warn');
  const btn=document.getElementById('normOfflineBtn');
  setBusy(btn,true,'Preparando…');
  let completed=0,failed=0;
  try{
    if(navigator.storage?.persist)await navigator.storage.persist();
    const cache=await caches.open(NORMATIVE_CACHE);
    for(const doc of NORMATIVE_DOCS){
      try{
        if(!(await cache.match(doc.file))){
          const response=await fetch(doc.file,{cache:'reload'});
          if(!response.ok)throw new Error('HTTP '+response.status);
          await cache.put(doc.file,response.clone());
        }
        completed++;
      }catch(error){failed++}
      btn.innerHTML=`Descargando ${completed+failed}/22`;
      document.getElementById('normOfflineCount').textContent=`${completed}/22`;
    }
    if(failed)out('normOfflineStatus',`Se guardaron ${completed} documentos. Faltaron ${failed}; vuelve a pulsar el botón con una conexión estable.`,'warn');
    else out('normOfflineStatus','<strong>Biblioteca completa disponible offline.</strong> Los 22 documentos quedaron guardados en este dispositivo.','good');
  }catch(error){
    out('normOfflineStatus',esc(error.message||error),'bad');
  }finally{
    setBusy(btn,false);
    btn.textContent=failed?'Reintentar descarga':'Biblioteca offline lista';
    updateNormOfflineCount();
  }
}

async function askNormativa(btn){
  const question=document.getElementById('normQuestion').value.trim();
  if(!question)return toast('Escribe una pregunta sobre la normativa.');
  if(!hybrid.backendReachable||!accessToken){
    return out('normAnswer','<strong>Sin conexión:</strong> puedes buscar y abrir los PDF guardados, pero una respuesta nueva de la IA requiere internet y tu cuenta conectada.','warn');
  }
  const openAiReady=Boolean(remote.ai&&remote.ai.providers&&remote.ai.providers.openai&&remote.ai.providers.openai.configured);
  if(!openAiReady){toast('Configura OpenAI en Ajustes para consultar los PDF');return showView('settings')}
  let docId=document.getElementById('normDocSelect').value;
  const doc=docId==='auto'?autoRouteNormativa(question):normDoc(docId);
  if(!doc)return out('normAnswer','No pude identificar el documento. Selecciona un RIC.','bad');
  activeNorm=doc.id;
  state.lastNorm=doc.id;
  save();
  document.getElementById('normDocSelect').value=doc.id;
  const badge=document.getElementById('normSelectedBadge');if(badge)badge.textContent=doc.code;
  const style=document.getElementById('normAnswerStyle').value;
  setBusy(btn,true,'Consultando…');
  out('normAnswer',`<span class="loader"></span> Revisando ${esc(doc.code)}…`);
  try{
    const response=await rpc('askNormativa',doc.id,question,style);
    out('normAnswer',`${renderMarkdown(response.answer||'La IA no devolvió una respuesta.')}<div class="norm-answer-source"><strong>Fuente consultada:</strong> ${esc(doc.code)} · ${esc(doc.title)} <button class="btn secondary" onclick="openNormDocument('${doc.id}')">Abrir PDF</button></div>`,'good');
  }catch(error){out('normAnswer',esc(error.message||error),'bad')}
  finally{setBusy(btn,false)}
}

async function askCurrentGuide(){
  const question=document.getElementById('guideQuestion').value.trim();
  if(!question)return toast('Escribe una pregunta.');
  if(!hybrid.backendReachable||!accessToken){
    return out(
      'guideAnswer',
      '<strong>Sin conexión:</strong> las preguntas nuevas a la IA requieren internet. Puedes estudiar el resumen y hacer el quiz guardado.',
      'warn'
    );
  }
  out('guideAnswer','<span class="loader"></span> Consultando la guía…');
  try{
    const response=await rpc('askGuide',currentGuideId,question);
    const answer=typeof response==='string'?response:(response&&response.answer)||'';
    out('guideAnswer',renderMarkdown(answer||'La IA no devolvió una respuesta.'),'good');
  }catch(e){
    out('guideAnswer',esc(e.message),'bad');
  }
}

async function summarizeCurrentModule(){if(hybrid.backendReachable&&accessToken&&!remote.ai.configured){toast('Configura la IA primero');return showView('settings')}try{toast(hybrid.backendReachable?'Creando resumen del ramo…':'Abriendo el repaso guardado…');const r=await rpc('summarizeModule',activeModule);currentGuideId='';document.getElementById('guideStudyTitle').textContent='Resumen conjunto · '+modules.find(x=>x.id===activeModule).short;document.getElementById('guideStudyContent').innerHTML=`<h3>Resumen de todas las guías procesadas</h3>${renderMarkdown(r.summary)}`;showView('guideStudy')}catch(e){toast(e.message)}}
async function removeGuide(id,title){if(!confirm(`¿Eliminar "${title}" de la biblioteca y enviar su archivo a la papelera?`))return;try{await rpc('deleteGuide',id);remote.guides=remote.guides.filter(x=>x.id!==id);renderGuides();renderStats();await refreshOfflineCache(false);toast('Guía eliminada')}catch(e){toast(e.message)}}

function populateQuiz(){const e=document.getElementById('quizModule');e.innerHTML='<option value="all">Todos los ramos</option>'+modules.map(m=>`<option value="${m.id}">${esc(m.short)}</option>`).join('')}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
async function startQuiz(){const m=document.getElementById('quizModule').value,n=Number(document.getElementById('quizCount').value);document.getElementById('quizArea').innerHTML='<div class="panel"><span class="loader"></span> Preparando preguntas…</div>';try{let generated=[];try{generated=await rpc('getGeneratedQuestions',m,'',100)}catch(e){}let pool=[...quizBank.filter(x=>m==='all'||x.m===m),...generated];pool=shuffle(pool).slice(0,Math.min(n,pool.length));quizState={items:pool,index:0,score:0,answered:false};renderQuizQuestion()}catch(e){toast(e.message)}}
async function quizFromGuide(id){try{const g=remote.guides.find(x=>x.id===id);if(!g)return;const items=await rpc('getGeneratedQuestions',g.moduleId,id,100);if(!items.length)return toast('Primero procesa esta guía para crear preguntas');quizState={items:shuffle(items),index:0,score:0,answered:false};document.getElementById('quizModule').value=g.moduleId;showView('quiz');renderQuizQuestion()}catch(e){toast(e.message)}}
function renderQuizQuestion(){const area=document.getElementById('quizArea');if(!quizState||!quizState.items.length){area.innerHTML='<div class="panel"><p class="muted">No hay preguntas disponibles. Procesa una guía para ampliar el banco.</p></div>';return}if(quizState.index>=quizState.items.length){area.innerHTML=`<div class="panel"><p class="kicker">Resultado</p><h3>${quizState.score}/${quizState.items.length}</h3><p class="big-number">${Math.round(quizState.score/quizState.items.length*100)}%</p><button class="btn full" onclick="startQuiz()">Nuevo quiz</button></div>`;return}const q=quizState.items[quizState.index],m=modules.find(x=>x.id===q.m);area.innerHTML=`<div class="panel"><p class="kicker">Pregunta ${quizState.index+1} de ${quizState.items.length}</p><p class="muted">${m?esc(m.short):''} · ${esc(q.topic||'General')} · ${q.source==='guia'?'Guía':'Base'}</p><h3>${esc(q.q)}</h3><div id="quizOpts">${q.o.map((x,i)=>`<button class="quizopt" onclick="answerQuiz(${i})">${String.fromCharCode(65+i)}. ${esc(x)}</button>`).join('')}</div><div id="quizExplain"></div></div>`}
function answerQuiz(i){if(!quizState||quizState.answered)return;quizState.answered=true;const q=quizState.items[quizState.index],ok=i===q.a;document.querySelectorAll('#quizOpts .quizopt').forEach((b,j)=>{if(j===q.a)b.classList.add('correct');else if(j===i)b.classList.add('wrong');b.disabled=true});if(ok)quizState.score++;state.quizTotal=(state.quizTotal||0)+1;state.quizCorrect=(state.quizCorrect||0)+(ok?1:0);save();renderStats();document.getElementById('quizExplain').innerHTML=`<div class="result ${ok?'good':'bad'}"><strong>${ok?'Correcto':'Incorrecto'}</strong><br>${esc(q.e||'')}<div style="margin-top:9px"><button class="btn" onclick="nextQuiz()">Siguiente</button></div></div>`;rpc('recordQuizResult',{moduleId:q.m,guideId:q.guideId||'',questionId:q.id||'',correct:ok,userAnswer:q.o[i]||'',correctAnswer:q.o[q.a]||'',topic:q.topic||'General'}).catch(()=>{})}
function nextQuiz(){quizState.index++;quizState.answered=false;renderQuizQuestion()}

function renderSemester(){document.getElementById('semesterList').innerHTML=modules.map(m=>{const s=state.semester[m.id]||{};return`<div class="studybox"><p class="kicker">${m.code}</p><h3>${m.icon} ${esc(m.short)}</h3><div class="form2"><label>Profesor<input value="${esc(s.professor||'')}" onchange="setSem('${m.id}','professor',this.value)" placeholder="Pendiente"></label><label>Horario<input value="${esc(s.schedule||'')}" onchange="setSem('${m.id}','schedule',this.value)" placeholder="Pendiente"></label><label>Sala<input value="${esc(s.room||'')}" onchange="setSem('${m.id}','room',this.value)" placeholder="Pendiente"></label><label>Fecha inicio<input type="date" value="${esc(s.start||'')}" onchange="setSem('${m.id}','start',this.value)"></label><label>Fecha término<input type="date" value="${esc(s.end||'')}" onchange="setSem('${m.id}','end',this.value)"></label></div><label>Notas<textarea onchange="setSem('${m.id}','notes',this.value)" placeholder="Evaluaciones, materiales, recordatorios...">${esc(s.notes||'')}</textarea></label></div>`}).join('')}
function setSem(m,k,x){if(!state.semester[m])state.semester[m]={};state.semester[m][k]=x;save()}

function renderSettings(){document.getElementById('setLocation').value=remote.config.location||'Angol';document.getElementById('setKwh').value=remote.config.kwh||291;document.getElementById('setKwhSource').value=remote.config.source||'';renderConnectionControls();renderAiStatus();if(remote.access&&remote.access.role==='owner')loadAuthorizedUsers()}
function renderAiStatus(){
  const dot=document.getElementById('aiDot'),label=document.getElementById('aiLabel'),box=document.getElementById('aiStatusBox');
  if(!dot||!label||!box)return;
  const provider=String(remote.ai.provider||'gemini');
  const providerLabel=String(remote.ai.providerLabel||(provider==='openai'?'OpenAI':'Gemini'));
  const on=hybrid.backendReachable&&accessToken&&remote.ai&&remote.ai.configured;
  const providerSelect=document.getElementById('aiProviderSelect');
  const modelInput=document.getElementById('openAiModel');
  if(providerSelect)providerSelect.value=provider==='openai'?'openai':'gemini';
  if(modelInput){
    const configuredModel=((remote.ai.providers||{}).openai||{}).model;
    if(configuredModel)modelInput.value=configuredModel;
  }
  dot.classList.toggle('on',on);
  if(!hybrid.backendReachable){
    const manual=hybrid.connectionMode==='offline';
    label.textContent=manual?'IA pausada por modo offline manual':'IA disponible al volver internet';
    box.className='result warn';
    box.innerHTML=manual?'<strong>Modo offline manual.</strong> Elige Online o Automático para volver a usar la IA.':'<strong>Modo offline.</strong> La IA se reactivará cuando Apps Script responda.';
    return;
  }
  if(!accessToken){
    label.textContent='Conecta tu cuenta para usar IA';
    box.className='result warn';
    box.innerHTML='Internet disponible. Conecta tu cuenta en esta pantalla para usar OpenAI o Gemini.';
    return;
  }
  const providers=remote.ai.providers||{};
  const openAiReady=!!(providers.openai&&providers.openai.configured);
  const geminiReady=!!(providers.gemini&&providers.gemini.configured);
  label.textContent=on?`${providerLabel} activo · ${remote.ai.model||''}`:`${providerLabel} no configurado`;
  box.className='result '+(on?'good':'warn');
  box.innerHTML=(on
    ? `<strong>${esc(providerLabel)} está activo</strong> · modelo ${esc(remote.ai.model||'')}`
    : `<strong>${esc(providerLabel)} necesita una API key.</strong>`)
    +`<br><small>OpenAI: ${openAiReady?'configurado':'sin clave'} · Gemini: ${geminiReady?'configurado':'sin clave'}</small>`;
}
async function saveTariff(){const loc=document.getElementById('setLocation').value,val=Number(document.getElementById('setKwh').value),src=document.getElementById('setKwhSource').value;try{const r=await rpc('saveEnergySettings',loc,val,src);remote.config={...remote.config,location:r.location,kwh:r.kwh,source:r.source,updated:r.updated};applyRemoteConfig();out('tariffSaved',`Guardado: <strong>${esc(r.location)} · ${money(r.kwh)}/kWh</strong><br>${esc(r.source)}${r.queued?'<br><small>Se sincronizará al volver internet.</small>':''}`,'good');toast(r.queued?'Tarifa guardada localmente':'Tarifa actualizada')}catch(e){out('tariffSaved',esc(e.message),'bad')}}
async function saveAiProviderSelection(){
  const provider=document.getElementById('aiProviderSelect').value;
  const model=document.getElementById('openAiModel').value.trim();
  try{remote.ai=await rpc('setAiProvider',provider,model);renderAiStatus();toast(`${remote.ai.providerLabel} quedó como IA principal`)}catch(e){toast(e.message)}
}
async function saveOpenAiKey(){
  const key=document.getElementById('openAiKey').value.trim();
  const model=document.getElementById('openAiModel').value.trim();
  if(!key)return toast('Pega la API key de OpenAI');
  try{remote.ai=await rpc('saveOpenAIApiKey',key,model);document.getElementById('openAiKey').value='';renderAiStatus();toast('OpenAI guardado y activado')}catch(e){toast(e.message)}
}
async function removeOpenAiKey(){
  if(!confirm('¿Eliminar la API key de OpenAI de Apps Script?'))return;
  try{remote.ai=await rpc('clearOpenAIApiKey');renderAiStatus();toast('API key de OpenAI eliminada')}catch(e){toast(e.message)}
}
async function testOpenAi(){
  out('aiStatusBox','<span class="loader"></span> Probando OpenAI…');
  try{const r=await rpc('testOpenAIConnection');out('aiStatusBox',`<strong>OpenAI conectado</strong> · HTTP ${r.status} · ${esc(r.model)} · respuesta: ${esc(r.answer)}`,'good');toast('OpenAI conectado correctamente')}catch(e){out('aiStatusBox',esc(e.message),'bad');toast('OpenAI no pudo autenticarse')}
}
async function saveAiKey(){
  const key=document.getElementById('geminiKey').value.trim();
  if(!key)return toast('Pega la API key de Gemini');
  try{await rpc('saveGeminiApiKey',key);remote.ai=await rpc('setAiProvider','gemini','');document.getElementById('geminiKey').value='';renderAiStatus();toast('Gemini guardado y activado')}catch(e){toast(e.message)}
}
async function removeAiKey(){
  if(!confirm('¿Eliminar la API key de Gemini de Apps Script?'))return;
  try{await rpc('clearGeminiApiKey');await refreshAiProviderStatus();renderAiStatus();toast('API key de Gemini eliminada')}catch(e){toast(e.message)}
}
async function testAi(){out('aiStatusBox','<span class="loader"></span> Probando Gemini…');try{const r=await rpc('testGeminiConnection');out('aiStatusBox',`<strong>Gemini conectado</strong> · HTTP ${r.status} · ${esc(r.model)} · respuesta: ${esc(r.answer)}`,'good');toast('Gemini conectado correctamente')}catch(e){out('aiStatusBox',esc(e.message),'bad');toast('Gemini no pudo autenticarse')}}
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

async function exportData(){const backup={format:'alex-electric-toolbox-hybrid-backup',schemaVersion:1,exportedAt:new Date().toISOString(),state,offlinePackage:offlinePackage||await offlineDbGet('package')||emptyOfflinePackage(),unsyncedProgress:offlineProgressMap(),quizHistory:JSON.parse(localStorage.getItem(OFFLINE_QUIZ_HISTORY_KEY)||'[]'),cubicaciones:JSON.parse(localStorage.getItem(OFFLINE_CUB_KEY)||'[]'),syncQueue:await getSyncQueue()};const blob=new Blob([JSON.stringify(backup,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='alex-electric-toolbox-v4-respaldo-local.json';a.click();URL.revokeObjectURL(url);toast('Respaldo local exportado')}
async function importData(e){const file=e.target.files&&e.target.files[0];if(!file)return;try{const d=JSON.parse(await file.text());const importedState=d.format==='alex-electric-toolbox-hybrid-backup'?(d.state||{}):d;state={...state,...importedState,progress:{...(importedState.progress||{})},notes:{...(importedState.notes||{})},semester:{...defaultSemester,...(importedState.semester||{})}};save();if(d.format==='alex-electric-toolbox-hybrid-backup'){if(d.offlinePackage){offlinePackage=d.offlinePackage;await offlineDbSet('package',offlinePackage)}localStorage.setItem(OFFLINE_PROGRESS_KEY,JSON.stringify(d.unsyncedProgress||{}));localStorage.setItem(OFFLINE_QUIZ_HISTORY_KEY,JSON.stringify(d.quizHistory||[]));localStorage.setItem(OFFLINE_CUB_KEY,JSON.stringify(d.cubicaciones||[]));await saveSyncQueue(d.syncQueue||[]);await bootstrapAuthorized()}renderStudy();renderSemester();renderStats();toast('Respaldo importado')}catch(err){console.error(err);toast('Archivo no válido')}e.target.value=''}
async function clearData(){if(!confirm('¿Borrar progreso, apuntes y cambios pendientes de este dispositivo? Las guías guardadas y los datos ya sincronizados NO se borrarán.'))return;[KEY,LEGACY_KEY,OFFLINE_PROGRESS_KEY,OFFLINE_QUIZ_HISTORY_KEY,OFFLINE_CUB_KEY,LEGACY_OFFLINE_PROGRESS_KEY,LEGACY_OFFLINE_QUIZ_HISTORY_KEY,LEGACY_OFFLINE_CUB_KEY].forEach(key=>localStorage.removeItem(key));await saveSyncQueue([]);state=loadState();activeModule='corr';renderStudy();renderSemester();renderStats();toast('Datos locales borrados')}

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
    await refreshAiProviderStatus();
    setAccessUI(remote.access);
    applyRemoteConfig();renderStats();renderAiStatus();renderGuides();
  }catch(e){
    console.error(e);
    const msg=String(e.message||'').toLowerCase();
    if(msg.includes('sesión vencida')||msg.includes('no autorizada')||msg.includes('no autorizado')){
      forgetOnlineSession(false);
      const localData=await localRpc('getBootstrapData');
      remote={...remote,...localData,access:localData.access};
      setAccessUI(remote.access);
      out('accessStatus','La sesión online venció. Puedes reconectarla desde Ajustes.','warn');
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
      email:'',
      name:'Modo local'
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
  offlinePackage=offlinePackage||await offlineDbGet('package')||emptyOfflinePackage();
  await offlineDbSet('package',offlinePackage);

  setAccessUI({
    authorized:true,
    role:'owner',
    email:'',
    name:'Modo local'
  });

  await bootstrapAuthorized();
}

async function bootstrap(){
  try{
    migrateLegacyLocalData();
    await migrateLegacySyncQueue();
    offlinePackage=await offlineDbGet('package');

    if(!offlinePackage){
      offlinePackage=emptyOfflinePackage();
      await offlineDbSet('package',offlinePackage);
    }

    // La app siempre abre con su copia local; la cuenta online se restaura después.
    setAccessUI({
      authorized:true,
      role:'owner',
      email:'',
      name:'Modo local'
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
          : 'Todavía no hay guías guardadas. Las calculadoras ya funcionan offline.',
        guideCount ? 'good' : ''
      );
    }

    const homeInfo=document.getElementById('homeOfflineInfo');
    if(homeInfo){
      out(
        'homeOfflineInfo',
        guideCount
          ? `<strong>${guideCount} guía(s)</strong> y <strong>${questionCount} pregunta(s)</strong> disponibles offline.`
          : 'Puedes usar las calculadoras inmediatamente. Al conectar la cuenta, las guías se guardarán solas para el modo offline.',
        guideCount ? 'good' : ''
      );
    }

  }catch(e){
    console.error(e);

    // Incluso si falla IndexedDB, mostramos la app para que las calculadoras sigan disponibles.
    offlinePackage=emptyOfflinePackage();

    setAccessUI({
      authorized:true,
      role:'owner',
      email:'',
      name:'Modo local'
    });

    try{
      await bootstrapAuthorized();
    }catch(inner){
      console.error(inner);
    }
  }

  renderAccountState();
  updateSyncUi();
  initBackendBridge();
}


if('serviceWorker' in navigator){
  window.addEventListener('load',()=>{
    const hadController=!!navigator.serviceWorker.controller;
    let reloading=false;
    navigator.serviceWorker.addEventListener('controllerchange',()=>{
      if(hadController&&!reloading){
        reloading=true;
        location.reload();
      }
    });
    navigator.serviceWorker
      .register('./service-worker.js',{updateViaCache:'none'})
      .then(registration=>registration.update())
      .catch(err=>console.warn('Service Worker:',err));
  });
}

bootstrap();

setInterval(()=>{
  if(hybrid.connectionMode!=='offline'&&navigator.onLine&&hybrid.bridgeReady&&!hybrid.syncing)probeBackend();
},60000);
