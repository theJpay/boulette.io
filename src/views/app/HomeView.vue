<template>
    <div v-if="user" class="home">
        <TypewriterEffect
            class="user-name"
            fixedText="Hi, "
            :movingText="user.pseudo"
        />
        <div class="locked">
            <div class="text">
                Please verify your account if you want to use this app.
            </div>
            <ButtonRegular
                v-if="!userAuth.verified"
                class="send-email-button"
                title="Send verification email"
                @click="onSendVerificationEmail()"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { ButtonRegular } from "@generics/actions";
    import { TypewriterEffect } from "@generics/text";
    import {
        sendVerificationEmail,
        useUser,
        useUserAuth,
    } from "@/services/users";

    export default defineComponent({
        components: { ButtonRegular, TypewriterEffect },
        async setup() {
            const { userAuth } = useUserAuth();
            const { user } = await useUser();
            // const user = ref(await fetchUser(userAuth.value.id));

            const onSendVerificationEmail = async () => {
                await sendVerificationEmail();
            };

            return { onSendVerificationEmail, user, userAuth };
        },
    });
</script>

<style lang="scss" scoped>
    .home {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;

        .user-name {
            padding: 24px;

            font-weight: 600;
            font-size: 48px;
        }

        .locked {
            display: flex;
            flex-direction: column;
            gap: 16px;
            align-items: center;

            .text {
                color: var(--neutral-900);
                font-size: 14px;
                line-height: 20px;
            }
        }
    }
</style>
