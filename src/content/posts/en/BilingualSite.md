---
title: 'Building a Bilingual Website (i18n)'
date: 2026-01-10
summary: 'A practical record of how I implemented a Chinese–English bilingual website with Astro, including design decisions, project structure, and pitfalls.'
category: IT
tags: [dev, i18n]
---

## Why Build a Bilingual Website?

Before starting this website, I had already decided to include an English section. For overseas job applications, having content presented in English is almost a necessity, so the idea of a bilingual site existed from the very beginning.

The template I'm currently using, [Gyoza](https://gyoza.lxchapu.com), only supports a single language by default. I did consider building the site in English only—it would have been simpler and faster to just use the template as-is. However, doing so would also mean missing an opportunity to better understand how a website is structured and built.

Since Chinese is my native language, writing posts in Chinese first feels more natural and efficient. Adding an English version later also forces me to revisit the overall implementation of the site, which turned out to be a win-win situation.

## Development Process

Implementing the bilingual feature took me quite a while—mostly because I'm still learning 😥. Since this is an Astro project, I followed Astro's official [i18n guide](https://docs.astro.build/zh-cn/recipes/i18n/). The documentation itself is fairly clear and breaks the problem down into three major parts:

- Preparing translated content
- Assigning content pages per language
- Designing the language switch UI

That said, when I first started, I was completely lost 😇. Even following the official steps, it was hard to know where to begin.

I also searched GitHub for projects that had already implemented i18n, such as [astro-batavia](https://github.com/leonism/astro-batavia). I mainly focused on understanding how i18n was applied and how the related files were structured. Since its project structure was quite different from the template I was using, I didn’t copy it directly—just tried to grasp the general idea. I also relied on AI tools to clarify some concepts along the way.

After several days of trial and error, I still couldn't fully figure out a clean bilingual project structure. At that point, I had a sudden idea to ask [Cursor](https://cursor.com/) to help generate a rough i18n structure. It did give me a general outline, but Cursor tends to be a bit too "creative", and with the usage limits before upgrading to Pro 😐, I eventually stopped relying on it. I only kept the rough project structure it suggested and continued developing manually from there.

Once the project structure became clear, the rest of the development process went much more smoothly.

### Separating Translated Content

For translated content, I kept the language-independent parts in the original `config.json` and moved language-specific content into separate `zh.json` and `en.json` files. Below are some simplified examples.

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

### Routing and Language Switching

For routing, I set the default language (Chinese) to **_/_**, and English to **_/en_**. After defining this rule, the current language can be determined by reading the page URL, and the corresponding language **JSON** file can then be loaded.

The language switch UI itself was relatively simple, but I did run into a classic pitfall: every time I switched languages, the site would jump back to the homepage of the target language. At first, I thought this was a local development cache issue, but the same behavior appeared after deployment.

After checking the implementation, I realized that the LanguageSwitcher was pointing to a static href, instead of linking to the corresponding language version of the current page. This turned out to be a good reminder that path handling in a bilingual site needs to be carefully designed and thoroughly tested.

## Future Improvements

At the moment, the project structure is still not as clean as I would like. Some shared logic between the **_zh_** and **_en_** directories hasn't been fully extracted, and there is still a fair amount of duplication scattered across the two folders.

When time allows, I plan to further refactor the structure to better separate shared and language-specific parts. I may also consider adding a Japanese version in the future, but for now, time is limited. The English version is sufficient for my current needs—at least for now.
