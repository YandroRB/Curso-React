import { useReducer } from 'react';
import {
  Action,
  ActionType,
  FromLanguage,
  Language,
  reducerHandlersType,
  StateType,
} from '../types.d';
import { AUTO_LANGUAGE } from '../constants';
const initialState: StateType = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false,
};

const reducerHandlers: reducerHandlersType = {
  [ActionType.INTERCHANGE_LANGUAGE]: (state) => {
    if (state.fromLanguage === AUTO_LANGUAGE) return state;
    const loading = state.fromText !== '';
    return {
      ...state,
      loading,
      result: '',
      fromText: state.result,
      fromLanguage:
        state.toLanguage.length > 2
          ? (state.toLanguage.slice(0, 1) as FromLanguage)
          : state.toLanguage,
      toLanguage: state.fromLanguage,
    };
  },
  [ActionType.SET_FROM_LANGUAGE]: (state, action) => {
    return {
      ...state,
      fromLanguage: action.payload,
    };
  },
  [ActionType.SET_TO_LANGUAGE]: (state, action) => {
    return {
      ...state,
      toLanguage: action.payload,
    };
  },
  [ActionType.SET_FROM_TEXT]: (state, action) => {
    const loading = state.fromText !== '';
    return {
      ...state,
      loading,
      fromText: action.payload,
    };
  },
  [ActionType.SET_RESULT]: (state, action) => {
    return {
      ...state,
      loading: false,
      result: action.payload,
    };
  },
};
const reducer = (state: StateType, action: Action): StateType => {
  const reducerHandler = reducerHandlers[action.type];
  if ('payload' in action) {
    return reducerHandler
      ? (reducerHandler as (state: StateType, action: Action) => StateType)(
          state,
          action
        )
      : state;
  }
  return reducerHandler
    ? (reducerHandler as (state: StateType) => StateType)(state)
    : state;
};
export function useTranslate() {
  const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] =
    useReducer(reducer, initialState);
  const interChangeLanguage = () => {
    dispatch({ type: ActionType.INTERCHANGE_LANGUAGE });
  };
  const setfromLanguage = (payload: FromLanguage) => {
    dispatch({ type: ActionType.SET_FROM_LANGUAGE, payload });
  };
  const setToLanguage = (payload: Language) => {
    dispatch({ type: ActionType.SET_TO_LANGUAGE, payload });
  };
  const setFromText = (payload: string) => {
    dispatch({ type: ActionType.SET_FROM_TEXT, payload });
  };
  const setResult = (payload: string) => {
    dispatch({ type: ActionType.SET_RESULT, payload });
  };
  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interChangeLanguage,
    setfromLanguage,
    setToLanguage,
    setFromText,
    setResult,
  };
}
