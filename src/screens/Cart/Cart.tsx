import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import { BaseLayout, Header } from '../../components';
import { useCart } from '../../contexts/CartContext';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NavigationParams } from '../../types/types';

export const Cart: FC = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<NavigationProp<NavigationParams>>();
  const { cart } = useCart();
  console.log(JSON.stringify(cart, null, 2));

  const backHandler = () => {
    navigation.goBack();
  };

  return (
    <BaseLayout>
      <Header onPress={backHandler} />
      <Text>{t('common:cart')}</Text>
    </BaseLayout>
  );
};

export default React.memo(Cart);
