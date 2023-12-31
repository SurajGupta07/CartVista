import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, Text, View } from 'react-native';
import { BaseLayout, HCard, Header } from '../../components';
import { useCart } from '../../contexts/CartContext';
import { NavigationParams } from '../../types/types';
import { styles } from './styles';

export const Cart: FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<NavigationProp<NavigationParams>>();
  const { cart } = useCart();
  console.log(JSON.stringify(cart, null, 2));

  const backHandler = () => navigation.goBack();

  return (
    <BaseLayout style={styles.conatiner}>
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
              quantity={1}
            />
          )}
        />
      </View>
    </BaseLayout>
  );
};

export default React.memo(Cart);
