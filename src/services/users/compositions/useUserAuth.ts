import { getAuth, onAuthStateChanged } from "firebase/auth";
import { onMounted, onUnmounted, ref } from "vue";
import { UserAuth } from "@/entities";
import { AuthenticationError } from "../auth";
import type { Auth, Unsubscribe } from "firebase/auth";

export function useUserAuth() {
    const auth = getAuth();
    const userAuth = ref<UserAuth>(buildUser(auth.currentUser));
    const error = ref<Error | null>(null);

    let unsubscribe: Unsubscribe;
    onMounted(() => {
        unsubscribe = onAuthStateChanged(
            auth,
            (u) => (userAuth.value = buildUser(u)),
            (e) => (error.value = e)
        );
    });
    onUnmounted(() => unsubscribe());

    return { userAuth, error };
}

function buildUser(user: Auth["currentUser"]) {
    if (!user) throw new AuthenticationError();
    return new UserAuth(user);
}
