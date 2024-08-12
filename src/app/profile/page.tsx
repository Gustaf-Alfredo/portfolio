import Image from "next/image";
import styles from './profile.module.css';
import {ProjectsSection} from "@/app/profile/(components)/project_section";
import {EducationSection} from "@/app/profile/(components)/education_section";
import {SkillsSection} from "@/app/profile/(components)/skill_section";

const AboutSection = () => (
    <section className={`${styles.container} ${styles.about}`}>
      <div className={styles.mainTitle}>
        <h2>About <span>me</span><span className={styles.bgText}>About me</span></h2>
      </div>
        <div className={styles.aboutContainer}>
            <div className={styles.leftAbout}>
                <p className={styles.textAbout}>
                    Especializado em criar soluções rápidas e eficientes para aplicativos mobile e web, garantindo alta
                    performance e usabilidade. Focado em entregar produtos que atendam tanto às necessidades dos
                    usuários quanto aos objetivos de negócio. <br/><br/>

                    Entrega ágil de projetos utilizando frameworks modernos e boas práticas de desenvolvimento.
                    Otimização de processos e recursos para garantir soluções escaláveis e de alto desempenho em
                    diversas plataformas.
                </p>
            </div>
            <ProjectsSection />

        </div>
    </section>
);



export default function LoginPage() {
  return (
      <div className={`${styles.aboutSection} ${styles.activeAnimation}`}>
        <AboutSection />
        <SkillsSection />
        <EducationSection />
      </div>
  );
}