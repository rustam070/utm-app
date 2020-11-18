import {SET_COPY_LINK, SET_RESULT_LINK} from '../../actionsTypes';

const initialState = {
  resultLink: 'http://yoursite.com/?',
  isCopied: false,
};

const utmHandler = (options, utm = '') => {
  options.forEach(({utmName, value}) => {
    if (value) {
      utm += `${utmName}=${value}&`;
    }
  });
  return utm;
};

const linkHandler = payload => {
  const [selectValue, inputValue, requiredOptions, optionalOptions, inputPlaceholder] = payload;

  let utm = '';
  utm = utmHandler(requiredOptions);
  utm = utmHandler(optionalOptions, utm);
  utm = utm.slice(0, -1);

  if (inputValue) {
    return `${selectValue}${inputValue}/?${utm}`;
  }
  return `${selectValue}${inputPlaceholder}/?${utm}`;
};

const resultReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_RESULT_LINK:
      const link = linkHandler(payload);

      return {
        ...state,
        resultLink: link
      };
    case SET_COPY_LINK:
      return {
        ...state,
        isCopied: payload
      };
    default:
      return state;
  }
};

export default resultReducer;