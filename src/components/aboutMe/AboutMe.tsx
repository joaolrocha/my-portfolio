import Image from 'next/image';
import profilePic from '../../assets/profile/profile.jpeg';
import pdf from './../../types.s';
import styles from './AboutMe.module.css';
import { Text } from '@chakra-ui/react';

type AboutMeProps = {
  dict: {
    title: string;
    description: string;
    contact: string;
    downloadCv: string;
  };
}

const resumePDF = pdf("resume.docx");

export default function AboutMe({ dict }: AboutMeProps) {
  return (
    <section id='about' className={styles.aboutMe}>
      <Image
        className={styles.logo}
        src={profilePic.src}
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <p className={styles.presentation}>
        {dict.title}
      </p>

      <Text color={{ base: "black", _dark: "#8491A0" }} className={styles.resume}>
        {dict.description}
      </Text>

      <div className={styles.buttonsGroup}>
        <button className={styles.contact}><a href="#contact">{dict.contact}</a></button>
        <a href={resumePDF}>
          <button className={styles.downloadCv}>{dict.downloadCv}</button>
        </a>
      </div>
    </section>
  )
}