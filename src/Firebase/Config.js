
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
require('firebase/auth')





const firebaseConfig = {
  apiKey: "AIzaSyDMHMTZRL4af_HjzAap7gPFvsJni6x_JLc",
  authDomain: "netflix-fc484.firebaseapp.com",
  projectId: "netflix-fc484",
  storageBucket: "netflix-fc484.appspot.com",
  messagingSenderId: "652786488469",
  appId: "1:652786488469:web:ab8279eb3c2714b93e779c",
  measurementId: "G-6HEZZJD1G4"
};


export default  initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



