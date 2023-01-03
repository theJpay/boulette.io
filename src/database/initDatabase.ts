import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

export function initDatabase() {
    const firebase = initializeApp(firebaseConfig);
    db = getFirestore(firebase);

    if (import.meta.env.MODE === "emulators") {
        const auth = getAuth(firebase);
        connectAuthEmulator(auth, "http://localhost:9099");
        connectFirestoreEmulator(db, "localhost", 8080);
    }
}
