import { StyleSheet } from 'react-native';
import { theme } from '../../themes';
import dimensions from '../../utils/dimensions';

export const styles = StyleSheet.create({
  language: {
    paddingTop: dimensions.viewWidth(12),
    textAlign: 'center',
  },
  languageText: {
    padding: dimensions.viewWidth(8),
    fontSize: theme.typography.fontSize.headingMedium,
    fontFamily: theme.typography.fontFamily[700],
  },
});
