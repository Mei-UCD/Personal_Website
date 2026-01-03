import type { APIContext } from 'astro'
import rss from '@astrojs/rss'
import { getSortedPosts } from '@/utils/content'
import { getLangFromPath, getTranslations, defaultLang } from '@/utils/i18n'

export async function GET(context: APIContext) {

  const url = new URL(context.request.url)
  const lang = getLangFromPath(url.pathname) ?? defaultLang
  const t = getTranslations(lang as 'zh' | 'en')

  const sortedPosts = await getSortedPosts(lang)

  return rss({
    title: t.site.title,
    description: t.site.description,
    site: context.site!,
    items: sortedPosts.map((post) => ({
      link: `/posts/${post.slug}`,
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
    })),
    customData: `<language>${lang === 'en' ? 'en' : 'zh-CN'}</language>`,
  })
}
