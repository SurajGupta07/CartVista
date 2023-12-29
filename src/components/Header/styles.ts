import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import dimensions from '../../utils/dimensions';

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: dimensions.viewHeight(50),
    backgroundColor: theme.palette.primary.light,
    paddingHorizontal: dimensions.viewWidth(20),
  },
  title: {
    color: theme.palette.black.dark,
    fontSize: theme.typography.fontSize.headingMedium,
    fontFamily: theme.typography.fontFamily[600],
  },
});
