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
  language: {
    paddingTop: dimensions.viewWidth(12),
    paddingHorizontal: dimensions.viewWidth(20),
  },
  languageText: {
    padding: dimensions.viewWidth(8),
    fontSize: theme.typography.fontSize.headingMedium,
    fontFamily: theme.typography.fontFamily[700],
    paddingHorizontal: dimensions.viewWidth(20),
  },
});
