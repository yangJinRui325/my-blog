import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "@v/Home.vue";
import article from "./modules/article";
import feature from "./modules/feature";
import treasure from "./modules/treasure";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@v/Login.vue"),
  },
  ...article,
  ...feature,
  ...treasure
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  next()
})


export default router;
