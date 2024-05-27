import { useTranslation } from "react-i18next";

const languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'hi', name: 'हिंदी' }
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    }
    return (
        <select onChange={changeLanguage}>
            {languages.map(lang => (
                <option key={lang.code} value={lang.code}>
                    {lang.name}
                </option>
            ))}
        </select>
    );
}

export default LanguageSelector;