import { getAuth } from "firebase/auth";
import database from "@/database";
import { AuthenticationError, createAuthUser } from "./auth";
import type { DbUser } from "@/entities";

export async function createUser(
    pseudo: string,
    email: string,
    password: string
) {
    await createAuthUser(email, password);
    const auth = getAuth();
    if (!auth.currentUser) throw new AuthenticationError();
    await database.set<DbUser>("users", auth.currentUser?.uid, { pseudo });
}
