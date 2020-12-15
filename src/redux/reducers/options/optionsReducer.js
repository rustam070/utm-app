import {SET_OPTIONS_INPUT_VALUE} from '../../actionsTypes';
import {locales} from '../../../locales';

const {
  generator: {options: {items}}
} = locales;

const initialState = {
  options: [
    {
      id: 1,
      title: items[0].title,
      name: items[0].name,
      placeholder: items[0].placeholder,
      description: '',
      value: ''
    },
    {
      id: 2,
      title: items[1].title,
      name: items[1].name,
      placeholder: items[1].placeholder,
      description: '',
      value: ''
    },
    {
      id: 3,
      title: items[2].title,
      name: items[2].name,
      placeholder: items[2].placeholder,
      description: '',
      value: ''
    },
    {
      id: 4,
      title: items[3].title,
      name: items[3].name,
      placeholder: items[3].placeholder,
      description: '',
      value: ''
    },
    {
      id: 5,
      title: items[4].title,
      name: items[4].name,
      placeholder: items[4].placeholder,
      description: '',
      value: ''
    }
  ],
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_OPTIONS_INPUT_VALUE:
      return {
        ...state,
        options: payload
      };
    default:
      return state;
  }
};

export default reducer;