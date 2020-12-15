export const modal = {
  modal: [
    {
      id: 1,
      modalText: {
        title: 'utm_source',
        titleText: 'название рекламной площадки',
        why: 'Зачем нужен:',
        description: 'Нужен, чтобы указать название источника трафика',
        examples: {
          title: 'Примеры:',
          texts: [
            {
              id: 1,
              text: 'utm_source=google – контекстная реклама в Google Adwords'
            },
            {
              id: 2,
              text: 'utm_source=yandex — контекстная реклама в Яндекс.Директ'
            },
            {
              id: 3,
              text: 'utm_source=facebook — контекстная реклама в Facebook'
            },
            {
              id: 4,
              text: 'utm_source=vk — контекстная реклама в Вконтакте'
            }
          ]
        }
      }
    },
    {
      id: 2,
      modalText: {
        title: 'utm_medium',
        titleText: 'тип рекламы',
        why: 'Зачем нужен:',
        description: 'Чтобы определить типа кампании или рекламы',
        examples: {
          title: 'Примеры:',
          texts: [
            {
              id: 1,
              text: 'utm_medium=organic – бесплатный переход'
            },
            {
              id: 2,
              text: 'utm_medium=cpc – контекстная реклама (cost per click, плата за клик)'
            },
            {
              id: 3,
              text: 'utm_medium=email — рассылка'
            },
            {
              id: 4,
              text: 'utm_medium=social — социальные сети'
            },
            {
              id: 5,
              text: 'utm_medium=banner — медийная реклама'
            },
            {
              id: 6,
              text: 'utm_medium=cpa — другая реклама (cost per action, плата за действие)'
            }
          ]
        }
      }
    },
    {
      id: 3,
      modalText: {
        title: 'utm_campaign',
        titleText: 'название кампании',
        why: 'Зачем нужен:',
        description: 'Позволит вам отличить одну рекламную кампанию от другой в статистике',
        examples: {
          title: 'Примеры:',
          texts: [
            {
              id: 1,
              text: 'utm_campaign=mebel_dlya_doma – рекламная кампания мебели для дома'
            }
          ]
        }
      }
    },
    {
      id: 4,
      modalText: {
        title: 'utm_content',
        titleText: 'дополнительная информация, которую можно отслеживать, если совпадают другие параметры',
        why: 'Зачем нужен:',
        description: 'Часто используется как пометка для объявления внутри рекламной кампании. Название можно задать произвольно, удобнее всего использовать важные характеристики объявления — подкатегория товара или услуги, тип самого объявления и т. п.',
        examples: {
          title: 'Примеры:',
          texts: [
            {
              id: 1,
              text: 'utm_content=zero_block240×60 — баннер 240 на 60 про Zero блок на Тильде'
            },
            {
              id: 2,
              text: 'utm_content=zero_block_text — текстовое объявление про Zero блок'
            }
          ]
        }
      }
    },
    {
      id: 5,
      modalText: {
        title: 'utm_term',
        titleText: 'ключевое слово, с которого начался показ объявления',
        why: 'Зачем нужен:',
        description: 'Позволит вам отличить одну рекламную кампанию от другой в статистике',
        examples: {
          title: 'Примеры:',
          texts: []
        }
      }
    }
  ]
};