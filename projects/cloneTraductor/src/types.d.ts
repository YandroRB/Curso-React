import {
  AUTO_LANGUAGE,
  SUPPORTED_LANGUAGES,
  TO_LANGUAGE_SUPPORT,
} from './constants';

export interface StateType {
  fromLanguage: FromLanguage;
  toLanguage: Language;
  fromText: string;
  result: string;
  loading: boolean;
}
export const SectionType = {
  From: 'From',
  To: 'To',
} as const;

export enum ActionType {
  INTERCHANGE_LANGUAGE = 'INTERCHANGE_LANGUAGE',
  SET_FROM_LANGUAGE = 'SET_FROM_LANGUAGE',
  SET_TO_LANGUAGE = 'SET_TO_LANGUAGE',
  SET_FROM_TEXT = 'SET_FROM_TEXT',
  SET_RESULT = 'SET_RESULT',
}

export type Language = keyof typeof SUPPORTED_LANGUAGES;
export type AutoLanguage = typeof AUTO_LANGUAGE;
export type ToLanguageSupport = keyof typeof TO_LANGUAGE_SUPPORT;
export type FromLanguage = Language | AutoLanguage;
export interface InterchangeLanguage {
  type: ActionType.INTERCHANGE_LANGUAGE;
}
export interface SetFromLanguage {
  type: ActionType.SET_FROM_LANGUAGE;
  payload: FromLanguage;
}
export interface SetToLanguage {
  type: ActionType.SET_TO_LANGUAGE;
  payload: Language;
}
export interface SetFromText {
  type: ActionType.SET_FROM_TEXT;
  payload: string;
}
export interface SetResult {
  type: ActionType.SET_RESULT;
  payload: string;
}

export type Action =
  | InterchangeLanguage
  | SetFromLanguage
  | SetToLanguage
  | SetFromText
  | SetResult;

export interface reducerHandlersType {
  [ActionType.INTERCHANGE_LANGUAGE]: (state: StateType) => StateType;
  [ActionType.SET_FROM_LANGUAGE]: (
    state: StateType,
    action: SetFromLanguage
  ) => StateType;
  [ActionType.SET_TO_LANGUAGE]: (
    state: StateType,
    action: SetToLanguage
  ) => StateType;
  [ActionType.SET_FROM_TEXT]: (
    state: StateType,
    action: SetFromText
  ) => StateType;
  [ActionType.SET_RESULT]: (state: StateType, action: SetResult) => StateType;
}
