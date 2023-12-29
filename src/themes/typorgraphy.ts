import { RFValue } from 'react-native-responsive-fontsize';
import dimensions from '../utils/dimensions';

const baseHeight = dimensions.screenHeight;

export interface ITypography {
  fontSize: {
    headingBold: number;
    headingSemiBold: number;
    headingMedium: number;
    headingRegular: number;
    bodyBold: number;
    bodyMedium: number;
    label: number;
  };
  fontFamily: {
    '700': string;
    '600': string;
    '500': string;
    '400': string;
  };
}

export const fontSize = {
  headingBold: Number(RFValue(30, baseHeight).toFixed(2)),
  headingSemiBold: Number(RFValue(26, baseHeight).toFixed(2)),
  headingMedium: Number(RFValue(20, baseHeight).toFixed(2)),
  headingRegular: Number(RFValue(18, baseHeight).toFixed(2)),
  bodyBold: Number(RFValue(16, baseHeight).toFixed(2)),
  bodyMedium: Number(RFValue(14, baseHeight).toFixed(2)),
  label: Number(RFValue(12, baseHeight).toFixed(2)),
};

const fontFamily = {
  '700': 'Manrope-Bold',
  '600': 'Manrope-SemiBold',
  '500': 'Manrope-Medium',
  '400': 'Manrope-Regular',
};

export const typography: ITypography = {
  fontSize,
  fontFamily,
};
