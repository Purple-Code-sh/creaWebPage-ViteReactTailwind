// src/components/Countdown.jsx
import React, { useState, useEffect } from 'react'
import { intervalToDuration } from 'date-fns'
import styles from './Countdown.module.css'

const Countdown = () => {
  const targetDate = new Date('2024-12-04T09:00:00')
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  function getTimeLeft () {
    const now = new Date()
    const duration = intervalToDuration({
      start: now,
      end: targetDate
    })

    return {
      months: duration.months || 0,
      days: duration.days || 0,
      hours: duration.hours || 0,
      minutes: duration.minutes || 0
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 60000) // Actualiza cada minuto

    return () => clearInterval(timer)
  }, [])

  const TimeUnit = ({ value, label }) => (
    <div className='flex flex-col items-center'>
      <span className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold relative text-txt_white_purple ${styles.animateGlow}`}>
        {value !== undefined ? value : 0}
      </span>
      <span className={`text-sm lg:text-base 2xl:text-xl text-txt_white ${styles.neonEffect}`}>{label}</span>
    </div>
  )

  return (
    <div className='text-center p-6 inline-block'>
      <h1 className='text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl mb-6 md:mb-8 xl:mb-10 text-txt_white_purple'>
        Tiempo restante para el evento
      </h1>
      <div className='flex justify-center space-x-10 md:space-x-12 xl:space-x-14'>
        <TimeUnit value={timeLeft.months} label='M' />
        <TimeUnit value={timeLeft.days} label='D' />
        <TimeUnit value={timeLeft.hours} label='Hr' />
        <TimeUnit value={timeLeft.minutes} label='Min' />
      </div>
    </div>
  )
}

export default Countdown
