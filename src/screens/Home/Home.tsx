import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseLayout, Header, SVGImage, SearchBar } from '../../components';
import { useProduct } from '../../contexts/ProductContext';
import { theme } from '../../themes';
import { styles } from './styles';
import { THome } from './types';
import { Text, View } from 'react-native';
import { APP_IMAGES } from '../../types/imageMapper';
import dimensions from '../../utils/dimensions';

const Home: React.FC<THome> = () => {
  const { t } = useTranslation();
  const { products } = useProduct();
  console.log(JSON.stringify(products, null, 2));

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
    </BaseLayout>
  );
};

export default React.memo(Home);
