import type { User as FirebaseUser } from "firebase/auth";

export class User {
    private firebaseUser: FirebaseUser;

    constructor(firebaseUser: FirebaseUser) {
        this.firebaseUser = firebaseUser;
    }

    get name() {
        return this.firebaseUser.displayName || `${this.firebaseUser.uid}`;
    }

    get emailVerified() {
        return this.firebaseUser.emailVerified;
    }
}
