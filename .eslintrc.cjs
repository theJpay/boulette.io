/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: [
        "plugin:vue/vue3-essential",
        "plugin:vue/vue3-recommended",
        "eslint:recommended",
        "@vue/eslint-config-typescript",
        "@vue/eslint-config-prettier",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:storybook/recommended",
    ],
    parserOptions: {
        ecmaVersion: "latest",
    },
    overrides: [
        {
            files: ["*.vue", "*.ts", "*.js"],
            rules: {
                "import/order": [
                    "warn",
                    {
                        groups: [
                            ["builtin"],
                            ["external"],
                            [
                                "parent",
                                "sibling",
                                "object",
                                "internal",
                                "index",
                            ],
                            ["type"],
                        ],
                        "newlines-between": "ignore",
                        pathGroups: [
                            {
                                pattern: "@generics/**",
                                group: "external",
                                position: "after",
                            },
                            {
                                pattern: "@/**",
                                group: "external",
                                position: "after",
                            },
                        ],
                    },
                ],
                indent: ["error", 4],
                "sort-imports": [
                    "error",
                    {
                        ignoreCase: true,
                        ignoreDeclarationSort: true,
                    },
                ],
                "@typescript-eslint/consistent-type-imports": "warn",
                "@typescript-eslint/no-unused-vars": ["error"],
            },
        },
        {
            files: ["*.vue"],
            rules: {
                indent: "off",
                "vue/attributes-order": [
                    "warn",
                    {
                        alphabetical: true,
                    },
                ],
                "vue/html-indent": ["error", 4],
                "vue/v-on-event-hyphenation": [
                    "error",
                    "always",
                    {
                        ignore: ["update:modelValue"],
                    },
                ],
                "vue/require-default-prop": "off",
                "vue/script-indent": [
                    "error",
                    4,
                    {
                        baseIndent: 1,
                    },
                ],
                "vue/sort-keys": ["error", "asc"],
            },
        },
    ],
    settings: {
        "import/resolver": {
            alias: {
                map: [
                    ["@", "./src"],
                    ["@generics", "./src/components/generics"],
                ],
                extensions: [".ts", ".vue"],
            },
        },
    },
};
