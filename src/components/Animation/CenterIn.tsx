"use client";
import { AnimationConfigs } from "@/types/types";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// その場でフェードイン
export default function CenterIn({
  children,
  duration = 0.5,
  delay = 0,
  margin = 50,
}: AnimationConfigs) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: `${-margin}px`, // 画面に入ってからmargin分超えたら表示
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
