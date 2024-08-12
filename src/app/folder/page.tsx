import Image from "next/image";
import BikCraft from "../../../public/assets/bikcraft.png";
import Awax from "../../../public/assets/awax.png";
import Github from "../../../public/assets/github.svg";
import Link from "../../../public/assets/link.svg";
import styles from "./folder.module.css";

type ObjectFit = "fill" | "contain" | "cover" | "none" | "scale-down";

const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "300px",
    borderRadius: "15px",
    objectFit: "cover",
};

const projects = [
    {
        src: BikCraft,
        alt: "BikCraft",
        githubLink: "https://github.com/Gustaf-Alfredo/Bikcraft",
        siteLink: 'https://gustaf-alfredo.github.io/Bikcraft/'
    },
    {
        src: Awax,
        alt: "Awax",
        githubLink: "https://github.com/Gustaf-Alfredo/Projeto-Awax",
        siteLink: 'https://gustaf-alfredo.github.io/Projeto-Awax/home.html'
    }
];

export default function LoginPage() {
    return (
        <div className={`${styles.content} bg-[#2A2E35]`}>
            <section className={styles.container}>
                <div className={styles.mainTitle}>
                    <h2>
                        Port<span>folio</span>
                        <span className={styles.bgText}>Portfolio</span>
                    </h2>
                </div>

                <p className={styles.portText}>
                    Aqui estão alguns dos meus trabalhos que fiz em várias linguagens de programação.
                </p>

                <div className={styles.portfolios}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.portfolioItem}>
                            <div className={styles.image}>
                                <Image
                                    src={project.src}
                                    alt={project.alt}
                                    loading="lazy"
                                    style={imageStyle}
                                />
                            </div>
                            <div className={styles.hoverItems}>
                                <h3>Project Source</h3>
                                <div className={styles.icons}>
                                    <a href={project.githubLink} className={styles.icon}>
                                        <Image src={Github} alt="GitHub"/>
                                    </a>
                                    <a href={project.githubLink} className={styles.icon}>
                                    <Image src={Link} alt="Link"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
