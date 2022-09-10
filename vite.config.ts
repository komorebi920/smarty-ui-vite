// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJSX from "@vitejs/plugin-vue-jsx";

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

// https://cn.vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 添加 JSX 插件
    vueJSX({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],
  build: {
    rollupOptions,
    minify: false,
    // 添加库模式打包配置
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: (format) => `smarty-ui.${format}.js`,
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },
});
