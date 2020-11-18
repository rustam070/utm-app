import React from 'react';
import {Input} from './UI/Inputs/Input';
import {Button} from './UI/Button';
import '../styles/componentsStyles/utm-generator-options.scss';

export const UtmGeneratorOption = props => {
  const {
    name,
    utmName,
    placeholder,
    description,
    value,
    onChangeInput,
    showModalHandler
  } = props;

  return (
    <div className='utm__generator_option'>
      <p className='utm__generator_option_title'>
        {name}
      </p>
      <p className='utm__generator_option_description'>
        {description}
      </p>
      <div className='utm__generator_item'>
        <div className='utm__generator_button'>
          <p>
            {utmName}
          </p>
          <div>
            <Button
              onClick={() => {
                showModalHandler();
              }}
              text='?'
            />
          </div>
        </div>
        <Input
          placeholder={placeholder}
          value={value}
          onChange={onChangeInput}
        />
      </div>
    </div>
  );
};