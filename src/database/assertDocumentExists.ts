import { DocumentNotFoundError } from "./DocumentNotFoundError";
import type { DocumentData, DocumentSnapshot } from "firebase/firestore";

export function assertDocumentExists<T extends DocumentData>(
    data: T | undefined,
    document: DocumentSnapshot
): asserts data is T {
    if (!data) {
        throw new DocumentNotFoundError("users", document.id);
    }
}
