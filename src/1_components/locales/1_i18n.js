import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { NativeModules, Platform } from 'react-native';

// language files
import en from './en.json';
import pt from './pt.json';

const resources = {
  en: en,
  pt: pt,
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    const deviceLanguage = Platform.OS === 'ios' ? NativeModules.SettingsManager.settings.AppleLocale : NativeModules.I18nManager.localeIdentifier;
    callback(deviceLanguage);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: 'en',
  });

export default i18n;
