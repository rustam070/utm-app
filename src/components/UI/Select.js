import React from 'react';
import '../../styles/componentsStyles/select.scss';

export const Select = props => {
  const {select, selectValue, onChange} = props;

  return (
    <select
      value={selectValue}
      className='select'
      onChange={onChange}
    >
      {select.map(({id, text}) => {
        return (
          <option key={id} value={text}>{text}</option>
        )
      })}
    </select>
  )
}