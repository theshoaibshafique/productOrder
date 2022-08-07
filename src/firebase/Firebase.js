// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBG4E8t7bIa-IpBtGQGZ4ZJM0sbrXxiSHg',
  authDomain: 'product-order-52b0f.firebaseapp.com',
  projectId: 'product-order-52b0f',
  storageBucket: 'product-order-52b0f.appspot.com',
  messagingSenderId: '355907289828',
  appId: '1:355907289828:web:20d5a97379fdbb205b22f1',
  measurementId: 'G-P19149L39F',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
