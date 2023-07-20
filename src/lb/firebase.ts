import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCgCtLCd77_Yzlwau5MX3d6D_5juaRNl30",
  authDomain: "chapter-quest.firebaseapp.com",
  projectId: "chapter-quest",
  storageBucket: "chapter-quest.appspot.com",
  messagingSenderId: "127460157958",
  appId: "1:127460157958:web:0fcb86f515eeed5b943187",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
