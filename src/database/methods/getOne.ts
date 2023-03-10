import { doc, getDoc } from "firebase/firestore";
import { assertDocumentExists } from "@/database";
import type { DocumentData } from "firebase/firestore";

export async function getOne<T extends DocumentData>(
    collection: string,
    id: string
) {
    const snapshot = await getDoc<T>(doc<T>(db, collection, id));
    const dbDocument = snapshot.data();
    assertDocumentExists(dbDocument, snapshot);
    return dbDocument;
}
