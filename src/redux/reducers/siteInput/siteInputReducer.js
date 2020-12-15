import {SET_SELECT_VALUE, SET_SITE_INPUT_VALUE} from '../../actionsTypes';
import {locales} from '../../../locales';

const {generator} = locales;
const {
  siteSelect: {placeholder: selectPlaceholder, value: selectValue},
  siteInput: {placeholder, value}
} = generator;

const initialState = {
  select: [
    {id: 1, text: selectPlaceholder[0].text},
    {id: 2, text: selectPlaceholder[1].text}
  ],
  selectValue: selectValue,
  inputPlaceholder: placeholder,
  inputValue: value,
};

const siteInputReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_SELECT_VALUE:
      return {
        ...state,
        selectValue: payload,
      };
    case SET_SITE_INPUT_VALUE:
      return {
        ...state,
        inputValue: payload,
      };
    default:
      return state;
  }
};

export default siteInputReducer;