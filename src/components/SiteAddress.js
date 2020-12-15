import React from 'react';
import {Select} from './UI/Select';
import {Input} from './UI/Inputs/Input';
import '../styles/componentsStyles/site-address.scss';

export const SiteAddress = props => {
  const {
    select,
    onSelect,
    selectValue,
    inputPlaceholder,
    onInput,
    inputValue,
    title
  } = props;

  return (
    <>
      <h3>
        {title}
      </h3>
      <div className='site__address_link'>
        <Select
          select={select}
          selectValue={selectValue}
          onChange={onSelect}
        />
        <Input
          placeholder={inputPlaceholder}
          onChange={onInput}
          value={inputValue}
        />
      </div>
    </>
  );
};