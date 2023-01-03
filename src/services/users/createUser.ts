import { getAuth } from "firebase/auth";
import database from "@/database";
import type { User } from "@/entities";
import { AuthenticationError, createAuthUser } from "./auth";

export async function createUser(
    pseudo: string,
    email: string,
    password: string
) {
    await createAuthUser(email, password);
    const auth = getAuth();
    if (!auth.currentUser) throw new AuthenticationError();
    await database.set<User>("users", auth.currentUser?.uid, { pseudo });
}
