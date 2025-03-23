import Image from 'next/image';
import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <section className={styles.aboutMe}>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <p className={styles.presentation}>
        Software Developer
      </p>
    </section>
  )
}