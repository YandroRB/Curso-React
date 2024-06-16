import { useEffect } from 'react';
import './App.css';
import {
  PhArrowsLeftRightBold,
  PhSpeakerHighFill,
  SolarCopyBoldDuotone,
} from './components/Icons';
import LanguageSelector from './components/LanguageSelector';
import TextArea from './components/TextArea';
import { AUTO_LANGUAGE, TO_LANGUAGE_SUPPORT } from './constants';
import { useTranslate } from './hooks/useTranslate';
import { SectionType, ToLanguageSupport } from './types.d';
import { translate } from './services/translate';
import { useDebounce } from './hooks/useDebounce';

function App() {
  const {
    setfromLanguage,
    setToLanguage,
    toLanguage,
    interChangeLanguage,
    fromLanguage,
    fromText,
    result,
    setFromText,
    setResult,
    loading,
  } = useTranslate();
  const fromTextDebounced = useDebounce(fromText, 300);
  const handleClipboard = () => {
    navigator.clipboard.writeText(result).catch(() => {
      console.log('(❁´◡`❁)');
    });
  };
  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(result);
    const toLanguageCode =
      toLanguage in TO_LANGUAGE_SUPPORT
        ? TO_LANGUAGE_SUPPORT[toLanguage as ToLanguageSupport][0]
        : toLanguage;
    utterance.lang = toLanguageCode;
    speechSynthesis.speak(utterance);
  };
  useEffect(() => {
    if (fromTextDebounced === '') return;
    translate({
      fromLanguage,
      toLanguage,
      text: fromTextDebounced,
    })
      .then((response) => {
        setResult(response);
      })
      .catch((error) => {
        setResult('Hubo un error al intentar traducir');
        console.error(error);
      });
  }, [fromLanguage, toLanguage, fromTextDebounced]);
  return (
    <>
      <h1 className="">Traductor</h1>
      <section className=" flex">
        <div className="flex flex-col">
          <LanguageSelector
            type="from"
            value={fromLanguage}
            onChange={setfromLanguage}
          />
          <TextArea
            type={SectionType.From}
            value={fromText}
            onChange={setFromText}
          />
          <small>{fromText.length}/250</small>
        </div>
        <div>
          <button
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interChangeLanguage}
          >
            <PhArrowsLeftRightBold />
          </button>
        </div>
        <div className="flex flex-col">
          <LanguageSelector
            type="to"
            value={toLanguage}
            onChange={setToLanguage}
          />
          <TextArea
            loading={loading}
            type={SectionType.To}
            value={result}
            onChange={setResult}
          />
          <button onClick={handleClipboard}>
            <SolarCopyBoldDuotone />
          </button>
          <button onClick={handleSpeak}>
            <PhSpeakerHighFill />
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
