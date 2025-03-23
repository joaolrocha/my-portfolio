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

      <p className={styles.resume}>
      Hello, I&#39;m João Rocha. I made a career transition in 2020, and since then, I&apos;ve been dedicated to developing web and mobile solutions. I use TypeScript, React.js, NextJs, VueJs, Angular, Node.js, and NestJS to build robust and scalable systems. I work with tools like Jira Software, Bitbucket, Styled Components, and SCSS to deliver high-quality solutions. If you&apos;re looking for a committed and proactive developer, it would be a pleasure to connect and explore collaboration opportunities.
      </p>

      <div className={styles.buttonsGroup}>
        <button className={styles.contact}>Get In Touch</button>
        <button className={styles.downloadCv}>Download CV</button>
      </div>
    </section>
  )
}