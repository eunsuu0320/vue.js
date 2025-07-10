import { createApp } from "vue";
import App from "./App.vue"; // Root 최상위 컴포넌트
import router from "./router"; // 라우팅 정보를 가지고 있는
import store from "./store/index.js"; // 저장소

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
