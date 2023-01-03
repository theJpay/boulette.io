<template>
    <div class="sidebar">
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
            />
        </router-link>
        <SideBarItem
            class="sign-out"
            :icon="logoutIcon"
            title="Sign out"
            @click="signOut()"
        />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { useRouter } from "vue-router";
    import draftIcon from "@icons/draft.svg";
    import logoutIcon from "@icons/logout.svg";
    import settingsIcon from "@icons/settings.svg";
    import { signOut as signOutUser } from "@/services/users";
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
            const router = useRouter();
            const signOut = async () => {
                await signOutUser();
                router.push({ name: "login" });
            };
            return { logoutIcon, SIDEBAR_ITEMS, signOut };
        },
    });
</script>

<style lang="scss" scoped>
    .sidebar {
        position: fixed;
        top: 64px;
        bottom: 0;
        left: 0;
        z-index: 1;

        display: flex;
        flex-direction: column;

        float: left;
        width: 280px;
        padding: 100px 0;

        box-shadow: 4px 0 5px rgba(#000, 0.1);

        .sign-out {
            margin-top: auto;
        }
    }
</style>
