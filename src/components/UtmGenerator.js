import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Select} from './UI/Select';
import {Input} from './UI/Inputs/Input';
import {RadioInput} from './UI/Inputs/RadioInput';
import {UtmGeneratorOptions} from './UtmGeneratorOptions';
import {setRadioInputs, setResultLink, setSelectValue, setSiteInputValue} from '../redux/actionCreators';
import '../styles/componentsStyles/utm-generator.scss';

export const UtmGenerator = () => {
  const dispatch = useDispatch();

  const {select, selectValue, inputValue, radioInputs, inputPlaceholder} = useSelector(state => state);

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
            onChange={event => {
              dispatch(setSelectValue(event));
              dispatch(setResultLink());
            }}
          />
          <Input
            placeholder={inputPlaceholder}
            onChange={event => {
              dispatch(setSiteInputValue(event));
              dispatch(setResultLink());
            }}
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
                    onChange={() => {
                      dispatch(setRadioInputs(id));
                      dispatch(setResultLink());
                    }}
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