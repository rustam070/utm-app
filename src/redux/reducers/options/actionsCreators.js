import {SET_OPTIONAL_OPTIONS_INPUT_VALUE, SET_REQUIRED_OPTIONS_INPUT_VALUE} from '../../actionsTypes';

export const setRequiredOptionsInputValue = payload => {
  return {
    type: SET_REQUIRED_OPTIONS_INPUT_VALUE,
    payload
  };
};

export const setOptionalOptionsInputValue = payload => {
  return {
    type: SET_OPTIONAL_OPTIONS_INPUT_VALUE,
    payload
  };
};
