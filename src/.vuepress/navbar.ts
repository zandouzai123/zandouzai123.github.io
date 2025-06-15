import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/", //直接配置好了，并且就叫博客主页。/ 指的是 /readme.md 中配置好的内容
  //"/demo/",//直接配置好了，非常神奇，这里可以看到我的所有文章。应该是看了此文件夹下的readme
  //          /demo/readme.md 配置好的东西 用了<Catalog />全局组件
  /*{
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "香蕉",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  */

  /*{
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",//如果是网页链接，就会右上角多一个箭头
  },
  */

  {
    text: '分类',
    icon: 'arrow-up-1-9',
    children: [
      '/2.diary/',
      '/3.log/',
      '/4.tutorial/',
      // ...
    ],
  },
  {
    text: '索引',
    icon: 'coins',
    children: [
      { text: '文章', icon: 'list', link: '/article/' },
      { text: '分类', icon: 'table', link: '/category/' },
      { text: '标签', icon: 'tag', link: '/tag/' },
      { text: '时间轴', icon: 'clock', link: '/timeline/' },
    ],
  },
  '/1.about/',
]);
