// Service worker: lets the app install and work offline.
// Bump CACHE_VERSION to drop old caches after changing the precache list.
const CACHE_VERSION = 'v1'
const CACHE_NAME = `sop-${CACHE_VERSION}`

const APP_SHELL = [
    './',
    'index.html',
    'main.js',
    'app.css',
    'manifest.json',
    'src/img/favicon/favicon-32x32.png',
    'src/img/favicon/favicon-16x16.png',
    'src/img/favicon/apple-touch-icon.png',
    'src/img/favicon/android-chrome-192x192.png',
    'src/img/favicon/android-chrome-512x512.png'
]

const CDN_ASSETS = [
    'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons',
    'https://cdn.jsdelivr.net/npm/animate.css@^4.1.1/animate.min.css',
    'https://cdn.jsdelivr.net/npm/quasar@2.0.0/dist/quasar.prod.css',
    'https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.prod.js',
    'https://cdn.jsdelivr.net/npm/quasar@2.0.0/dist/quasar.umd.prod.js'
]

self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME)
        await cache.addAll(APP_SHELL)
        // A CDN hiccup shouldn't block installing; these are also cached on first use.
        await Promise.all(CDN_ASSETS.map(url => cache.add(url).catch(() => undefined)))
        await self.skipWaiting()
    })())
})

self.addEventListener('activate', event => {
    event.waitUntil((async () => {
        const keys = await caches.keys()
        await Promise.all(keys.filter(key => key.startsWith('sop-') && key !== CACHE_NAME).map(key => caches.delete(key)))
        await self.clients.claim()
    })())
})

self.addEventListener('fetch', event => {
    const request = event.request
    if (request.method !== 'GET') {
        return
    }
    const url = new URL(request.url)
    if (url.origin === self.location.origin) {
        event.respondWith(networkFirst(request))
    } else if (url.protocol.startsWith('http')) {
        event.respondWith(cacheFirst(request))
    }
})

// The app's own files: always try for the latest version, fall back to the cache when offline.
// Query strings are only cache busters, so they are ignored when reading from the cache.
async function networkFirst(request) {
    const cache = await caches.open(CACHE_NAME)
    try {
        const response = await fetch(request)
        if (response.ok) {
            cache.put(stripSearch(request), response.clone())
        }
        return response
    } catch (e) {
        const cached = await cache.match(request, {ignoreSearch: true})
        if (cached) {
            return cached
        }
        if (request.mode === 'navigate') {
            return cache.match('index.html')
        }
        throw e
    }
}

// Libraries, fonts and images from CDNs don't change at a given URL, so serve them from the cache.
async function cacheFirst(request) {
    const cache = await caches.open(CACHE_NAME)
    const cached = await cache.match(request)
    if (cached) {
        return cached
    }
    const response = await fetch(request)
    if (response.ok || response.type === 'opaque') {
        cache.put(request, response.clone())
    }
    return response
}

function stripSearch(request) {
    const url = new URL(request.url)
    url.search = ''
    return url.toString()
}
