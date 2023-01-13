<template>
    <div class="form-field">
        <div class="title">
            {{ title }}
        </div>
        <slot />
        <div
            class="error"
            :class="{ 'force-error': false, 'hide-error': false }"
        >
            Please enter a valid email
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        props: {
            customErrorHandling: {},
            title: {
                type: String,
                required: true,
            },
        },
        setup() {
            return {};
        },
    });
</script>

<style lang="scss" scoped>
    .form-field {
        display: flex;
        flex-direction: column;
        gap: 4px;

        .title {
            color: var(--neutral-900);

            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
        }

        .error {
            height: 18px;

            color: red;

            font-size: 12px;
            line-height: 18px;

            visibility: hidden;

            transition: visibility var(--duration-transition);

            &.force-error {
                visibility: visible;
            }
        }

        // Needs to stay the same as in InputRegular.vue
        :slotted(*:invalid:not(:focus):not(:placeholder-shown)) + .error {
            visibility: visible;

            &.hide-error {
                visibility: hidden;
            }
        }
    }
</style>
