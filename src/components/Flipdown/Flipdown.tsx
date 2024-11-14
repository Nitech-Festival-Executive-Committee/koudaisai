"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import styles from "./Flipdown.module.scss";
import { sideCannonConfetti } from "@/utils/sideCannonConfetti";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { isMobile, isSmallMobile } from "@/utils/isMoile";

interface FlipdownProps {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute?: number;
  second?: number;
}

const FlipClockCountdown = dynamic(
  () => import("@leenguyen/react-flip-clock-countdown"),
  {
    ssr: false,
  }
);

export default function Flipdown({
  year,
  month,
  day,
  hour,
  minute = 0,
  second = 0,
}: FlipdownProps) {
  const [displayCountdown, setdisplayCountdown] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  // カウントダウンが0になったらエフェクトを発動
  useEffect(() => {
    if (isComplete) {
      const duration = 3;
      sideCannonConfetti(duration);
    }
  }, [isComplete]);

  return (
    <>
      <h2
        className={styles.when}
      >{`${year}年${month}月${day}・${day + 1}日 ${hour}時～ 開催!`}</h2>
      <div className={styles.content}>
        <div
          style={{
            transition: ".3s",
            opacity: displayCountdown ? 1 : 0,
          }}
        >
          <h1 className={styles.remaining}>開催まで残り</h1>
          <div className={styles.clock}>
            <FlipClockCountdown
              to={new Date().getTime() + 5 * 1000} // テスト用
              // to={new Date(
              //   year,
              //   month - 1,
              //   day,
              //   hour,
              //   minute,
              //   second
              // ).getTime()}
              labels={["Days", "Hours", "Minutes", "Seconds"]}
              labelStyle={{
                fontSize: isMobile() ? 20 : 23,
                fontWeight: 700,
                transform: isMobile()
                  ? "translate(-50%, 130%)"
                  : "translate(-50%, 140%)",
                textShadow: "3px 2px 4px rgba(80, 80, 80, 0.5)",
              }}
              digitBlockStyle={{
                backgroundColor: "#333333",
                fontWeight: 600,
                width: isSmallMobile() ? 38 : isMobile() ? 41 : 75,
                height: isSmallMobile() ? 65 : isMobile() ? 70 : 115,
                fontSize: isMobile() ? 50 : 90,
                borderRadius: 8,
                fontFamily: "Helvetica Neue, Helvetica, sans-serif",
                color: "#cccccc",
              }}
              dividerStyle={{ color: "#1f1f1f" }}
              separatorStyle={{ color: "#000" }}
              duration={0.7}
              stopOnHiddenVisibility={false}
              hideOnComplete={false}
              onComplete={() => {
                setTimeout(() => {
                  setdisplayCountdown(false);
                  setTimeout(() => {
                    setIsComplete(true);
                  }, 800);
                }, 800);
              }}
            />
          </div>
        </div>
        <h1
          id={"koudaisaiStart"}
          className={styles.complete}
          style={{ opacity: isComplete ? 1 : 0 }}
        >
          工大祭開催!
        </h1>
      </div>
    </>
  );
}
