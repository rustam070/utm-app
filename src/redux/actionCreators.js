import {
  SET_COPY_LINK, SET_MODAL_CONTENT,
  SET_OPTIONAL_OPTIONS_INPUT_VALUE,
  SET_RADIO_INPUTS,
  SET_REQUIRED_OPTIONS_INPUT_VALUE, SET_RESULT_LINK,
  SET_SELECT_VALUE, SET_SHOW_MODAL,
  SET_SITE_INPUT_VALUE
} from './actionsTypes';

export const setSelectValue = event => {
  return {
    type: SET_SELECT_VALUE,
    payload: event.target.value
  };
};

export const setSiteInputValue = event => {
  return {
    type: SET_SITE_INPUT_VALUE,
    payload: event.target.value
  };
};

export const setRadioInputs = radioInputId => {
  return {
    type: SET_RADIO_INPUTS,
    payload: radioInputId
  };
};

export const setRequiredOptionsInputValue = ev => {
  return {
    type: SET_REQUIRED_OPTIONS_INPUT_VALUE,
    payload: ev
  };
};

export const setOptionalOptionsInputValue = ev => {
  return {
    type: SET_OPTIONAL_OPTIONS_INPUT_VALUE,
    payload: ev
  };
};

export const setResultLink = () => {
  return {
    type: SET_RESULT_LINK,
  };
};

export const setCopyLink = boolean => {
  return {
    type: SET_COPY_LINK,
    payload: boolean
  };
};

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