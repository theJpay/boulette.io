<template>
    <div v-if="isSelf">
        This is your profile page
        <InputRegular v-model="tempUser.pseudo" @return="onSave()" />
    </div>
    <div v-else>This is the profile page of "{{ userId }}"</div>
</template>

<script lang="ts">
    import { computed, defineComponent, ref } from "vue";
    import { useRoute } from "vue-router";
    import { InputRegular } from "@generics/inputs";
    import { updateUser, useUser } from "@/services/users";

    export default defineComponent({
        components: { InputRegular },
        async setup() {
            const route = useRoute();
            const { user } = await useUser();

            const userId = ref(route.params.id);
            const isSelf = computed(() => !userId.value);

            const tempUser = ref({ ...user.value });

            const onSave = async () => {
                await updateUser(user.value.id, tempUser.value);
                user.value = { ...user.value, ...tempUser.value };
            };

            return { isSelf, onSave, tempUser, userId };
        },
    });
</script>
