const breakpoints = {
  phone: 375,
  tablet: 768,
  bigTablet: 1020,
  desktop: 1200,
  bigDesktop: 1440,
  huge: 1700,
}

const theme = {
  colors: {
    primary: "#FEA75E",
    primaryRGB: "254, 167, 94",
    secondary: "#444444",
    grey: "#828282",
    dark: "#111111",
    light: "#EEEEEE",
    white: "#ffffff",
    black: "#000000",
    silver: "#DDDDDD",
    transparent: "transparent",
  },
  fontFamily: {
    Poppins: "'Poppins', sans-serif",
  },
  fontWeight: {
    thin: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  mediaQueries: {
    phone: `@media (min-width: ${breakpoints.phone}px)`,
    tablet: `@media (min-width: ${breakpoints.tablet}px)`,
    bigTablet: `@media (min-width: ${breakpoints.bigTablet}px)`,
    desktop: `@media (min-width: ${breakpoints.desktop}px)`,
    bigDesktop: `@media (min-width: ${breakpoints.bigDesktop}px)`,
    huge: `@media (min-width: ${breakpoints.huge}px)`,
  },
}

export default theme
