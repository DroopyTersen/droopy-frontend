/// <reference lib="webworker"/>
const CACHE_KEY = "v0.1";

interface Window extends ServiceWorkerGlobalScope {}

self.skipWaiting();

self.addEventListener("fetch", function (event: FetchEvent) {
  if (event.request.method !== "GET") {
    return;
  }
  if (event.request.mode === "navigate") {
    event.respondWith(caches.match("index.html"));
    return;
  }
  event.respondWith(
    fetchAndSetCache(event.request).catch(function () {
      return caches.match(event.request);
    })
  );
});

self.addEventListener("install", function (event) {
  console.log("Service Worker being installed");
  event.waitUntil(precache());
});

self.addEventListener("activate", async function (event) {
  event.waitUntil(clearOldCache());
});

function clearOldCache() {
  return caches.keys().then(function (cacheNames) {
    return Promise.all(
      cacheNames
        .filter(function (cacheName) {
          return cacheName !== CACHE_KEY;
        })
        .map(function (cacheName) {
          return caches.delete(cacheName);
        })
    );
  });
}
function fetchAndSetCache(request) {
  return caches.open(CACHE_KEY).then(function (cache) {
    return fetch(request).then(function (response) {
      cache.put(request, response.clone());
      return response;
    });
  });
}

function getFromCache(request) {
  return caches.open(CACHE_KEY).then(function (cache) {
    return cache.match(request).then(function (cachedValue) {
      return cachedValue || null;
    });
  });
}

function precache() {
  return caches.open(CACHE_KEY).then(function (cache) {
    return cache.addAll([
      "/",
      "index.html",
      "app.js",
      "manifest.json",
      "/images/icons/icon-144x144.png",
      "/images/icons/icon-72x72.png",
    ]);
  });
}
