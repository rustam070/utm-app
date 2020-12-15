export const generator =  {
  siteAddressTitle: 'Адрес вашей страницы',
  siteSelect: {
    placeholder: [
      {text: 'http://'},
      {text: 'https://'},
    ],
    value: 'http://'
  },
  siteInput: {
    placeholder: 'yoursite.com',
    value: '',
  },
  trafficSourceTitle: 'Источник трафика',
  radioInputs: [
    {text: 'Свои значения'},
    {text: 'Google Adwords'},
    {text: 'Яндекс.Директ'},
    {text: 'Вконтакте'},
    {text: 'Facebook'},
  ],
  options: {
    title: 'Параметры',
    items: [
      {
        title: 'Источник кампании',
        name: 'utm_source',
        placeholder: 'google, yandex, vk, facebook',
      },
      {
        title: 'Тип трафика',
        name: 'utm_medium',
        placeholder: 'cpc, email, banner, article',
      },
      {
        title: 'Название кампании',
        name: 'utm_campaign',
        placeholder: 'promo, discount, sale',
      },
      {
        title: 'Идентификатор объявления',
        name: 'utm_content',
        placeholder: 'link, landing page',
      },
      {
        title: 'Ключевое слово',
        name: 'utm_term',
        placeholder: 'free, -30%, registration',
      },
    ],
  },
  preparedOptions: [
    {
      id: 1,
      optionsValue: [
        {
          id: 1,
          text: '',
          description: ''
        },
        {
          id: 2,
          text: '',
          description: ''
        },
        {
          id: 3,
          text: '',
          description: ''
        },
        {
          id: 4,
          text: '',
          description: ''
        },
        {
          id: 5,
          text: '',
          description: ''
        }
      ],
    },
    {
      id: 2,
      optionsValue: [
        {
          id: 1,
          text: 'google',
          description: ''
        },
        {
          id: 2,
          text: 'cpc',
          description: ''
        },
        {
          id: 3,
          text: '{network}',
          description: 'Вместо {network} Google Adwords подставит \'g\'(поиск), \'s\'(поисковый партнер) или \'d\'(КМС)'
        },
        {
          id: 4,
          text: '{creative}',
          description: 'Вместо {creative} Google Adwords автоматически подставит "id" объявления'
        },
        {
          id: 5,
          text: '{keyword}',
          description: 'Вместо {keyword} Google Adwords автоматически подставит ключевое слово'
        }
      ],
    },
    {
      id: 3,
      optionsValue: [
        {
          id: 1,
          text: 'yandex',
          description: ''
        },
        {
          id: 2,
          text: 'cpc',
          description: ''
        },
        {
          id: 3,
          text: '{campaign_"id"}',
          description: 'Вместо {campaign_"id"} Яндекс.Директ подставит  "id" кампании'
        },
        {
          id: 4,
          text: '{ad_"id"}',
          description: 'Вместо {ad_"id"} Яндекс.Директ автоматически подставит "id" объявления'
        },
        {
          id: 5,
          text: '{keyword}',
          description: 'Вместо {keyword} Яндекс.Директ автоматически подставит ключевое слово'
        }
      ],
    },
    {
      id: 4,
      optionsValue: [
        {
          id: 1,
          text: 'vkontakte',
          description: ''
        },
        {
          id: 2,
          text: 'cpc',
          description: ''
        },
        {
          id: 3,
          text: '{campaign_"id"}',
          description: 'Вместо {campaign_"id"} Вконтакте подставит  "id" кампании'
        },
        {
          id: 4,
          text: '{creative}',
          description: 'Вместо {creative} Вконтакте автоматически подставит "id" объявления'
        },
        {
          id: 5,
          text: '',
          description: ''
        }
      ]
    },
    {
      id: 5,
      optionsValue: [
        {
          id: 1,
          text: 'facebook',
          description: ''
        },
        {
          id: 2,
          text: 'cpc',
          description: ''
        },
        {
          id: 3,
          text: 'promo',
          description: ''
        },
        {
          id: 4,
          text: '',
          description: ''
        },
        {
          id: 5,
          text: '',
          description: ''
        }
      ]
    }
  ]
};