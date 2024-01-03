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
});
