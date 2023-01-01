<template>
    <InlineSvg class="svg-icon" :class="size" :src="icon" />
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import InlineSvg from "vue-inline-svg";
    import type { PropType } from "vue";
    import type { IconSizes } from "./IconSizes";

    // Fix because the interface is asking to bind props
    interface InlineSvgInterface {
        src: string;
    }

    export default defineComponent({
        components: { InlineSvg: InlineSvg as unknown as InlineSvgInterface },
        props: {
            icon: {
                type: String,
                required: true,
            },
            size: {
                type: String as PropType<IconSizes>,
                default: "regular",
            },
        },
    });
</script>

<style lang="scss" scoped>
    .svg-icon {
        display: flex;
        flex: none;
    }

    .regular {
        width: var(--length-icon-regular);
        height: var(--length-icon-regular);
    }

    .large {
        width: var(--length-icon-large);
        height: var(--length-icon-large);
    }
</style>
