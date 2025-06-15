import { sidebar } from "vuepress-theme-hope";

const go_home = {
  text: '首页',
  icon: 'house',   //我感觉不用这个
  link: '/',   
};

export default sidebar({
  /*
  "/": [  // / ，文档说这是回退，放在最后，说是根目录也对
    "",   //  什么都没有，就直接代表主页。也就是根目录readme.md
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/", //这个是真实文件夹的名称
      link: "demo/", //有link的话，link就是一个链接跳转到某个网页的链接，直接到了readme
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
    "intro", //  就是src根目录/文件夹下的intro.md
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
  */

  '/': [],
    
    
  '/1.about/': [
    go_home,
    {
      text: '地图',
      icon: 'map',
      link: '/1.about/',
      children: 'structure',
    },
   
    {
      text: '日记',
      icon: 'book',
      link: '/2.diary/',
      prefix: '/2.diary/',
      children: 'structure',
    },      

    {
      text: 'blog',
      icon: 'blog',
      link: '/3.log/',
      prefix: '/3.log/',
      children: 'structure',
    }, 
      
    {
      text: '教程',
      icon: 'toolbox',
      link: '/4.tutorial/',
      prefix: '/4.tutorial/',
      children: 'structure',
    },
      
       
  ],

  '/2.diary/': [
    go_home,
    {
      text: '日常',
      icon: 'newspaper',
      link: '/2.diary/',
      children: 'structure',
    },
  ],

  '/3.log/': [
    go_home,
    {
      text: 'blog',
      icon: 'blog',
      link: '/3.log/',
      children: 'structure',
    },
  ],    
    
   '/4.tutorial/': [
    go_home,
    {
      text: '教程',
      icon: 'toolbox',
      link: '/4.tutorial/',
      children: 'structure',
    },
  ],
    
  '/5.project/': [
    go_home,
    {
      text: '项目',
      icon: 'diagram-project',
      link: '/5.project/',
      collapsible: true, //设置让分组可以折叠，原来不可以
      expanded: true,// 让折叠默认打开，不是关闭
      children: 'structure',
    },
  ],

});
