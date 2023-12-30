import React from 'react';
import { Text, View } from 'react-native';
import dimensions from '../../utils/dimensions';
import { SVGImage } from '../SVGImage/SvgImage';
import { styles } from './styles';
import { CardProps } from './types';

export const Card = React.memo((props: CardProps) => {
  const { title, price, thumbnail } = props;

  return (
    <View style={styles.card}>
      <SVGImage
        url={thumbnail}
        height={dimensions.viewHeight(68)}
        width={dimensions.viewWidth(68)}
      />
      <Text>{title}</Text>
      <Text>{price}</Text>
    </View>
  );
});
