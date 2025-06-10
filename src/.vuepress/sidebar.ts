import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [  // / ，文档说这是回退，放在最后，说是根目录也对
    "",   //  什么都没有，就直接代表主页。也就是readme.md
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/", //有link的话，就会直接跳走，不单单只是一行显示
      children: "structure", 
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      collapsible: true, //设置让分组可以折叠，原来不可以
      expanded: true,// 让折叠默认打开，不是关闭
      children: "structure",// 这是在文件夹中这么做，直接"/post/":"structure" 自动生成
    },
    "intro", //  就是src/文件夹下的intro.md
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
});
