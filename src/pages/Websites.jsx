import styles from "../styles/Websites.module.css";
import ProjectCard from "../components/ProjectCard";
import BackButton from "../components/BackButton";
import London from "../assets/london-1.jpg";

export default function Websites() {
  const projects = [
    {
      title: "POCLA",
      description:
        "Designed and built a modern, responsive landing page for the Proceeds of Crime Lawyers Association, including event listings, member resources, and a contact form.",
      image: London,
      link: "https://www.pocla.uk",
    },
  ];

  const processSteps = [
    {
      title: "Template & Planning",
      description:
        "I share an example template of your site so you can see the proposed structure and layout before any custom work begins.",
    },
    {
      title: "Your Content",
      description:
        "You supply images, copy, and mission statements, which I use to replace the placeholder content in the template.",
    },
    {
      title: "Launch & Ongoing Support",
      description:
        "Once live, you get one free basic revision a month (e.g. updating existing text). Larger changes — new sections, pages, or features — are quoted based on scope, so costs stay predictable.",
    },
  ];

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Freelance Web Developer</span>
        <h1 className={styles.title}>Dobson Websites</h1>
        <p className={styles.subtitle}>
          I design and build fast, modern websites for businesses, creators,
          and professionals — from first concept through to launch.
        </p>
        <div className={styles.heroCta}>
          <a href="#work" className={styles.primaryButton}>
            View My Work
          </a>
          <a href="#contact" className={styles.secondaryButton}>
            Get In Touch
          </a>
        </div>
      </section>

      {/* WORK */}
      <section className={styles.workSection} id="work">
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Portfolio</span>
          <h2>Selected Work</h2>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.onboardingSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Process</span>
          <h2>How Getting a Website With Me Works</h2>
        </div>
        <ol className={styles.steps}>
          {processSteps.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.stepNumber}>{index + 1}</span>
              <div className={styles.stepBody}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* CONTACT */}
      <section className={styles.contactSection} id="contact">
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Contact</span>
          <h2>Work With Me</h2>
        </div>
        <p>
          Interested in building something together? Send me a few details
          about your project and I'll reply within a day or two.
        </p>
        <a
          href="mailto:charlie.j.dobson@outlook.com"
          className={styles.primaryButton}
        >
          charlie.j.dobson@outlook.com
        </a>
      </section>

      {/* BACK BUTTON */}
      <div className={styles.button}>
        <BackButton />
      </div>
    </main>
  );
}