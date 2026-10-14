import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching'
import { clientsClaim } from 'workbox-core'

self.skipWaiting()
clientsClaim()
cleanupOutdatedCaches()
precacheAndRoute(self.__WB_MANIFEST)

// Notification fired by the page via postMessage, so it can also come from the SW context.
self.addEventListener('message', (event) => {
  const data = event.data
  if (data?.type !== 'notify') return
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/pwa-192.png',
      badge: '/badge.png',
      tag: 'fara-pomo',
      renotify: true,
      vibrate: [200, 100, 200, 100, 300]
    })
  )
})

// Real push messages (if a push server is ever wired up).
self.addEventListener('push', (event) => {
  const data = event.data?.json() ?? { title: 'Fara Pomo', body: '' }
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/pwa-192.png',
      badge: '/badge.png',
      tag: 'fara-pomo'
    })
  )
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      const client = list.find((c) => 'focus' in c)
      return client ? client.focus() : self.clients.openWindow('/')
    })
  )
})
