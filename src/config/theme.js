export const LIGHT_MODE = "light";
export const DARK_MODE = "dark";

export const DEFAULT_MODE = LIGHT_MODE;

export const COLORS = {
  LIGHT_YELLOW: "#ffeead",
  LIGHT_BLUE: "#96ceb4",
  LIGHT_GREEN: "#88d8b0",
  LIGHT_RED: "#ff6f69",
  RED: "#b22420",
  YELLOW: "#f8d047",
  BLUE: "#2b6db2",
  BLACK: "#000",
  WHITE: "#fff",
  DARK_GREY: "#222",
  GREY: "#666",
  LIGHT_GREY: "#999",
  LIGHTEST_GREY: "#f8f8f8"
};

export const font = {
  family: "'Roboto', sans-serif",
  size: {
    x_small: ".1em",
    small: ".25em",
    medium: ".5em",
    med_large: "1em",
    large: "2em",
    x_large: "4em"
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
    light: COLORS.WHITE,
    dark: COLORS.DARK_GREY
  },
  nav: {
    light: COLORS.YELLOW,
    dark: COLORS.BLACK,
    border: {
      light: COLORS.BLACK,
      dark: COLORS.BLACK
    }
  },
  menu: {
    light: COLORS.WHITE,
    dark: COLORS.DARK_GREY,
    border: {
      light: COLORS.BLACK,
      dark: COLORS.WHITE
    },
    detail: {
      light: COLORS.WHITE,
      dark: COLORS.DARK_GREY
    }
  },
  header: {
    light: COLORS.WHITE,
    dark: COLORS.DARK_GREY,
  },
  content: {
    light: COLORS.WHITE,
    dark: COLORS.DARK_GREY,
  },
  footer: {
    light: COLORS.BLUE,
    dark: COLORS.BLACK,
    font: {
      light: COLORS.WHITE,
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
