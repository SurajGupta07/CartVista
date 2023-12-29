import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text } from 'react-native';
import { APPROUTES } from '../../constants/enums';
import { NavigationParams } from '../../types/types';
import { THome } from './types';
import { styles } from './styles';
import { BaseLayout } from '../../components';
import { useTranslation } from 'react-i18next';

const Home: React.FC<THome> = () => {
  const navigation = useNavigation<NavigationProp<NavigationParams>>();
  const { t } = useTranslation();

  return (
    <BaseLayout style={styles.container}>
      <Text>{t('common:home')}</Text>
      <Button
        title="Details"
        onPress={() => navigation.navigate(APPROUTES.DETAILS)}
      />
    </BaseLayout>
  );
};

export default React.memo(Home);
