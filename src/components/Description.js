import React from 'react';
import {useSelector} from 'react-redux';
import '../styles/componentsStyles/description.scss';

export const Description = () => {
  const {description:
      {descriptionTitle, descriptionList}
  } = useSelector(state => state);

  return (
    <section className='description'>
      <div className='description__texts'>
        <h3>
          {descriptionTitle}
        </h3>
        <ul className='description__list'>
          {descriptionList.map(({id, text}) => {
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