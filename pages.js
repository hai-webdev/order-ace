// 多页配置
module.exports = {
  // 页面名称（对应 chunk 名）
  index: {
    js: "./src/pages/index", // 页面入口js
    html: "./src/pages/index/index.html", // 页面使用的html模板
    out: "index.html", // 输出目录中的页面文件名
  },
  Strategy: {
    js: "./src/pages/strategy", // 页面入口js
    html: "./src/pages/strategy/index.html", // 页面使用的html模板
    out: "strategy.html", // 输出目录中的页面文件名
  },
  sponsor: {
    js: "./src/pages/sponsor", // 页面入口js
    html: "./src/pages/sponsor/index.html", // 页面使用的html模板
    out: "sponsor.html", // 输出目录中的页面文件名
  },
  team: {
    js: "./src/pages/team", // 页面入口js
    html: "./src/pages/team/index.html", // 页面使用的html模板
    out: "team.html", // 输出目录中的页面文件名
  },
  investor: {
    js: "./src/pages/investor", // 页面入口js
    html: "./src/pages/investor/index.html", // 页面使用的html模板
    out: "investor.html", // 输出目录中的页面文件名
  },
  contact: {
    js: "./src/pages/contact", // 页面入口js
    html: "./src/pages/contact/index.html", // 页面使用的html模板
    out: "contact.html", // 输出目录中的页面文件名
  },
};
