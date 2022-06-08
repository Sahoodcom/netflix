
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
require('firebase/auth')





const firebaseConfig = {
  apiKey: "AIzaSyBer4uuPPFqGIKUlZoc8CTJPZFjycK0dAE",
  authDomain: "netflixcom-5c656.firebaseapp.com",
  projectId: "netflixcom-5c656",
  storageBucket: "netflixcom-5c656.appspot.com",
  messagingSenderId: "1020841294139",
  appId: "1:1020841294139:web:a4449d18831dfabdc21f1e",
  measurementId: "G-L8PGESM323"
};


export default  initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



