import Image from 'next/image'

import Counter from './Counter'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Image src="logo.svg" alt="Logo" width={256} height={256} />
        <h1>Next Modern App Template v0.1.0</h1>
        <Counter />
      </div>
      <div className={styles.docs}>
        <a
          className={styles.project}
          href="https://github.com/dangminhngo/next-app-router-template"
          target="_blank"
          rel="noreferrer"
        >
          Read Our Docs
        </a>
        <a
          className={styles.next}
          href="https://beta.nextjs.org/docs"
          target="_blank"
          rel="noreferrer"
        >
          Next.js Beta Docs
        </a>
        <a
          className={styles.react}
          href="https://beta.reactjs.org/"
          target="_blank"
          rel="noreferrer"
        >
          React Beta Docs
        </a>
      </div>
    </main>
  )
}
