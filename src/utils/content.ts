import { getCollection } from 'astro:content'
import type { Lang } from '@/utils/i18n'

// 获取所有文章
// async function getAllPosts() {
//   const allPosts = await getCollection('posts', ({ data }) => {
//     return import.meta.env.PROD ? data.draft !== true : true
//   })

//   return allPosts
// }
async function getAllPosts(lang: Lang) {
  const allPosts = await getCollection('posts', (entry) => {
    if (import.meta.env.PROD && entry.data.draft === true) {
      return false
    }

    if (lang === 'en') {
      return entry.id.startsWith('en/')
    }
    return !entry.id.includes('/')
  })

  return allPosts
}

// 获取所有文章，发布日期升序
async function getNewestPosts(lang: Lang) {
  const allPosts = await getAllPosts(lang)

  return allPosts.sort((a, b) => {
    return a.data.date.valueOf() - b.data.date.valueOf()
  })
}

// 获取所有文章，发布日期降序
export async function getOldestPosts(lang: Lang) {
  const allPosts = await getAllPosts(lang)

  return allPosts.sort((a, b) => {
    return b.data.date.valueOf() - a.data.date.valueOf()
  })
}

// 获取所有文章，置顶优先，发布日期降序
export async function getSortedPosts(lang: Lang) {
  const allPosts = await getAllPosts(lang)

  return allPosts.sort((a, b) => {
    if (a.data.sticky !== b.data.sticky) {
      return b.data.sticky - a.data.sticky
    } else {
      return b.data.date.valueOf() - a.data.date.valueOf()
    }
  })
}

// 获取所有文章的字数
export async function getAllPostsWordCount(lang: Lang) {
  const allPosts = await getAllPosts(lang)

  const promises = allPosts.map((post) => {
    return post.render()
  })

  const res = await Promise.all(promises)

  const wordCount = res.reduce((count, cur) => {
    return count + cur.remarkPluginFrontmatter.words
  }, 0)

  return wordCount
}

// 转换为 URL 安全的 slug，删除点，空格转为短横线，大写转为小写
export function slugify(text: string) {
  return text.replace(/\./g, '').replace(/\s/g, '-').toLowerCase()
}

// 获取所有分类
export async function getAllCategories(lang: Lang) {
  const newestPosts = await getNewestPosts(lang)

  const allCategories = newestPosts.reduce<{ slug: string; name: string; count: number }[]>(
    (acc, cur) => {
      if (cur.data.category) {
        const slug = slugify(cur.data.category)
        const index = acc.findIndex((category) => category.slug === slug)
        if (index === -1) {
          acc.push({
            slug,
            name: cur.data.category,
            count: 1,
          })
        } else {
          acc[index].count += 1
        }
      }
      return acc
    },
    [],
  )

  return allCategories
}

// 获取所有标签
export async function getAllTags(lang: Lang) {
  const newestPosts = await getNewestPosts(lang)

  const allTags = newestPosts.reduce<{ slug: string; name: string; count: number }[]>(
    (acc, cur) => {
      cur.data.tags.forEach((tag) => {
        const slug = slugify(tag)
        const index = acc.findIndex((tag) => tag.slug === slug)
        if (index === -1) {
          acc.push({
            slug,
            name: tag,
            count: 1,
          })
        } else {
          acc[index].count += 1
        }
      })
      return acc
    },
    [],
  )

  return allTags
}

// 获取热门标签
export async function getHotTags(len = 5, lang: Lang) {
  const allTags = await getAllTags(lang)

  return allTags
    .sort((a, b) => {
      return b.count - a.count
    })
    .slice(0, len)
}
