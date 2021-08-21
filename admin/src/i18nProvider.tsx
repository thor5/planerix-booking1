import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from './i18n/en';
import russianMessages from './i18n/ru';

const messages = {
    en: () => import('./i18n/en').then(messages => messages.default),
};

export default polyglotI18nProvider(locale => {
    if (locale === 'en') {
        return messages[locale]();
    }

    // Always fallback on english
    return russianMessages;
}, 'ru');
