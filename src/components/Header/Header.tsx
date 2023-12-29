import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { APP_IMAGES } from '../../types/imageMapper';
import dimensions from '../../utils/dimensions';
import { SVGImage } from '../SVGImage/SvgImage';
import { styles } from './styles';
import { IHeaderProps } from './types';

export const Header: React.FC<IHeaderProps> = props => {
  const { title, onPress, headerColor, titleColor } = props;
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
      <SVGImage
        assetSrc={APP_IMAGES.CART}
        height={dimensions.viewHeight(18)}
        width={dimensions.viewWidth(16)}
      />
    </View>
  );
};
