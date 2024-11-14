import confetti from "canvas-confetti";
import { isMobile } from "./isMoile";

export const sideCannonConfetti = (duration: number) => {
  const end = Date.now() + duration * 1000;

  const colors = [
    "#bb0000",
    "#0000ee",
    "#ffa500",
    "#ffff00",
    "#00ff00",
    "#00ffff",
    "#ff00ff",
  ];

  const getRandomColors = () => [
    colors[Math.floor(Math.random() * colors.length)],
    colors[Math.floor(Math.random() * colors.length)],
  ];

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const element = document.getElementById("koudaisaiStart");
  if (element) {
    const rect = element.getBoundingClientRect();
    const xOrigin = (rect.left + rect.right) / (2 * window.innerWidth);
    const yOrigin = (rect.top + rect.bottom) / (2 * window.innerHeight);

    confetti({
      // 工大祭開催のテキストから出現
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      particleCount: randomInRange(50, 100),
      origin: { x: xOrigin, y: yOrigin },
    });
  } else {
    console.log("element not found");
  }

  // 両側から継続的に出すエフェクト
  const particles = isMobile() ? 1 : 3;
  const spread = isMobile() ? 30 : 55;
  const startVelocity = isMobile() ? 30 : 60;
  const y = isMobile() ? 0.6 : 0.7;
  (function frame() {
    confetti({
      particleCount: particles,
      angle: 60,
      spread: spread,
      origin: { x: 0, y: y },
      startVelocity: startVelocity,
      colors: getRandomColors(),
    });
    confetti({
      particleCount: particles,
      angle: 120,
      spread: spread,
      origin: { x: 1, y: y },
      startVelocity: startVelocity,
      colors: getRandomColors(),
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};
