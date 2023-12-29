import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import { BaseLayout } from '../../components';

const Favourite: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BaseLayout>
      <Text>{t('common:favourite')}</Text>
    </BaseLayout>
  );
};

export default React.memo(Favourite);
