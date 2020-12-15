import {SET_RADIO_INPUTS, SET_OPTIONS_RESULT} from '../../actionsTypes';

export const setRadioInputs = radioInputId => {
  return {
    type: SET_RADIO_INPUTS,
    payload: radioInputId
  };
};

export const seOptionsResult = radioInputId => {
  return {
    type: SET_OPTIONS_RESULT,
    payload: radioInputId
  };
};