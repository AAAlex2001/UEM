"use client";

import styles from "./hero.module.scss";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.titleAccent}>Организационная</span> Структура
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Центр студенческого творчества
        </motion.p>
      </div>

      {/* ===== МОБИЛЬНАЯ ВЕРСИЯ ===== */}
      <div className={styles.mobileView}>
        <div className={styles.wrapper}>
          {/* Сетка 2x2 */}
          <div className={styles.grid4}>
            <div className={`${styles.gridItem} ${styles.gridItemMain}`}>
              <h3>Центр Студенческого Творчества</h3>
            </div>
            <div className={styles.gridItem}>
              <h3>Арт-студии</h3>
              <p>Творческая деятельность</p>
            </div>
            <div
              className={`${styles.gridItem} ${styles.gridItemClickable} ${isExpanded ? styles.gridItemActive : ""}`}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <h3>Учебно-экспериментальные мастерские</h3>
              <p>Производственная деятельность</p>
              <motion.span
                className={styles.expandIcon}
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▼
              </motion.span>
            </div>
            <div className={styles.gridItem}>
              <h3>Образовательный комплекс</h3>
              <p>Образовательная деятельность</p>
            </div>
          </div>

          {/* Раскрывающийся список */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className={styles.expandedContent}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Пунктирная линия */}
                <div className={styles.connector}>
                  <svg viewBox="0 0 24 40" fill="none">
                    <path d="M12 0V32" stroke="#FFB800" strokeWidth="3" strokeDasharray="6 4"/>
                    <path d="M4 26L12 36L20 26" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                {/* ПКО и ПТО */}
                <motion.div
                  className={styles.card}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className={styles.cardPhoto}>
                    <Image src="/org_4.png" alt="ПКО" fill style={{ objectFit: "cover", objectPosition: "top" }} />
                  </div>
                  <div className={styles.cardInfo}>
                    <h3>ПКО</h3>
                    <p>Проектно-конструкторский отдел</p>
                  </div>
                </motion.div>

                <motion.div
                  className={styles.card}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className={styles.cardPhoto}>
                    <Image src="/org_6.png" alt="ПТО" fill style={{ objectFit: "cover", objectPosition: "top" }} />
                  </div>
                  <div className={styles.cardInfo}>
                    <h3>ПТО</h3>
                    <p>ПАО ново-тех инженерный отдел</p>
                  </div>
                </motion.div>

                {/* Заголовок */}
                <motion.h2
                  className={styles.sectionTitle}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Производственный комплекс
                </motion.h2>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ===== ДЕСКТОП ВЕРСИЯ (768+) ===== */}
      <div className={styles.desktopView}>
        <div className={styles.flowchart}>
          {/* ВЕРХНИЙ РЯД */}
          <div className={styles.row}>
            <motion.div
              className={styles.block}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>Образовательная деятельность</h3>
              <p>Образовательный комплекс</p>
            </motion.div>

            <div className={styles.arrowH}>
              <svg viewBox="0 0 100 24" fill="none" preserveAspectRatio="xMidYMid meet">
                <path d="M100 12H8" stroke="#FFB800" strokeWidth="3"/>
                <path d="M16 4L6 12L16 20" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <motion.div
              className={`${styles.block} ${styles.blockCenter}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>Центр Студенческого Творчества</h3>
            </motion.div>

            <div className={styles.arrowH}>
              <svg viewBox="0 0 100 24" fill="none" preserveAspectRatio="xMidYMid meet">
                <path d="M0 12H92" stroke="#FFB800" strokeWidth="3"/>
                <path d="M84 4L94 12L84 20" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <motion.div
              className={styles.block}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>Творческая деятельность</h3>
              <p>Арт-студии</p>
            </motion.div>
          </div>

          {/* СТРЕЛКА ВНИЗ */}
          <div className={styles.arrowDown}>
            <svg viewBox="0 0 24 60" fill="none">
              <path d="M12 0V52" stroke="#FFB800" strokeWidth="3"/>
              <path d="M4 44L12 54L20 44" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* НИЖНИЙ РЯД */}
          <div className={styles.row}>
            <motion.div
              className={styles.block}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3>Проектно-конструкторский отдел</h3>
            </motion.div>

            <div className={styles.arrowH}>
              <svg viewBox="0 0 100 24" fill="none" preserveAspectRatio="xMidYMid meet">
                <path d="M100 12H8" stroke="#FFB800" strokeWidth="3"/>
                <path d="M16 4L6 12L16 20" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <motion.div
              className={`${styles.block} ${styles.blockProduction}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3>Производственная деятельность</h3>
              <p>Учебно-экспериментальные мастерские</p>
            </motion.div>

            <div className={styles.arrowH}>
              <svg viewBox="0 0 100 24" fill="none" preserveAspectRatio="xMidYMid meet">
                <path d="M0 12H92" stroke="#FFB800" strokeWidth="3"/>
                <path d="M84 4L94 12L84 20" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <motion.div
              className={styles.block}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3>Планово-технический отдел</h3>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;