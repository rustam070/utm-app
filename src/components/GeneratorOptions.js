import React from 'react';
import {Button} from './UI/Button';
import {Input} from './UI/Inputs/Input';
import '../styles/componentsStyles/generator-options.scss';

export const GeneratorOptions = props => {
  const {
    title,
    items,
    onInput,
    onShow,
    getText,
  } = props;

  return (
    <div className='generator__options'>
      <div className='generator__option_block'>
        <h3>
          {title}
        </h3>
        {items.map(item => {
          const {id, title, name, placeholder, description, value} = item;

          return (
            <div key={id} className='generator__option'>
              <p className='generator__option_title'>
                {title}
              </p>
              <p className='generator__option_description'>
                {description}
              </p>
              <div className='generator__option_item'>
                <div className='generator__option_button'>
                  <p>
                    {name}
                  </p>
                  <div>
                    <Button
                      onClick={() => {
                        getText(id)
                        onShow(true);
                      }}
                      text='?'
                    />
                  </div>
                </div>
                <Input
                  placeholder={placeholder}
                  value={value}
                  onChange={event => onInput(event, id)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};