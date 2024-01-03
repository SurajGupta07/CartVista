import React from 'react';
import { Text, View } from 'react-native';
import { IHCardProps } from './types';
import { SVGImage } from '../SVGImage/SvgImage';
import dimensions from '../../utils/dimensions';
import { styles } from './styles';

export const HCard: React.FC<IHCardProps> = props => {
  const { image, quantity, subtitle, title, showQuantity } = props;
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <SVGImage
          url={image}
          height={dimensions.viewHeight(30)}
          width={dimensions.viewWidth(30)}
        />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subtitle}</Text>
      </View>
      {showQuantity && (
        <View style={styles.quantity}>
          <Text style={styles.title}>{quantity}</Text>
        </View>
      )}
    </View>
  );
};
