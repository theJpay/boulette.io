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
    globals: {
        db: true,
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
                                pattern: "@lambda",
                                group: "external",
                                position: "after",
                            },
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
                        pathGroupsExcludedImportTypes: ["type"],
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
                "@typescript-eslint/consistent-type-imports": [
                    "error",
                    { fixStyle: "separate-type-imports" },
                ],
                "@typescript-eslint/no-unused-vars": ["error"],
            },
        },
        {
            files: ["*.vue"],
            rules: {
                indent: "off",
                "vue/attribute-hyphenation": "off",
                "vue/attributes-order": [
                    "warn",
                    {
                        alphabetical: true,
                    },
                ],
                "vue/html-indent": ["error", 4],
                "vue/require-default-prop": "off",
                "vue/script-indent": [
                    "error",
                    4,
                    {
                        baseIndent: 1,
                    },
                ],
                "vue/html-self-closing": ["warn", { html: { void: "always" } }],
                "vue/sort-keys": ["error", "asc", { caseSensitive: false }],
                "vue/v-on-event-hyphenation": [
                    "error",
                    "always",
                    {
                        ignore: ["update:modelValue"],
                    },
                ],
            },
        },
    ],
    settings: {
        "import/resolver": {
            alias: {
                map: [
                    ["@", "./src"],
                    ["@generics", "./src/components/generics"],
                    [
                        "@icons",
                        "./node_modules/@material-symbols/svg-400/rounded",
                    ],
                    ["@lambda", "./src/tools/lambda"],
                ],
                extensions: [".ts", ".vue"],
            },
        },
    },
};
