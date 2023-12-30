import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import dimensions from '../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.primary.dark,
    paddingHorizontal: dimensions.viewWidth(22),
    paddingVertical: dimensions.viewHeight(30),
    width: dimensions.viewWidth(269),
    flexDirection: 'row',
    borderRadius: 16,
    marginRight: dimensions.viewWidth(18),
  },
  textConatiner: {
    flexDirection: 'column',
    paddingLeft: dimensions.viewWidth(44),
  },
  title: {
    color: theme.palette.white.dark,
    fontFamily: theme.typography.fontFamily[700],
    fontSize: theme.typography.fontSize.headingSemiBold,
  },
  subTitle: {
    color: theme.palette.white.dark,
    fontFamily: theme.typography.fontFamily[400],
    fontSize: theme.typography.fontSize.headingMedium,
  },
  label: {
    color: theme.palette.white.dark,
    fontFamily: theme.typography.fontFamily[400],
    fontSize: theme.typography.fontSize.bodyMedium,
  },
});
