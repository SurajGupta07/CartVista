import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import { BaseLayout } from '../../components';

const Details: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BaseLayout>
      <Text>{t('common:details')}</Text>
    </BaseLayout>
  );
};

export default React.memo(Details);
