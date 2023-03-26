// Name of the Cache.
const CACHE = "cacheV1";

// Select files for caching.
let urlsToCache = [
    "/",
    "/index.html",
    "/components",
    "/components/assets",
    "/components/assets/favicon.png",
    "/components/assets/textures",
    "/components/assets/textures/clouds1.jpg",
    "/components/assets/textures/noise.jpg",
    "/components/assets/textures/noise3.jpg",
    "/components/assets/textures/particle-sprite.png",
    "/components/images",
    "/components/images/favicon.png",
    "/components/scripts",
    "/components/scripts/main.js",
    "/components/scripts/pwa-handler.js",
    "/components/scripts/starfield.min.js",
    "/components/styles",
    "/components/styles/main.css",
    "/components/styles/nova.css"
];

// Cache all the selected items once application is installed.
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => {
            console.log("Caching started.");
            return cache.addAll(urlsToCache);
        })
    );
});

// Whenever a resource is requested, return if its cached else fetch the resourcefrom server.
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
