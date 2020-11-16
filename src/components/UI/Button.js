import React from 'react';
import '../../styles/componentsStyles/options-button.scss';

export const Button = props => {
  const {text = 'Кнопка', onClick} = props;
  return (
    <button
      onClick={onClick}
      className='options__button'
    >
      {text}
    </button>
  );
};