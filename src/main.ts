import { createApp } from "vue";
import router from "@/router";
import App from "@/App.vue";
import { initDatabase } from "@/database";

import "@/assets/css/main.scss";

initDatabase();
createApp(App).use(router).mount("#app");
