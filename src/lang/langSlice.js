import { createSlice } from '@reduxjs/toolkit';

export const languages = [
  { code: 'FA', locale: 'fa-IR', direction: 'rtl' },
  { code: 'EN', locale: 'en-US', direction: 'ltr' },
  // { code: 'ES', locale: 'es-ES', direction: 'ltr' },
  // { code: 'DE', locale: 'de-DE', direction: 'ltr' },
];
const navigatorLang = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;

const findOrDefault = (key) => {
  return languages[0] || languages.find((x) => x.locale === key || x.code === key);
};

const initialState = {
  languages,
  currentLang: findOrDefault(navigatorLang),
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLang(state, action) {
      state.currentLang = findOrDefault(action.payload);
    },
  },
});
export const { changeLang } = langSlice.actions;
const langReducer = langSlice.reducer;

export default langReducer;