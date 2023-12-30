import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyDXrny7l7-uRKd64MWqBGh4_-ke_j2l3qk",
  authDomain: "placeaccess-1578923739413.firebaseapp.com",
  databaseURL: "https://placeaccess-1578923739413.firebaseio.com",
  projectId: "placeaccess-1578923739413",
  storageBucket: "placeaccess-1578923739413.appspot.com",
  messagingSenderId: "457693641330",
  appId: "1:457693641330:web:f7b12a1c53a18b31bd60eb",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
