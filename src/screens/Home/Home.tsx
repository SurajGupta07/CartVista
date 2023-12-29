import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { APPROUTES } from '../../constants/enums';
import { NavigationParams } from '../../types/types';
import { THome } from './types';

export const Home: React.FC<THome> = () => {
  const navigation = useNavigation<NavigationProp<NavigationParams>>();
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Details"
        onPress={() => navigation.navigate(APPROUTES.DETAILS)}
      />
    </View>
  );
};
