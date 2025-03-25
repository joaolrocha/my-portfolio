import CardsProject from "./Cards/Cards";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h2>PROJECTS</h2>
      <div className={styles.cardsContainer}>
        <CardsProject />
      </div>
    </section>
  )
}