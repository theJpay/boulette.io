import database from "@/database";
import { createAuthUser, getAuthCurrentUser } from "../auth";
import type { DbUser } from "@/entities";

export async function createUser(
    pseudo: string,
    email: string,
    password: string
) {
    await createAuthUser(email, password);
    const { uid } = getAuthCurrentUser();
    await database.set<DbUser>("users", uid, { pseudo });
}
