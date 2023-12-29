export interface IColor {
  dark: string;
  medium: string;
  light: string;
}

export interface IPalette {
  primary: IColor;
  secondary: IColor;
  white: IColor;
  grey: IColor;
  black: IColor;
  stale: IColor;
}

export const palette: IPalette = {
  primary: {
    dark: '#F9B023',
    medium: '#F9B023',
    light: '#F9B023',
  },
  secondary: {
    dark: '#2A4BA0',
    medium: '#2A4BA0',
    light: '#2A4BA0',
  },
  white: {
    dark: '#FFFFFF',
    medium: '#F8F9FB',
    light: '#FAFBFD',
  },
  grey: {
    dark: '#8891A5',
    medium: '#A1A1AB',
    light: '#A1ABC0',
  },
  black: {
    dark: '#000000',
    medium: '#1E222B',
    light: '#3E4554',
  },
  stale: {
    dark: '#F8F7FB',
    medium: '#F8F7FB',
    light: '#F8F7FB',
  },
};
