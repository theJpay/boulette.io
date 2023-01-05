export class DocumentNotFoundError extends Error {
    constructor(collection: string, id: string) {
        super(`documentId ${id} not found in collection ${collection}`);
    }
}
