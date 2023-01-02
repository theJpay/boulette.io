<template>
    <div class="typewriter-effect">
        <div v-if="fixedText" class="fixed-text">{{ fixedText }}&nbsp;</div>
        <div class="moving-text">{{ text }}</div>
        <div
            v-if="!isCursorHidden"
            class="cursor"
            :class="{ typing: isTyping }"
        >
            &nbsp;
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent } from "vue";
    import { useTypeText } from "./compositions";

    export default defineComponent({
        props: {
            fixedText: {
                type: String,
            },
            hideCursorWhenFinished: Boolean,
            movingText: {
                type: String,
                default: "",
            },
        },
        setup(props) {
            const { isDoneWriting, isTyping, text } = useTypeText(
                props.movingText
            );

            const isCursorHidden = computed(
                () => isDoneWriting.value && props.hideCursorWhenFinished
            );

            return { isCursorHidden, isTyping, text };
        },
    });
</script>

<style lang="scss" scoped>
    .typewriter-effect {
        display: flex;
        align-items: center;

        .moving-text {
            color: var(--primary-600);
            font-family: Merriweather, "Times New Roman", Times, serif;
        }

        .cursor {
            width: 0.075em;
            height: 100%;

            background-color: var(--primary-600);

            animation: cursorBlink 1.2s infinite;

            &.typing {
                animation: none;
            }
        }

        @keyframes cursorBlink {
            50% {
                background-color: transparent;
            }
        }
    }
</style>
