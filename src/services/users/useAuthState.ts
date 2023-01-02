import { getAuth, onAuthStateChanged } from "firebase/auth";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { User } from "@/entities";
import type { User as FirebaseUser, Unsubscribe } from "firebase/auth";

export function useAuthState() {
    const user = ref<User | null>(null);
    const error = ref<Error | null>(null);

    const auth = getAuth();
    let unsubscribe: Unsubscribe;
    onMounted(() => {
        unsubscribe = onAuthStateChanged(
            auth,
            (u) => (user.value = buildUser(u)),
            (e) => (error.value = e)
        );
    });
    onUnmounted(() => unsubscribe());

    const isAuthenticated = computed(() => user.value != null);
    const isVerified = computed(() => !!user.value?.emailVerified);

    return { user, error, isAuthenticated, isVerified };
}

function buildUser(user: FirebaseUser | null) {
    if (!user) return null;
    return new User(user);
}
