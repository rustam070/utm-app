import {SET_OPTIONAL_OPTIONS_INPUT_VALUE, SET_REQUIRED_OPTIONS_INPUT_VALUE} from '../../actionsTypes';

const initialState = {
  requiredOptions: [
    {
      id: 1,
      name: 'Источник кампании',
      utmName: 'utm_source',
      placeholder: 'google, yandex, vk, facebook',
      description: '',
      value: ''
    },
    {
      id: 2,
      name: 'Тип трафика',
      utmName: 'utm_medium',
      placeholder: 'cpc, email, banner, article',
      description: '',
      value: ''
    },
    {
      id: 3,
      name: 'Название кампании',
      utmName: 'utm_campaign',
      placeholder: 'promo, discount, sale',
      description: '',
      value: ''
    },
  ],
  optionalOptions: [
    {
      id: 1,
      name: 'Идентификатор объявления',
      utmName: 'utm_content',
      placeholder: 'link, landing page',
      description: '',
      value: ''
    },
    {
      id: 2,
      name: 'Ключевое слово',
      utmName: 'utm_term',
      placeholder: 'free, -30%, registration',
      description: '',
      value: ''
    }
  ],
};

const putValueInOptions = payload => {
  const [opts, id, value] = payload;
  const options = [...opts];

  const option = options.find(option => option.id === id);
  option.value = value;

  return options;
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_REQUIRED_OPTIONS_INPUT_VALUE:
      const reqOptions = putValueInOptions(payload);

      return {
        ...state,
        requiredOptions: reqOptions
      };

    case SET_OPTIONAL_OPTIONS_INPUT_VALUE:
      const optOptions = putValueInOptions(payload);

      return {
        ...state,
        optionalOptions: optOptions
      };
    default:
      return state;
  }
};

export default reducer;