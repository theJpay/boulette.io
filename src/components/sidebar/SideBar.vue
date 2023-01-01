<template>
    <div class="side-menu">
        <router-link
            v-for="item in SIDEBAR_ITEMS"
            :key="item.title"
            #="{ isActive }"
            :to="item.to"
        >
            <SideBarItem
                :icon="item.icon"
                :isActive="isActive"
                :title="item.title"
            ></SideBarItem>
        </router-link>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import draftIcon from "@material-symbols/svg-400/rounded/draft.svg";
    import settingsIcon from "@icons/settings.svg";
    import SideBarItem from "./SideBarItem.vue";

    const SIDEBAR_ITEMS = [
        {
            icon: draftIcon,
            title: "My files",
            to: { name: "home" },
        },
        {
            icon: settingsIcon,
            title: "Settings",
            to: { name: "profile" },
        },
    ] as const;

    export default defineComponent({
        components: {
            SideBarItem,
        },
        setup() {
            return { SIDEBAR_ITEMS };
        },
    });
</script>

<style lang="scss" scoped>
    .side-menu {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 1;

        display: flex;
        flex-direction: column;

        float: left;
        width: 280px;
        padding-top: 100px;

        border-right: 1px solid red;
    }
</style>
