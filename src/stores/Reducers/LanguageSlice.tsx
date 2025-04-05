import { createSlice } from '@reduxjs/toolkit';
import translationEN from '../../Local/en.json';
import translationAR from '../../Local/ar.json';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { langInitialState } from '@/types/types';

const getLanguageFromLocalStorage = (): langInitialState => {
  const lang = window.localStorage.getItem('lang') || 'ar';
  const translations = lang === 'ar' ? translationAR : translationEN;

  return {
    lang,
    translations,
    languageLoading: false,
  };
};

const initialState: langInitialState = getLanguageFromLocalStorage();

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
      if (action.payload === 'en') {
        state.translations = translationEN;
      } else {
        state.translations = translationAR;
      }
      window.localStorage.setItem('lang', action.payload);
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;

export const useLanguageSelector = useSelector.withTypes<RootState>();
