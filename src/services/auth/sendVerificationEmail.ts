import { sendEmailVerification } from "firebase/auth";
import { getAuthCurrentUser } from "./getAuthCurrentUser";

export async function sendVerificationEmail() {
    const currentUser = getAuthCurrentUser();
    await sendEmailVerification(currentUser);
}
