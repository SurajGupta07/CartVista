import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, Text, View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import Carousel from 'react-native-snap-carousel';
import { BaseLayout, Button, Header, SVGImage } from '../../components';
import { theme } from '../../themes';
import { NavigationParams, TNavRoutes } from '../../types/types';
import dimensions from '../../utils/dimensions';
import { styles } from './styles';
import { CarouselItemProps } from './types';
import { useCartAction } from '../../hooks/useCartAction';

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
  const { t } = useTranslation();
  const { product } = route.params;
  const { addToCartOnClick } = useCartAction();
  const sliderWidth = dimensions.screenWidth;
  const itemWidth = dimensions.screenWidth;

  const backHandler = () => {
    navigation.goBack();
  };

  return (
    <BaseLayout statusColor={theme.palette.white.dark} style={styles.container}>
      <Header onPress={backHandler} />
      <ScrollView>
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
          <View style={styles.flexRow}>
            <Text style={styles.price}>$ {product.price}</Text>
            <Text style={styles.discount}>
              $ {product.discountPercentage} {t('common:off')}
            </Text>
          </View>
          <View style={[styles.flexRow, styles.mv30]}>
            <Button
              title={t('common:addToCart')}
              onPress={() => addToCartOnClick({ product })}
              buttonContainerStyle={styles.outlineBtn}
              titleStyle={styles.outlineBtnTitle}
            />
            <Button
              title={t('common:buyNow')}
              onPress={() => {}}
              titleStyle={styles.btnTitle}
              buttonContainerStyle={styles.btn}
            />
          </View>
          <View>
            <Text style={styles.details}>{t('common:details')}</Text>
            <Text style={styles.desc}>{product.description}</Text>
          </View>
        </View>
      </ScrollView>
    </BaseLayout>
  );
};

export default React.memo(Details);
