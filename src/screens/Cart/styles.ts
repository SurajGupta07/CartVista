import { StyleSheet } from 'react-native';
import dimensions from '../../utils/dimensions';
import { theme } from '../../themes';

export const styles = StyleSheet.create({
  conatiner: {
    paddingTop: dimensions.viewHeight(34),
    paddingHorizontal: dimensions.viewWidth(4),
    backgroundColor: theme.palette.white.dark,
  },
  cartList: {
    paddingHorizontal: dimensions.viewWidth(20),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: dimensions.viewHeight(44),
  },
  title: {
    fontSize: theme.typography.fontSize.bodyBold,
    fontFamily: theme.typography.fontFamily[400],
    lineHeight: dimensions.viewHeight(24),
    color: theme.palette.black.medium,
  },
});
