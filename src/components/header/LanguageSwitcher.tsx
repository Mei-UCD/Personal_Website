import { useState, useEffect } from 'react'
import { clsx } from 'clsx'
import { getLangFromPath, getLocalizedPath, type Lang } from '@/utils/i18n'

export function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState<Lang>('zh')
  // const [pathname, setPathname] = useState('')

  useEffect(() => {
    // setPathname(window.location.pathname)
    setCurrentLang(getLangFromPath(window.location.pathname))
  }, [])

  const toggleLang = () => {
    const newLang: Lang = currentLang === 'zh' ? 'en' : 'zh'

    const currentPath = window.location.pathname
    const newPath = getLocalizedPath(currentPath, newLang)
    window.location.href = newPath
  }

  return (
    <button
      onClick={toggleLang}
      className={clsx(
        'size-9 shrink-0 rounded-full shadow-lg shadow-zinc-800/5 border border-primary bg-white/50 dark:bg-zinc-800/50 backdrop-blur',
        'flex items-center justify-center text-xs font-medium',
        'hover:bg-white/70 dark:hover:bg-zinc-800/70 transition-colors'
      )}
      type="button"
      aria-label="Toggle language"
      title={currentLang === 'zh' ? 'Switch to English' : '切换到中文'}
    >
      {currentLang === 'zh' ? 'EN' : '中'}
    </button>
  )
}
