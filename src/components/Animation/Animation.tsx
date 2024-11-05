import { FC, ReactNode } from "react";
import { AnimationConfigs, AnimationType } from "@/types/types";
import LeftIn from "@/components/Animation/LeftIn";
import RightIn from "@/components/Animation/RightIn";
import TopIn from "@/components/Animation/TopIn";
import BottomIn from "@/components/Animation/BottomIn";
import CenterIn from "@/components/Animation/CenterIn";

interface AnimationProps {
  animationType: AnimationType;
  children: ReactNode;
}

export default function Animation({
  animationType,
  children,
  ...configs
}: AnimationProps & AnimationConfigs) {
  const animationComponents: Record<AnimationType, FC<AnimationConfigs>> = {
    left: LeftIn,
    right: RightIn,
    top: TopIn,
    bottom: BottomIn,
    center: CenterIn,
  };

  const AnimationComponent = animationComponents[animationType] || CenterIn;
  return <AnimationComponent {...configs}>{children}</AnimationComponent>;
}
