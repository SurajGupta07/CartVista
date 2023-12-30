import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import { BaseLayout } from '../../components';
import { RouteProp, useRoute } from '@react-navigation/native';
import { TNavRoutes } from '../../types/types';

const Details: React.FC = () => {
  const route = useRoute<RouteProp<TNavRoutes, 'Details'>>();
  const { product } = route.params;
  console.log(product);
  const { t } = useTranslation();

  return (
    <BaseLayout>
      <Text>{t('common:details')}</Text>
    </BaseLayout>
  );
};

export default React.memo(Details);
