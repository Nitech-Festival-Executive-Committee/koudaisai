"use client";
import { useEffect, useState } from "react";
import { Particles, initParticlesEngine } from "@tsparticles/react";
import { type Container } from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
import SvgText from "./SvgText";
import styles from "./Loader.module.scss";

export default function Loader() {
  const [init, setInit] = useState(false);

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
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  if (init) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loaderTexts}>
          <h1 className={styles.festivalTitle}>第62回 工大祭 2024</h1>
          <div className={styles.svgText}>
            <SvgText></SvgText>
          </div>
        </div>
        <Particles
          id="firePartifle"
          particlesLoaded={particlesLoaded}
          options={{
            particles: {
              number: {
                value: 200,
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
                speed: 3,
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
            retina_detect: true,
          }}
        />
      </div>
    );
  }

  return <></>;
}
