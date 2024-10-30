import CustomSwiper from "@/components/Swiper/CustomSwiper";
import { NITFES_EDITION, NITFES_YEAR } from "@/const/const";
import { artfulCampus } from "./artful-campus/artfulCampus";
import { booth } from "./booth/booth";
import { seiyu } from "./seiyu/seiyu";
import { tyuya } from "./tyuya/tyuya";
import { laboratoryTour } from "./laboratory-tour/laboratoryTour";
import { gakuseiboshu } from "./gakuseiboshu/gakuseiboshu";
import { mogi1 } from "./mogi1/mogi1";
import { roomRiddles } from "./room-riddles/roomRiddles";
import { excursionRiddles } from "./excursion-riddles/excursionRiddles";
import { hauntedHouse } from "./haunted-house/hauntedHouse";
import { kidsPark } from "./kids-park/kidsPark";
import { nitechKing } from "./nitech-king/nitechKing";
import { vrCoaster } from "./vr-coaster/vrCoaster";
import { vsDealer } from "./vs-dealer/vsDealer";

export const metadata = {
  title: `企画一覧 - 第${NITFES_EDITION}回工大祭`,
  description: `${NITFES_YEAR}年 第${NITFES_EDITION}回工大祭の企画一覧です。`,
};

const guestProjects = [
  seiyu,
  tyuya,
  booth,
  laboratoryTour,
  gakuseiboshu,
  mogi1,
];

const schoolProjects = [
  artfulCampus,
  booth,
  roomRiddles,
  excursionRiddles,
  hauntedHouse,
  kidsPark,
  nitechKing,
  vrCoaster,
  vsDealer,
];

export default function ProjectPage() {
  return (
    <>
      <CustomSwiper title="ゲスト企画" projects={guestProjects} />
      <CustomSwiper title="学内企画" projects={schoolProjects} />
    </>
  );
}
