import React from 'react';
import '../styles/componentsStyles/header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__texts'>
        <h1>
          Генератор UTM-меток
        </h1>
        <h2>
          Создайте ссылку для своей рекламной кампании
        </h2>
      </div>
    </header>
  );
};