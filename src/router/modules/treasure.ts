import type { RouteRecordRaw } from "vue-router";
import BlankView from "@/components/BlankView.vue";

const treasure: Array<RouteRecordRaw> = [
  {
    path: "/treasure",
    name: "Treasure",
    component: BlankView,
    children: [
      {
        path: "tool",
        name: "Tool",
        component: () => import('@v/treasure/Tool.vue'),
      },
      {
        path: "books",
        name: "Books",
        component: () => import('@v/treasure/Books.vue'),
      },
      {
        path: "favorites",
        name: "Favorites",
        component: () => import('@v/treasure/Favorites.vue'),
      }
    ]
  }
]
export default treasure