import { createApp } from "vue";
import { initializeApp } from "firebase/app";
import router from "@/router";
import firebaseConfig from "@/services/firebaseConfig";
import App from "@/App.vue";

import "@/assets/css/main.scss";

initializeApp(firebaseConfig);
createApp(App).use(router).mount("#app");
