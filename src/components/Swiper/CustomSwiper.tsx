"use client";
import styles from "./CustomSwiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Card from "./Card";
import SwiperNext from "./SwiperButtons/SwiperNext";
import SwiperPrev from "./SwiperButtons/SwiperPrev";
import ContentTitle from "../Content/ContentTitle/ContentTitle";

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
        <SwiperSlide className="swiper-slide-vertical">
          <Card url="/61st/project/haunted-house/brochure.webp" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-vertical">
          <Card url="/61st/img/guest.webp" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-vertical">
          <Card url="/61st/project/haunted-house/brochure.webp" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-vertical">
          <Card url="/61st/img/guest.webp" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-vertical">
          <Card url="/61st/project/haunted-house/brochure.webp" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-vertical">
          <Card url="/61st/img/guest.webp" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-vertical">
          <Card url="/61st/project/haunted-house/brochure.webp" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-horizontal">
          <Card url="/61st/project/gatikohun/brochure.webp" />
        </SwiperSlide>
        <SwiperNext />
      </Swiper>
    </div>
  );
}
