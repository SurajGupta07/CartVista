import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import dimensions from '../../utils/dimensions';

export const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: dimensions.viewWidth(28),
    backgroundColor: theme.palette.secondary.medium,
    minHeight: dimensions.viewHeight(56),
  },
  inputBar: {
    color: theme.palette.white.dark,
    width: dimensions.viewWidth(232),
    height: dimensions.viewHeight(40),
    paddingVertical: dimensions.viewHeight(8),
    paddingHorizontal: dimensions.viewWidth(12),
    fontFamily: theme.typography.fontFamily[500],
    fontSize: theme.typography.fontSize.bodyMedium,
  },
  searchIcon: {
    position: 'absolute',
    left: dimensions.viewWidth(15),
    zIndex: 2,
  },
  clearButton: {
    position: 'absolute',
    right: -dimensions.viewWidth(80),
  },
  inputBarText: {
    color: theme.palette.white.dark,
    paddingVertical: dimensions.viewHeight(8),
    fontFamily: theme.typography.fontFamily[500],
    fontSize: theme.typography.fontSize.bodyMedium,
    paddingLeft: dimensions.viewWidth(12),
    left: dimensions.viewWidth(36),
  },
  cross: {
    color: theme.palette.white.dark,
    fontFamily: theme.typography.fontFamily[500],
    fontSize: theme.typography.fontSize.bodyMedium,
  },
});
