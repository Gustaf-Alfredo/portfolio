import styles from "@/app/profile/profile.module.css";
import React from "../../../../public/assets/react.svg";

export const ProjectsSection = () => (
    <section className={styles.rightAbout}>
        {projectData.map((project, index) => (
            <div className={styles.aboutItem} key={index}>
                <div className={styles.abtText}>
                    <p className={styles.largeText}>{project.projectName}</p>
                    <p className={styles.smallText}>Principais <br/> Contribuições</p>
                </div>
                <ul className={styles.list}>
                    {project.assignments.map((assignment, idx) => (
                        <li className={styles.smallSimpleText} key={idx}>{assignment}</li>
                    ))}
                </ul>
            </div>
        ))}

    </section>
);



interface  ProjectData {
    projectName: string;
    assignments: string[],
}

const projectData: ProjectData[] = [
    {
        projectName: "Acácia Cidadania",
        assignments: [
            "Melhoria da Experiência do Usuário (UX)",
            "Implementação de Funcionalidades Inovadoras",
            "Análise e Otimização de Performance",
            "Correção de Bugs Críticos",
        ],
    },
    {
        projectName: "WeCoder",
        assignments: [
            "Desenvolvimento de Frontend",
            "Otimização de Performance",
        ],
    }
];