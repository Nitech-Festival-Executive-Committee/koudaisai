"use client";
import styles from "./CustomSwiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import SwiperCard from "./SwiperCard/SwiperCard";
import SwiperNext from "./SwiperButtons/SwiperNext";
import SwiperPrev from "./SwiperButtons/SwiperPrev";
import ContentTitle from "../Content/ContentTitle/ContentTitle";
import { templateProjectData } from "@/app/project/template/templateData";

const projects = [
  templateProjectData,
  templateProjectData,
  templateProjectData,
  templateProjectData,
  templateProjectData,
  templateProjectData,
  templateProjectData,
  templateProjectData,
];

export default function CustomSwiper({ title }: { title: string }) {
  return (
    <div className={styles.swiperContainer}>
      <ContentTitle title={title} size={2} bigTitle />
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 5,
          slideShadows: true,
        }}
        keyboard={{
          enabled: true,
        }}
        mousewheel={{
          thresholdDelta: 70,
        }}
        spaceBetween={100}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, EffectCoverflow]}
      >
        <SwiperPrev />

        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <SwiperCard
              href={`/project/${project.link}/`}
              url={`/62nd/project/${project.link}/brochure.webp`}
              alt={project.name}
              projectTag={project.tags}
              schedule={project.schedule}
              place={project.place}
            />
          </SwiperSlide>
        ))}

        <SwiperNext />
      </Swiper>
    </div>
  );
}
