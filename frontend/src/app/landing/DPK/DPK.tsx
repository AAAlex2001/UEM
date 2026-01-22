"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./DPK.module.scss";
import Image from "next/image";
import Link from "next/link";

const industries = [
  {
    id: 1,
    title: "КУЗНЕЧНО-СВАРОЧНЫЙ УЧАСТОК",
    description: [
      "Изготовление и реставрация изделий;",
      "Изготовление сложных сварных конструкций из деталей и заготовок с использованием \n" +
      "различных методов сварки в зависимости от материалов и типов соединений"
    ],
    photo: "/DPK_1.png",
    professionSlug: "svarshik",
  },
  {
    id: 2,
    title: "ЗАГОТОВИТЕЛНЫЙ УЧАСТОК",
    description: [
      "Приём металла;",
      "Подготовка поверхности;",
      "Изготовление и распределение заготовок из круглого и профильного металлопроката \n" +
      "в основные производственные цеха;",
      "Рубка и лазерная резка листового материала"
    ],
    photo: "/DPK_2.png",
    professionSlug: "slesar",
  },
  {
    id: 3,
    title: "СЛЕСАРНЫЙ УЧАСТОК",
    description: [
      "Сборка функционально законченных изделий, стендов, макетов и узлов;",
      "Выполнение доводочных и притирочных работ;",
      "Разметка и  подготовка деталей к сварке"
    ],
    photo: "/DPK_3.png",
    professionSlug: "slesar",
  },
  {
    id: 4,
    title: "ТОКАРНО-ФРЕЗЕРНЫЙ УЧАСТОК",
    description: [
      "Токарная и фрезерная обработка цилиндрических , плоских и фасонных поверхностей \n" +
      "заготовок, деталей и изделий из различных материалов"
    ],
    photo: "/DPK_4.png",
    professionSlug: "tokar",
  },
  {
    id: 5,
    title: "СТОЛЯРНЫЙ УЧАСТОК",
    description: [
      "Изготовление и реставрация деревянных изделий;",
      "Механическая обработка древесины;",
      "Установка готовых элементов с их подгонкой в готовые стенды, устройства, \n" +
      "художественные изделия"
    ],
    photo: "/DPK_5.png",
    professionSlug: "plotnik",
  },
  {
    id: 6,
    title: "УЧАСТОК АДДИТИВНЫХ ТЕХНОЛОГИЙ",
    description: [
      "Изготовление объектов методом 3D печати;",
      "Выполнение 3D сканирования объектов для создания 3-х мерных моделей;",
      "Поверхностная гравировка и маркировка металлических изделий на лазерном \n" +
      "гравере"
    ],
    photo: "/DPK_6.png",
    professionSlug: "montazhnik",
  },
  {
    id: 7,
    title: "ЮВЕЛИРНЫЙ УЧАСТОК",
    description: [
      "Сборка и монтировка простых ювелирных изделий;",
      "Пайка изделий различными способами;",
      "Полировка изделий"
    ],
    photo: "/DPK_6.png",
    professionSlug: "emalyer",
  },
  {
    id: 8,
    title: "КАМНЕРЕЗНЫЙ УЧАСТОК",
    description: [
      "Изготовления предметов интерьера;",
      "Художественная резьба по камню, флористика, анималистка, блокированная \n" +
      "скульптура;",
      "Инкрустация;",
      "Различные виды мозаики из камня"
    ],
    photo: "/DPK_6.png",
    professionSlug: "kamnerez",
  },
  {
    id: 9,
    title: "ЛИТЕЙНАЯ МАСТЕРСКАЯ",
    description: [
      "Декоративные и защитные покрытия на поверхности художественных изделий;",
      "Изготовление изделий в технике металлопластики;",
      "Декоративное патинирование и оксидирование;",
      "Художественное чернение ювелирных изделий"
    ],
    photo: "/DPK_6.png",
    professionSlug: "malyar",
  },
  {
    id: 10,
    title: "УЧАСТОК ДИАГНОСТИКИ И ОРГАНИКИ КАМНЕСАМОЦВЕТНОГО СЫРЬЯ",
    description: [
      "Обработка и огранка цветных и поделочных камней;",
      "Определение, оценка и сертификация драгоценных  и поделочных камней;",
      "Экспертиза ювелирных изделий, драгоценных камней и предметов антиквариата"
    ],
    photo: "/DPK_6.png",
    professionSlug: "kamnerez",
  },
  {
    id: 11,
    title: "ЭМАЛЬЕРНЫЙ УЧАСТОК",
    description: [
      "Подготовка изделия к декоративным покрытиям;",
      "Нанесения эмалей в различных техниках;",
      "Сушка и обжиг эмалей;",
      "Роспись эмалевыми красками;",
      "Финишная обработка изделия после эмалирования"
    ],
    photo: "/DPK_6.png",
    professionSlug: "emalyer",
  },
  {
    id: 12,
    title: "УЧАСТОК КАМНЕОБРАБОТКИ",
    description: [
      "Распиловка образцов из различных  на камнерезных станках;",
      "Изготовление шлифов, аншлифов и ППШ"
    ],
    photo: "/DPK_6.png",
    professionSlug: "kamnerez",
  },
  {
    id: 13,
    title: "РЕМОНТНАЯ ГРУППА",
    description: [
      "Работы по техническому обслуживанию и ремонту оборудования;",
      "Сборка, монтаж и демонтаж  узлов, механизмов и устройств"
    ],
    photo: "/DPK_6.png",
    professionSlug: "elektromonter",
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
              {industry.professionSlug ? (
                <Link href={`/profession/${industry.professionSlug}`} className={styles.industryLink}>
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
                      <div className={styles.learnMoreBadge}>Узнать подробнее →</div>
                    </div>
                  </article>
                </Link>
              ) : (
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
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DPK;