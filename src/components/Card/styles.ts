import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import dimensions from '../../utils/dimensions';

export const styles = StyleSheet.create({
  card: {
    height: dimensions.viewHeight(190),
    width: dimensions.viewWidth(160),
    backgroundColor: theme.palette.white.medium,
    borderRadius: 12,
  },
});
