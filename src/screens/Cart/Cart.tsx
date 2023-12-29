import React, { FC } from 'react';
import { Text } from 'react-native';
import { BaseLayout } from '../../components';

export const Cart: FC = () => {
  return (
    <BaseLayout>
      <Text>Cart Screen</Text>
    </BaseLayout>
  );
};

export default React.memo(Cart);
