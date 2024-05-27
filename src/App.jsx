import { useTranslation } from 'react-i18next'
import LanguageSelector from './components/language-selector';
import './App.css'

const App = () => {
  const { t } = useTranslation();
  const { text1, text2 } = t('desc');
  return (
    <>
      <LanguageSelector />
      <h1>{t('greeting')}</h1>
      <p>{text1}</p>
      <p>{text2}</p>
      
    </>
  )
}

export default App
