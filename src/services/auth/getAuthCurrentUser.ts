import { getAuth } from "firebase/auth";
import { CurrentUserMissingError } from "./errors";

export function getAuthCurrentUser() {
    const currentUser = getAuth().currentUser;
    if (!currentUser) throw new CurrentUserMissingError("useUserAuth");
    return currentUser;
}
