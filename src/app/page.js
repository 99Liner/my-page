//import Image from 'next/image'
import styles from './page.module.css';
import layout from './layout.js';


//Page is the Home page 
export default function Home() {
  return (
    <layout>
    <main className={styles.main}>
      <div className={styles.description}>
        <h1> Welcome this is the Home page YUUUP </h1>
      </div>

      <div className={styles.center}>
        <h1>Denice</h1>
        {/* insert image */}
      </div>

    </main>
    </layout>
  )
}
