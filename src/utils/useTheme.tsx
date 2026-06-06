import { createTheming } from '@callstack/react-theme-provider';

export const theme = {
  lightColor: {
    white: '#FFFFFF',
    black: '#000000',
    primary: '#F5F5F5',
    secondary: '#EEEEEE',
  },
  darkColor: {},
  fontFamily: {
    RobotoLight: 'Roboto-Light',
    RobotoRegular: 'Roboto-Regular',
    RobotoMedium: 'Roboto-Medium',
    RobotoSemiBold: 'Roboto-SemiBold',
    RobotoBold: 'Roboto-Bold',
  },
  animation: {
    scale: 1.0,
  },
};

const { ThemeProvider, withTheme, useTheme } = createTheming(theme);

export { ThemeProvider, withTheme, useTheme };
