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

export const typography: ITypography = {
  fontSize,
};
