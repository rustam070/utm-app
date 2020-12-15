import React from 'react';
import {locales} from '../locales';
import '../styles/componentsStyles/footer.scss';

export const Footer = () => {
  const {footer: {title}} = locales;

  return (
    <footer className='footer'>
      <div className='footer__texts'>
        <h3>
          {title}
        </h3>
      </div>
    </footer>
  );
};