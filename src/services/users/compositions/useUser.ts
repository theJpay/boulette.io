import { doc, onSnapshot } from "firebase/firestore";
import { onMounted, onUnmounted, ref } from "vue";
import { assertDocumentExists } from "@/database";
import { User } from "@/entities";
import { fetchUser } from "../fetchUser";
import { useUserAuth } from "./useUserAuth";
import type { DbUser } from "@/entities";
import type { DocumentSnapshot, Unsubscribe } from "firebase/firestore";

export async function useUser() {
    const { userAuth } = useUserAuth();

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

    const user = ref(await fetchUser(userAuth.value.id));
    return { user };
}
