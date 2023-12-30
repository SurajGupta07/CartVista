import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import dimensions from '../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.white.dark,
    flex: 1,
  },
  starContainer: {
    position: 'relative',
    left: -dimensions.viewWidth(120),
  },
  titleRow: {
    paddingTop: dimensions.viewHeight(21),
    paddingHorizontal: dimensions.viewWidth(20),
  },
  title: {
    fontSize: 50,
    fontFamily: theme.typography.fontFamily[700],
    color: theme.palette.black.medium,
  },
});
