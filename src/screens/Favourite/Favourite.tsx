import React from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList, View } from 'react-native';
import { BaseLayout, HCard, Header } from '../../components';
import { useCart } from '../../contexts/CartContext';
import { styles } from './styles';

const Favourite: React.FC = () => {
  const { t } = useTranslation();
  const { favourites } = useCart();

  return (
    <BaseLayout style={styles.container}>
      <Header title={t('common:favourite')} />
      <View style={styles.list}>
        <FlatList
          data={favourites}
          renderItem={({ item }) => (
            <HCard
              image={item.thumbnail}
              title={item.title}
              subtitle={`$ ${item.price}`}
              quantity={1}
              showQuantity={false}
            />
          )}
        />
      </View>
    </BaseLayout>
  );
};

export default React.memo(Favourite);
