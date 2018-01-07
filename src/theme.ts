export interface Theme {
  readonly headerFontFamily: string;
  readonly colors: {
    readonly [key: string]: string;
  };
}

export const theme: Theme = {
  headerFontFamily: "Martel, serif",

  /* Colors from http://www.color-hex.com/color-palette/52402 */
  colors: {
    lightRed: "#eb625c",
    red: "#e32017",
    lightYellow: "#ffdb32",
    yellow: "#ffd300",
    lightGreen: "#4ca069",
    green: "#00782a",
    lightLightBlue: "#4cb6e0",
    lightBlue: "#0098d4",
    blue: "#003688"
  }
};
