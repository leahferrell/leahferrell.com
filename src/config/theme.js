export const LIGHT_MODE = 0;
export const DARK_MODE = 1;

export const DEFAULT_MODE = DARK_MODE;

export const COLORS = {
  LIGHT_YELLOW: "#ffeead",
  LIGHT_BLUE: "#67c6ce",
  LIGHT_GREEN: "#88d8b0",
  LIGHT_RED: "#ff6f69",
  DARK_GREEN: "#6ca5a0",
  DARK_BLUE: "#7fcac3",
  DARK_YELLOW: "#ffeead",
  RED: "#b22420",
  YELLOW: "#f8d047",
  BLUE: "#2b6db2",
  ACTUAL_BLACK: "#000",
  BLACKER_BLACK: "#111",
  BLACK: "#151515",
  DARKEST_GREY: "#1b1b1b",
  DARKER_GREY: "#242424",
  SLIGHTLY_DARKER_GREY: "#333",
  DARK_GREY: "#444",
  GREY: "#585858",
  LIGHT_GREY: "#aaa",
  LIGHTER_GREY: "#ddd",
  LIGHTEST_GREY: "#f8f8f8",
  WHITE: "#fff"
};

export const SHADOWS = {
  NONE: "none",
  LIGHT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.09)",
  MEDIUM: "0 3px 6px 0 rgba(0, 0, 0, 0.1), 0 5px 10px 0 rgba(0, 0, 0, 0.09)",
  BOLD: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
};

export const BORDER_RADII = {
  SMALL: "2px",
  MEDIUM: "5px"
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
  color: [COLORS.BLACK,COLORS.LIGHTEST_GREY]
};

export const viewport = {
  medium: "750px",
  large: "1000px"
};

export const layout = {
  background: [COLORS.LIGHTEST_GREY,COLORS.BLACKER_BLACK],
  nav: {
    background: [COLORS.WHITE,COLORS.DARKER_GREY],
    border: [COLORS.BLACK,COLORS.BLACK]
  },
  header: {
    background: [COLORS.LIGHTEST_GREY,COLORS.BLACKER_BLACK]
  },
  content: {
    background: [COLORS.LIGHTEST_GREY,COLORS.BLACKER_BLACK]
  },
  footer: {
    background: [COLORS.LIGHTEST_GREY,COLORS.BLACKER_BLACK],
    font: {
      color: [COLORS.BLACK,COLORS.WHITE],
      size: font.size.small
    }
  }
};

export const components = {
  article: {
    background: [COLORS.WHITE,COLORS.BLACKER_BLACK],
    title: [COLORS.LIGHTEST_GREY,COLORS.SLIGHTLY_DARKER_GREY],
    accent: [COLORS.LIGHT_GREEN,COLORS.LIGHT_BLUE]
  },
  card: {
    title: {
      background: [COLORS.DARK_GREY,COLORS.SLIGHTLY_DARKER_GREY],
      font: {
        size: font.size.medium,
        color: [COLORS.WHITE,COLORS.LIGHTEST_GREY]
      },
      hover: {
        background: [COLORS.DARK_GREY,COLORS.SLIGHTLY_DARKER_GREY],
        font: [COLORS.LIGHT_GREEN, COLORS.LIGHT_BLUE]
      }
    },
    body: {
      color: [COLORS.WHITE,COLORS.DARKEST_GREY],
      font: {
        color: [COLORS.BLACK,COLORS.LIGHTEST_GREY],
        size: font.size.small
      }
    },
    tag: {
      color: [COLORS.LIGHTER_GREY,COLORS.DARK_GREY],
      font: {
        size: font.size.small,
        color: [COLORS.BLACK,COLORS.LIGHT_BLUE]
      },
      border: {
        color: [COLORS.LIGHTER_GREY,COLORS.DARKER_GREY]
      },
      hover: {
        background: [COLORS.LIGHT_GREEN,COLORS.LIGHT_BLUE],
        font: [COLORS.WHITE, COLORS.LIGHTEST_GREY]
      }
    }
  },
};
