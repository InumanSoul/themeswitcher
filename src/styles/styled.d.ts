import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
      title: string;

      colors: {
        primary: string;
        secondary: string;
        success: string;

        sidemenu: string;

        background: string;
        text: string;
        cardbg: string;
        borderColor: string;
        shadows: string;
      };
    }
}