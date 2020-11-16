import React from 'react';
import '../../../styles/componentsStyles/input.scss';

export const Input = props => {
  const {
    type = 'text',
    placeholder = '',
    value = '',
    onChange,
    disabled = false
  } = props;

  return (
    <input
      disabled={disabled}
      type={type}
      className='input'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};