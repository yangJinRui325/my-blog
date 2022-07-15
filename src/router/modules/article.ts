import type { RouteRecordRaw } from "vue-router";
import BlankView from "../../components/BlankView.vue";

const article: Array<RouteRecordRaw> = [
  {
    path: "/article",
    name: "Article",
    component: BlankView,
    children: [
      {
        path: "special",
        name: "Special",
        component: () => import('@v/Special.vue'),
      },
      {
        path: "archived",
        name: "Archived",
        component: () => import('@v/Archived.vue'),
      },
      {
        path: "classify",
        name: "Classify",
        component: () => import('@v/Classify.vue'),
      },
      {
        path: "tags",
        name: "Tags",
        component: () => import('@v/Tags.vue'),
      }
    ]
  }
]
export default article