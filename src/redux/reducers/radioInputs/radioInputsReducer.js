import {SET_OPTIONS_RESULT, SET_RADIO_INPUTS} from '../../actionsTypes';
import {locales} from '../../../locales';

const {generator: {radioInputs}} = locales;

const initialState = {
  radioInputs: [
    {
      id: 1,
      labelText: radioInputs[0].text,
      checked: true
    },
    {
      id: 2,
      labelText: radioInputs[1].text,
      checked: false
    },
    {
      id: 3,
      labelText: radioInputs[2].text,
      checked: false
    },
    {
      id: 4,
      labelText: radioInputs[3].text,
      checked: false
    },
    {
      id: 5,
      labelText: radioInputs[4].text,
      checked: false
    },
  ],
  optionsResult: {}
};

const radioInputsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
        case SET_RADIO_INPUTS:
      return {
        ...state,
        radioInputs: payload,
      };
    case SET_OPTIONS_RESULT:
      return {
        ...state,
        optionsResult: payload
      }
    default:
      return state;
  }
};

export default radioInputsReducer;