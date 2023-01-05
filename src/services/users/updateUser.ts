import database from "@/database";
import { formatUserToDatabase } from "@/entities";
import type { DbUser, User } from "@/entities";

export async function updateUser(id: string, update: Partial<User>) {
    const userUpdate = formatUserToDatabase(update);
    return database.set<DbUser>("users", id, userUpdate);
}
