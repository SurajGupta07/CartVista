import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import dimensions from '../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.palette.white.dark,
  },

  starContainer: {
    position: 'relative',
    left: -dimensions.viewWidth(120),
  },
  titleRow: {
    paddingTop: dimensions.viewHeight(21),
    paddingHorizontal: dimensions.viewWidth(20),
    paddingBottom: dimensions.viewHeight(15),
  },
  title: {
    fontSize: 50,
    fontFamily: theme.typography.fontFamily[700],
    color: theme.palette.black.medium,
  },
  description: {
    paddingTop: dimensions.viewHeight(26),
    paddingHorizontal: dimensions.viewWidth(20),
  },
});
