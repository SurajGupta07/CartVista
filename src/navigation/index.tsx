import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppTabs } from './BottomTabs';
import { ProductsProvider } from '../contexts/ProductContext';

export const MainNavigator = () => {
  return (
    <ProductsProvider>
      <NavigationContainer>
        <AppTabs />
      </NavigationContainer>
    </ProductsProvider>
  );
};
