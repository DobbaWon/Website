import styles from "../styles/BackButton.module.css";

export default function BackButton() {
  return (
    <button className={styles.backButton} onClick={() => window.location.href = "/"}>
      ← Go Back
    </button>
  );
}
