import styles from "@/app/profile/profile.module.css";
import TypeScript from "../../../../public/assets/typescript.svg";
import JavaScript from "../../../../public/assets/javascript.svg";
import PostgreSQL from "../../../../public/assets/postgresql.svg";
import Vue from "../../../../public/assets/vue.svg";
import React from "../../../../public/assets/react.svg";
import Node from "../../../../public/assets/nodejs.svg";
import Image from "next/image";


export const SkillsSection = () => (
    <section className={`${styles.container} ${styles.about}`}>
        <div className={styles.SkillsContainer}>
            <SkillItem title="Languages and DataBase" items={[
                {src: TypeScript, label: "TypeScript"},
                {src: JavaScript, label: "JavaScript"},
                {src: PostgreSQL, label: "PostgreSQL"},
            ]}/>
            <SkillItem title="Frameworks" items={[
                {src: Vue, label: "Vue"},
                {src: React, label: "React"},
            ]}/>
            <SkillItem title="Other" items={[
                // { src: Git, label: "Git" },
                {src: Node, label: "Node.JS"},
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

