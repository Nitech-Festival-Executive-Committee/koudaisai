export const isMobile = () => {
  if (process.browser) {
    return window.innerWidth <= 600;
  }
};

export const isSmallMobile = () => {
  if (process.browser) {
    return window.innerWidth <= 400;
  }
};
