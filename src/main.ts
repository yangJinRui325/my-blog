import { createApp } from "vue";
import App from "./App.vue";
import router from "@r/index";
// 引入全局样式
import "@/assets/less/index.less";

// tdesign-npm-name 替换为当前在使用的包名称
import TDesign from "tdesign-vue-next/esm";
// 引入组件库全局样式资源
import "tdesign-vue-next/esm/style/index.js";

createApp(App).use(router).use(TDesign).mount("#app");
