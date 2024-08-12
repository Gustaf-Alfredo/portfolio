import styles from "@/app/profile/profile.module.css";
import TypeScript from "../../../../public/assets/typescript.svg";
import JavaScript from "../../../../public/assets/javascript.svg";
import PostgreSQL from "../../../../public/assets/postgresql.svg";
import Vue from "../../../../public/assets/vue.svg";
import Node from "../../../../public/assets/nodejs.svg";
import Flutter from "../../../../public/assets/flutter.svg";
import Dart from "../../../../public/assets/dart.svg";
import Next from "../../../../public/assets/nextjs.svg";
import Kotlin from "../../../../public/assets/kotlin.svg";
import Java from "../../../../public/assets/java.svg";
import Git from "../../../../public/assets/git.svg";
import Intellij from "../../../../public/assets/intellij.svg";
import AndroidStudio from "../../../../public/assets/androidstudio.svg";
import Image from "next/image";


export const SkillsSection = () => (
    <section className={`${styles.container} ${styles.about}`}>
        <div className={styles.SkillsContainer}>
            <SkillItem title="Languages and DataBase" items={[
                {src: TypeScript, label: "TypeScript"},
                {src: JavaScript, label: "JavaScript"},
                {src: Dart, label: "Dart"},
                {src: Java, label: "Java"},
                {src: PostgreSQL, label: "PostgreSQL"},
            ]}/>
            <SkillItem title="Frameworks" items={[
                {src: Vue, label: "Vue"},
                {src: Next, label: "Next.JS"},
                {src: Flutter, label: "Flutter"},
                {src: Kotlin, label: "Kotlin"},
            ]}/>
            <SkillItem title="Other" items={[
                { src: Git, label: "Git" },
                {src: Node, label: "Node.JS"},
                {src: Intellij, label: "Intellij"},
                {src: AndroidStudio, label: "Android Studio"},
            ]}/>
        </div>
    </section>
);

interface SkillItemProps {
    title: string;
    items: { src: string; label: string }[];
}

export const SkillItem = ({ title, items }: SkillItemProps) => (
    <div className={styles.SkillItem}>
        <h4>{title}</h4>
        <div className={styles.ItemsTech}>
            {items.map((item, index) => (
                <div className={styles.ItemTech} key={index}>
                    <Image src={item.src} alt={item.label} loading="lazy" />
                    <p>{item.label}</p>
                </div>
            ))}
        </div>
    </div>
);

