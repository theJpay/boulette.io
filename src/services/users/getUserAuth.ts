import { getAuth } from "firebase/auth";
import { UserAuth } from "@/entities";
import { AuthenticationError } from "./auth";

export function getUserAuth() {
    const currentUser = getAuth().currentUser;
    if (!currentUser) throw new AuthenticationError();
    return new UserAuth(currentUser);
}
