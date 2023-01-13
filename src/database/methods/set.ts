import { doc, setDoc } from "firebase/firestore";
import type { WithFieldValue } from "firebase/firestore";

export async function set<T>(
    collection: string,
    id: string,
    data: WithFieldValue<Partial<T>>
) {
    await setDoc(doc(db, collection, id), data);
}
