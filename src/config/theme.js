export const LIGHT_MODE = "light";
export const DARK_MODE = "dark";

export const DEFAULT_MODE = LIGHT_MODE;

export const COLORS = {
  LIGHT_YELLOW: "#ffeead",
  LIGHT_BLUE: "#67c6ce",
  LIGHT_GREEN: "#88d8b0",
  LIGHT_RED: "#ff6f69",
  RED: "#b22420",
  YELLOW: "#f8d047",
  BLUE: "#2b6db2",
  BLACK: "#000",
  WHITE: "#fff",
  DARKEST_GREY: "#222",
  DARKER_GREY: "#444",
  DARK_GREY: "#666",
  GREY: "#999",
  LIGHT_GREY: "#aaa",
  LIGHTER_GREY: "#ddd",
  LIGHTEST_GREY: "#f8f8f8"
};

export const SHADOWS = {
  NONE: "none",
  LIGHT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.09)",
  MEDIUM: "0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 5px 10px 0 rgba(0, 0, 0, 0.09)",
  BOLD: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
};

export const font = {
  rem: {
    mobile: "14px",
    desktop: "12px"
  },
  family: "'Roboto', sans-serif",
  size: {
    x_small: "0.75rem",
    small: "1rem",
    medium: "1.5rem",
    med_large: "2rem",
    large: "3rem",
    x_large: "4rem"
  },
  color: {
    light: COLORS.BLACK,
    dark: COLORS.WHITE
  }
};

export const viewport = {
  medium: "750px",
  large: "1000px"
};

export const layout = {
  background: {
    light: COLORS.LIGHTEST_GREY,
    dark: COLORS.BLACK
  },
  nav: {
    light: COLORS.WHITE,
    dark: COLORS.DARK_GREY,
    border: {
      light: COLORS.BLACK,
      dark: COLORS.BLACK
    }
  },
  menu: {
    light: COLORS.LIGHTEST_GREY,
    dark: COLORS.BLACK,
    border: {
      light: COLORS.BLACK,
      dark: COLORS.WHITE
    },
    detail: {
      light: COLORS.LIGHTEST_GREY,
      dark: COLORS.BLACK
    }
  },
  header: {
    light: COLORS.LIGHTEST_GREY,
    dark: COLORS.BLACK,
  },
  content: {
    light: COLORS.LIGHTEST_GREY,
    dark: COLORS.BLACK,
  },
  footer: {
    light: COLORS.LIGHTEST_GREY,
    dark: COLORS.BLACK,
    font: {
      light: COLORS.BLACK,
      dark: COLORS.WHITE
    }
  }
};

export const components = {
  item: {
    color: {
      light: COLORS.WHITE,
      dark: COLORS.DARK_GREY
    },
    border: {
      color: {
        light: COLORS.LIGHT_GREY,
        dark: COLORS.GREY
      }
    }
  }
};
