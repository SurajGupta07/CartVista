import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import { BaseLayout } from '../../components';

export const Cart: FC = () => {
  const { t } = useTranslation();

  return (
    <BaseLayout>
      <Text>{t('common:cart')}</Text>
    </BaseLayout>
  );
};

export default React.memo(Cart);
