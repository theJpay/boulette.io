const path = require("path");
const { loadConfigFromFile, mergeConfig } = require("vite");

module.exports = {
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/preset-scss",
    ],
    framework: "@storybook/vue3",
    core: {
        builder: "@storybook/builder-vite",
    },
    features: {
        storyStoreV7: true,
    },
    async viteFinal(config) {
        const { config: userConfig } = await loadConfigFromFile(
            path.resolve(__dirname, "../vite.config.ts")
        );

        return mergeConfig(config, {
            resolve: userConfig.resolve,
            // manually specify plugins to avoid conflict
            plugins: [],
        });
    },
};