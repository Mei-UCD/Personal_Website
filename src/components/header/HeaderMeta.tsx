import { AnimatePresence, motion } from 'framer-motion'
import { useHeaderMetaInfo, useShouldHeaderMetaShow } from './hooks'
import { useState, useEffect } from 'react'
import { getLangFromPath, getTranslations, type Lang } from '@/utils/i18n'

export function HeaderMeta() {
  const { title, description, slug } = useHeaderMetaInfo()
  const shouldShow = useShouldHeaderMetaShow()
  const [siteTitle, setSiteTitle] = useState('')

  useEffect(() => {
    const lang = getLangFromPath(window.location.pathname)
    const t = getTranslations(lang)
    setSiteTitle(t.site.title)
  }, [])

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          className="absolute inset-0 z-1 flex items-center justify-between md:px-10"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 20,
          }}
        >
          <div className="grow min-w-0">
            <div className="text-secondary text-xs truncate">{description}</div>
            <h2 className="truncate text-lg">{title}</h2>
          </div>
          <div className="hidden md:block min-w-0 text-right">
            <div className="text-secondary text-xs truncate">{slug}</div>
            <div>{siteTitle}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
