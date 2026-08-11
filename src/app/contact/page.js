import styles from './contact.module.css';

export const metadata = {
  title: 'Contact',
  description: 'Contact Denice',
};

export default function Contact() {
  return (
    <main className={styles.contactPage}>

      <section className={styles.contactSection}>
        <h1>Contact Me</h1>

        {/* 
          EMAIL FORM PLACEHOLDER
        */}
        <form className={styles.contactForm}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                disabled
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                disabled
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              placeholder="Write your message..."
              rows="6"
              disabled
            />
          </div>

          <div className={styles.formBottom}>
            <span className={styles.comingSoon}>
              Email form coming soon
            </span>

            <button
              type="button"
              className={styles.sendButton}
              disabled
            >
              Send
            </button>
          </div>
        </form>
      </section>


      <section className={styles.socialSection}>
        <h2>Socials</h2>

        <div className={styles.socialLinks}>
          <a
            href="mailto:denicejaquez@outlook.com"
            className={`${styles.socialButton} ${styles.email}`}
          >
            Email
          </a>

          <a
            href="http://github.com/99Liner"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialButton} ${styles.github}`}
          >
            GitHub
          </a>

          <a
            href="http://linkedin.com/in/denice-j-8b4698198/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialButton} ${styles.linkedin}`}
          >
            LinkedIn
          </a>
        </div>
      </section>

    </main>
  );
}