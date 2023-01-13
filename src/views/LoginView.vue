<template>
    <div class="login-view">
        <CardBorder class="login-card">
            <div class="title">Boulette.app</div>
            <form ref="form" class="login-form" @submit.prevent="onLogin()">
                <FormField title="Email">
                    <InputRegular
                        v-model="email"
                        type="email"
                        @return="form?.submit()"
                    />
                </FormField>
                <FormField title="Password">
                    <InputRegular v-model="password" type="password" />
                </FormField>
                <ButtonRegular title="Login" type="submit" />
            </form>
            <ButtonRegular
                impact="low"
                title="Create account"
                type="button"
                @click="onGoToRegister()"
            />
        </CardBorder>
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from "vue";
    import { useRouter } from "vue-router";
    import { ButtonRegular } from "@generics/actions";
    import { CardBorder } from "@generics/containers";
    import { InputRegular } from "@generics/inputs";
    import { FormField } from "@/components/userForm";
    import { signInUser } from "@/services/auth";

    export default defineComponent({
        components: {
            ButtonRegular,
            CardBorder,
            FormField,
            InputRegular,
        },
        setup() {
            const form = ref<HTMLFormElement>();
            const router = useRouter();

            const email = ref("");
            const password = ref("");

            const onLogin = async () => {
                await signInUser(email.value, password.value);
                router.push({ name: "home" });
                console.log("Login", {
                    email: email.value,
                    password: email.value,
                });
            };
            const onGoToRegister = () => {
                router.push({ name: "register" });
            };

            return { email, form, onGoToRegister, onLogin, password };
        },
    });
</script>

<style lang="scss" scoped>
    .login-view {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;

        .login-card {
            display: flex;
            flex-direction: column;
            gap: 32px;
            align-items: center;
            width: 300px;
            padding: 48px;

            .title {
                display: flex;
                justify-content: center;

                color: var(--neutral-900);
                font-weight: 600;
                font-size: 32px;
            }

            .login-form {
                display: flex;
                flex-direction: column;
                align-self: stretch;
            }
        }
    }
</style>
