import { AUTO_LANGUAGE, TO_LANGUAGE_SUPPORT } from '../constants';
import { FromLanguage, Language, ToLanguageSupport } from '../types.d';

const apiKey = import.meta.env.VITE_DEEPL_API_KEY as string;
const apiUrl = 'https://api-free.deepl.com/v2/translate';
interface Params {
  fromLanguage: FromLanguage;
  toLanguage: Language;
  text: string;
}
interface DeepLResponse {
  translations: {
    detected_source_language: string;
    text: string;
  }[];
}
export async function translate({ fromLanguage, toLanguage, text }: Params) {
  if (fromLanguage === toLanguage) return text;
  const toLanguageCode =
    toLanguage in TO_LANGUAGE_SUPPORT
      ? TO_LANGUAGE_SUPPORT[toLanguage as ToLanguageSupport][0]
      : toLanguage;
  const data = new URLSearchParams();
  data.append('auth_key', apiKey);
  data.append('text', text);
  data.append('target_lang', toLanguageCode);
  if (fromLanguage !== AUTO_LANGUAGE) data.append('source_lang', fromLanguage);
  const response = await fetch(apiUrl, {
    method: 'POST',
    body: data,
  });
  if (!response.ok)
    throw new Error(
      'Hubo un problema al momento de conectar con la API de Deepl'
    );
  const result = (await response.json()) as DeepLResponse;
  return result.translations[0].text;
}
