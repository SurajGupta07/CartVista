import React from 'react';
import { Text } from 'react-native';
import { BaseLayout } from '../../components';

const More: React.FC = () => {
  return (
    <BaseLayout>
      <Text>More</Text>
    </BaseLayout>
  );
};

export default React.memo(More);
