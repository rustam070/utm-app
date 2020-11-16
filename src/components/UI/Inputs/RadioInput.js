import React from 'react';
import '../../../styles/componentsStyles/radio-input.scss';

export const RadioInput = props => {
  const {
    labelText = '',
    checked = false,
    onChange
  } = props;

  return (
    <label className='radio__input'>
      <input
        type='radio'
        onChange={onChange}
        checked={checked}
      />
      <span className='radio__button' />
      <span className='radio__button_text'>
        {labelText}
      </span>
    </label>
  );
};