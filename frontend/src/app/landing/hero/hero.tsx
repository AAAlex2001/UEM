"use client";

import styles from "./hero.module.scss";
import { motion } from "framer-motion";

const Hero = () => {
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

      <div className={styles.flowchart}>
        {/* ===== МОБИЛЬНАЯ ВЕРСИЯ ===== */}
        <div className={styles.mobileView}>
          {/* ЦСТ */}
          <motion.div
            className={`${styles.block} ${styles.blockCenter}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Центр Студенческого Творчества</h3>
          </motion.div>

          {/* Стрелки к верхним разделам */}
          <div className={styles.mobileConnector}>
            <svg viewBox="0 0 200 40" fill="none" preserveAspectRatio="xMidYMid meet">
              <path d="M100 0V20" stroke="#FFB800" strokeWidth="3"/>
              <path d="M100 20H30" stroke="#FFB800" strokeWidth="3"/>
              <path d="M100 20H170" stroke="#FFB800" strokeWidth="3"/>
              <path d="M30 20V35" stroke="#FFB800" strokeWidth="3"/>
              <path d="M170 20V35" stroke="#FFB800" strokeWidth="3"/>
              <path d="M24 30L30 38L36 30" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M164 30L170 38L176 30" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Верхние отделы */}
          <div className={styles.mobileRow}>
            <motion.div
              className={styles.blockSmall}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3>Образовательная деятельность</h3>
              <p>Рабочие программы БПК</p>
            </motion.div>

            <motion.div
              className={styles.blockSmall}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3>Творческая деятельность</h3>
              <p>Арт-студии</p>
            </motion.div>
          </div>

          {/* Стрелка вниз к Производственной */}
          <div className={styles.mobileArrow}>
            <svg viewBox="0 0 24 40" fill="none">
              <path d="M12 0V32" stroke="#FFB800" strokeWidth="3"/>
              <path d="M4 26L12 36L20 26" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* ПРОИЗВОДСТВЕННАЯ */}
          <motion.div
            className={`${styles.block} ${styles.blockProduction}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3>Производственная деятельность</h3>
            <p>Учебно-экспериментальные мастерские</p>
          </motion.div>

          {/* Стрелки от Производственной (как от ЦСТ) */}
          <div className={styles.mobileConnector}>
            <svg viewBox="0 0 200 40" fill="none" preserveAspectRatio="xMidYMid meet">
              <path d="M100 0V20" stroke="#FFB800" strokeWidth="3"/>
              <path d="M100 20H30" stroke="#FFB800" strokeWidth="3"/>
              <path d="M100 20H170" stroke="#FFB800" strokeWidth="3"/>
              <path d="M30 20V35" stroke="#FFB800" strokeWidth="3"/>
              <path d="M170 20V35" stroke="#FFB800" strokeWidth="3"/>
              <path d="M24 30L30 38L36 30" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M164 30L170 38L176 30" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Нижние отделы */}
          <div className={styles.mobileRow}>
            <motion.div
              className={styles.blockSmall}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3>Проектно-конструкторский отдел</h3>
            </motion.div>

            <motion.div
              className={styles.blockSmall}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3>ПАО ново-тех</h3>
              <p>Инженерный отдел</p>
            </motion.div>
          </div>
        </div>

        {/* ===== ДЕСКТОП ВЕРСИЯ ===== */}
        <div className={styles.desktopView}>
          {/* ВЕРХНИЙ РЯД */}
          <div className={styles.row}>
            <motion.div
              className={styles.block}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3>Образовательная деятельность</h3>
              <p>Рабочие программы БПК</p>
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

          {/* СТРЕЛКА ВНИЗ ОТ ЦСТ */}
          <div className={styles.arrowDown}>
            <svg viewBox="0 0 24 60" fill="none">
              <path d="M12 0V52" stroke="#FFB800" strokeWidth="3"/>
              <path d="M4 44L12 54L20 44" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* СРЕДНИЙ РЯД — ПРОИЗВОДСТВЕННАЯ */}
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
              <h3>ПАО ново-тех</h3>
              <p>Инженерный отдел</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;