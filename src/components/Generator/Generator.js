import React from 'react';
import {useLogic} from './useLogic';
import {GeneratorOptions} from '../GeneratorOptions';
import {SiteAddress} from '../SiteAddress';
import {TrafficSource} from '../TrafficSource';
import {Portal} from '../../Portal';
import {Modal} from '../UI/Modal';
import '../../styles/componentsStyles/generator.scss';

export const Generator = () => {
  const logic = useLogic();

  const modal = logic.isVisible && (
    <Portal>
      <Modal
        onShow={() => logic.onShow(false)}
        modalContent={logic.modalContent}
      />
    </Portal>
  );

  return (
    <>
      {modal}
      <section className='generator'>
        <div className='generator__block'>
          <SiteAddress
            select={logic.select}
            selectValue={logic.selectValue}
            onSelect={logic.onSelect}
            inputPlaceholder={logic.inputPlaceholder}
            onInput={logic.onInput}
            inputValue={logic.inputValue}

            title={logic.title}
          />
          <TrafficSource
            radioInputs={logic.radioInputs}
            onRadioInput={logic.onRadio}
          />
          <GeneratorOptions
            modal={modal}
            items={logic.items}
            title={logic.optionsTitle}
            onInput={logic.optionsOnInput}
            onShow={logic.onShow}
            getText={logic.getText}
            isVisible={logic.isVisible}
          />
        </div>
      </section>
    </>
  );
};