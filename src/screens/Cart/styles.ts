import { StyleSheet } from 'react-native';
import dimensions from '../../utils/dimensions';

export const styles = StyleSheet.create({
  conatiner: {
    paddingTop: dimensions.viewHeight(34),
    paddingHorizontal: dimensions.viewWidth(4),
  },
  cartList: {
    paddingHorizontal: dimensions.viewWidth(20),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: dimensions.viewHeight(44),
  },
});
