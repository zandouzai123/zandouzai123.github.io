import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://1122.33664399.xyz",

  author: {
    name: "Hawaii",
    url: "https://1122.33664399.xyz",
  },

  //站点图标：这个logo是主页左上角的图标，方的, 同时博客主页头像也变了
  logo: "avatar.jpg",

  //这个是导航栏右侧的那个GitHub仓库的图标, repoDisplay关掉就不显示了
  repo: "vuepress-theme-hope/vuepress-theme-hope",
  repoDisplay: false,

  docsDir: "src",

  // 导航栏
  navbar,
  navbarLayout: {
    start: ["Brand", "Search"],
    center: [],
    end: ["Links","Language", "Repo", "Outlook"],
  },

  // 侧边栏
  sidebar,

  // 页脚
  footer: "“Good morning, and in case I don't see ya, good afternoon, good evening, and good night!”",
  displayFooter: true,

  //我自己猜的,关闭了首页下面的cyperight@2025
  copyright: false , 
  

  //我自己添加的
  darkmode: "toggle", // 夜间模式
  fullscreen: true,   // 全屏按钮
  print: false,    //关闭打印按钮
  editLink: false, //关闭编辑链接
  contributors: false, //关闭文章末尾的贡献者
  changelog: false, //关闭变更日志


  
  // 博客相关
  blog: {
    avatar: "avatar.jpg",
    name : "Hawaii",
    description: "浪漫一定要去那夏威夷",
    intro: "/intro.html",  //点击博客头像，名称，描述，都会进入intro.md
    medias: {
      //Baidu: "https://example.com",
      BiliBili: "https://space.bilibili.com/404074687",
      //Bitbucket: "https://example.com",
      //Dingding: "https://example.com",
      //Discord: "https://example.com",
      //Dribbble: "https://example.com", //设计师，摄影师交流平台
      Email: "mailto:zandouzai123@outlook.com",
      //Evernote: "https://example.com",  //印象笔记
      //Facebook: "https://example.com",
      //Flipboard: "https://example.com", // RSS平台吧
      //Gitee: "https://example.com",
      //GitHub: "https://example.com",
      //Gitlab: "https://example.com",
      //Gmail: "mailto:info@example.com",
      //Instagram: "https://example.com",
      //Lark: "https://example.com", // 这是飞书，长见识了
      //Lines: "https://example.com",  //日本即时通信平台，国内受限
      //Linkedin: "https://example.com", //全球最大的职业社交网站
      //Pinterest: "https://example.com", //图片应用
      //Pocket: "https://example.com",  // 离线阅读软件
      //QQ: "https://example.com",
      //Qzone: "https://example.com",
      //Reddit: "https://example.com",
      //Rss: "https://example.com",
      Steam: "https://example.com",
      //Twitter: "https://example.com",
      //Wechat: "https://example.com",
      //Weibo: "https://example.com",
      //Whatsapp: "https://example.com",
      //Youtube: "https://example.com",
      //Zhihu: "https://example.com",
      /*VuePressThemeHope: {
        icon: "https://theme-hope-assets.vuejs.press/logo.svg",
        link: "https://theme-hope.vuejs.press",
      },
      */
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": {
        hint: "Password: 1234",
        password: "1234",
      },
      "/2.diary/": {
        password: ["1234", "5678"],
        hint: "大胆，日常记录，你岂能看！",
      },
    },
  },

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // 取消注释它们如果你需要 TeX 支持
    // math: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 mathjax-full
    //   type: "mathjax",
    // },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // 在启用之前安装 chart.js
    // chartjs: true,

    // insert component easily

    // 在启用之前安装 echarts
    // echarts: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    //blog: true, 
    // 我把自动摘要完全消失掉，完全可以自己写摘要
    blog: {
        excerptLength: 0,
      },
    

    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    comment: {
       provider: "Waline",
       serverURL: "https://comment-waline.33664399.xyz",

       //以下是我自己添加的东西，在这是可以的
        dark: 'auto', // 暗黑模式：true | false | 'auto'
        meta: ['nick', 'mail'], // 评论显示字段：nick | mail | link
        requiredMeta: ['nick', 'mail'], // 必填字段：[] | ['nick'] | ['nick', 'mail']
        commentSorting: 'oldest', // 评论排序：'latest' | 'oldest' | 'hottest'
        pageSize: 10, // 每页评论数
        login: 'enable', // 登录模式：'enable' | 'disable' | 'force'
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },

    //我自己打开的插件
    //关闭上方链接的实时标题改动
    activeHeaderLinks: false, 
    //版权配置
    copyright: {              
      global: true,
      triggerLength: 10, // 当复制的内容长度不小于 40 时，追加版权信息
      author: "Hawaii",
      license: "哈哈沃兹基硕德嘿",
    },
    //自己瞎搞的阅读时间配置
    readingTime:{         
    wordPerMinute: 100,
    },
    //自己加的slim-search
    slimsearch: {
      resultHistoryCount: 0,
      queryHistoryCount: 6,
    },




    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
