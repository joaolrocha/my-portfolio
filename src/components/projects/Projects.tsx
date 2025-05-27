import CardsProject from "./Cards/Cards";
import styles from "./Projects.module.css";

type ProjectsProps = {
  dict: {
    title: string;
    button: string;
  };
}

export default function Projects({dict} : ProjectsProps) {
  return (
    <section className={styles.projects}>
      <h2>{dict.title}</h2>
      <div className={styles.cardsContainer}>
        <CardsProject dict={dict}/>
      </div>
    </section>
  )
}