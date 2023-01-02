<template>
    <div class="home">
        <h1>Hello {{ user?.displayName }}</h1>
        <LinkAction
            v-if="!isVerified"
            title="Verification email"
            @click="onSendVerificationEmail()"
        />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { sendVerificationEmail, useAuthState } from "@/services/users";
    import { LinkAction } from "@/components/generics/actions";

    export default defineComponent({
        components: { LinkAction },
        setup() {
            const { user, isVerified } = useAuthState();

            const onSendVerificationEmail = async () => {
                await sendVerificationEmail();
            };

            return { isVerified, onSendVerificationEmail, user };
        },
    });
</script>

<style lang="scss" scoped>
    .home {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;
    }
</style>
