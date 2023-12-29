import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { APPROUTES } from '../constants/enums';
import { Categories } from '../screens/Categories/Categories';
import { Favourite } from '../screens/Favourite/Favourite';
import { More } from '../screens/More/More';
import { NavigationParams } from '../types/types';
import { HomeStack } from './AppStack';

const Tab = createBottomTabNavigator<NavigationParams>();

export const AppTabs: FC = () => {
  const HomeTab = {
    tabBarLabel: APPROUTES.HOME,
  };

  const CategoryTab = {
    tabBarLabel: APPROUTES.CATEGORIES,
  };

  const FavouriteTab = {
    tabBarLabel: APPROUTES.FAVOURITE,
  };

  const MoreTab = {
    tabBarLabel: APPROUTES.MORE,
  };

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={APPROUTES.HOME}
        component={HomeStack}
        options={HomeTab}
      />
      <Tab.Screen
        name={APPROUTES.CATEGORIES}
        component={Categories}
        options={CategoryTab}
      />
      <Tab.Screen
        name={APPROUTES.FAVOURITE}
        component={Favourite}
        options={FavouriteTab}
      />
      <Tab.Screen name={APPROUTES.MORE} component={More} options={MoreTab} />
    </Tab.Navigator>
  );
};
