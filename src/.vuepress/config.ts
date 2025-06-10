import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Hawaii", //这是导航栏左上角的名称标题
  description: "浪漫一定要去那夏威夷",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
