import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp({ 
      projectId: "join-abea3", 
      appId: "1:283248561390:web:b65efece017763c535f7ff", 
      storageBucket: "join-abea3.firebaseapp.com", 
      apiKey: "AIzaSyAXn_F7hJs9XUNhQ6izBnpOpY-MZK0yygs", 
      authDomain: "kanban-board-fe3c5.firebaseapp.com", 
      messagingSenderId: "283248561390", 
      measurementId: "G-1N3F9WK1HD" 
    })), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore())
  ]
};
