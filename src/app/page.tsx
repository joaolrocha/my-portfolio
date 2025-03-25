import AboutMe from "@/components/aboutMe/AboutMe";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import HeaderApp from "@/components/header/Header";
import Projects from "@/components/projects/Projects";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeaderApp />
        <AboutMe />
        <Projects />
        <Experience />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
