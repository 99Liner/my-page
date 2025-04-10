import Image from 'next/image'
import styles from './page.module.css'
import Header from './Header'



export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.description}>
        <h1> Welcome </h1>
      </div>

      <div className={styles.center}>
        <h1>Denice</h1>
        {/* insert image */}
      </div>

    </main>
  )
}
