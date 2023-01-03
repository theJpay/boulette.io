import { User } from "@/entities";
import database from "@/database";
import type { DbUser } from "@/entities";

export async function fetchUser(id: string) {
    const dbUser = await database.getOne<DbUser>(id);
    return new User(id, dbUser);
}
