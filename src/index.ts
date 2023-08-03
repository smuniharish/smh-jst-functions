import LocaleCodesList from './constants/LocaleCodes';
import { LocaleInterface, LocaleKeyInterface } from './interfaces/LocaleInterfaces';

const getLocaleByCode = (code: string): LocaleInterface | string => {
  for (const key in LocaleCodesList) {
    if (key === code) {
      return LocaleCodesList[key];
    }
  }
  return 'Code is invalid !!!';
};
const getLocaleList = (): LocaleKeyInterface => {
  return LocaleCodesList;
};
const getLocaleByLanguage = (word: string):LocaleInterface[] | [] => {
  const result = [];
  for (const key in LocaleCodesList) {
    const matchString = LocaleCodesList[key].language?.toLowerCase();
    if (matchString && matchString.match(word.toLowerCase())) {
      result.push(LocaleCodesList[key]);
    }
  }
  return result;
};
export { getLocaleList, getLocaleByCode, getLocaleByLanguage };
