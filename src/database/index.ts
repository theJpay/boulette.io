export { initDatabase } from "./initDatabase";

import { set } from "./methods";

export default getDatabase();

function getDatabase() {
    return {
        set,
    };
}
