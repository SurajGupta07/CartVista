import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { IHCardProps } from './types';
import { SVGImage } from '../SVGImage/SvgImage';
import dimensions from '../../utils/dimensions';
import { styles } from './styles';

export const HCard: React.FC<IHCardProps> = props => {
  const {
    image,
    quantity,
    subtitle,
    title,
    showQuantity,
    updateQuantity,
    decreaseQuantity,
  } = props;

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
          <TouchableOpacity>
            <Text style={styles.icon} onPress={updateQuantity}>
              +
            </Text>
          </TouchableOpacity>
          <Text style={styles.title}>{quantity}</Text>
          <TouchableOpacity onPress={decreaseQuantity}>
            {quantity > 1 ? (
              <Text style={styles.icon}>-</Text>
            ) : (
              <Text style={styles.remove}>Remove</Text>
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
