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
  },
  {
    path: "/viewer",
    name: "Viewer",
    component: () => import("@/bytemd/Viewer.vue"),
  }
]
export default feature