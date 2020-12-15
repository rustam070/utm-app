import React from 'react';
import {locales} from '../locales';
import {RadioInput} from './UI/Inputs/RadioInput';
import '../styles/componentsStyles/traffic-source.scss';

export const TrafficSource = props => {
  const {radioInputs, onRadioInput} = props;
  const {generator: {trafficSourceTitle}} = locales;

  return (
    <div className='traffic__radio'>
      <h3>
        {trafficSourceTitle}
      </h3>
      <div className='traffic__source'>
        {radioInputs.map(({id, labelText, type, checked}) => {
          return (
            <div className='traffic__source_input' key={id}>
              <RadioInput
                id={id}
                labelText={labelText}
                type={type}
                checked={checked}
                onChange={() => onRadioInput(id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};