import { useLayoutEffect, useState } from 'react'
import { footer } from '@/config.json'
import { getDiffInDays } from '@/utils/date'

type Props = {
  t: {
    footer: {
      notPublished: string
      runningDays: string
    }
  }
}

export function RunningDays({ t }: Props) {
  const [days, setDays] = useState(0)

  useLayoutEffect(() => {
    const diffDays = getDiffInDays(new Date(footer.startTime))
    setDays(diffDays)
  }, [])

  if (days < 0) {
    return <span>{t.footer.notPublished}</span>
  }

  return <span>
    {t.footer.runningDays.replace('{{days}}', String(days))}
  </span>
}
