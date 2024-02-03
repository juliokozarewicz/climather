import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


// translation files
import en from './en.json';
import pt from './pt.json';

const resources = {
  en: en,
  pt: pt,
};

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'en',
  });

export default i18n;
