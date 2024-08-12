import Education from "../../../../public/assets/education.svg";
import Work from "../../../../public/assets/folder.svg";
import styles from "@/app/profile/profile.module.css";
import Image from "next/image";
import React from "../../../../public/assets/react.svg";

interface EducationData {
    duration: string;
    title: string;
    institution: string;
    subjects: string[];
    image: string;
}

const educationData: EducationData[] = [
    {
        duration: "Cursando (6º Periodo)",
        title: "Ciencia da computacao",
        institution: "Descomplica",
        subjects: [
            "Estruturas de dados e algoritmos",
            "Sistemas de Gerenciamento de Banco de Dados",
            "Desenvolvimento web e mobile",
        ],
        image: Education,
    },
    {
        duration: "2024 - atual",
        title: "Estagiario Mobile",
        institution: "Engeselt Softwares",
        subjects: [
            "Flutter",
            "Kotlin",
        ],
        image: Work,
    },
    {
        duration: "2024 (6 meses)",
        title: "Trabalho Voluntario",
        institution: "Skill Labs",
        subjects: [
            "Next.js",
        ],
        image: Work,
    },
];

export const EducationSection = () => (
    <section className={`${styles.container} ${styles.about}`}>
        <div className={styles.mainTitle}>
            <h2>Educati<span>on</span><span className={styles.bgText}>Education</span></h2>
        </div>
        <div className={styles.timeline}>
            {educationData.map((item, index) => (
                <div className={styles.timelineItem} key={index}>
                    <div className={styles.tlIcon}>
                        <Image src={item.image} alt='' />
                    </div>
                    <p className={styles.tlDuration}>{item.duration}</p>
                    <h5>{item.title}<span> - {item.institution}</span></h5>
                    <p>Matérias relevantes:</p>
                    <ul className={styles.timelineList}>
                        {item.subjects.map((subject, idx) => (
                            <li className="smallSimpleText" key={idx}>{item.subjects[idx]}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </section>
);