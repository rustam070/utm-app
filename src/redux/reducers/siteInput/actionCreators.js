import {SET_SELECT_VALUE, SET_SITE_INPUT_VALUE} from '../../actionsTypes';

export const setSelectValue = value => {
  return {
    type: SET_SELECT_VALUE,
    payload: value
  };
};

export const setSiteInputValue = value => {
  return {
    type: SET_SITE_INPUT_VALUE,
    payload: value
  };
};