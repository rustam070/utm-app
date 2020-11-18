import {SET_MODAL_CONTENT, SET_SHOW_MODAL} from '../../actionsTypes';

export const setShowModal = boolean => {
  return {
    type: SET_SHOW_MODAL,
    payload: boolean
  };
};

export const setModalContent = campaignName => {
  return {
    type: SET_MODAL_CONTENT,
    payload: campaignName
  };
};