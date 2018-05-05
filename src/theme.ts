export interface Theme {
  headerFontFamily: string;
  colors: {
    [key: string]: string;
  };
}

export const theme: Theme = {
  headerFontFamily: "Martel, serif",

  /* Some colors from http://www.color-hex.com/color-palette/52402 */
  colors: {
    lightRed: "#eb625c",
    red: "#e32017",
    lightYellow: "#ffdb32",
    yellow: "#ffd300",
    lightGreen: "#4ca069",
    green: "#00782a",
    lightLightBlue: "#0098d4",
    lightBlue: "#5a8cd2",
    lightDarkBlue: "#4c72ab",
    darkBlue: "#003688"
  }
};
