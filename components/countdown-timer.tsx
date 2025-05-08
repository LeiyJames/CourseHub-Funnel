"use client"

import { useState, useEffect } from "react"

export function CountdownTimer({ hours = 48 }: { hours?: number }) {
  const [timeLeft, setTimeLeft] = useState({
    hours: hours,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer)
          return prev
        }

        let newHours = prev.hours
        let newMinutes = prev.minutes
        let newSeconds = prev.seconds - 1

        if (newSeconds < 0) {
          newSeconds = 59
          newMinutes -= 1
        }

        if (newMinutes < 0) {
          newMinutes = 59
          newHours -= 1
        }

        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0")
  }

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      <div className="flex flex-col items-center">
        <div className="text-2xl sm:text-3xl font-bold bg-purple-100 text-purple-900 rounded-md px-3 py-2 min-w-[60px] text-center">
          {formatTime(timeLeft.hours)}
        </div>
        <span className="text-xs mt-1 text-gray-500">Hours</span>
      </div>
      <span className="text-2xl sm:text-3xl font-bold">:</span>
      <div className="flex flex-col items-center">
        <div className="text-2xl sm:text-3xl font-bold bg-purple-100 text-purple-900 rounded-md px-3 py-2 min-w-[60px] text-center">
          {formatTime(timeLeft.minutes)}
        </div>
        <span className="text-xs mt-1 text-gray-500">Minutes</span>
      </div>
      <span className="text-2xl sm:text-3xl font-bold">:</span>
      <div className="flex flex-col items-center">
        <div className="text-2xl sm:text-3xl font-bold bg-purple-100 text-purple-900 rounded-md px-3 py-2 min-w-[60px] text-center">
          {formatTime(timeLeft.seconds)}
        </div>
        <span className="text-xs mt-1 text-gray-500">Seconds</span>
      </div>
    </div>
  )
}
