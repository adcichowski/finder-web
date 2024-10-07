import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createMemoryHistory } from "vue-router";
import HomeView from "./router/home/home.vue";
const routes = [{ path: "/", component: HomeView }] as const;

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.mount("#app");
