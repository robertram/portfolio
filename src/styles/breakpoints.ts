const size = {
  mobileS: "320px",
  tablet: "768px",
  desktop: "2560px",
};

export const device = {
  isSmall: `(min-width: ${size.mobileS})`,
  isMedium: `(min-width: ${size.tablet})`,
  isLarge: `(min-width: ${size.desktop})`,
};
