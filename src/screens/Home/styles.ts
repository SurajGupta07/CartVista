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
    paddingBottom: dimensions.viewHeight(29),
  },
  address: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: dimensions.viewHeight(12),
    backgroundColor: theme.palette.secondary.light,
    paddingHorizontal: dimensions.viewWidth(20),
  },
  title: {
    fontSize: theme.typography.fontSize.label,
    fontFamily: theme.typography.fontFamily[700],
    color: theme.palette.white.dark,
    opacity: 0.5,
  },
  subTitle: {
    fontSize: theme.typography.fontSize.bodyMedium,
    fontFamily: theme.typography.fontFamily[500],
    color: theme.palette.white.dark,
    marginRight: dimensions.viewWidth(8),
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContainer: {
    marginVertical: dimensions.viewHeight(12),
    marginHorizontal: dimensions.viewWidth(20),
  },
});
