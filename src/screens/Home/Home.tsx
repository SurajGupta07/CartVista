import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Text } from 'react-native';
import { BaseLayout, Header } from '../../components';
import { APPROUTES } from '../../constants/enums';
import { NavigationParams } from '../../types/types';
import { styles } from './styles';
import { THome } from './types';
import { theme } from '../../themes';

const Home: React.FC<THome> = () => {
  const navigation = useNavigation<NavigationProp<NavigationParams>>();
  const { t } = useTranslation();

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
