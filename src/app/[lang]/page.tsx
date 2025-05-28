import { getDictionary } from "@/i18n/get-dictionary";
import { Locale } from "@/i18n/get-dictionary";
import AboutMe from "@/components/aboutMe/AboutMe";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import HeaderApp from "@/components/header/Header";
import Projects from "@/components/projects/Projects";
import styles from "../page.module.css";
import Skills from "@/components/skills/Skills";

type Props = {
  params: Promise<{
    lang: Locale;
  }>;
};


export default async function Home(props: Props) {
  const { lang } = await props.params; 
  const dict = await getDictionary(lang);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeaderApp />
        <AboutMe dict={dict.aboutMe}/>
        <Skills/>
        <Projects dict={dict.projects}/>
        <Experience dict={dict.experience} />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
