import styles from "../styles/Software.module.css"

export default function Software() {
  return (
    <div className={styles.content}>
      <h1>Full-Stack Web Developer</h1>
      
      <h2>Specialising in <span className={styles.rainbow}>React</span></h2>

      <p className={styles.subtitle}>
        Building full-stack applications using modern frontend frameworks
        and reliable backend systems.
      </p>

      <p className={styles.stackpreview}>
        React · Vue · Express · Flask · ASP.NET · SQL
      </p>
    </div>
  )
}