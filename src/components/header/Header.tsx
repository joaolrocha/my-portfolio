import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export default function HeaderApp() {
  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <div className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/about">Experience</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </header>
  )
}