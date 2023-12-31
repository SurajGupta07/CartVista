import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { CartProvider } from '../contexts/CartContext';
import { ProductsProvider } from '../contexts/ProductContext';
import { AppTabs } from './BottomTabs';

export const MainNavigator = () => {
  return (
    <ProductsProvider>
      <CartProvider>
        <NavigationContainer>
          <AppTabs />
        </NavigationContainer>
      </CartProvider>
    </ProductsProvider>
  );
};
