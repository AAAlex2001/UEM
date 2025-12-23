"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./DPK.module.scss";
import Image from "next/image";

const industries = [
  {
    id: 1,
    title: "ЗАГОТОВИТЕЛЬНЫЙ УЧАСТОК",
    description: [
      "Угольная, сланцевая, торфяная (Э1)",
      "Горнорудная и нерудная (Э2)",
      "Нефтегазодобыча (Э4)",
      "Геологоразведка (Э6)"
    ],
      photo: "/DPK_1.png",
  },
  {
    id: 2,
    title: "КУЗНЕЧНО-СВАРОЧНЫЙ УЧАСТОК",
    description: [
      "Химическая, нефтехимическая (Э7)",
      "Металлургия (Э13)",
      "Пищевая промышленность (Э10)",
      "Переработка сырья (Э15)"
    ],
      photo: "/DPK_2.png",
  },
  {
    id: 3,
    title: "СЛЕСАРНЫЙ УЧАСТОК",
    description: [
      "Трубопроводный транспорт (Э5)",
      "Нефтепродуктообеспечение (Э8)",
      "Газоснабжение (Э11)",
      "Канатные дороги (Э14.1, Э14.2)"
    ],
      photo: "/DPK_3.png",
  },
  {
    id: 4,
    title: "ТОКАРНО-ФРЕЗЕРНЫЙ УЧАСТОК",
    description: [
      "Тепло- и электроэнергетика (Э12)",
      "Взрывчатые материалы (Э3.1, Э3.2)",
      "Водоподготовка (Э9)"
    ],
    photo: "/DPK_4.png",
  },
  {
    id: 5,
    title: "СТОЛЯРНЫЙ УЧАСТОК",
    description: [
      "Грузоподъемные механизмы (Э14.4)"
    ],
    photo: "/DPK_5.png",
  },
  {
    id: 6,
    title: "УЧАСТОК АДДИТИВНЫХ ТЕХНОЛОГИЙ",
    description: [
      "Грузоподъемные механизмы (Э14.4)"
    ],
    photo: "/DPK_6.png",
  },
  {
    id: 7,
    title: "ЮВЕЛИРНЫЙ УЧАСТОК",
    description: [
      "Грузоподъемные механизмы (Э14.4)"
    ],
    photo: "/DPK_6.png",
  },
  {
    id: 8,
    title: "КАМНЕРЕЗНЫЙ УЧАСТОК",
    description: [
      "Грузоподъемные механизмы (Э14.4)"
    ],
    photo: "/DPK_6.png",
  },
  {
    id: 9,
    title: "ЛИТЕЙНАЯ МАСТЕРСКАЯ",
    description: [
      "Грузоподъемные механизмы (Э14.4)"
    ],
    photo: "/DPK_6.png",
  },
  {
    id: 10,
    title: "УЧАСТОК ДИАГНОСТИКИ И ОРГАНИКИ КАМНЕСАМОЦВЕТНОГО СЫРЬЯ",
    description: [
      "Грузоподъемные механизмы (Э14.4)"
    ],
    photo: "/DPK_6.png",
  },
  {
    id: 11,
    title: "ЭМАЛЬЕРНЫЙ УЧАСТОК",
    description: [
      "Грузоподъемные механизмы (Э14.4)"
    ],
    photo: "/DPK_6.png",
  },
  {
    id: 12,
    title: "УЧАСТОК КАМНЕОБРАБОТКИ",
    description: [
      "Грузоподъемные механизмы (Э14.4)"
    ],
    photo: "/DPK_6.png",
  },
  {
    id: 13,
    title: "РЕМОНТНАЯ ГРУППА",
    description: [
      "Грузоподъемные механизмы (Э14.4)"
    ],
    photo: "/DPK_6.png",
  },
];


const DPK = () => {
  return (
    <section className={styles.section} id="advantages">
      <div className={styles.content}>
        <h1 className={styles.title}>Производственный комплекс</h1>
        <h2 className={styles.subtitle}>Найдите подходящие Вам дополнительные профессиональные компетенции!</h2>
      </div>
      <div className={styles.card}>
        <div className={styles.arrows}>
          <button
            className="industry-nav-btn industry-nav-btn--prev"
            type="button"
            aria-label="Предыдущий"
          >
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12L13 18M19 12L13 6M19 12H5"
                  stroke="#FFDDA9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          <button
            className="industry-nav-btn industry-nav-btn--next"
            type="button"
            aria-label="Следующий"
          >
            <span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 12L13 18M19 12L13 6M19 12H5"
                  stroke="#FFDDA9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={20}
          navigation={{
            prevEl: ".industry-nav-btn--prev",
            nextEl: ".industry-nav-btn--next",
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1440: {
              enabled: false,
              allowTouchMove: false,
            },
          }}
          className={`${styles.swiper} industry-swiper`}
        >
          {industries.map((industry) => (
            <SwiperSlide key={industry.id} className={styles.slide}>
              <article className={styles.industry}>
                {industry.photo && (
                  <div className={styles.industryImage}>
                    <Image src={industry.photo} alt={industry.title} fill style={{ objectFit: "cover", objectPosition: "top" }} />
                  </div>
                )}
                <div className={styles.industryContent}>
                  <div className={styles.industryHeader}>
                    <h3>{industry.title}</h3>
                  </div>
                  {Array.isArray(industry.description) ? (
                    <ul>
                      {industry.description.map((item, index) => (
                        <li key={index}>
                          {item}
                          <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.29657 10.0246L1.34546 6.07353L0 7.40951L5.29657 12.7061L16.6667 1.33599L15.3307 0L5.29657 10.0246Z" fill="#1AB580"/>
                          </svg>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{industry.description}</p>
                  )}
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DPK;