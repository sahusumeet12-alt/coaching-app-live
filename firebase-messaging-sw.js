importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAYdXyTAJTadnHZWd-E1xINMffxTiBJtNA",
  authDomain: "unique-study-point-2.firebaseapp.com",
  databaseURL: "https://unique-study-point-2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "unique-study-point-2",
  storageBucket: "unique-study-point-2.firebasestorage.app",
  messagingSenderId: "1012931361436",
  appId: "1:1012931361436:web:0ab002f5d36cd30a5c8b59"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Background Message:', payload);
  const notificationTitle = payload.notification?.title || 'UNIQUE STUDY POINT';
  const notificationOptions = {
    body: payload.notification?.body || payload.data?.message || 'New notification',
    icon: 'https://ui-avatars.com/api/?name=USP&background=667eea&color=fff&size=192',
    badge: 'https://ui-avatars.com/api/?name=USP&background=667eea&color=fff&size=72',
    vibrate: [200, 100, 200],
    tag: 'usp-notification',
    renotify: true
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
