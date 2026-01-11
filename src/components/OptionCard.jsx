// src/components/OptionCard.jsx
import styles from "../styles/OptionCard.module.css";
import { Link } from "react-router-dom";

export default function OptionCard({ title, description, image, to }) {
  return (
    <Link to={to} className={styles.card}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>

      <p className={styles.description}>{description}</p>
    </Link>
  );
}
