import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
 
// Initialize Firebase
const firebaseConfig = {
apiKey: "AIzaSyCD8f4Iu-IGWmVufKfy_WBdb-sVeRmPWr0",
authDomain: "reactapp-8bfcc.firebaseapp.com",
projectId: "reactapp-8bfcc",
storageBucket: "reactapp-8bfcc.appspot.com",
messagingSenderId: "352151609963",
appId: "1:352151609963:web:32450e663bc041a193c72e",
measurementId: "G-2ZBTN85Z4S"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);