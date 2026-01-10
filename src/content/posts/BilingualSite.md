---
title: '网站双语言 i18n'
date: 2026-01-10
summary: '记录在 Astro 中实现中英文双语网站的设计思路、结构划分与踩坑经验。'
category: dev
tags: [dev, i18n]
---

## 为什么做双语网站？

这个网站做之前我就决定要多拓展一个英语板块，在海外求职什么的还是需要英语展示的，所以动手开发个人网站之初就已经构想了这个模块。目前用的 [Gyoza](https://gyoza.lxchapu.com)的模板只有单语言，为什么不一开始就只用英文，简单又快速直接套用模板就好了。说实话，是这么想过，但是这样就不能更好的理解网页怎么构建的了，而且中文毕竟是母语，写 post 那些的时候先用中文记录会比较方便，再开发英文版本的时候也可以让我再过一遍整体网站的实现，也算是一举两得，多好。

## 开发过程

这个双语言模块开发还是费了我一番功夫的，是我菜鸡😥...因为这个项目是 Astro 项目，所以就利用 Astro 官方推荐的 [i18n](https://docs.astro.build/zh-cn/recipes/i18n/) 插件进行多语言开发，官方资料里还是讲得比较清楚的，总体就是准备翻译内容、内容页面分配、语言切换UI这三个大块（当然我刚开始做的时候，一头雾水，按照官方资料步骤做的时候，根本无从下手😇）。

我还去 Github 里翻找了一些使用 i18n 的项目源文件，比如 [astro-batavia](https://github.com/leonism/astro-batavia)，当时看了些这项目里的 i18n 及其相关文件结构和内容，因为项目文件和结构和目前用的模板还是不太一样，所以我只是理解其中怎么运用多语言的部分，另外借助 AI 给我解答疑惑。搞了几天后，还是没整明白双语言的项目结构，后来灵光一闪，让 [cursor](https://cursor.com/) 帮助我整了一下 i18n 这部分的项目结构，虽然有了一个大概结构样子，但 cursor 实在自由发挥度太高，加上也问不了几句话就要 upgrade to pro 😐，后来我也放弃继续用它帮我开发，只是继承了给我的大概的项目文件结构。

也多亏理清了项目文件结构，接下来开发过程就流畅了很多。翻译内容部分就是把之前的 `config.json` 保留双语言共通的内容，挪出需要双语言的部分，分成 `zh.json` 和 `en.json`，部分示例内容见下：

```json
// config.json
"posts": {
    "perPage": 10
  },
  "footer": {
    "startTime": "2025-11-10T00:00:00Z"
  },
```

```json
// zh.json
"pages": {
   "latestPosts": "最新发布",
   "categories": "分类",
   "hotTags": "热门标签",
   "moreTags": "更多标签",
   "archives": "归档",
   "archivesDescription": "共产出 {count} 篇文章，再接再厉。"
 },
 "categories": {
   "title": "分类",
   "prefix": "分类：",
   "count": "共有 {count} 篇文章。"
 },
```

```json
// en.json
"pages": {
  "latestPosts": "Latest Posts",
  "categories": "Categories",
  "hotTags": "Hot Tags",
  "moreTags": "More Tags",
  "archives": "Archives",
  "archivesDescription": "A total of {count} articles published. Keep up the good work."
},
"categories": {
  "title": "Category",
  "prefix": "Category:",
  "count": "{count} posts in total."
},
```

内容页面分配部分就是默认语言 zh 路径定为 /，英文 en 路径定为 /en，确定好这个之后，利用获取页面的 url 得到当前页面的语言，然后调用之前已经准备好的这个语言的 json 内容。语言切换 UI 部分就是自己随便设计了，点击切换这里我遇到一个坑，是每次点击切换总是跳到切换语言的主页面，一开始以为是本地开发缓存问题，后来部署之后还存在这个问题，检查发现是 LanguageSwitcher 指定跳转的 href 不是当前页面的切花语言的版本。整个项目的页面跳转路径一定要注意，调试清楚。

## 后续拓展

目前项目文件结构还是不够简洁，一些多语言共通的部分还没完全整理出一份出来，zh 和 en 文件夹里有一些重复的地方还比较琐碎，所以后续有时间的话，还得再完善一下结构部分。内容可能还会再添加一个日语版本，目前没什么时间，就先暂停，英文版本暂时也够用了，也许吧。
