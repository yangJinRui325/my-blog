import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// 按需引入tDesign
// import AutoImport from "unplugin-auto-import/vite";
// import Components from "unplugin-vue-components/vite";
// import { TDesignResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // 自定义的样式变量
        additionalData: '@import "./src/assets/less/variable.less";',
        // 覆盖TDesgin的less变量
        modifyVars: {
          "@border-radius": "4px",
        },
      },
    },
  },
  plugins: [
    vue(),
    //推荐使用 unplugin-vue-components 和 unplugin-auto-import 来实现自动导入：
    // AutoImport({
    //   resolvers: [
    //     TDesignResolver({
    //       library: "vue-next",
    //     }),
    //   ],
    // }),
    // Components({
    //   resolvers: [
    //     TDesignResolver({
    //       library: "vue-next",
    //     }),
    //   ],
    // }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@v": path.resolve(__dirname, "./src/views"),
      "@r": path.resolve(__dirname, "./src/router"),
    },
  },
  server: {
    port: 3030,
  },
  preview: {
    port: 3031,
  },
});
