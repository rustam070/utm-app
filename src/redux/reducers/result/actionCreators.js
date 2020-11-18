import {SET_COPY_LINK, SET_RESULT_LINK} from '../../actionsTypes';

export const setResultLink = payload => {
  return {
    type: SET_RESULT_LINK,
    payload
  };
};

export const setCopyLink = boolean => {
  return {
    type: SET_COPY_LINK,
    payload: boolean
  };
};