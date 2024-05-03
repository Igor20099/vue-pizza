import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import CartPage from "../pages/CartPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/cart", component: CartPage },
  { path: "/:pathMatch(.*)*", component: NotFoundPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
