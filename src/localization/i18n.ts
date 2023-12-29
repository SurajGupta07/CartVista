import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import hn from './hn';

const resources = {
  en,
  hn,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
