import type { RouteRecordRaw } from "vue-router";

const feature: Array<RouteRecordRaw> = [
  {
    path: "/note",
    name: "Note",
    component: () => import("@v/Note.vue"),
  },
  {
    path: "/tattle",
    name: "Tattle",
    component: () => import("@v/Tattle.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@v/About.vue"),
  }
]
export default feature