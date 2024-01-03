import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useCartAction } from '../../hooks/useCartAction';
import { theme } from '../../themes';
import { APP_IMAGES } from '../../types/imageMapper';
import dimensions from '../../utils/dimensions';
import { SVGImage } from '../SVGImage/SvgImage';
import { styles } from './styles';
import { CardProps } from './types';
import { useCart } from '../../contexts/CartContext';

export const Card = React.memo((props: CardProps) => {
  const { addToCartOnClick, addToWishlist } = useCartAction();
  const { favourites, cart } = useCart();
  const item = props.item;
  const { title, price, thumbnail, id } = item;

  const isProductFavourite = favourites.some(
    _product => _product.id === item.id,
  );

  const handleAddToCart = () => {
    const isItemInCart = cart.some(_i => _i.id === item.id);
    if (!isItemInCart) {
      addToCartOnClick({ product: item });
    } else {
      console.log('Product is already in the cart');
    }
  };

  return (
    <View key={id} style={styles.card}>
      <TouchableOpacity
        style={styles.fav}
        onPress={() => addToWishlist({ product: item })}>
        <SVGImage
          assetSrc={APP_IMAGES.HEART}
          height={dimensions.viewHeight(14)}
          width={dimensions.viewWidth(14)}
          fill={
            isProductFavourite
              ? theme.palette.pink.dark
              : theme.palette.white.medium
          }
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
        <TouchableOpacity onPress={handleAddToCart}>
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
