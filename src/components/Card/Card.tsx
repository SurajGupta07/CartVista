import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useCartAction } from '../../hooks/useCartAction';
import { theme } from '../../themes';
import { APP_IMAGES } from '../../types/imageMapper';
import dimensions from '../../utils/dimensions';
import { SVGImage } from '../SVGImage/SvgImage';
import { styles } from './styles';
import { CardProps } from './types';

export const Card = React.memo((props: CardProps) => {
  const item = props.item;
  const { addToCartOnClick } = useCartAction();
  const { title, price, thumbnail, id } = item;

  return (
    <View key={id} style={styles.card}>
      <TouchableOpacity style={styles.fav}>
        <SVGImage
          assetSrc={APP_IMAGES.HEART}
          height={dimensions.viewHeight(14)}
          width={dimensions.viewWidth(14)}
          fill={theme.palette.white.medium}
        />
      </TouchableOpacity>
      <View style={styles.productImage}>
        <SVGImage
          url={thumbnail}
          height={dimensions.viewHeight(68)}
          width={dimensions.viewWidth(68)}
        />
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>$ {price}</Text>
        <TouchableOpacity onPress={() => addToCartOnClick({ product: item })}>
          <SVGImage
            assetSrc={APP_IMAGES.PLUS}
            height={dimensions.viewHeight(24)}
            width={dimensions.viewWidth(24)}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
});
