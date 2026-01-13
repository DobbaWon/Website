import BackButton from "../components/BackButton";
import styles from "../styles/Software.module.css";

export default function Software() {
  const timeline = [
    {
      date: "October 2025 - Present",
      title: "Full-Stack Software Engineer at GLEG Limited",
      description:
        "Building a multi-tenant web app using React, Typescript, SQL Server, Power BI Embedded, OpenAI API, and an Express backend. Doing all of this as a solo engineer, really diving head-first into my career, having to handle security, deployment, frontend, backend, and handling the creation of a massive database, and structuring the move from excel spreadsheets to SQL Server powered Power BI Reports.",
    },
    {
      date: "2022 - 2025",
      title: "Software Engineering Undergraduate at Lancaster University",
      description:
        "Achieving a First Class Honours Degree in Software Engineering, I learned a variety of useful skills in the field of computer science, from networking, to embedded systems, to UI/UX and Software Design. Doing a variety of projects involving Microbits and real-life systems."
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
    "OPEN AI API"
  ];

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Full-Stack Web Developer</h1>
        <h2>
          Specialising in <span className={styles.rainbow}>React</span> & Modern Web Technologies
        </h2>
        <p className={styles.subtitle}>
          Building full-stack applications using modern frontend frameworks
          and reliable backend systems.
        </p>
      </section>

      {/* TIMELINE + TECH STACK */}
      <section className={styles.middleSection}>
        <div className={styles.timelineWrapper}>
          <h2>Career Timeline</h2>
          <div className={styles.timeline}>
            {timeline.map((item, index) => (
              <div key={index} className={styles.card}>
                <span className={styles.date}>{item.date}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.techWrapper}>
          <h2>Tech Stack</h2>
          <ul className={styles.techList}>
            {techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CONTACT */}
      <section className={styles.contactSection}>
        <h2>Get in Touch</h2>
        <p>
          I'm not currently looking for work, but email me at{" "}
          <a href="mailto:charlie.j.dobson@outlook.com">charlie.j.dobson@outlook.com</a>
        </p>
      </section>

      <BackButton />
    </main>
  );
}
