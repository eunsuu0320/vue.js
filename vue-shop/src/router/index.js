import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import ImageInsert from "../views/ImageInsert.vue";
// import KakaoLogin from "../views/KakaoLogin.vue";
// import ProductCreate from "../views/ProductCreate.vue";
// import ProductDetail from "../views/ProductDetail.vue";
// import ProductList from "../views/ProductList.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "image_insert",
  //   name: "imageInsert", // 라우터 정보 등록할 때 경로로도 등록할 수 있고 이름으로도 등록할 수 있다.
  //   component: ImageInsert,
  // },
  // {
  //   path: "/list",
  //   name: "productList",
  //   component: ProductList,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
