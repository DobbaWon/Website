import styles from "../styles/Websites.module.css";
import ProjectCard from "../components/ProjectCard";
import BusinessImage from "../assets/business.jpg";
import EcommerceImage from "../assets/ecommerce.jpg";
import PortfolioImage from "../assets/portfolio.jpg";
import Sugarbuds from "../assets/sugarbuds.jpg";
import BackButton from "../components/BackButton";

export default function Websites() {
  const projects = [
    {
      title: "Sugarbuds Website",
      description: "Modern landing page for a local dessert shop, built with Next.js & React (Client not onboarded yet)",
      image: Sugarbuds,
      link: "https://salmon-hill-0cfb37010.3.azurestaticapps.net/home",
    },
  ];

  const techStack = [
    "React",
    "Vue",
    "Postgres",
    "MySQL",
    "SQL Server",
    "Typescript",
    "Express",
    "Node.js",
    "Flask",
    "ASP.NET",
    "OPEN AI API"
  ];

  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Dobson Websites</h1>
        <p className={styles.subtitle}>
          I build responsive, modern, and user-friendly websites for businesses, creators, and professionals.
        </p>
      </section>

      {/* MIDDLE SECTION: Projects / Tech Stack */}
      <section className={styles.middleSection}>
        {/* Projects on the left */}
        <div className={styles.projectsWrapper}>
          <h2>My Work</h2>
          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            ))}
          </div>
        </div>


        {/* Tech stack on the right */}
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
        <h2>Work With Me</h2>
        <p>
          Interested in building something together? Email me at{" "}
          <a href="mailto:charlie.j.dobson@outlook.com">charlie.j.dobson@outlook.com</a>
        </p>
      </section>

      {/* BACK BUTTON */}
      <div className={styles.button}>
        <BackButton />
      </div>
    </main>
  );
}
