import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>

      <section className={styles.hero}>
        <div className={styles.heroContent}>

          <Image
            src="/Ari placeholder.jpg"
            alt="Graduation portrait"
            width={480}
            height={650}
            className={styles.heroImage}
            priority
          />

          <div className={styles.heroText}>
            <h1>Software Engineer</h1>
            <p>Denice's Portfolio</p>
          </div>

        </div>
      </section>


      <section className={styles.about}>

        <h2>ABOUT ME</h2>

        <div className={styles.aboutContent}>

          <Image
            src="/Ari placeholder.jpg"
            alt="Denice"
            width={180}
            height={180}
            className={styles.profileImage}
          />

          <div className={styles.aboutText}>
            <p>
              I am a Software Engineering graduate with experience in
              healthcare workflows, customer-facing technology,
              troubleshooting, documentation, and software systems.
              I am interested in roles involving software development,
              application support, implementation, business analysis,
              QA testing, and technical problem-solving.
            </p>

            <a
              href="/resume.pdf"
              target="_blank"
              className={styles.resumeLink}
            >
              Download Resume
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}