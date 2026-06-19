import styles from "../styles/DJing.module.css";
import BackButton from "../components/BackButton";

export default function DJing() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <span className={styles.eyebrow}>DJ / Producer</span>
        <h1 className={styles.name}>DJ Dobby</h1>
        <p className={styles.tagline}>Dubstep · Breaks · UK Garage</p>
        <p className={styles.location}>Based in Preston, United Kingdom</p>
      </section>

      {/* LISTEN */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Mixes</span>
          <h2>Listen</h2>
        </div>

        <div className={styles.player}>
          <iframe
            width="100%"
            height="166"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https://soundcloud.com/user-213830597/2026-bar-garage-mix"
          />
        </div>

        <div className={styles.player}>
          <iframe
            width="100%"
            height="166"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https://soundcloud.com/user-213830597/9e2de280-dc0a-4f0c-a29e-8426b4ba6a04"
          />
        </div>

        <div className={styles.player}>
          <iframe
            width="100%"
            height="166"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https://soundcloud.com/user-213830597/2025-mix"
          />
        </div>
      </section>

      {/* SOUND */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Style</span>
          <h2>Sound</h2>
        </div>
        <p className={styles.sound}>
          Underground, club / deep garage, perfect for a chilled, classy vibe.
          Dark, deep dubstep, focusing on very heavy drops and sharp transitions.
          Nu-UKG, sunny, fast-paced garage, fitting for a summer day-party.
        </p>
      </section>

      {/* BOOKINGS */}
      <section className={styles.contactSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Contact</span>
          <h2>Bookings</h2>
        </div>
        <p>
          Email:{" "}
          <a className={styles.contactLink} href="mailto:dobbythedj@outlook.com">
            dobbythedj@outlook.com
          </a>
        </p>
        <p>
          Instagram:{" "}
          <a className={styles.contactLink} href="https://instagram.com/dobbydjs">
            @DobbyDJs
          </a>
        </p>
      </section>

      <div className={styles.button}>
        <BackButton />
      </div>
    </main>
  );
}
