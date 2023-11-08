// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCrnghOW9gtSm_qCvIhjI21G-9PR6eVqlc',
  authDomain: 'techppy.firebaseapp.com',
  projectId: 'techppy',
  storageBucket: 'techppy.appspot.com',
  messagingSenderId: '623559481186',
  appId: '1:623559481186:web:13766baeff46e697ba3e3b',
  measurementId: 'G-YFXBXZQCBQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);