import { IoIosArrowForward } from "react-icons/io";
import styles from "./SwiperButtons.module.scss";
import { useSwiper } from "swiper/react";

export default function SwiperNext() {
  const swiper = useSwiper();
  const onclick = () => {
    let nextIndex = swiper.realIndex + 1;
    if (nextIndex >= swiper.slides.length) {
      nextIndex = 0;
    }
    swiper.slideToLoop(nextIndex);
  };

  return (
    <button
      onClick={onclick}
      className={`${styles.swiperNext} ${styles.swiperButton}`}
    >
      <IoIosArrowForward className={styles.buttonIcon} size={50} />
      <div className={styles.shaderRight} />
    </button>
  );
}
