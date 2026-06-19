import BackButton from "../components/BackButton";
import styles from "../styles/Software.module.css";

export default function Software() {
  const timeline = [
    {
      date: "October 2025 – Present",
      title: "Full-Stack Software Engineer at GLEG Limited",
      description:
        "Building a multi-tenant web app using React, TypeScript, SQL Server, Power BI Embedded, OpenAI API, and an Express backend. Handling security, deployment, frontend, backend, and the migration from Excel spreadsheets to a SQL Server–powered Power BI reporting suite.",
    },
    {
      date: "2022 – 2025",
      title: "Software Engineering Undergraduate at Lancaster University",
      description:
        "Graduated with a First Class Honours in Software Engineering, covering networking, embedded systems, UI/UX, and software design — including hands-on projects with Microbits and real-world systems.",
    },
  ];

  const techStack = [
    "React",
    "Vue",
    "Node.js",
    "Express",
    "SQL",
    "TypeScript",
    "Git / GitHub",
    "Docker",
    "CI/CD",
    "OpenAI API",
  ];

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Career</span>
        <h1 className={styles.title}>Full-Stack Developer</h1>
        <h2>
          Specialising in <span className={styles.accent}>React</span> &amp; Modern Web Technologies
        </h2>
        <p className={styles.subtitle}>
          Building full-stack applications using modern frontend frameworks and
          reliable backend systems.
        </p>
      </section>

      {/* TIMELINE + TECH STACK */}
      <section className={styles.middleSection}>
        <div className={styles.timelineWrapper}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Experience</span>
            <h2>Career Timeline</h2>
          </div>
          <div className={styles.timeline}>
            {timeline.map((item) => (
              <div key={item.title} className={styles.timelineItem}>
                <span className={styles.timelineDot} />
                <span className={styles.date}>{item.date}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.techWrapper}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Skills</span>
            <h2>Tech Stack</h2>
          </div>
          <ul className={styles.techList}>
            {techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section className={styles.contactSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Contact</span>
          <h2>Get in Touch</h2>
        </div>
        <p>
          I'm not currently looking for work, but feel free to reach out at{" "}
          <a href="mailto:charlie.j.dobson@outlook.com">
            charlie.j.dobson@outlook.com
          </a>
        </p>
      </section>

      <div className={styles.button}>
        <BackButton />
      </div>
    </main>
  );
}
