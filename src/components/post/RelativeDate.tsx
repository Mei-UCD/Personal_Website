import { getRelativeTime, getFormattedDate } from '@/utils/date'
import { useEffect, useState } from 'react'
import { getLangFromPath, getTranslations } from '@/utils/i18n'



// export function RelativeDate({ date }: { date: Date }) {
//   const [dateStr, setDateStr] = useState(getFormattedDate(date))

//   useEffect(() => {
//     const relative = getRelativeTime(date)
//     if (relative) {
//       setDateStr(relative)
//     }
//   }, [date])

//   return <span>{dateStr}</span>
// }

export function RelativeDate({ date }: { date: Date }) {
  const [dateStr, setDateStr] = useState('')

  useEffect(() => {
    const pathname = window.location.pathname
    const lang = getLangFromPath(pathname)
    const t = getTranslations(lang)

    if (!t) return

    const relative = getRelativeTime(date, t)
    setDateStr(relative ?? getFormattedDate(date, t))
  }, [date])

  return <span>{dateStr}</span>
}
