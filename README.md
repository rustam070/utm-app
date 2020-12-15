
### В данном репозитории представлен небольшой сервис (далее - приложение) для удобного формирования UTM-меток.

##### Для чего нужны UTM-метки? 
UTM-метки помогают получить владельцам бизнеса и маркетологам подробную информацию о каждом источнике трафика. Например, определить, какие участки рекламной кампании приносят наименьшее количество прибыли. Это поможет оперативно реагировать на изменения на сайте и перераспределять рекламный бюджет.

***

##### Приложение создано с помощью:
*  Язык программирования - JavaScript;
*  Библиотека/Фреймворк - React;
*  State-менеджер - Redux;
*  Оформление стилей - Sass.

***

##### Установка и запуск приложения
Для работы с кодовой базой приложения был использован готовый инструмент create react app.   
Установить и запустить приложение можно следующими действиями:

В вашей командной строке:
> клонировать репозиторий  
```git clone https://github.com/rustam070/utm-app.git```

> перейти в папку проекта  
```cd utm-app```
  
> установка зависимостей  
```npm install```

> запуск приложения  
 ```npm start```

> сборка (опционально)   
```npm run build```

***

##### Содержание приложения:
*  Входной файл приложения - index.js;
*  Компонент-контейнер в котором представлены все секции приложения - App.js;
*  Стейт изолирован в папке redux;
*  В папке components находятся компоненты, отвечающие за UI приложения;
*  В папке locales находится весь текст приложения.
*  Стили компонентов находятся в папке styles.

***

##### Пример использования:
В секции “Адрес вашей страницы” пользователь может добавить наименование сайта, а также выбрать протокол между http и https.

В поле “Источник трафика” пользователь может выбрать предложенные источники трафика или же указать свои значения. 

При выборе предложенных источников трафика пользователю будут предложены рекомендуемые параметры utm-меток, которые пользователь может кастомизировать под нужды своей рекламной кампании.

Результатом в блоке сайта с одноименным названием является ссылка, которая будет автоматически сформирована в соответствии с указанными пользователем параметрами. Для того, чтобы скопировать ссылку в буфер обмена пользователь может нажать на кнопку “Копировать”.

Примечание:  
_На данный момент приложение не оптимизировано под мобильные устройства. Для удобного пользования приложением используйте устройства с разрешением экрана более 650px._
