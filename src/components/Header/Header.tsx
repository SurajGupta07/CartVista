import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { APPROUTES } from '../../constants/enums';
import { theme } from '../../themes';
import { APP_IMAGES } from '../../types/imageMapper';
import { NavigationParams } from '../../types/types';
import dimensions from '../../utils/dimensions';
import { SVGImage } from '../SVGImage/SvgImage';
import { styles } from './styles';
import { IHeaderProps } from './types';

export const Header: React.FC<IHeaderProps> = props => {
  const route = useRoute();
  const navigation = useNavigation<NavigationProp<NavigationParams>>();
  const { title, onPress, headerColor, titleColor } = props;

  const showCartIcon = route.name !== APPROUTES.CART;
  const navigateToCart = () => navigation.navigate(APPROUTES.CART);

  return (
    <View style={[styles.cardContainer, { backgroundColor: headerColor }]}>
      {onPress && (
        <Pressable onPress={onPress}>
          <SVGImage
            assetSrc={APP_IMAGES.BACK}
            height={dimensions.viewHeight(40)}
            width={dimensions.viewWidth(40)}
          />
        </Pressable>
      )}
      <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
      {showCartIcon && (
        <TouchableOpacity onPress={navigateToCart}>
          <SVGImage
            assetSrc={APP_IMAGES.CART}
            height={dimensions.viewHeight(24)}
            width={dimensions.viewWidth(24)}
            fill={theme.palette.secondary.dark}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
