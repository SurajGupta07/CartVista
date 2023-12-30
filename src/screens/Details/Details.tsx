import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { BaseLayout, Header } from '../../components';
import { theme } from '../../themes';
import { NavigationParams, TNavRoutes } from '../../types/types';
import { styles } from './styles';

const Details: React.FC = () => {
  const route = useRoute<RouteProp<TNavRoutes, 'Details'>>();
  const navigation = useNavigation<NavigationProp<NavigationParams>>();
  const { product } = route.params;
  console.log(JSON.stringify(product, null, 2));

  const backHandler = () => {
    navigation.goBack();
  };

  return (
    <BaseLayout statusColor={theme.palette.white.dark} style={styles.container}>
      <Header onPress={backHandler} />
      <View style={styles.titleRow}>
        <Text style={styles.title}>{product.title}</Text>
        <AirbnbRating
          count={5}
          defaultRating={product.rating}
          size={16}
          showRating={false}
          starContainerStyle={styles.starContainer}
        />
      </View>
    </BaseLayout>
  );
};

export default React.memo(Details);
