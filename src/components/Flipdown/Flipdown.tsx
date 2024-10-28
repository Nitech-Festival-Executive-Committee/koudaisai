"use client";
import dynamic from "next/dynamic";
import React from "react";
import styles from "./Flipdown.module.scss";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

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
  return (
    <>
      <div className={styles.flipdownTitle}>
        <h2>{`${month}月${day}・${++day}日 ${hour}時開催!`}</h2>
        <h1>開催まで残り</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlipClockCountdown
          // to={new Date().getTime() + 5 * 1000} // テスト用
          to={new Date(year, month - 1, day, hour, minute, second).getTime()}
          labels={["Days", "Hours", "Minutes", "Seconds"]}
          labelStyle={{
            fontSize: 20,
            fontWeight: 700,
            transform: "translate(-50%, 130%)",
            textShadow: "4px 2px 6px rgba(80, 80, 80, 0.5)",
          }}
          digitBlockStyle={{
            backgroundColor: "#333333",
            fontWeight: 600,
            width: 60,
            height: 95,
            fontSize: 70,
            borderRadius: 8,
            fontFamily: "Helvetica Neue, Helvetica, sans-serif",
            color: "#cccccc",
          }}
          dividerStyle={{ color: "#1f1f1f" }}
          separatorStyle={{ color: "#000" }}
          duration={0.8}
          hideOnComplete={false}
          // onComplete
        />
      </div>
    </>
  );
}
