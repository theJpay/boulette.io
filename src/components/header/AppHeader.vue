<template>
    <header class="header">
        <div class="title">
            {{ user.pseudo }}
        </div>
    </header>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    import { useUser } from "@/services/users";

    export default defineComponent({
        async setup() {
            const { user } = await useUser();
            return { user };
        },
    });
</script>

<style lang="scss" scoped>
    .header {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;

        height: 64px;

        background-color: var(--neutral-100);

        .title {
            padding: 8px 64px;

            font-size: 24px;
        }
    }
</style>
