import React from 'react';
import '../styles/componentsStyles/footer.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__texts'>
        <h3>
          Генератор UTM-меток
        </h3>
        <p>
          Создайте ссылку для своей рекламной кампании
        </p>
      </div>
    </footer>
  );
};