import { FC, ReactNode } from "react";
import LeftIn from "@/components/Animation/LeftIn";
import RightIn from "@/components/Animation/RightIn";
import TopIn from "@/components/Animation/TopIn";
import BottomIn from "@/components/Animation/BottomIn";
import CenterIn from "@/components/Animation/CenterIn";
import { AnimationType } from "@/types/types";

interface AnimationProps {
  animationType: AnimationType;
  children: ReactNode;
}

const Animation: FC<AnimationProps> = ({ animationType: type, children }) => {
  const animationComponents: Record<
    AnimationType,
    FC<{ children: ReactNode }>
  > = {
    left: LeftIn,
    right: RightIn,
    top: TopIn,
    bottom: BottomIn,
    center: CenterIn,
  };

  const AnimationComponent = animationComponents[type] || CenterIn;
  return <AnimationComponent>{children}</AnimationComponent>;
};

export default Animation;
