import { createWebHistory, createRouter } from "vue-router";
import ListCmp from "./components/List.vue";
import HomeCmp from "./components/Home.vue";
import DetailCmp from "./components/Detail.vue";

const routes = [
  {
    path: "/",
    component: HomeCmp,
  },
  {
    path: "/list",
    component: ListCmp,
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: DetailCmp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
