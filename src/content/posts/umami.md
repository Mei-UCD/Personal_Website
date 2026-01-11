---
title: '统计网站的访客数据'
date: 2026-01-11
summary: '手把手教你快速搭建统计平台'
category: dev
tags: [dev, tutorial, umami]
---

之前在 [Yuanji's Blog](https://blog.yuanji.dev/posts/blog-visitor-analytics/) 和 [lxchapu](https://blog.lxchapu.com/posts/umami-usage-guide/) 这两篇 post 都看见了利用 Umami 来搭建网站的数据平台，觉得很有意思，就也尝试着做了一下，欢迎访问 [Mei's Blog 访客统计](https://umami.neuimay.com/share/rJkAGkk7SUKFVCDQ) 🌸。

## Supabase

先在 [Supabase](https://supabase.com/) 上利用自己的 Github 账号注册登录之后，选择 **New organization** 出现弹窗，_Name_ 可以自己随便命名，其他默认选择之后点击 **create organization**。进入 organization 后，点击 **New project** 创建新项目，_Project name_ 和 _Database password_ 自行创建，_Region_ 就选择距离你这个网站目标群体最近的区域，比如国内的话就选 _Asia-Pacific_，最后点击 **create new project**。

<p style="text-align:center;">
    <img src="/images/Post/umami1.png" width="800px" style="display:inline; vertical-align:middle;" />
</p>
<p style="text-align:center;">
    <img src="/images/Post/umami2.png" width="800px" style="display:inline; vertical-align:middle;" />
</p>

进入项目后，点击上方的 **Connect**,跳出下图，确认①处是选的 **Session pooler**,然后复制②框内的 value，后面要用到。

<p style="text-align:center;">
    <img src="/images/Post/umami3.jpg" width="800px" style="display:inline; vertical-align:middle;" />
</p>

## Vercel 部署

首先 fork 官方的 [umami](https://github.com/umami-software/umami) 项目文件到自己的 Github 项目里，然后登录 Vercel，新建项目的时候，里面的 **Environment Variables** 把之前从 Supabase 里复制的②框内的 value 添加进去（value 里面的 _密码_ 部分替换成你之前登录 Supabase 的密码），最后点击部署，就完成啦🍀~

```text
Key: DATABASE_URL
Value: postgresql://postgres:密码@db.xxxxxx.supabase.co:5432/postgres
```

## Umami

Vercel 部署成功后，点击生成的网页链接，就成功进入 Umami 平台啦。默认会创建一个管理员账号，用户名是 `admin`，密码是 `umami`，登录进去之后，一定要记得先更改登录密码哦。点击 **Add Website**，里面的 `Domain` 加入你想要统计的网站网址（记得删除网址前面的 `https://`），`Tracking Code` 也要复制下来后面加入到自己的项目 `<head>`里。

到目前为止 Umami 的部分就都完成啦，撒花°❀.ೃ࿔\*————
