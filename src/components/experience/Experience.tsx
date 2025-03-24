import styles from './Experience.module.css'

const experiences = [
  {
    company: "Genesis Tecnologia - (Remote)",
    period: "Ago 2024 – Present",
    description: "I have experience in complex projects using Vue 3 and Nuxt.js, including migrating the Gênesis Tecnologia portal from WordPress to Vue 3 with Nuxt UI Pro, delivering a modern and high-performance interface. I also contributed to the transition of the Clinux system to Vue 3 and developed features with Ag-grid and FormKit. Additionally, I implemented a real-time chat using WebSocket (Socket.IO), PostgreSQL, and Prisma ORM. My focus is on scalable solutions, usability, and code quality."
  },
  {
    company: "MUU Agrotech - (Remote)",
    period: "Feb 2023 – Ago 2024",
    description: "I specialize in implementing scalable solutions and dynamic interfaces using React with TypeScript, focusing on API integration, accessibility, user experience, and best architectural practices. My experience includes complex API integrations, such as HTTP requests with Axios, Backend as a Service, payment solutions, maps, government APIs, and databases. As a Lead Developer, I managed web projects like Fazenda (farm management), Muu Admin (business management), and Mercado Genético (genetic material marketplace/e-commerce). Additionally, I handled task management in Jira Software, conducted unit testing with Jest and Cypress, and performed code reviews and team training."
  },
  {
    company: "ADVPL Developer Freelancer - (Remote)",
    period: "Mar. de 2021 – Dez. de 2022",
    description: "I fixed bugs and updated features in AdvPL to support the Protheus version migration, ensuring system stability and functionality."
  }
];

export default function Experience() {
  return (
    <section className={styles.experience}>
      <h2 className={styles.tittle}>PROFESSIONAL EXPERIENCE</h2>

      {experiences.map((exp, index) => (
        <div key={index} className={styles.experienceItem}>
          <div className={styles.experienceItemHeader}>
            <h2>{exp.company}</h2>
            <p>{exp.period}</p>
          </div>
          <div className={styles.experienceItemContent}>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
