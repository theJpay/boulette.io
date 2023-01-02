<template>
    <div v-if="user" class="home">
        <TypewriterEffect
            class="user-name"
            fixedText="Hi, "
            :movingText="user.name"
        />
        <LinkAction
            v-if="!user.emailVerified"
            title="Verification email"
            @click="onSendVerificationEmail()"
        />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { LinkAction } from "@generics/actions";
    import { TypewriterEffect } from "@generics/text";
    import { sendVerificationEmail, useAuthState } from "@/services/users";

    export default defineComponent({
        components: { LinkAction, TypewriterEffect },
        setup() {
            const { user } = useAuthState();

            const onSendVerificationEmail = async () => {
                await sendVerificationEmail();
            };

            return { onSendVerificationEmail, user };
        },
    });
</script>

<style lang="scss" scoped>
    .home {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;

        padding: 64px;

        .user-name {
            font-weight: 600;
            font-size: 48px;
        }
    }
</style>
