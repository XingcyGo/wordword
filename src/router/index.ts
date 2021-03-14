import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect: "/query",
  },
  {
    path: "/query",
    name: "Query",
    component: () => import("../views/Query.vue"),
  },
  {
    path: "/recite",
    name: "Recite",
    component: () => import("../views/Recite.vue"),
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../views/Account.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
