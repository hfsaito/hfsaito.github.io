const TYPOGRAPHY_BASE = 16;
const SPACING_BASE = 8;

export const Theme = {
  typography: {
    size: {
      xs: TYPOGRAPHY_BASE,
      sm: TYPOGRAPHY_BASE * 1.5,
      md: TYPOGRAPHY_BASE * 2,
      lg: TYPOGRAPHY_BASE * 3,
      xl: TYPOGRAPHY_BASE * 4
    },
    font: 'sans-serif'
  },
  spacing: {
    xs: SPACING_BASE,
    sm: SPACING_BASE * 1.5,
    md: SPACING_BASE * 2,
    lg: SPACING_BASE * 3,
    xl: SPACING_BASE * 4
  },
  color: {
    primary: 'blue',
    secondary: 'pink',
    success: 'green',
    warning: 'orange',
    danger: 'red',
    info: 'cyan',
    body: 'black',
    muted: 'gray'
  }
};