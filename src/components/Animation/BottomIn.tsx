"use client";
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

interface BottomInProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  distance?: number;
}

export default function BottomIn({
  children,
  duration = 0.5,
  delay = 0,
  distance = 40,
}: BottomInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px 0px 0px", // 画面に入ってから100px超えたら表示
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
