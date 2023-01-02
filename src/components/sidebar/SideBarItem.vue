<template>
    <div class="sidebar-link" :class="{ active: isActive }">
        <SvgIcon class="icon" :icon="icon" />
        <div class="title">{{ title }}</div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { SvgIcon } from "@generics/icons";

    export default defineComponent({
        components: { SvgIcon },
        props: {
            icon: {
                type: String,
                required: true,
            },
            isActive: Boolean,
            title: {
                type: String,
                required: true,
            },
        },
    });
</script>

<style lang="scss" scoped>
    @mixin sideBarItemColors($text, $background, $background-hover) {
        color: $text;

        background-color: $background;

        .icon {
            color: $text;
        }

        &:hover {
            background: $background-hover;
        }
    }

    .sidebar-link {
        display: flex;
        gap: 24px;
        align-items: center;

        padding: 12px 0 12px 24px;

        border-radius: 0 24px 24px 0;
        cursor: pointer;

        @include sideBarItemColors(
            var(--neutral-700),
            transparent,
            var(--neutral-25)
        );

        &.active {
            @include sideBarItemColors(
                var(--neutral-900),
                var(--primary-500),
                var(--primary-600)
            );
        }

        .title {
            font-weight: 600;
            font-size: 18px;
            line-height: 24px;
            letter-spacing: 0.02em;
        }
    }
</style>
