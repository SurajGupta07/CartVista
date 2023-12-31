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
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    color: theme.palette.secondary.dark,
    fontSize: theme.typography.fontSize.bodyBold,
    fontFamily: theme.typography.fontFamily[700],
    marginRight: dimensions.viewWidth(10),
  },
  discount: {
    color: theme.palette.white.light,
    backgroundColor: theme.palette.secondary.dark,
    paddingHorizontal: dimensions.viewWidth(4),
    paddingVertical: dimensions.viewHeight(4),
    borderRadius: 20,
  },
  outlineBtn: {
    alignItems: 'center',
    backgroundColor: theme.palette.white.light,
    borderRadius: 20,
    height: dimensions.viewHeight(56),
    width: dimensions.viewWidth(143),
    borderWidth: 1,
    borderColor: theme.palette.secondary.light,
    marginRight: dimensions.viewWidth(23),
  },
  outlineBtnTitle: {
    color: theme.palette.secondary.light,
    fontSize: theme.typography.fontSize.bodyMedium,
    fontFamily: theme.typography.fontFamily[600],
  },
  btn: {
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.light,
    borderRadius: 20,
    height: dimensions.viewHeight(56),
    width: dimensions.viewWidth(143),
    borderWidth: 1,
    borderColor: theme.palette.secondary.light,
  },
  btnTitle: {
    color: theme.palette.white.dark,
    fontSize: theme.typography.fontSize.bodyMedium,
    fontFamily: theme.typography.fontFamily[600],
  },
  mv30: {
    marginVertical: dimensions.viewHeight(30),
  },
  details: {
    fontSize: theme.typography.fontSize.bodyBold,
    fontFamily: theme.typography.fontFamily[400],
    color: theme.palette.black.light,
  },
  desc: {
    fontSize: theme.typography.fontSize.bodyBold,
    fontFamily: theme.typography.fontFamily[400],
    color: theme.palette.grey.dark,
  },
});
