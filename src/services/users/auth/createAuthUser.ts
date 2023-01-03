import {
    createUserWithEmailAndPassword,
    getAuth,
    sendEmailVerification,
} from "firebase/auth";

export async function createAuthUser(email: string, password: string) {
    const auth = getAuth();
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(newUser.user);
}
