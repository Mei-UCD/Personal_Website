import zh from '@/i18n/zh.json'
import en from '@/i18n/en.json'

export type Lang = 'zh' | 'en'

export const languages: Lang[] = ['zh', 'en']

export const defaultLang: Lang = 'zh'

export const translations = {
  zh,
  en,
} as const

export function getLangFromPath(pathname: string): Lang {
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]

  if (firstSegment === 'en') {
    return 'en'
  }
  return 'zh'
}

export function getTranslations(lang: Lang) {
  return translations[lang]
}

export function getLocalizedPath(pathname: string, lang: Lang): string {
  // Remove any existing language prefix
  let pathWithoutLang = pathname.replace(/^\/(zh|en)/, '') || '/'

  // Ensure path starts with /
  if (!pathWithoutLang.startsWith('/')) {
    // Normalize: ensure we have exactly one leading slash
    pathWithoutLang = pathWithoutLang === '/' ? '/' : pathWithoutLang
  }

  // For default language (zh), don't add prefix
  if (lang === defaultLang) {
    return pathWithoutLang
  }
  // For other languages, add language prefix
  // For root path, return /en (not /en/)
  if (pathWithoutLang === '/') {
    return `/${lang}/`
  }
  // Ensure the path starts with /en/ for non-default language
  return `/${lang}${pathWithoutLang}`
}

// export type MenuKey = keyof typeof zh.menus
// export type MenuConfig = {
//   key: MenuKey
//   link: string
//   icon: string
// }

// export function getMenuWithLang(menus: typeof zh.menus, lang: Lang) {
//   const translations = getTranslations(lang)
//   return menus.map((menu, index) => ({
//     ...menu,
//     name: translations.menus[index].name,
//     link: getLocalizedPath(menu.link, lang),
//   }))
// }

export function getPostSlug(slug: string) {
  // en/helloworld → helloworld
  return slug.includes('/') ? slug.split('/').slice(1).join('/') : slug
}

type HeaderMenuItem = {
  link: string
  icon: string
  name: string
}
export function getMenuWithLang(
  configMenus: { link: string; icon: string }[],
  lang: Lang,
): HeaderMenuItem[] {
  const t = getTranslations(lang)

  return configMenus.map((configMenu) => {
    const translated = t.menus.find((m) => m.link === configMenu.link)

    if (!translated) {
      throw new Error(`Missing i18n menu for ${configMenu.link}`)
    }

    return {
      link: getLocalizedPath(configMenu.link, lang),
      icon: configMenu.icon,
      name: translated.name,
    }
  })
}
