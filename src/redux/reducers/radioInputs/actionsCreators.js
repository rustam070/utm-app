import {SET_RADIO_INPUTS} from '../../actionsTypes';

export const setRadioInputs = radioInputId => {
  return {
    type: SET_RADIO_INPUTS,
    payload: radioInputId
  };
};