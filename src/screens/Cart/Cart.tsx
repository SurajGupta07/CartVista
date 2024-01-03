import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, View } from 'react-native';
import { BaseLayout, Checkout, HCard, Header } from '../../components';
import { useCart } from '../../contexts/CartContext';
import { NavigationParams, Product } from '../../types/types';
import { calculateCartSubTotal } from '../../utils/helper';
import { styles } from './styles';
import { useCartAction } from '../../hooks/useCartAction';

export const Cart: FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<NavigationProp<NavigationParams>>();
  const { cart } = useCart();
  const { updateProductQuantity } = useCartAction();

  const backHandler = () => navigation.goBack();

  const subTotal = calculateCartSubTotal(cart);

  const updateQuantity = (item: Product) =>
    updateProductQuantity({ product: item });

  return (
    <BaseLayout style={styles.container}>
      <View style={styles.headerContainer}>
        <Header onPress={backHandler} />
        <Text style={styles.title}>
          {t('common:shopping')} ({cart.length})
        </Text>
      </View>
      <View style={styles.cartList}>
        <FlatList
          data={cart}
          renderItem={({ item }) => (
            <HCard
              image={item.thumbnail}
              title={item.title}
              subtitle={`$ ${item.price}`}
              quantity={item.quantity}
              showQuantity={true}
              updateQuantity={() => updateQuantity(item)}
            />
          )}
        />
      </View>
      {cart.length > 0 && <Checkout subTotal={subTotal} />}
    </BaseLayout>
  );
};

export default React.memo(Cart);
