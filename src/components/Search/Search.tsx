import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, Text, TextInput, View } from 'react-native';
import { theme } from '../../themes';
import { APP_IMAGES } from '../../types/imageMapper';
import dimensions from '../../utils/dimensions';
import { ConditionRenderer } from '../ConditionRenderer/ConditionRenderer';
import { SVGImage } from '../SVGImage/SvgImage';
import { styles } from './styles';

export const SearchBar = () => {
  const { t } = useTranslation();
  const [showInput, setShowInput] = useState<boolean>(false);
  let searchValue: string = '';

  const onTextChange = (str: string) => {
    searchValue = str;
  };

  const clearInput = () => {
    searchValue = '';
    setShowInput(false);
  };

  return (
    <View style={styles.searchSection}>
      <ConditionRenderer
        state={showInput}
        C1={
          <View style={styles.searchSection}>
            <TextInput
              placeholderTextColor={theme.palette.white.dark}
              placeholder={'Search Products or store'}
              textAlign="left"
              onChangeText={onTextChange}
              editable={true}
              style={styles.inputBar}
              keyboardType="default"
              underlineColorAndroid="transparent"
              returnKeyType="done"
              onBlur={() => {
                if (searchValue === '') {
                  setShowInput(false);
                }
              }}
              autoFocus
            />
            <Pressable style={styles.clearButton} onPress={clearInput}>
              <Text style={styles.cross}>X</Text>
            </Pressable>
          </View>
        }
        C2={
          <Pressable
            style={styles.searchSection}
            onPress={() => setShowInput(true)}>
            <View style={styles.searchIcon}>
              <SVGImage
                assetSrc={APP_IMAGES.SEARCH}
                fill={theme.palette.white.dark}
                height={dimensions.viewHeight(19)}
                width={dimensions.viewWidth(19)}
              />
            </View>
            <Text style={styles.inputBarText}>{t('common:search')}</Text>
          </Pressable>
        }
      />
    </View>
  );
};
