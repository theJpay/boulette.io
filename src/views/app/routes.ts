import tools from "@/tools";

const HomeView = () => import("./HomeView.vue");
const ProfileView = () => import("./ProfileView.vue");

export default [
    {
        path: "home",
        name: "home",
        component: HomeView,
        beforeEnter: () => {
            tools.setTabName("Home");
        },
    },
    {
        path: "profile/:id?",
        name: "profile",
        component: ProfileView,
        beforeEnter: () => {
            tools.setTabName("Profile");
        },
    },
];
