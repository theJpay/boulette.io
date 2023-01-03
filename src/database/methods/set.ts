import { doc, setDoc } from "firebase/firestore";

export async function set<T extends Record<string, any>>(
    collection: string,
    id: string,
    data: Partial<Omit<T, "id">>
) {
    await setDoc(doc(db, collection, id), data);
}
