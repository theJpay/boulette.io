export type DbUser = {
    pseudo: string;
};
export function formatUserToDatabase(user: Partial<User>) {
    const { pseudo } = user;
    return { pseudo };
}

export class User {
    id: string;
    pseudo: string;

    constructor(id: string, dbUser: DbUser) {
        this.id = id;
        this.pseudo = dbUser.pseudo || id.toString();
    }
}
