import {SET_OPTIONS_INPUT_VALUE} from '../../actionsTypes';

export const setOptionsInputValue = payload => {
  return {
    type: SET_OPTIONS_INPUT_VALUE,
    payload
  };
};
