import React from 'react';
import '../../styles/componentsStyles/button.scss';

export const Button = props => {
  const {text = 'Кнопка', onClick} = props;
  return (
    <button
      onClick={onClick}
      className='button'
    >
      {text}
    </button>
  );
};