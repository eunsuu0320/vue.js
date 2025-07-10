import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateView from "../views/CreateView.vue";
import DetailView from "../views/DetailView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/create", component: CreateView },
  { path: "/post/:id", component: DetailView, props: true },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
