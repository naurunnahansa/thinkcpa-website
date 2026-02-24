'use client'

import { useEffect, useState } from 'react'

// Sale ends Friday Feb 28, 2026 at 11:59pm EST
const SALE_DEADLINE = new Date('2026-02-28T23:59:59-05:00')

function getTimeLeft() {
  const diff = Math.max(0, SALE_DEADLINE.getTime() - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: diff === 0,
  }
}

function pad(n: number) {
  return n.toString().padStart(2, '0')
}

export default function Countdown({
  className = '',
  compact = false,
  expiredText = 'Sale ended',
}: {
  className?: string
  compact?: boolean
  expiredText?: string
}) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: false })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTime(getTimeLeft())
    const interval = setInterval(() => {
      const t = getTimeLeft()
      setTime(t)
      if (t.expired) clearInterval(interval)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (compact) {
    if (!mounted) return <span className={`font-mono font-bold tabular-nums ${className}`}>--:--:--:--</span>
    if (time.expired) return <span className={`font-bold ${className}`}>{expiredText}</span>
    return (
      <span className={`font-mono font-bold tabular-nums ${className}`}>
        {pad(time.days)}d {pad(time.hours)}h {pad(time.minutes)}m {pad(time.seconds)}s
      </span>
    )
  }

  if (mounted && time.expired) {
    return (
      <p className={`text-2xl md:text-3xl font-black ${className}`}>{expiredText}</p>
    )
  }

  const placeholder = '--'

  return (
    <div className={`inline-flex items-center gap-3 font-mono ${className}`}>
      <TimeBlock value={mounted ? pad(time.days) : placeholder} label="days" />
      <span className="text-2xl font-bold opacity-60">:</span>
      <TimeBlock value={mounted ? pad(time.hours) : placeholder} label="hrs" />
      <span className="text-2xl font-bold opacity-60">:</span>
      <TimeBlock value={mounted ? pad(time.minutes) : placeholder} label="min" />
      <span className="text-2xl font-bold opacity-60">:</span>
      <TimeBlock value={mounted ? pad(time.seconds) : placeholder} label="sec" />
    </div>
  )
}

function TimeBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl md:text-4xl font-black tabular-nums leading-none">{value}</span>
      <span className="text-[10px] uppercase tracking-wider opacity-50 mt-1">{label}</span>
    </div>
  )
}
