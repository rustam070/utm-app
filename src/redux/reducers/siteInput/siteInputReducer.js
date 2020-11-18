import {SET_SELECT_VALUE, SET_SITE_INPUT_VALUE} from '../../actionsTypes';

const initialState = {
  select: [
    {id: 1, text: 'http://'},
    {id: 2, text: 'https://'}
  ],
  selectValue: 'http://',
  inputPlaceholder: 'yoursite.com',
  inputValue: '',
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