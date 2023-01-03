import draftIcon from "@icons/draft.svg";
import SideBarItem from "./SideBarItem.vue";
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
    title: "sidebar",
    component: SideBarItem,
    argTypes: {
        icon: { table: { disable: true } },
        isActive: { type: "boolean" },
        title: { type: "string" },
    },
} as Meta<typeof SideBarItem>;

type SideBarItemProps = InstanceType<typeof SideBarItem>["$props"];

export const SideBarItemStory: StoryFn<typeof SideBarItem> = (args) => ({
    components: { SideBarItem },
    setup() {
        const defaultProps: SideBarItemProps = {
            icon: draftIcon,
            isActive: true,
            title: "My files",
        };
        return { props: { ...defaultProps, ...args } };
    },
    template: `
        <div style="width: 280px"><SideBarItem v-bind="props" /></div>
    `,
});
SideBarItemStory.storyName = "SideBarItem";
