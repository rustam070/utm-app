import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import data from '../data.json';
import {Select} from './UI/Select';
import {Input} from './UI/Inputs/Input';
import {RadioInput} from './UI/Inputs/RadioInput';
import {UtmGeneratorOptions} from './UtmGeneratorOptions';
import {setSelectValue, setSiteInputValue} from '../redux/reducers/siteInput/actionCreators';
import {setResultLink} from '../redux/reducers/result/actionCreators';
import {setRadioInputs} from '../redux/reducers/radioInputs/actionsCreators';
import '../styles/componentsStyles/utm-generator.scss';

export const UtmGenerator = () => {
  const {preparedOptions} = data;

  const dispatch = useDispatch();

  const selectSiteInput = state => state.siteInputReducer;
  const {select, selectValue, inputValue, inputPlaceholder} = useSelector(selectSiteInput);

  const selectRadioInputs = state => state.radioInputsReducer;
  const {radioInputs} = useSelector(selectRadioInputs);

  const selectOptions = state => state.optionsReducer;
  const {requiredOptions, optionalOptions} = useSelector(selectOptions);

  const onSelectHandler = event => {
    const {value} = event.target;

    dispatch(setSelectValue(value));

    const payload = [value, inputValue, requiredOptions, optionalOptions, inputPlaceholder];
    dispatch(setResultLink(payload));
  };

  const onInputHandler = event => {
    const {value} = event.target;

    dispatch(setSiteInputValue(value));

    const payload = [selectValue, value, requiredOptions, optionalOptions, inputPlaceholder];
    dispatch(setResultLink(payload));
  };

  const onRadioInput = id => {
    const radioInputPayload = [requiredOptions, optionalOptions, preparedOptions, id];
    dispatch(setRadioInputs(radioInputPayload));

    const selectPayload = [selectValue, inputValue, requiredOptions, optionalOptions, inputPlaceholder];
    dispatch(setResultLink(selectPayload));
  };

  return (
    <section className='utm__generator'>
      <div className='utm__generator_block'>
        <h3>
          Адрес вашей страницы
        </h3>
        <div className='utm__generator_site_link'>
          <Select
            select={select}
            selectValue={selectValue}
            onChange={onSelectHandler}
          />
          <Input
            placeholder={inputPlaceholder}
            onChange={onInputHandler}
            value={inputValue}
          />
        </div>
        <div className='utm__generator_radio'>
          <h3>
            Источник трафика
          </h3>
          <div className='utm__generator_traffic_source'>
            {radioInputs.map(({id, labelText, type, checked}) => {
              return (
                <div className='utm__generator_traffic_source_input' key={id}>
                  <RadioInput
                    id={id}
                    labelText={labelText}
                    type={type}
                    checked={checked}
                    onChange={() => onRadioInput(id)}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <UtmGeneratorOptions/>
      </div>
    </section>
  );
};