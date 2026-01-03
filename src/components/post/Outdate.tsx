import { useEffect, useState } from 'react'
import { getDiffInDays, getFormattedDate } from '@/utils/date'
import { motion, AnimatePresence } from 'framer-motion'
import type { translations } from '@/utils/i18n'
type T = (typeof translations)['zh']
import { getTranslations, getLangFromPath, defaultLang } from '@/utils/i18n'



export function Outdate({ lastMod, t }: { lastMod: Date, t: T }) {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const diffDays = getDiffInDays(lastMod)
    if (diffDays > 30) {
      setIsShow(true)
    }
  }, [lastMod])

  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          className="flex justify-center text-sm p-4 rounded-lg bg-amber-300/10 border border-amber-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <span>
          {t.date.notice.replace('{{date}}', getFormattedDate(lastMod, t))}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
