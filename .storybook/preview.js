import vueRouter from "storybook-vue3-router";
import "./style/main.scss";

export const decorators = [vueRouter()];

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
