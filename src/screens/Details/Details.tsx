import React from 'react';
import { Text } from 'react-native';
import { BaseLayout } from '../../components';

const Details: React.FC = () => {
  return (
    <BaseLayout>
      <Text>Details</Text>
    </BaseLayout>
  );
};

export default React.memo(Details);
