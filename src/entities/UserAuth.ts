import type { User as FirebaseAuthUser } from "firebase/auth";

export class UserAuth {
    private firebaseUser: FirebaseAuthUser;
    id: string;
    email: FirebaseAuthUser["email"];

    constructor(firebaseUser: FirebaseAuthUser) {
        this.firebaseUser = firebaseUser;
        this.id = firebaseUser.uid;
        this.email = firebaseUser.email;
    }

    get verified() {
        return this.firebaseUser.emailVerified;
    }
}
