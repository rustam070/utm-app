import {SET_MODAL_CONTENT, SET_SHOW_MODAL} from '../../actionsTypes';

const initialState = {
  modalContent: {},
  isModalVisible: false
};

const modalReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_MODAL_CONTENT:
      return {
        ...state,
        modalContent: payload
      };
    case SET_SHOW_MODAL:
      return {
        ...state,
        isModalVisible: payload
      };
    default:
      return state;
  }
};

export default modalReducer;