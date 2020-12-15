import {combineReducers} from 'redux';
import siteInputReducer from './reducers/siteInput/siteInputReducer';
import radioInputsReducer from './reducers/radioInputs/radioInputsReducer';
import optionsReducer from './reducers/options/optionsReducer';
import modalReducer from './reducers/modal/modalReducer';
import resultReducer from './reducers/result/resultReducer';

export const rootReducer = combineReducers({
  siteInputReducer,
  radioInputsReducer,
  optionsReducer,
  modalReducer,
  resultReducer
});