import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {useLogic} from './useLogic';
import {Input} from '../UI/Inputs/Input';
import '../../styles/componentsStyles/result.scss';

export const Result = () => {
  const logic = useLogic();

  return (
    <section className='result'>
      <div className='result_block'>
        <h3>
          {logic.title}
        </h3>
        <div>
          <div className='result_copy'>
            <CopyToClipboard text={logic.link} onCopy={logic.onCopy}>
              <p>{logic.btnText}</p>
            </CopyToClipboard>
          </div>
          <Input
            disabled={true}
            value={logic.link}
          />
        </div>
        {logic.isVisible && <span>{logic.successText}</span>}
      </div>
    </section>
  );
};