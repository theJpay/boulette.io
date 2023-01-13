import { doc, onSnapshot } from "firebase/firestore";
import { onMounted, onUnmounted, ref } from "vue";
import { assertDocumentExists } from "@/database";
import { User } from "@/entities";
import { getAuthCurrentUser } from "@/services/auth/getAuthCurrentUser";
import { fetchUser } from "../fetchUser";
import type { DbUser } from "@/entities";
import type { DocumentSnapshot, Unsubscribe } from "firebase/firestore";

export async function useUser() {
    const currentUser = getAuthCurrentUser();

    let unsubscribe: Unsubscribe;
    onMounted(() => {
        unsubscribe = onSnapshot<DbUser>(
            doc<DbUser>(db, "users", user.value.id),
            (document: DocumentSnapshot<DbUser>) => {
                const newDbUser = document.data();
                assertDocumentExists(newDbUser, document);
                user.value = new User(document.id, newDbUser);
            }
        );
    });
    onUnmounted(() => unsubscribe());

    const user = ref(await fetchUser(currentUser.uid));
    return { user };
}
