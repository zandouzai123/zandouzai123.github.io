import { defineClientConfig } from "vuepress/client";
import Blog from "./layouts/Blog.vue";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";

//从mo7复制过来的
//
//import BlogBg from "./components/BlogBg.vue";
import { defineAsyncComponent } from 'vue';
import('./components/PrintVersion').then((res) => {
  res.default();
});


const BlogBg = defineAsyncComponent(() => import('./components/BlogBg.vue'));



export default defineClientConfig({

  layouts: {
    //博客主页的必应背景和一言
    Blog,
  },

  //导航栏透明在这
  setup: () => {
    setupTransparentNavbar({ 
        type: "all" ,
        threshold: 100,
        light: "#333333", // 浅色模式下文字为深灰色
        dark: "#ffffff",  // 深色模式下文字为白色
    });
    
    
  },



  //mo7大佬
  rootComponents: [
    BlogBg,
  ],
  
   
});