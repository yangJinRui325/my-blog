import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Index from "@v/Index.vue";
import article from "./modules/article";
import feature from "./modules/feature";
import treasure from "./modules/treasure";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@v/Home.vue"),
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
