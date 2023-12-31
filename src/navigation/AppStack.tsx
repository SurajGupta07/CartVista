import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { APPROUTES } from '../constants/enums';
import { Cart, Details, Home } from '../screens';
import { NavigationParams } from '../types/types';

const Stack = createNativeStackNavigator<NavigationParams>();

export const HomeStack: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{ animation: 'slide_from_left', headerShown: false }}>
      <Stack.Screen
        name={APPROUTES.HOMESTACK}
        component={Home}
        options={{ animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name={APPROUTES.DETAILS}
        component={Details}
        options={{ animation: 'slide_from_right' }}
      />
      <Stack.Screen
        name={APPROUTES.CART}
        component={Cart}
        options={{ animation: 'slide_from_right' }}
      />
    </Stack.Navigator>
  );
};
