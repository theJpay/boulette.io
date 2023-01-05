import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export async function signInUser(email: string, password: string) {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
}
