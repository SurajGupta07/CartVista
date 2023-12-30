import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import {
  BaseLayout,
  Card,
  Header,
  SVGImage,
  SearchBar,
} from '../../components';
import { HorizontalCard } from '../../components/HorizontalCard/HorizontalCard';
import { APPROUTES } from '../../constants/enums';
import { useProduct } from '../../contexts/ProductContext';
import { theme } from '../../themes';
import { APP_IMAGES } from '../../types/imageMapper';
import { NavigationParams, Product } from '../../types/types';
import dimensions from '../../utils/dimensions';
import { styles } from './styles';
import { THome } from './types';

const Home: React.FC<THome> = () => {
  const navigation = useNavigation<NavigationProp<NavigationParams>>();
  const { t } = useTranslation();
  const { products } = useProduct();

  const thumbnails = products
    ?.filter((_, index) => index < 5)
    .map(product => product.thumbnail);

  const detailsNavigator = (product: Product) => {
    navigation.navigate(APPROUTES.DETAILS, { product });
  };

  return (
    <BaseLayout style={styles.container}>
      <Header
        title={t('common:username')}
        headerColor={theme.palette.secondary.light}
        titleColor={theme.palette.white.dark}
      />
      <View style={styles.searchBar}>
        <SearchBar />
      </View>
      <View style={styles.address}>
        <View>
          <Text style={styles.title}>{t('common:delivery')}</Text>
          <View style={styles.flexRow}>
            <Text style={styles.subTitle}>{t('common:address')}</Text>
            <SVGImage
              assetSrc={APP_IMAGES.DROP_ARROW}
              height={dimensions.viewHeight(6)}
              width={dimensions.viewWidth(6)}
            />
          </View>
        </View>
        <View>
          <Text style={styles.title}>{t('common:within')}</Text>
          <View style={styles.flexRow}>
            <Text style={styles.subTitle}>{t('common:hour')}</Text>
            <SVGImage
              assetSrc={APP_IMAGES.DROP_ARROW}
              height={dimensions.viewHeight(6)}
              width={dimensions.viewWidth(6)}
            />
          </View>
        </View>
      </View>
      <View style={styles.products}>
        {products !== null && (
          <HorizontalCard
            thumbnails={thumbnails}
            height={dimensions.viewHeight(68)}
            width={dimensions.viewWidth(68)}
          />
        )}
        <Text style={styles.listTitle}>{t('common:recommended')}</Text>
        <View style={styles.listContainer}>
          <FlatGrid
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            itemDimension={160}
            spacing={15}
            data={products || []}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => detailsNavigator(item)}>
                <Card item={item} />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </BaseLayout>
  );
};

export default React.memo(Home);
