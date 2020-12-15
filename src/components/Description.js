import React from 'react';
import {locales} from '../locales';
import '../styles/componentsStyles/description.scss';

export const Description = () => {
  const {description: {title, list}} = locales;

  return (
    <section className='description'>
      <div className='description__texts'>
        <h3>
          {title}
        </h3>
        <ul className='description__list'>
          {list.map(({id, text}) => {
            return (
              <li key={id}>
                {text}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};