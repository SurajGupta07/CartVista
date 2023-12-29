import { DefaultTheme } from '@react-navigation/native';
import { t } from 'i18next';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { BaseLayout } from '../../components';
import { theme } from '../../themes';
import { styles } from './styles';

const languages = [
  { code: 'en', label: t('language:english') },
  { code: 'hn', label: t('language:hindi') },
];

const More = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('en');
  const selectedLanguageCode = i18n.language;

  return (
    <BaseLayout>
      <View>
        <Text style={styles.language}>
          {t('common:change_language')} ({lang})
        </Text>
        {languages.map(currentLang => {
          const selectedLanguage = currentLang.code === selectedLanguageCode;
          return (
            <Text
              key={currentLang.code}
              onPress={() => {
                setLang(currentLang.code);
                i18n.changeLanguage(currentLang.code);
              }}
              style={[
                {
                  color: selectedLanguage
                    ? DefaultTheme.colors.primary
                    : theme.palette.black.dark,
                },
                styles.languageText,
              ]}>
              {currentLang.label}
            </Text>
          );
        })}
      </View>
    </BaseLayout>
  );
};

export default React.memo(More);
