import confetti from "canvas-confetti";

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
  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: getRandomColors(),
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: getRandomColors(),
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};
