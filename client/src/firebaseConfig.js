import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCPhO6NgvW5xy-bjze7VGnxr6XfJgJpKAQ",
  authDomain: "codeshastra-9cfb1.firebaseapp.com",
  projectId: "codeshastra-9cfb1",
  storageBucket: "codeshastra-9cfb1.appspot.com",
  messagingSenderId: "899191941139",
  appId: "1:899191941139:web:227cf4bd8d2938fd0bf7e6"
};

export const app = initializeApp(firebaseConfig);
export const database=getFirestore(app)
export const storage=getStorage(app);
