import CustomSwiper from "@/components/Swiper/CustomSwiper";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";

export const metadata = {
  title: `企画一覧 - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭の企画一覧です。`,
};

export default function Project() {
  return (
    <>
      <CustomSwiper title="ゲスト企画" />
      <CustomSwiper title="学内企画" />
    </>
  );
}
