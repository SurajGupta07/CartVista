import { StyleSheet } from 'react-native';
import dimensions from '../../utils/dimensions';
import { theme } from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: dimensions.viewHeight(20),
    borderBottomWidth: 1,
    borderColor: '#EBEBFB',
    paddingBottom: dimensions.viewHeight(16),
  },
  image: {
    paddingRight: dimensions.viewWidth(26),
  },
  quantity: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
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
  icon: {
    height: dimensions.viewHeight(40),
    width: dimensions.viewWidth(40),
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: theme.palette.white.medium,
    borderRadius: dimensions.viewWidth(40),
    paddingTop: dimensions.viewHeight(10),
    marginHorizontal: dimensions.viewWidth(10),
  },
});
