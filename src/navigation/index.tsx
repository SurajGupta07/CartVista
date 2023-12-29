import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppTabs } from './BottomTabs';

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
};
