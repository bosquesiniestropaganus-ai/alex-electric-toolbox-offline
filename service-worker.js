const CACHE_NAME='alex-electric-toolbox-hybrid-v4-5-1';
const APP_SHELL=[
  './',
  './index.html',
  './config.js',
  './normativa.js',
  './styles.css',
  './app.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './normativa/pdf/decreto-8-2019.pdf',
  './normativa/pdf/resolucion-33877-sec-firmada.pdf',
  './normativa/pdf/resolucion-33877-diario-oficial.pdf'
];

self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache=>cache.addAll(APP_SHELL))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(
        keys
          .filter(key=>key!==CACHE_NAME)
          .map(key=>caches.delete(key))
      ))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  const req=event.request;

  if(req.method!=='GET')return;

  if(req.mode==='navigate'){
    event.respondWith(
      fetch(req)
        .then(res=>{
          if(res.ok){
            const copy=res.clone();
            caches.open(CACHE_NAME).then(cache=>cache.put('./index.html',copy));
          }
          return res;
        })
        .catch(()=>caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(req)
      .then(cached=>{
        const network=fetch(req)
          .then(res=>{
            if(res.ok&&new URL(req.url).origin===self.location.origin){
              const copy=res.clone();
              caches.open(CACHE_NAME).then(cache=>cache.put(req,copy));
            }
            return res;
          })
          .catch(()=>cached||Response.error());
        return cached||network;
      })
  );
});

self.addEventListener('message',event=>{
  if(event.data&&event.data.type==='SKIP_WAITING')self.skipWaiting();
});
