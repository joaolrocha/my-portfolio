import { Text } from '@chakra-ui/react';
import styles from './Experience.module.css'

type ExperienceItem = {
  company: string;
  period: string;
  description: string;
};

type ExperienceProps = {
  dict: {
    title: string;
    items: ExperienceItem[];
  };
};

export default function Experience({ dict }: ExperienceProps) {
  return (
    <section id='experience' className={styles.experience}>
      <h2 className={styles.tittle}>{dict.title}</h2>

      {dict.items.map((exp, index) => (
        <div key={index} className={styles.experienceItem}>
          <div className={styles.experienceItemHeader}>
            <h2>{exp.company}</h2>
            <p>{exp.period}</p>
          </div>
          <div className={styles.experienceItemContent}>
            <Text className={styles.experienceItemContent} color={{ base: "black", _dark: "#8491A0" }}>{exp.description}</Text>
          </div>
        </div>
      ))}
    </section>
  );
}
