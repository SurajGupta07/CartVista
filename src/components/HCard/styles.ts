import { StyleSheet } from 'react-native';
import dimensions from '../../utils/dimensions';
import { theme } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: dimensions.viewHeight(20),
    justifyContent: 'center',
  },
  image: {
    paddingRight: dimensions.viewWidth(26),
  },
  quantity: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: dimensions.viewHeight(8),
  },
  title: {
    fontSize: theme.typography.fontSize.bodyMedium,
    color: theme.palette.black.medium,
    fontFamily: theme.typography.fontFamily[500],
  },
  subTitle: {
    fontSize: theme.typography.fontSize.bodyMedium,
    color: theme.palette.black.medium,
    fontFamily: theme.typography.fontFamily[400],
    lineHeight: dimensions.viewHeight(20),
  },
});
