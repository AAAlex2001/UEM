"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ImageSwiper.module.scss";

interface ImageSwiperProps {
    images: string[];
    alt: string;
}

export const ImageSwiper: React.FC<ImageSwiperProps> = ({ images, alt }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    if (images.length === 0) {
        return null;
    }

    return (
        <div className={styles.swiper}>
            <div className={styles.swiperContainer}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={images[currentIndex]}
                        alt={`${alt} ${currentIndex + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                        priority={currentIndex === 0}
                    />
                </div>

                {images.length > 1 && (
                    <>
                        <button className={`${styles.navButton} ${styles.navButtonLeft}`} onClick={goToPrevious} aria-label="Предыдущее фото">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>

                        <button className={`${styles.navButton} ${styles.navButtonRight}`} onClick={goToNext} aria-label="Следующее фото">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>

                        <div className={styles.dots}>
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ""}`}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Перейти к фото ${index + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
