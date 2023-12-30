import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { SVGImage } from '../SVGImage/SvgImage';
import { styles } from './styles';
import { HCardProps } from './types';
import { useTranslation } from 'react-i18next';

export const HorizontalCard = (props: HCardProps) => {
  const { t } = useTranslation();
  const { thumbnails, height, width } = props;

  return (
    <View>
      <FlatList
        data={thumbnails}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <SVGImage url={item} height={height} width={width} />
            <View style={styles.textConatiner}>
              <Text style={styles.subTitle}>{t('common:get')}</Text>
              <Text style={styles.title}>{t('common:discount')}</Text>
              <Text style={styles.label}>{t('common:order')}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
