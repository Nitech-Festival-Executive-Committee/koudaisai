"use client";
import { useEffect, useState, useLayoutEffect } from "react";
import { Particles, initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import SvgText from "./SvgText";
import styles from "./Loader.module.scss";

export default function Loader() {
  const [isParticleReady, setIsParticleReady] = useState(false);
  const [isAnimatiomCompleted, setIsAnimatiomCompleted] = useState(false);
  const [isFadeOutComplete, setIsFadeOutComplete] = useState(false);

  const animationDuration = 2500; // フェードインが開始してからフェードアウトし始めるまで
  const fadeDuration = 1300; // フェードアウトの長さ

  // ローダー再生中はスクロール無効化
  useLayoutEffect(() => {
    if (isAnimatiomCompleted) {
      document.documentElement.style.overflowY = "auto";
    } else {
      document.documentElement.style.overflowY = "hidden";
    }
  }, [isAnimatiomCompleted]);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setIsParticleReady(true);
      window.scrollTo(0, 0);
      setTimeout(() => {
        setIsAnimatiomCompleted(true);
        setTimeout(() => {
          setIsFadeOutComplete(true);
        }, fadeDuration);
      }, animationDuration);
    });
  }, []);

  return (
    <div
      className={styles.loaderContainer}
      style={{
        opacity: isAnimatiomCompleted ? 0 : 1,
        transition: `opacity ${fadeDuration}ms cubic-bezier(0.26, 0.02, 0.22, 0.86)`,
        display: isFadeOutComplete ? "none" : "block",
      }}
    >
      <div
        className={styles.loaderTexts}
        style={{
          filter: isParticleReady ? "blur(0px)" : "blur(30px)",
          opacity: isParticleReady ? 1 : 0.3,
        }}
      >
        <h1 className={styles.festivalTitle}>第62回 工大祭 2024</h1>
        <div className={styles.svgText}>
          <SvgText></SvgText>
        </div>
      </div>
      {isParticleReady && (
        <Particles
          id="firePartifle"
          options={{
            particles: {
              number: {
                value: 150,
              },
              color: {
                value: "#ff4c1b",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: 0.7,
              },
              size: {
                value: 2,
              },
              move: {
                enable: true,
                speed: 4,
                direction: "top",
                random: false,
                straight: false,
                // outMode: "out",
                attract: {
                  enable: false,
                },
              },
              line_linked: {
                enable: false,
              },
            },
            style: { filter: "blur(1px)" },
            retina_detect: true,
          }}
        />
      )}
    </div>
  );
}
