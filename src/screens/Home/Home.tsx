import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Text } from 'react-native';
import { BaseLayout, Header } from '../../components';
import { APPROUTES } from '../../constants/enums';
import { useProduct } from '../../contexts/ProductContext';
import { theme } from '../../themes';
import { NavigationParams } from '../../types/types';
import { styles } from './styles';
import { THome } from './types';

const Home: React.FC<THome> = () => {
  const navigation = useNavigation<NavigationProp<NavigationParams>>();
  const { t } = useTranslation();
  const { products } = useProduct();
  console.log(JSON.stringify(products, null, 2));

  return (
    <BaseLayout style={styles.container}>
      <Header
        title={t('common:home')}
        headerColor={theme.palette.secondary.light}
        titleColor={theme.palette.white.dark}
      />
      <Text>{t('common:home')}</Text>
      <Button
        title="Details"
        onPress={() => navigation.navigate(APPROUTES.DETAILS)}
      />
    </BaseLayout>
  );
};

export default React.memo(Home);
