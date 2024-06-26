import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import { router } from "./router/router";
import { store } from "./store/store";

const app = createApp(App);

app.use(router).use(store).mount("#app");
