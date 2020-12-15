import React from 'react';
import {locales} from '../locales';
import '../styles/componentsStyles/header.scss';

export const Header = () => {
  const {
    header: {title, subtitle}
  } = locales;

  return (
    <header className='header'>
      <div className='header__texts'>
        <h1>
          {title}
        </h1>
        <h2>
          {subtitle}
        </h2>
      </div>
    </header>
  );
};