import Canvas from "@/components/Canvas/Canvas";
import PreviousFestival from "@/components/PreviousFestival/PreviousFestival";
import CustomSwiper from "@/components/Swiper/CustomSwiper";

export default function Home() {
  return (
    <div>
      <Canvas />
      <CustomSwiper title="PICK UP" />
      <PreviousFestival />
    </div>
  );
}
