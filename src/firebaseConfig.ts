// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_FIREBASE_apiKey,
	authDomain: import.meta.env.VITE_API_FIREBASE_authDomain,
	projectId: import.meta.env.VITE_API_FIREBASE_projectId,
	storageBucket: import.meta.env.VITE_API_FIREBASE_storageBucket,
	messagingSenderId: import.meta.env.VITE_API_FIREBASE_messagingSenderId,
	appId: import.meta.env.VITE_API_FIREBASE_appId,
	measurementId: import.meta.env.VITE_API_FIREBASE_measurementId,
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);
export const db = getFirestore(fb);