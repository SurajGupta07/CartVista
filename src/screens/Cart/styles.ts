import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import dimensions from '../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: dimensions.viewHeight(34),
    paddingHorizontal: dimensions.viewWidth(4),
    backgroundColor: theme.palette.white.dark,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: dimensions.viewHeight(20),
  },
  title: {
    fontSize: theme.typography.fontSize.bodyBold,
    fontFamily: theme.typography.fontFamily[400],
    lineHeight: dimensions.viewHeight(24),
    color: theme.palette.black.medium,
  },
  cartList: {
    flex: 1,
    paddingHorizontal: dimensions.viewWidth(20),
    marginBottom: dimensions.viewHeight(20),
  },
});
