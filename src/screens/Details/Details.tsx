import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import Carousel from 'react-native-snap-carousel';
import { BaseLayout, Header, SVGImage } from '../../components';
import { theme } from '../../themes';
import { NavigationParams, TNavRoutes } from '../../types/types';
import dimensions from '../../utils/dimensions';
import { styles } from './styles';
import { CarouselItemProps } from './types';

const areEqual = (
  prevProps: CarouselItemProps,
  nextProps: CarouselItemProps,
) => {
  return prevProps.item === nextProps.item;
};

const CarouselItem = memo(
  ({ item }: { item: string }) => (
    <SVGImage
      url={item}
      height={dimensions.viewHeight(207)}
      width={dimensions.screenWidth}
    />
  ),
  areEqual,
);

const Details: React.FC = () => {
  const route = useRoute<RouteProp<TNavRoutes, 'Details'>>();
  const navigation = useNavigation<NavigationProp<NavigationParams>>();
  const { product } = route.params;
  const sliderWidth = dimensions.screenWidth;
  const itemWidth = dimensions.screenWidth;
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
      <View>
        <Carousel
          data={product.images}
          renderItem={({ item }) => <CarouselItem item={item} />}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          autoplay={true}
          autoplayInterval={2000}
        />
      </View>
      <View style={styles.description}>
        <View>
          <Text>{product.price}</Text>
          <Text>{product.discountPercentage} OFF</Text>
        </View>
        <View>
          <Text>Add To Cart</Text>
        </View>
        <View>
          <Text>Details</Text>
          <Text>{product.description}</Text>
        </View>
      </View>
    </BaseLayout>
  );
};

export default React.memo(Details);
