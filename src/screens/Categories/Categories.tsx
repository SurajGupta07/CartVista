import React from 'react';
import { Text } from 'react-native';
import { BaseLayout } from '../../components';

const Categories: React.FC = () => {
  return (
    <BaseLayout>
      <Text>Categories</Text>
    </BaseLayout>
  );
};

export default React.memo(Categories);
