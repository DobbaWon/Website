import styles from "../styles/Home.module.css";
import OptionCard from "../components/OptionCard";
import DjImage from "../assets/dj.jpg";
import WebsitesImage from "../assets/websites.jpg";
import SoftwareImage from "../assets/software.jpg";

export default function Home() {
  return (
    <main className={styles.home}>
      <header className={styles.header}>
        <h1>Hi, I'm Charlie!</h1>
        <h2>What are you here for?</h2>
        <p>Select a path to explore my work</p>
      </header>

      <section className={styles.options}>
        <OptionCard
          title="DJing"
          description="Clubs, collectives, and events. Explore my sound, past venues, and mixes."
          image={DjImage}
          to="/dj"
        />

        <OptionCard
          title="Websites"
          description="Freelance websites for businesses and individuals. View my portfolio and get in touch."
          image={WebsitesImage}
          to="/websites"
        />

        <OptionCard
          title="Software Development"
          description="My career as a full-stack developer. Experience, projects, and tech stacks."
          image={SoftwareImage}
          to="/software"
        />
      </section>
    </main>
  );
}
