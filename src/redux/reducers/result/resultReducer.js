import {SET_COPY_LINK, SET_RESULT_LINK} from '../../actionsTypes';
import {locales} from '../../../locales';

const {result: {resultLink}} = locales;

const initialState = {
  resultLink,
  isLinkCopied: false,
};

const resultReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_RESULT_LINK:
      return {
        ...state,
        resultLink: payload
      };
    case SET_COPY_LINK:
      return {
        ...state,
        isLinkCopied: payload
      };
    default:
      return state;
  }
};

export default resultReducer;