"use client";
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface CenterIn {
  children: ReactNode;
  duration?: number;
  delay?: number;
}

export default function CenterIn({
  children,
  duration = 0.7,
  delay = 0,
}: CenterIn) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px 0px 0px", // 画面に入ってから100px超えたら表示
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
