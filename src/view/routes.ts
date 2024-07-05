import { createRouter, createWebHistory } from "vue-router";

export const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      name: "Home",
      path: "/",
      component: () => import("./01_Home/Home.vue"),
    },
    {
      name: "Arima",
      path: "/arima",
      component: () => import("./Arima/arimaView.vue"),
    },
    {
      name: "Furukawa",
      path: "/furukawa",
      component: () => import("./Furukawa/furukawaView.vue"),
    },
    {
      name: "Takano",
      path: "/takano",
      component: () => import("./Takano/takanoView.vue"),
    },
  ],
});
