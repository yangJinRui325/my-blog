import type { RouteRecordRaw } from "vue-router";
import BlankView from "@/components/BlankView.vue";
import Basic from "@/layout/Basic.vue";

const article: Array<RouteRecordRaw> = [
  {
    path: "/article",
    name: "Article",
    component: Basic,
    children: [
      {
        path: "special",
        name: "Special",
        component: () => import('@v/article/Special.vue'),
      },
      {
        path: "archived",
        name: "Archived",
        component: () => import('@v/article/Archived.vue'),
      },
      {
        path: "classify",
        name: "Classify",
        component: () => import('@v/article/Classify.vue'),
      },
      {
        path: "tags",
        name: "Tags",
        component: () => import('@v/article/Tags.vue'),
      },
      {
        path: ":id",
        name: 'Details',
        component: () => import('@v/article/ArticleDetails.vue'),
      }
    ]
  }
]
export default article