// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database"
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

   // const auth =firebase.auth();
   //const provider =new firebase.auth.GoogleAuthProvider();
   // const db=firebaseApp.firestore();

  //  export{auth,provider};
   // export default db;
   export const auth = getAuth(firebaseApp);
   export const provider = new GoogleAuthProvider();
   //export  const provider =new firebase.auth.GoogleAuthProvider();
   export const fbDatabase = getDatabase(firebaseApp);
   export const fStore = getFirestore(firebaseApp);