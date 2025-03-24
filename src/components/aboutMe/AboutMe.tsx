import Image from 'next/image';
import pdf from './../../types.s';
import profilePic from '../../assets/profile/profile.jpeg'
import styles from './AboutMe.module.css';

const resumePDF = pdf("resume.docx");

export default function AboutMe() {
  return (
    <section className={styles.aboutMe}>
      <Image
        className={styles.logo}
        src={profilePic.src}
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
        <a href={resumePDF}>
          <button className={styles.downloadCv}>Download CV</button>
        </a>
      </div>
    </section>
  )
}