import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBRWMXaY3N7-IDgLA0Cr4wwBxri0RRvEvc",
  authDomain: "netflix-clone-8d803.firebaseapp.com",
  projectId: "netflix-clone-8d803",
  storageBucket: "netflix-clone-8d803.appspot.com",
  messagingSenderId: "751781498554",
  appId: "1:751781498554:web:b9985096a2ee5f8e67fc83",
  measurementId: "G-RHX3B0HVKS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const logout =  () => {
    signOut(auth)
}

export{auth, db, login, signup, logout}