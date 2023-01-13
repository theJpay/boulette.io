<template>
    <div>
        <Suspense>
            <AppHeader />
        </Suspense>
        <SideBar />
        <div class="app">
            <Suspense>
                <RouterView />
            </Suspense>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import { AppHeader } from "@/components/header";
    import { SideBar } from "@/components/sidebar";

    export default defineComponent({
        components: {
            AppHeader,
            SideBar,
        },
    });
</script>

<style lang="scss" scoped>
    .app {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        min-height: 100vh;
        margin-top: 64px;
        margin-left: 280px;

        padding: 64px;
    }
</style>
