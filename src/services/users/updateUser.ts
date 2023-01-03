import database from "@/database";
import { DbUser } from "@/entities";
import type { User } from "@/entities";

export async function updateUser(id: string, update: Partial<User>) {
    const userUpdate = DbUser.buildUpdate(update);
    return database.set<DbUser>("users", id, userUpdate);
}
