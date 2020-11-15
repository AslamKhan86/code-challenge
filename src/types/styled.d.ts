import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      fg: string;
      primary: string;
      secondary: string;
    };
  }
}
