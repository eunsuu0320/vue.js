import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductList from "../views/ProductList.vue";
import ProductDetail from "../views/ProductDetail.vue";
import SalesList from "../views/SalseList.vue";
import ImageInsert from "../views/ImageInsert.vue";
// import KakaoLogin from "../views/KakaoLogin.vue";
// import ProductCreate from "../views/ProductCreate.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/list",
    name: "productList",
    component: ProductList,
  },
  {
    path: "/detail",
    name: "productDetail",
    component: ProductDetail,
  },
  {
    path: "/sales",
    name: "SalesList",
    component: SalesList,
  },
  {
    path: "/image_insert",
    name: "imageInsert",
    component: ImageInsert,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
