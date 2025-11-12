//Asignar nombre y version al cache
const CACHE_NAME='v1_cache_CynthiaTepetatepwa';

//ficheros a cachear en la aplicación
var urlsToCache=[
    './',
    './css/styles.css',
    './img/favicon.png',
    './img/1.png',
    './img/2.png',
    './img/3.png',
    './img/4.png',
    './img/5.png',
    './img/6.png',
    './img/facebook.png',
    './img/instagram.png',
    './img/twitter.png',
    './img/fabicon-1024.png',
    './img/fabicon-512.png',
    './img/fabicon-384.png',
    './img/fabicon-256.png',
    './img/fabicon-128.png',
    './img/fabicon-96.png',
    './img/fabicon-64.png',
    './img/fabicon-32.png',
    './img/fabicon-16.png',

    './js/app.js'
];

//evento install
//Instalavcion del servicio Woeker
self.addEventListener('install', e=>{
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache =>{
            return cache.addAll(urlsToCache)
            .then(()=>{
                self.skipWaiting();
            });
        })
        .catch(err=>console.log('No se ha registrado el cache', err))
    );
}	);