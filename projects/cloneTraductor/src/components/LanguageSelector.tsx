import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants';
import { FromLanguage, Language } from '../types.d';

type Props =
  | {
      type: 'from';
      value: FromLanguage;
      onChange: (language: FromLanguage) => void;
    }
  | { type: 'to'; value: Language; onChange: (language: Language) => void };
function LanguageSelector({ onChange, value, type }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as Language);
  };
  return (
    <select onChange={handleChange} value={value}>
      {type === 'from' && (
        <option value={AUTO_LANGUAGE}>Detectar idioma</option>
      )}
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, value]) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </select>
  );
}

export default LanguageSelector;
