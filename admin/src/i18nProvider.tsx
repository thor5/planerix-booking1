import polyglotI18nProvider from 'ra-i18n-polyglot';
import englishMessages from './i18n/en';

const messages = {
    ru: () => import('./i18n/ru').then(messages => messages.default),
};

export default polyglotI18nProvider(locale => {
    if (locale === 'ru') {
        return messages[locale]();
    }

    // Always fallback on english
    return englishMessages;
}, 'en');