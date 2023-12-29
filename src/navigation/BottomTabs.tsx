import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react';
import { SVGImage } from '../components';
import { APPROUTES } from '../constants/enums';
import { Categories, Favourite, More } from '../screens';
import { theme } from '../themes';
import { APP_IMAGES } from '../types/imageMapper';
import { NavigationParams } from '../types/types';
import dimensions from '../utils/dimensions';
import { HomeStack } from './AppStack';

const Tab = createBottomTabNavigator<NavigationParams>();

const renderTabBarIcon = (assetSrc: string) => () =>
  (
    <SVGImage
      assetSrc={assetSrc}
      width={dimensions.viewWidth(24)}
      height={dimensions.viewWidth(24)}
      fill={theme.palette.white.dark}
    />
  );

export const AppTabs: FC = () => {
  const HomeTab = {
    tabBarLabel: APPROUTES.HOME,
    tabBarIcon: renderTabBarIcon(APP_IMAGES.HOME),
  };

  const CategoryTab = {
    tabBarLabel: APPROUTES.CATEGORIES,
    tabBarIcon: renderTabBarIcon(APP_IMAGES.CATEGORY),
  };

  const FavouriteTab = {
    tabBarLabel: APPROUTES.FAVOURITE,
    tabBarIcon: renderTabBarIcon(APP_IMAGES.HEART),
  };

  const MoreTab = {
    tabBarLabel: APPROUTES.MORE,
    tabBarIcon: renderTabBarIcon(APP_IMAGES.MORE),
  };

  const tabBarOptions = {
    headerShown: false,
    tabBarStyle: {
      minHeight: dimensions.viewHeight(89),
      backgroundColor: theme.palette.stale.light,
      borderRadius: 30,
      paddingTop: dimensions.viewHeight(17),
      paddingBottom: dimensions.viewHeight(31),
      borderColor: theme.palette.stale.light,
    },
  };

  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
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
