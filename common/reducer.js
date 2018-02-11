import { SET_LANG } from './types';

const initialState = {
  avaliableLang: ['is', 'en'],
  lang: 'is',
  translations: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LANG:
      return {
        ...state,
        lang: action.payload.lang,
        translations: action.payload.translations,
      };

    default:
      return { ...state };
  }
}
