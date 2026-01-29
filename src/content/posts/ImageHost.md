---
title: '使用 Cloudflare R2 作为图床'
date: 2026-01-27
summary: '记录本博客 Gallery 使用 Cloudflare R2 作为图床的方案与实践。'
category: IT
tags: [dev, tutorial, cloudflare]
---

## 为什么要使用图床 (Why)

<!-- 以前做项目的时候，都是会把图片直接保存在对应文件结构的文件夹里，一起打包上传到 Github 里。不过这都是在图片数量不多，质量不需要太好的情况下，打包一起是没有问题的。这次博客里 Gallery 板块的实现，要是还基于前面那种方法就很不现实了，Gallery 板块图片数量多，单张体积也大，不适合直接放在 Github 仓库里，这时候图床就很必要了。 -->

以前做项目时，我通常会把图片直接保存在项目的文件结构中，然后和代码一起提交到 GitHub。这种方式在**图片数量不多、质量要求不高**的情况下是完全可行的，也比较省事。

但这次博客中新增了 **Gallery 板块**，情况就不太一样了：

- 图片数量明显增多
- 单张图片体积较大
- 图片主要用于前端展示，而非代码资源

如果仍然把图片直接放进 GitHub 仓库，不仅仓库体积会迅速膨胀，也不利于后续维护和加载性能。因此，在这种场景下，引入一个**独立的图床服务**就变得非常有必要。

---

## 图床选择

<!-- 选择图床之前，我也在网上搜索了很多图床的介绍，因为我想控制成本，且免费容量额度够大，就在 AWS S3 和 Cloudflare R2 中选择了后者。
Cloudflare R2:
- 10G 免费存储空间
- 无 egress fee (外网流量不收费)
- 原生兼容 S3 API
- 可直接生成 Public URL
- 与 Cloudflare CDN / Worker 天然配合 -->

在确定使用图床之前，我也在网上搜索了很多图床的介绍。由于个人博客更关注 **成本控制** 和 **使用门槛**，同时图片访问量并不算极端，我主要在 **AWS S3** 和 **Cloudflare R2** 之间做了选择，最终选择了 Cloudflare R2。

选择 R2 的主要原因如下：

- 提供一定额度的免费存储空间（目前为 10GB）
- **无 egress fee（外网流量不收费）**
- 原生兼容 S3 API，生态成熟
- 可直接生成 Public URL，前端使用简单
- 与 Cloudflare CDN / Worker 天然配合，扩展性好

对于个人博客或中小规模图片访问场景来说，R2 是一个性价比非常高的选择。

---

## 创建 Cloudflare R2 Bucket

如果你已经拥有 Cloudflare 账号，并且启用了 R2 服务，可以直接继续往下看。  
如果还没有 Cloudflare 账号，需要先注册一个；需要注意的是，**启用 R2 时需要绑定支付卡**。

进入 Cloudflare Dashboard 后，依次点击：

`Build` ➡ `Storage & databases` ➡ `R2 object storage` ➡ `Overview`

在 `Overview` 页面中点击 **Create Bucket** 创建一个新的 Bucket。Bucket 的命名方式可以根据个人习惯来，我一般会按照项目或用途进行区分。

<p style="text-align:center; margin: 2rem 0;">
  <img
    src="/images/Post/ImageHost1.jpeg"
    width="800"
    style="
      display: inline-block;
      border-radius: 8px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    "
  />
</p>

<p style="text-align:center; margin: 2rem 0;">
  <img
    src="/images/Post/ImageHost2.jpeg"
    width="800"
    style="
      display: inline-block;
      border-radius: 8px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    "
  />
</p>

---

## 使用 Prefix 管理图片结构

创建好 Bucket 后，点击进入 Bucket 页面，可以继续创建 **prefix**。  
在界面中点击 `Add directory`，就可以创建一个新的 prefix 前缀。

需要注意的是：

> R2 中的 prefix 并不是真正的文件夹，而是对象 key 的前缀结构，仅用于逻辑上的分类和管理。

Cloudflare 在界面上将其设计成类似文件夹的形式，主要是为了方便理解和管理。  
prefix 如何规划，完全取决于你对项目中图片结构的划分方式。

<p style="text-align:center; margin: 2rem 0;">
  <img
    src="/images/Post/ImageHost3.jpeg"
    width="800"
    style="
      display: inline-block;
      border-radius: 8px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    "
  />
</p>

---

## 图片上传方式

Cloudflare R2 提供了多种图片上传方式，常见的包括：

- **通过 Cloudflare 控制台直接上传**（适合少量文件）
- 使用 PicGo / PicList 等第三方工具，通过 **S3 API 上传**（较推荐，适合图床场景）
- 通过代码或脚本调用 S3 SDK 进行批量上传

本次实践中，我使用的是**控制台直接上传**的方式。一方面是因为 Gallery 板块的图片数量还不算太多，另一方面是很多拍摄素材本身就在手机里，直接在手机端登录 Cloudflare 后上传反而更方便。

后续如果尝试使用 S3 API 或自动化上传方案，也会再单独整理一篇文章进行补充。

---

## 图片访问方式（绑定自定义域名）

图片上传完成后，下一步就是如何在代码中调用这些图片。

我这里采用的是 **绑定自定义域名** 的方式。在 Bucket 的 `Settings` 中点击 **Connect Domain**，绑定一个已经在 Cloudflare 中解析好的域名，例如： `img.yourdomain.com`，绑定完成后，图片的访问地址就可以统一为： `https://img.yourdomain.com/image.jpg`。这样在前端代码中就可以直接使用该 URL 进行图片加载，非常直观，也方便后续迁移或调整。

另外，R2 也支持通过 **S3 API** 进行程序化上传和管理，主要用于图片上传、权限控制等场景；在前端展示图片时，仍然推荐使用 **直接 URL 的方式**，更加简单、安全。

---

## 小结

本文主要记录了我在博客 Gallery 板块中，使用 Cloudflare R2 作为图床的选型思路和基础使用方式。从创建 Bucket、管理图片结构，到图片的上传与前端调用，R2 在整体体验和成本控制上我个人体验挺不错的。

后续如果涉及到图片压缩、尺寸参数、加载性能优化等内容，也会在 Gallery 相关的文章中继续展开。
