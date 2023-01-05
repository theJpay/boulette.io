import { getAuth, signOut } from "firebase/auth";

export async function signOutUser() {
    const auth = getAuth();
    await signOut(auth);
}
