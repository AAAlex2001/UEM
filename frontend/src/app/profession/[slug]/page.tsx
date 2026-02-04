import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./profession.module.scss";
import { professions } from "@/app/data/professions";
import { ImageSwiper } from "@/app/components/ImageSwiper/ImageSwiper";
import EntryForm from "@/app/components/EntryForm/EntryForm";

interface PageProps {
    params: Promise<{ slug: string }> | { slug: string };
}

export function generateStaticParams() {
    return professions.map((profession) => ({
        slug: profession.slug,
    }));
}

export default async function ProfessionPage({ params }: PageProps) {
    const resolvedParams = await Promise.resolve(params);
    const profession = professions.find((p) => p.slug === resolvedParams.slug);

    if (!profession) {
        notFound();
    }

    return (
        <div className={styles.professionPage}>
            <div className={styles.container}>
                <Link href="/" className={styles.backButton}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Назад на главную
                </Link>

                <div className={styles.content}>
                    <div className={styles.header}>
                        <h1>{profession.workplace}</h1>
                        <p className={styles.subtitle}>Описание</p>
                    </div>

                    <div className={styles.description}>
                        <h2>О профессии {profession.name}</h2>
                        <p>{profession.description}</p>
                        {profession.functions && profession.functions.length > 0 && (
                            <ul className={styles.functionsList}>
                                {profession.functions.map((func, index) => (
                                    <li key={index}>{func}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className={styles.imagesGrid}>
                        <div className={styles.imageBlock}>
                            <h2>Фото участка</h2>
                            <div className={styles.imageContent}>
                                <div className={styles.mainImageWrapper}>
                                    <Image
                                        src={profession.mainImage}
                                        alt={`Участок ${profession.name}`}
                                        fill
                                        style={{ objectFit: "cover" }}
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.imageBlock}>
                            <h2>Фото работ</h2>
                            <div className={styles.imageContent}>
                                <ImageSwiper images={profession.workImages} alt={`Работы ${profession.name}`} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.rpSection}>
                        <h2>РП {profession.name} 2-разряда</h2>
                        <p>Профессия и заявка/описание</p>
                    </div>

                    <div className={styles.formSection}>
                        <h2>Подать заявку на обучение</h2>
                        <EntryForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
