import TypewriterEffect from "./TypewriterEffect.vue";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
    title: "generics/text",
    component: TypewriterEffect,
    argTypes: {
        fixedText: { type: "string" },
        hideCursorWhenFinished: { type: "boolean" },
        movingText: { type: "string" },
    },
} as Meta<typeof TypewriterEffect>;

type TypewriterEffectProps = InstanceType<typeof TypewriterEffect>["$props"];
export const TypewriterEffectStory: StoryFn<typeof TypewriterEffect> = (
    args
) => ({
    components: { TypewriterEffect },
    setup() {
        const defaultProps: TypewriterEffectProps = {
            fixedText: "Hello",
            movingText: "World",
        };

        return { props: { ...defaultProps, ...args } };
    },
    template: `<TypewriterEffect v-bind="props" style="font-size: 64px" />`,
});
TypewriterEffectStory.storyName = "TypewriterEffect";
