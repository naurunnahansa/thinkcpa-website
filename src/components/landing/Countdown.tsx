'use client'

import { useEffect, useState } from 'react'

function getDeadline() {
  if (typeof window === 'undefined') return new Date()
  const stored = localStorage.getItem('sale-deadline')
  if (stored) {
    const deadline = new Date(stored)
    if (deadline.getTime() > Date.now()) return deadline
  }
  const deadline = new Date(Date.now() + 24 * 60 * 60 * 1000)
  localStorage.setItem('sale-deadline', deadline.toISOString())
  return deadline
}

function getTimeLeft(deadline: Date) {
  const diff = Math.max(0, deadline.getTime() - Date.now())
  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function pad(n: number) {
  return n.toString().padStart(2, '0')
}

export default function Countdown({ className = '' }: { className?: string }) {
  const [deadline, setDeadline] = useState<Date | null>(null)
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const d = getDeadline()
    setDeadline(d)
    setTime(getTimeLeft(d))
  }, [])

  useEffect(() => {
    if (!deadline) return
    const interval = setInterval(() => {
      setTime(getTimeLeft(deadline))
    }, 1000)
    return () => clearInterval(interval)
  }, [deadline])

  if (!deadline) {
    return (
      <div className={`inline-flex items-center gap-3 font-mono ${className}`}>
        <TimeBlock value="00" label="hrs" />
        <span className="text-2xl font-bold opacity-60">:</span>
        <TimeBlock value="00" label="min" />
        <span className="text-2xl font-bold opacity-60">:</span>
        <TimeBlock value="00" label="sec" />
      </div>
    )
  }

  return (
    <div className={`inline-flex items-center gap-3 font-mono ${className}`}>
      <TimeBlock value={pad(time.hours)} label="hrs" />
      <span className="text-2xl font-bold opacity-60">:</span>
      <TimeBlock value={pad(time.minutes)} label="min" />
      <span className="text-2xl font-bold opacity-60">:</span>
      <TimeBlock value={pad(time.seconds)} label="sec" />
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
