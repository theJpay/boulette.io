// eslint-disable-next-line import/no-unresolved
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "@generics": fileURLToPath(
                new URL("./src/components/generics", import.meta.url)
            ),
            "@icons": fileURLToPath(
                new URL(
                    "./node_modules/@material-symbols/svg-400/rounded",
                    import.meta.url
                )
            ),
        },
    },
});
