import {SET_MODAL_CONTENT, SET_SHOW_MODAL} from '../../actionsTypes';

const initialState = {
  modalContent: {},
  showModal: false
};

const modalReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_MODAL_CONTENT:
      const [options, id] = payload;

      const content = options.find(text => text.id === id);

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

export default modalReducer;