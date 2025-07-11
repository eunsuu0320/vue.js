import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";

createApp(App).use(router).mixin(mixins).mount("#app");

window.Kakao.init("72bcb7c274aa98b8909a544b7785107a");
