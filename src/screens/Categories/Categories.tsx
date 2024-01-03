import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseLayout, Header } from '../../components';
import { styles } from './styles';

const Categories: React.FC = () => {
  const { t } = useTranslation();

  return (
    <BaseLayout style={styles.container}>
      <Header title={t('common:category')} />
    </BaseLayout>
  );
};

export default React.memo(Categories);
