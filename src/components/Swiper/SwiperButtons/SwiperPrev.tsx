import { IoIosArrowBack } from "react-icons/io";
import styles from "./SwiperButtons.module.scss";
import { useSwiper } from "swiper/react";

export default function SwiperPrev() {
  const swiper = useSwiper();
  const onclick = () => {
    let nextIndex = swiper.realIndex - 1;
    if (nextIndex < 0) {
      nextIndex = swiper.slides.length - 1;
    }
    swiper.slideToLoop(nextIndex);
  };

  return (
    <button
      onClick={onclick}
      className={`${styles.swiperPrev} ${styles.swiperButton}`}
    >
      <IoIosArrowBack className={styles.buttonIcon} size={50} />
      <div className={styles.shaderLeft} />
    </button>
  );
}
