"use client";

import Marquee from "react-fast-marquee";
import styles from "./Marquee.module.scss";

const marqueeItems = [
  "Сегодня в 16:00 ДПК по эмальерке",
  "04.12.2025 открываем запись на ДПК по камнерезке",
  "Новый набор на ДПК по металлообработке - 15.12.2025",
  "ДПК по деревообработке - запись открыта",
  "Специальное предложение: ДПК по сварочным работам - 20.12.2025",
  "ДПК по токарным работам - начало занятий 10.01.2026",
];

const MarqueeComponent = () => {
  return (
    <div className={styles.marqueeContainer}>
      <Marquee
        speed={50}
        gradient={true}
        gradientColor={[255, 255, 255]}
        gradientWidth={100}
        pauseOnHover={true}
        className={styles.marquee}
      >
        {marqueeItems.map((item, index) => (
          <div key={index} className={styles.marqueeItem}>
            <span className={styles.text}>{item}</span>
            <span className={styles.separator}>•</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;

