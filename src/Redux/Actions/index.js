
import { LANGUAGE_CHANGE, POST_CONTACT } from './types';

export function changeLanguage() {
  return async function (dispatch) {
    return dispatch({
      type: LANGUAGE_CHANGE,
    });
  };
}

export function postContact(payload) {
  return async function (dispatch) {
    /* const response = await axios.post("/", payload); */
    return dispatch({
      type: POST_CONTACT,
      payload: payload,
    })
  }
}
