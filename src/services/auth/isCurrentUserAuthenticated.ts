import { getAuth, onAuthStateChanged } from "firebase/auth";

export async function isCurrentUserAuthenticated() {
    return !!(await new Promise((resolve, reject) => {
        onAuthStateChanged(getAuth(), resolve, reject);
    }));
}
