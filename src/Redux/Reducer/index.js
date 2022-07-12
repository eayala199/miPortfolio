import { LANGUAGE_CHANGE, POST_CONTACT } from '../Actions/types';

const initialState = {
  language: 'spanish',
  postContact: {},
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LANGUAGE_CHANGE:
      return {
        ...state,
        language: state.language === 'spanish' ? 'english' : 'spanish',
      };
    case POST_CONTACT:
      return {
        ...state,
        postContact: payload.payload,
      };
    default:
      return state;
  }
};
