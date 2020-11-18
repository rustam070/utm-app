import React from 'react';
import data from '../data.json';
import {useDispatch, useSelector} from 'react-redux';
import {Portal} from '../Portal';
import {UtmGeneratorOption} from './UtmGeneratorOption';
import {Modal} from './UI/Modal';
import {setOptionalOptionsInputValue, setRequiredOptionsInputValue} from '../redux/reducers/options/actionsCreators';
import {setModalContent, setShowModal} from '../redux/reducers/modal/actionCreators';
import {setResultLink} from '../redux/reducers/result/actionCreators';
import '../styles/componentsStyles/utm-generator-options.scss';

export const UtmGeneratorOptions = () => {
  const {requiredModalText, optionalModalText} = data;
  const dispatch = useDispatch();

  const selectOptions = state => state.optionsReducer;
  const {requiredOptions, optionalOptions} = useSelector(selectOptions);

  const selectModal = state => state.modalReducer;
  const {modalContent, showModal} = useSelector(selectModal);

  const selectSiteInput = state => state.siteInputReducer;
  const {selectValue, inputValue, inputPlaceholder} = useSelector(selectSiteInput);

  const onChangeInputRequiredOptions = (id, event) => {
    const {value} = event.target;
    dispatch(setRequiredOptionsInputValue([requiredOptions, id, value]));

    const resultPayload = [selectValue, inputValue, requiredOptions, optionalOptions, inputPlaceholder];
    dispatch(setResultLink(resultPayload));
  };

  const onChangeInputOptionalOptions = (id, event) => {
    const {value} = event.target;
    dispatch(setOptionalOptionsInputValue([optionalOptions, id, value]));

    const resultPayload = [selectValue, inputValue, requiredOptions, optionalOptions, inputPlaceholder];
    dispatch(setResultLink(resultPayload));
  };

  const showModalHandler = (boolean, options = '', id = '') => {
    if (options && id) {
      dispatch(setModalContent([options, id]));
    }

    dispatch(setShowModal(boolean));
  };

  const modal = showModal &&
    <Modal
      showModalHandler={() => showModalHandler(false)}
      modalContent={modalContent}
    />;

  return (
    <>
      <Portal>
        {modal}
      </Portal>
      <div className='utm__generator_options'>
        <div className='utm__generator_option_block'>
          <h3>
            Обязательные параметры
          </h3>
          {requiredOptions.map(option => {
            const {id, name, utmName, placeholder, description, value} = option;

            return (
              <UtmGeneratorOption
                key={id}
                name={name}
                utmName={utmName}
                placeholder={placeholder}
                description={description}
                value={value}
                onChangeInput={event => onChangeInputRequiredOptions(id, event)}
                showModalHandler={() => showModalHandler(true, requiredModalText, id)}
                showModal={showModal}
              />
            );
          })}
        </div>
        <div className='utm__generator_option_block'>
          <h3>
            Необязательные параметры
          </h3>
          {optionalOptions.map(option => {
            const {id, name, utmName, placeholder, description, value} = option;

            return (
              <UtmGeneratorOption
                key={id}
                name={name}
                utmName={utmName}
                placeholder={placeholder}
                description={description}
                value={value}
                onChangeInput={event => onChangeInputOptionalOptions(id, event)}
                showModalHandler={() => showModalHandler(true, optionalModalText, id)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};