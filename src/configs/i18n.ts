import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(
    resourcesToBackend((language, namespace, callback) => {
      import(`../locales/${language}/${namespace}.json`)
        .then((resources) => {
          callback(null, resources.default);
        })
        .catch((error) => {
          callback(error, null);
        });
    })
  )
  .init({
    fallbackLng: 'en',
    nsSeparator: false,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      format: function (value, format, lgn) {
        if (lgn === 'kr') {
          return value;
        }

        if (format === 'uppercase') return value.toUpperCase();
        if (format === 'lowercase') return value.toLowerCase();
        if (format === 'capitalize') return `${value.substr(0, 1).toUpperCase()}${value.substr(1)}`;

        return value;
      },
    },
  });

export default i18n;
