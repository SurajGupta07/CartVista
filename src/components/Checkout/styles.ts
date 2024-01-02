import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import dimensions from '../../utils/dimensions';

export const styles = StyleSheet.create({
  title: {
    fontSize: theme.typography.fontSize.bodyMedium,
    fontFamily: theme.typography.fontFamily[600],
    color: theme.palette.white.dark,
  },
  btn: {
    borderRadius: 20,
    height: dimensions.viewHeight(56),
    marginTop: dimensions.viewHeight(35),
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: dimensions.viewHeight(13),
  },
  container: {
    backgroundColor: theme.palette.white.medium,
    paddingHorizontal: dimensions.viewWidth(16),
    paddingTop: dimensions.viewHeight(17),
    paddingBottom: dimensions.viewHeight(30),
    borderRadius: dimensions.viewWidth(30),
  },
  priceTitle: {
    fontSize: theme.typography.fontSize.bodyMedium,
    fontFamily: theme.typography.fontFamily[400],
    color: theme.palette.primary.medium,
  },
  price: {
    fontSize: theme.typography.fontSize.bodyMedium,
    fontFamily: theme.typography.fontFamily[500],
    color: theme.palette.black.medium,
  },
});
