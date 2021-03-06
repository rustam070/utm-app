import React from 'react';
import {Button} from './Button';
import '../../styles/componentsStyles/modal.scss';

export const Modal = ({onShow, modalContent}) => {
  const {title, titleText, why, description, examples: {title: exampleTitle, texts}} = modalContent;

  return (
    <div className='modal__backdrop'>
      <div className='modal'>
        <div className='modal__close_btn'>
          <Button
            text='X'
            onClick={onShow}
          />
        </div>
        <div className='modal__title'>
          <h3>
            {title}
          </h3>
          <p>
            &nbsp;- {titleText}
          </p>
        </div>
        <div className='modal__description'>
        <span>
          {why}
        </span>
          <p>
            {description}
          </p>
        </div>
        {texts.length ?
          <div className='modal__example'>
            <p>
              {exampleTitle}
            </p>
            <ul className='modal__list'>
              {texts.map(({id, text}) => {
                return (
                  <li key={id}>
                    {text}
                  </li>
                );
              })}
            </ul>
          </div> : null}
      </div>
    </div>
  );
};