import {
    getAuth,
    onAuthStateChanged,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signOut as signOutUser,
} from "firebase/auth";

export async function isAuthenticatedUser() {
    return !!(await new Promise((resolve, reject) => {
        onAuthStateChanged(getAuth(), resolve, reject);
    }));
}

export async function signIn(email: string, password: string) {
    try {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
    }
}

export async function signOut() {
    const auth = getAuth();
    await signOutUser(auth);
}

export async function sendVerificationEmail() {
    const auth = getAuth();

    if (!auth.currentUser) return;
    await sendEmailVerification(auth.currentUser);
}
