'use client'

import { useState } from 'react'

import styles from './Counter.module.css'

export default function Counter() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount((count) => count + 1)
  }

  function handleResetClick() {
    setCount(0)
  }

  return (
    <div className={styles.counter}>
      <button className={styles.button} onClick={handleClick}>
        Count: {count}
      </button>
      <button className={styles.reset} onClick={handleResetClick}>
        Reset
      </button>
    </div>
  )
}
