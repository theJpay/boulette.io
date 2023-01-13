import { getOne, set } from "./methods";

export default getDatabase();
export { initDatabase } from "./initDatabase";
export { assertDocumentExists } from "./assertDocumentExists";

function getDatabase() {
    return {
        getOne,
        set,
    };
}
