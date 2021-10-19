import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDyFYeJ6_V0JeREsp8o1iauum6LNUke5Ts",
    authDomain: "mosher-clothing.firebaseapp.com",
    projectId: "mosher-clothing",
    storageBucket: "mosher-clothing.appspot.com",
    messagingSenderId: "448195090123",
    appId: "1:448195090123:web:09901a927b6a007b74ed4e"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db