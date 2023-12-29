import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseLayout, Header, SearchBar } from '../../components';
import { useProduct } from '../../contexts/ProductContext';
import { theme } from '../../themes';
import { styles } from './styles';
import { THome } from './types';
import { View } from 'react-native';

const Home: React.FC<THome> = () => {
  const { t } = useTranslation();
  const { products } = useProduct();
  console.log(JSON.stringify(products, null, 2));

  return (
    <BaseLayout style={styles.container}>
      <Header
        title={t('common:username')}
        headerColor={theme.palette.secondary.light}
        titleColor={theme.palette.white.dark}
      />
      <View style={styles.searchBar}>
        <SearchBar />
      </View>
    </BaseLayout>
  );
};

export default React.memo(Home);
