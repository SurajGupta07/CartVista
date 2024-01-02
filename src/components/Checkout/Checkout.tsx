import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { DELIVERY } from '../../constants/constants';
import { calculateTotal } from '../../utils/helper';
import { Button } from '../Button/Button';
import { styles } from './styles';
import { CheckoutProps } from './types';

export const Checkout: React.FC<CheckoutProps> = props => {
  const { subTotal } = props;
  const total = calculateTotal(Number(subTotal), DELIVERY.price);
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <Text style={styles.priceTitle}>{t('common:subTotal')}</Text>
        <Text style={styles.price}>$ {subTotal}</Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.priceTitle}>{t('common:deliveryPrice')}</Text>
        <Text style={styles.price}>{DELIVERY.deliverCharge}</Text>
      </View>
      <View style={styles.flexRow}>
        <Text style={styles.priceTitle}>{t('common:total')}</Text>
        <Text style={styles.price}>$ {total}</Text>
      </View>

      <Button
        title={'Proceed To Checkout'}
        titleStyle={styles.title}
        buttonContainerStyle={styles.btn}
      />
    </View>
  );
};
