import { useEffect, useRef, useState } from 'react'
import { animate } from 'framer-motion'
import { getDaysInYear, getDiffInDays, getStartOfDay, getStartOfYear } from '@/utils/date'


type Props = {
  t: {
    timeline: {
      dayOfYear: string
      percentOfYear: {
        prefix: string,
        suffix: string
      }
      percentOfToday: {
        prefix: string,
        suffix: string
      }
    }
  }
}

export function TimelineProgress({ t }: Props) {
  const [currentYear, setCurrentYear] = useState(0)
  const [dayOfYear, setDayOfYear] = useState(0)
  const [percentOfYear, setPercentOfYear] = useState(0)
  const [percentOfToday, setPercentOfToday] = useState(0)

  const updateInfo = () => {
    const now = new Date()
    setCurrentYear(now.getFullYear())

    const pastDays = getDiffInDays(getStartOfYear(now), now)
    setDayOfYear(pastDays)
    setPercentOfYear((pastDays / getDaysInYear(now)) * 100)

    const pastTime = now.getTime() - getStartOfDay(now).getTime()
    setPercentOfToday((pastTime / 86400 / 1000) * 100)
  }

  useEffect(() => {
    updateInfo()
    const interval = setInterval(updateInfo, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <p className="mt-4">
        {t.timeline.dayOfYear
          .replace('{year}', currentYear.toString())
          .replace('{day}', dayOfYear.toString())}
      </p>
      <p className="mt-4">
      {t.timeline.percentOfYear.prefix}
      <CountUp to={percentOfYear} decimals={5} />
      {t.timeline.percentOfYear.suffix}
      </p>
      <p className="mt-4">
      {t.timeline.percentOfToday.prefix}
      <CountUp to={percentOfToday} decimals={5} />
      {t.timeline.percentOfToday.suffix}
      </p>
    </>
  )
}

function CountUp({
  to,
  decimals,
  duration = 1,
}: {
  to: number
  decimals: number
  duration?: number
}) {
  const node = useRef<HTMLSpanElement>(null)
  const prev = useRef(0)

  useEffect(() => {
    if (!node.current) return

    const control = animate(prev.current, to, {
      duration,
      onUpdate: (value) => {
        node.current!.textContent = value.toFixed(decimals)
      },
    })
    prev.current = to

    return () => {
      control.stop()
    }
  }, [to, decimals, duration])

  return <span ref={node}></span>
}
