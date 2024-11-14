"use client";
import { AnimationConfigs } from "@/types/types";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// 下からフェードイン
export default function BottomIn({
  children,
  duration = 0.7,
  delay = 0,
  distance = 40,
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
      initial={{ opacity: 0, y: distance }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : distance }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
