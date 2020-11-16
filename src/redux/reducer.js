import {
  SET_COPY_LINK, SET_MODAL_CONTENT,
  SET_OPTIONAL_OPTIONS_INPUT_VALUE,
  SET_RADIO_INPUTS,
  SET_REQUIRED_OPTIONS_INPUT_VALUE, SET_RESULT_LINK,
  SET_SELECT_VALUE, SET_SHOW_MODAL,
  SET_SITE_INPUT_VALUE
} from './actionsTypes';

const initialState = {
  description: {
    descriptionTitle: 'Когда стоит использовать UTM-метки?',
    descriptionList: [
      {
        id: 1,
        text: 'Вы ведете рекламную кампанию в Google, Яндексе или социальных сетях и хотите узнать, откуда приходят ваши пользователи.'
      },
      {
        id: 2,
        text: 'Вы используете другие способы привлечения читателей и потенциальных клиентов и хотите узнать больше о том, откуда они к вам приходят.'
      },
      {
        id: 3,
        text: 'Вы ведете рассылку по листу ваших подписчиков с помощью сервисов и хотите узнать, насколько эффективна та или иная рассылка.'
      }
    ]
  },
  select: [
    {id: 1, text: 'http://'},
    {id: 2, text: 'https://'}
  ],
  selectValue: 'http://',
  inputPlaceholder: 'yoursite.com',
  inputValue: '',
  resultLink: 'http://yoursite.com/?',
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
  ],
  requiredOptions: {
    options: 'required',
    data: [
      {
        id: 1,
        name: 'Источник кампании',
        utmName: 'utm_source',
        placeholder: 'google, yandex, vk, facebook',
        description: '',
        value: '',
        modalText: {
          title: 'utm_source',
          titleText: 'название рекламной площадки',
          description: 'Нужен, чтобы указать название источника трафика',
          examples: {
            title: 'Примеры:',
            texts: [
              {
                id: 1,
                text: 'utm_source=google – контекстная реклама в Google Adwords',
              },
              {
                id: 2,
                text: 'utm_source=yandex — контекстная реклама в Яндекс.Директ',
              },
              {
                id: 3,
                text: 'utm_source=facebook — контекстная реклама в Facebook',
              },
              {
                id: 4,
                text: 'utm_source=vk — контекстная реклама в Вконтакте',
              }
            ]
          }
        }
      },
      {
        id: 2,
        name: 'Тип трафика',
        utmName: 'utm_medium',
        placeholder: 'cpc, email, banner, article',
        description: '',
        value: '',
        modalText: {
          title: 'utm_medium',
          titleText: 'тип рекламы',
          description: 'Чтобы определить типа кампании или рекламы',
          examples: {
            title: 'Примеры',
            texts: [
              {
                id: 1,
                text: 'utm_medium=organic – бесплатный переход',
              },
              {
                id: 2,
                text: 'utm_medium=cpc – контекстная реклама (cost per click, плата за клик)',
              },
              {
                id: 3,
                text: 'utm_medium=email — рассылка',
              },
              {
                id: 4,
                text: 'utm_medium=social — социальные сети',
              },
              {
                id: 5,
                text: 'utm_medium=banner — медийная реклама',
              },
              {
                id: 6,
                text: 'utm_medium=cpa — другая реклама (cost per action, плата за действие)',
              }
            ]
          }
        }
      },
      {
        id: 3,
        name: 'Название кампании',
        utmName: 'utm_campaign',
        placeholder: 'promo, discount, sale',
        description: '',
        value: '',
        modalText: {
          title: 'utm_campaign',
          titleText: 'название кампании',
          description: 'Позволит вам отличить одну рекламную кампанию от другой в статистике',
          examples: {
            title: 'Примеры',
            texts: [
              {
                id: 1,
                text: 'utm_campaign=mebel_dlya_doma – рекламная кампания мебели для дома',
              }
            ]
          }
        }
      },
    ],
  },
  optionalOptions: {
    options: 'optional',
    data: [
      {
        id: 1,
        name: 'Идентификатор объявления',
        utmName: 'utm_content',
        placeholder: 'link, landing page',
        description: '',
        value: '',
        modalText: {
          title: 'utm_content',
          titleText: 'дополнительная информация, которую можно отслеживать, если совпадают другие параметры',
          description: 'Часто используется как пометка для объявления внутри рекламной кампании. Название можно задать произвольно, удобнее всего использовать важные характеристики объявления — подкатегория товара или услуги, тип самого объявления и т. п.',
          examples: {
            title: 'Примеры',
            texts: [
              {
                id: 1,
                text: 'utm_content=zero_block240×60 — баннер 240 на 60 про Zero блок на Тильде',
              },
              {
                id: 2,
                text: 'utm_content=zero_block_text — текстовое объявление про Zero блок',
              }
            ]
          }
        }
      },
      {
        id: 2,
        name: 'Ключевое слово',
        utmName: 'utm_term',
        placeholder: 'free, -30%, registration',
        description: '',
        value: '',
        modalText: {
          title: 'utm_term',
          titleText: 'ключевое слово, с которого начался показ объявления',
          description: 'Позволит вам отличить одну рекламную кампанию от другой в статистике',
          examples: {
            title: 'Примеры',
            texts: []
          }
        }
      }
    ]
  },
  preparedValue: [
    {
      id: 1,
      requiredOptionsValue: [
        {
          id: 1,
          text: '',
          description: '',
        },
        {
          id: 2,
          text: '',
          description: '',
        },
        {
          id: 3,
          text: '',
          description: '',
        },
      ],
      optionalOptionsValue: [
        {
          id: 1,
          text: '',
          description: '',
        },
        {
          id: 2,
          text: '',
          description: '',
        },
      ]
    },
    {
      id: 2,
      requiredOptionsValue: [
        {
          id: 1,
          text: 'google',
          description: '',
        },
        {
          id: 2,
          text: 'cpc',
          description: '',
        },
        {
          id: 3,
          text: '{network}',
          description: 'Вместо {network} Google Adwords подставит \'g\'(поиск), \'s\'(поисковый партнер) или \'d\'(КМС)'
        },
      ],
      optionalOptionsValue: [
        {
          id: 1,
          text: '{creative}',
          description: 'Вместо {creative} Google Adwords автоматически подставит ID объявления'
        },
        {
          id: 2,
          text: '{keyword}',
          description: 'Вместо {keyword} Google Adwords автоматически подставит ключевое слово'
        },
      ]
    },
    {
      id: 3,
      requiredOptionsValue: [
        {
          id: 1,
          text: 'yandex',
          description: '',
        },
        {
          id: 2,
          text: 'cpc',
          description: '',
        },
        {
          id: 3,
          text: '{campaign_id}',
          description: 'Вместо {campaign_id} Яндекс.Директ подставит  ID кампании'
        },
      ],
      optionalOptionsValue: [
        {
          id: 1,
          text: '{ad_id}',
          description: 'Вместо {ad_id} Яндекс.Директ автоматически подставит ID объявления'
        },
        {
          id: 2,
          text: '{keyword}',
          description: 'Вместо {keyword} Яндекс.Директ автоматически подставит ключевое слово'
        },
      ]
    },
    {
      id: 4,
      requiredOptionsValue: [
        {
          id: 1,
          text: 'vkontakte',
          description: '',
        },
        {
          id: 2,
          text: 'cpc',
          description: '',
        },
        {
          id: 3,
          text: '{campaign_id}',
          description: 'Вместо {campaign_id} Вконтакте подставит  ID кампании'
        },
      ],
      optionalOptionsValue: [
        {
          id: 1,
          text: '{creative}',
          description: 'Вместо {creative} Вконтакте автоматически подставит ID объявления'
        },
        {
          id: 2,
          text: '',
          description: '',
        },
      ]
    },
    {
      id: 5,
      requiredOptionsValue: [
        {
          id: 1,
          text: 'facebook',
          description: '',
        },
        {
          id: 2,
          text: 'cpc',
          description: '',
        },
        {
          id: 3,
          text: 'promo',
          description: '',
        },
      ],
      optionalOptionsValue: [
        {
          id: 1,
          text: '',
          description: '',
        },
        {
          id: 2,
          text: '',
          description: '',
        },
      ]
    },
  ],
  isCopied: false,
  modalContent: {},
  showModal: false
};

const putValueInOptions = (opts, payload) => {
  const options = [...opts];
  const [id, value] = payload;

  const option = options.find(option => option.id === id);
  option.value = value;

  return options;
};

const putPrepareValueOptions = (ads, opts) => {
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

const utmHandler = (options, utm = '') => {
  options.forEach(({utmName, value}) => {
    if (value) {
      utm += `${utmName}=${value}&`;
    }
  });

  return utm;
};

const linkHandler = (selectValue, inputValue, reqOpts, optOpts, inputPlaceholder) => {
  let utm = '';

  utm = utmHandler(reqOpts);
  utm = utmHandler(optOpts, utm);
  utm = utm.slice(0, -1);

  if (inputValue) {
    return `${selectValue}${inputValue}/?${utm}`;
  }

  return `${selectValue}${inputPlaceholder}/?${utm}`;
};

const putPrepareContent = (options, id) => {
  return options.data.find(text => text.id === id);
};

const reducer = (state = initialState, {type, payload}) => {
  const {selectValue, inputValue, requiredOptions, optionalOptions, inputPlaceholder} = state;
  let link;

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

    case SET_RADIO_INPUTS:
      const inputs = [...state.radioInputs];
      inputs.forEach(input => input.checked = false);

      const radioInputId = payload;
      const input = inputs.find(input => input.id === radioInputId);
      input.checked = true;

      const opts = state.preparedValue.find(ads => ads.id === input.id);
      const reqOptsResult = putPrepareValueOptions(opts.requiredOptionsValue, state.requiredOptions.data);
      const optOptsResult = putPrepareValueOptions(opts.optionalOptionsValue, state.optionalOptions.data);

      return {
        ...state,
        radioInputs: inputs,
        requiredOptions: {
          ...state,
          data: reqOptsResult,
        },
        optionalOptions: {
          ...state,
          data: optOptsResult
        },
      };

    case SET_REQUIRED_OPTIONS_INPUT_VALUE:
      const reqOptions = putValueInOptions(state.requiredOptions.data, payload);

      return {
        ...state,
        requiredOptions: {
          ...state,
          data: reqOptions
        }
      };

    case SET_OPTIONAL_OPTIONS_INPUT_VALUE:
      const optOptions = putValueInOptions(state.optionalOptions.data, payload);

      return {
        ...state,
        optionalOptions: {
          ...state,
          data: optOptions
        }
      };

    case SET_RESULT_LINK:
      link = linkHandler(selectValue, inputValue, requiredOptions.data, optionalOptions.data, inputPlaceholder);

      return {
        ...state,
        resultLink: link
      };

    case SET_COPY_LINK:
      return {
        ...state,
        isCopied: payload
      };

    case SET_MODAL_CONTENT:
      const [options, id] = payload;

      let content;

      if (options === 'required') {
        content = putPrepareContent(state.requiredOptions, id);
      } else {
        content = putPrepareContent(state.optionalOptions, id);
      }

      return {
        ...state,
        modalContent: content.modalText
      };

    case SET_SHOW_MODAL:
      return {
        ...state,
        showModal: payload
      };

    default:
      return state;
  }
};

export default reducer;