import {SET_RADIO_INPUTS,} from '../../actionsTypes';

const initialState = {
  radioInputs: [
    {
      id: 1,
      labelText: 'Свои значения',
      checked: true
    },
    {
      id: 2,
      labelText: 'Google Adwords',
      checked: false
    },
    {
      id: 3,
      labelText: 'Яндекс.Директ',
      checked: false
    },
    {
      id: 4,
      labelText: 'Вконтакте',
      checked: false
    },
    {
      id: 5,
      labelText: 'Facebook',
      checked: false
    },
  ]
};

const putPreparedValueOptions = (ads, opts) => {
  const options = [...opts];

  options.forEach(option => {
    ads.forEach(value => {
      if (option.id === value.id) {
        option.value = value.text;
        option.description = value.description;
      }
    });
  });

  return options;
};

const radioInputsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_RADIO_INPUTS:
      const [requiredOptions, optionalOptions, preparedOptions, id] = payload;

      const inputs = [...state.radioInputs];
      inputs.forEach(input => input.checked = false);

      const input = inputs.find(input => input.id === id);
      input.checked = true;

      const opts = preparedOptions.find(ads => ads.id === input.id);
      const reqOptsResult = putPreparedValueOptions(opts.requiredOptionsValue, requiredOptions);
      const optOptsResult = putPreparedValueOptions(opts.optionalOptionsValue, optionalOptions);

      return {
        ...state,
        radioInputs: inputs,
        requiredOptions: reqOptsResult,
        optionalOptions: optOptsResult
      };
    default:
      return state;
  }
};

export default radioInputsReducer;