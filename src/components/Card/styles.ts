import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import dimensions from '../../utils/dimensions';

export const styles = StyleSheet.create({
  card: {
    height: dimensions.viewHeight(170),
    backgroundColor: theme.palette.white.medium,
    paddingHorizontal: dimensions.viewWidth(17),
    borderRadius: 12,
  },
  priceContainer: {
    paddingTop: dimensions.viewHeight(20),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  productImage: {
    alignItems: 'center',
  },
  fav: {
    paddingTop: dimensions.viewHeight(13),
  },
  price: {
    fontSize: theme.typography.fontSize.bodyMedium,
    fontFamily: theme.typography.fontFamily[600],
    color: theme.palette.black.medium,
    lineHeight: dimensions.viewHeight(20),
  },
  title: {
    fontSize: theme.typography.fontSize.label,
    fontFamily: theme.typography.fontFamily[400],
    lineHeight: dimensions.viewHeight(16),
  },
});
