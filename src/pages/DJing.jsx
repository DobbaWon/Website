import styles from "../styles/DJing.module.css";
import BackButton from "../components/BackButton";

export default function DJing() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.name}>DJ Dobby</h1>
        <p className={styles.tagline}>
          Dubstep · Breaks · UK Garage
        </p>
        <p className={styles.location}>Based in Preston, United Kingdom</p>
      </section>

      {/* LISTEN */}
      <section className={styles.section}>
        <h2>Listen</h2>

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
            src="https://w.soundcloud.com/player/?url=https://soundcloud.com/user-213830597/2026-bar-garage-mix"
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

      {/* PLAYED AT */}
      {/* <section className={styles.section}>
        <h2>Played At</h2>
        <ul className={styles.venues}>
          <li>Club Name — City</li>
          <li>Event Series / Promoter</li>
          <li>Festival Name</li>
          <li>University Events</li>
        </ul>
      </section> */}

      {/* SOUND */}
      <section className={styles.section}>
        <h2>Sound</h2>
        <p className={styles.sound}>
          Underground, club / deep garage, perfect for a chilled, classy vibe. Dark, deep dubstep, focusing on very heavy drops and sharp transitions. Nu-UKG, sunny, fast-paced garage, fitting for a summer day-party.
        </p>

      </section>

      {/* PHOTOS */}
      {/* <section className={styles.section}>
        <h2>Gallery</h2>
        <div className={styles.gallery}>
          <div className={styles.photo} />
          <div className={styles.photo} />
          <div className={styles.photo} />
        </div>
      </section> */}

      {/* BOOKINGS */}
      <section className={styles.contactSection}>
        <p className={styles.contact}>
          Email: <a href="dobbythedj@outlook.com">dobbythedj@outlook.com</a>
        </p>
        <p className={styles.contact}>
          Instagram: <a href="https://instagram.com/dobbydjs">@DobbyDJs</a>
        </p>
      </section>

      <BackButton />
    </main>
  );
}
