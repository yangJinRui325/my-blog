import type { RouteRecordRaw } from "vue-router";
import BlankView from "../../components/BlankView.vue";

const treasure: Array<RouteRecordRaw> = [
  {
    path: "/treasure",
    name: "Treasure",
    component: BlankView,
    children: [
      {
        path: "tool",
        name: "Tool",
        component: () => import('@v/Tool.vue'),
      },
      {
        path: "books",
        name: "Books",
        component: () => import('@v/Books.vue'),
      },
      {
        path: "favorites",
        name: "Favorites",
        component: () => import('@v/Favorites.vue'),
      }
    ]
  }
]
export default treasure