import { getAuth, onAuthStateChanged } from "firebase/auth";
import { onMounted, onUnmounted, ref } from "vue";
import { CurrentUserMissingError } from "../errors";
import type { Auth, Unsubscribe, User } from "firebase/auth";

export function useAuthCurrentUser() {
    const auth = getAuth();
    const authCurrentUser = ref<User>(buildUser(auth.currentUser));
    const error = ref<Error | null>(null);

    let unsubscribe: Unsubscribe;
    onMounted(() => {
        unsubscribe = onAuthStateChanged(
            auth,
            (u) => (authCurrentUser.value = buildUser(u)),
            (e) => (error.value = e)
        );
    });
    onUnmounted(() => unsubscribe());

    return { authCurrentUser, error };
}

function buildUser(user: Auth["currentUser"]) {
    if (!user) throw new CurrentUserMissingError("useUserAuth");
    return user;
}
