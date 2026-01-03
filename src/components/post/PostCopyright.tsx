import { author, site } from '@/config.json'
import { getFormattedDateTime } from '@/utils/date'
import { AnimatedSignature } from '../AnimatedSignature'
import { useEffect, useState } from 'react'
import { toast } from "react-toastify"
import { getLangFromPath, getTranslations, defaultLang, getLocalizedPath, getPostSlug } from '@/utils/i18n'
import type { Lang } from '@/utils/i18n'

function getPostUrl(slug: string) {
  return new URL(slug, site.url).href
}

export function PostCopyright({
  title,
  slug,
  lastMod,
  lang,
}: {
  title: string
  slug: string
  lastMod: Date
  lang: Lang
}) {
  const [lastModStr, setLastModStr] = useState('')
  const url = getPostUrl(slug)
  const t = getTranslations(lang)

  function handleCopyUrl() {
    navigator.clipboard.writeText(url)
    toast.success(t.post.copied)
  }

  useEffect(() => {
    setLastModStr(getFormattedDateTime(lastMod, t))
  }, [lastMod])

  return (
    <section className="text-xs leading-loose text-secondary">
      <p>{t.post.title} {title}</p>
      <p>{t.post.author} {author.name}</p>
      <p>
        <span>{t.post.link} {url}</span>
        <span role="button" className="cursor-pointer select-none" onClick={handleCopyUrl}>
          [{t.post.copy}]
        </span>
      </p>
      <p>{t.post.lastModified} {lastModStr}</p>
      <hr className="my-3 border-primary" />
      <div>
        <div className="float-right ml-4 my-2">
          <AnimatedSignature />
        </div>
        <p>
        {t.post.copyright.notice}
          <br />
          {t.post.copyright.licensePrefix}{' '}
          <a
            className="hover:underline hover:text-accent underline-offset-2"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
            target="_blank"
            rel="noopener noreferrer"
          >
            CC BY-NC-SA 4.0
          </a>{' '}
          {t.post.copyright.licenseSuffix}
        </p>
      </div>
    </section>
  )
}
