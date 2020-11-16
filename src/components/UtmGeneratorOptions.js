import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Portal} from '../Portal';
import {UtmGeneratorOption} from './UtmGeneratorOption';
import {Modal} from './UI/Modal';
import {
  setModalContent,
  setOptionalOptionsInputValue,
  setRequiredOptionsInputValue,
  setResultLink,
  setShowModal
} from '../redux/actionCreators';
import '../styles/componentsStyles/utm-generator-options.scss';

export const UtmGeneratorOptions = () => {
  const dispatch = useDispatch();

  const {requiredOptions, optionalOptions, modalContent, showModal} = useSelector(state => state);

  const onChangeInputRequiredOptions = (id, event) => {
    const {value} = event.target;
    dispatch(setRequiredOptionsInputValue([id, value]));
    dispatch(setResultLink());
  };

  const onChangeInputOptionalOptions = (id, event) => {
    const {value} = event.target;
    dispatch(setOptionalOptionsInputValue([id, value]));
    dispatch(setResultLink());
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
          {requiredOptions.data.map(option => {
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
                showModalHandler={() => showModalHandler(true, requiredOptions.options, id)}
                showModal={showModal}
              />
            );
          })}
        </div>
        <div className='utm__generator_option_block'>
          <h3>
            Необязательные параметры
          </h3>
          {optionalOptions.data.map(option => {
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
                showModalHandler={() => showModalHandler(true, optionalOptions.options, id)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};