// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJSX from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    assetFileNames: "assets/[name][extname]",
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
    // 添加 UnoCSS 插件
    Unocss(),
  ],
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true, // 在编译时独立输出 css
    lib: {
      // 添加库模式打包配置
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: (format) => `smarty-ui.${format}.js`,
      formats: ["es", "umd", "iife"], // 导出模块格式
    },
  },
});
