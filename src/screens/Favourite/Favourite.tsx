import React from 'react';
import { Text } from 'react-native';
import { BaseLayout } from '../../components';

const Favourite: React.FC = () => {
  return (
    <BaseLayout>
      <Text>Favourite</Text>
    </BaseLayout>
  );
};

export default React.memo(Favourite);
