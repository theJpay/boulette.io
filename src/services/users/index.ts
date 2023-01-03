export { useUser, useUserAuth } from "./compositions";

export { createUser } from "./createUser";
export { fetchUser } from "./fetchUser";
export { getUserAuth } from "./getUserAuth";
export { updateUser } from "./updateUser";

// TODO: Refactor in individual services
export {
    isAuthenticatedUser,
    sendVerificationEmail,
    signIn,
    signOut,
} from "./auth";
