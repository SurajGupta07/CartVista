import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import dimensions from '../../utils/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.white.dark,
  },
  searchBar: {
    backgroundColor: theme.palette.secondary.light,
    paddingHorizontal: dimensions.viewWidth(20),
    paddingTop: dimensions.viewHeight(35),
    paddingBottom: dimensions.viewHeight(79),
  },
});
