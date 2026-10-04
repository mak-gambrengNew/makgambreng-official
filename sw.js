/* Mak-Gambreng service worker.
   - Kode (HTML/JS/CSS) dan gambar kartu: NETWORK-FIRST, sehingga gambar yang diganti di assets/cards/
     langsung terpakai setelah deploy (cache hanya jadi cadangan offline).
   - Aset lain: cache dulu lalu diperbarui di latar belakang.
   Naikkan nomor VERSION bila ingin memaksa pembersihan cache lama. */
const VERSION='mak-gambreng-v4';
const CORE=[
 "./",
 "./index.html",
 "./produk.html",
 "./cerita.html",
 "./gerai.html",
 "./kemitraan.html",
 "./manifest.webmanifest",
 "./mg.css",
 "./mg-boot.js",
 "./mg.js",
 "./card-assets.js",
 "./assets/logo.png",
 "./assets/hero.png",
 "./assets/booth.jpg",
 "./assets/cards/card-cappuccino-squash.png",
 "./assets/cards/card-gerai-18.png",
 "./assets/cards/card-gerai-alur-laut.png",
 "./assets/cards/card-gerai-bengkel.png",
 "./assets/cards/card-gerai-biru.png",
 "./assets/cards/card-gerai-bugis.png",
 "./assets/cards/card-gerai-gampol.png",
 "./assets/cards/card-gerai-pasar.png",
 "./assets/cards/card-gerai-sunter.png",
 "./assets/cards/card-gerai-walang.png",
 "./assets/cards/card-menu-teh-ekstra.png",
 "./assets/cards/card-menu-teh-jumbo.png",
 "./assets/cards/card-menu-teh-lemon.png",
 "./assets/cards/card-menu-teh-milo.png",
 "./assets/cards/card-menu-teh-solo.png",
 "./assets/cards/card-menu-teh-susu.png",
 "./assets/cards/card-minuman-viral.png",
 "./assets/cards/card-produk-teh-solo.png"
];

self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(VERSION).then(c=>Promise.all(CORE.map(u=>c.add(new Request(u,{cache:'reload'})).catch(()=>{})))));
});

self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==VERSION).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));
});

const isFresh=u=>u.pathname.includes('/assets/cards/')||/\.(html|js|css|webmanifest)$/.test(u.pathname)||u.pathname.endsWith('/');

function put(req,res){
  if(res&&res.ok&&res.type==='basic'){const copy=res.clone();caches.open(VERSION).then(c=>c.put(req,copy));}
  return res;
}

function networkFirst(req){
  const net=fetch(req,{cache:'no-cache'}).then(r=>put(req,r));
  const timeout=new Promise((_,rej)=>setTimeout(rej,3500));
  return Promise.race([net,timeout]).catch(()=>caches.match(req,{ignoreSearch:true}).then(r=>r||net).catch(()=>caches.match(req,{ignoreSearch:true})));
}

function staleWhileRevalidate(req){
  return caches.match(req).then(hit=>{
    const net=fetch(req).then(r=>put(req,r)).catch(()=>hit);
    return hit||net;
  });
}

self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==location.origin)return;
  const handler=isFresh(url)||req.mode==='navigate'?networkFirst(req):staleWhileRevalidate(req);
  e.respondWith(handler.then(r=>r||(req.mode==='navigate'?caches.match('./index.html'):Response.error())));
});
