<template>
    <button
        class="button-regular"
        :class="{
            [`${impact}-impact`]: true,
        }"
        :disabled="disabled"
        :type="type"
    >
        {{ title }}
    </button>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import type { PropType } from "vue";

    type ButtonImpact = "high" | "low";

    export default defineComponent({
        props: {
            disabled: Boolean,
            impact: {
                type: String as PropType<ButtonImpact>,
                default: "high",
            },
            title: String,
            type: {
                type: String as PropType<"button" | "submit">,
                default: "button",
            },
        },
    });
</script>

<style lang="scss" scoped>
    @mixin buttonRegularColors(
        $text,
        $background,
        $background-hover,
        $background-disabled
    ) {
        & {
            color: $text;

            background-color: $background;
        }

        &:hover {
            background-color: $background-hover;
        }

        &:disabled {
            color: var(--neutral-300);

            background-color: $background-disabled;
        }
    }

    .button-regular {
        padding: 8px 16px;

        font-weight: 600;
        font-size: 13px;
        line-height: 20px;
        text-align: center;
        text-transform: uppercase;

        border-width: 0;
        border-radius: 18px;
        cursor: pointer;

        &.high-impact {
            @include buttonRegularColors(
                var(--neutral-900),
                var(--primary-500),
                var(--primary-600),
                var(--neutral-25)
            );
        }

        &.low-impact {
            @include buttonRegularColors(
                var(--primary-600),
                transparent,
                var(--neutral-5),
                transparent
            );
        }

        &:disabled {
            cursor: default;
        }
    }
</style>
