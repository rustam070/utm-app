import React, {useEffect} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {useDispatch, useSelector} from 'react-redux';
import {Input} from './UI/Inputs/Input';
import {setCopyLink} from '../redux/actionCreators';
import '../styles/componentsStyles/utm-result.scss';

export const UtmResult = () => {
  const dispatch = useDispatch();

  const {resultLink, isCopied} = useSelector(state => state);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setCopyLink(false));
    }, 1500);

    return () => clearTimeout(timeout);
  }, [isCopied, dispatch]);

  return (
    <section className='utm__result'>
      <div className='utm__result_block'>
        <h3>
          Результат
        </h3>
        <div>
          <div className='utm__result_copy'>
            <CopyToClipboard text={resultLink} onCopy={() => dispatch(setCopyLink(true))}>
              <p>Копировать</p>
            </CopyToClipboard>
          </div>
          <Input
            disabled={true}
            value={resultLink}
          />
        </div>
        {isCopied && <span>Ссылка была успешно скопирована!</span>}
      </div>
    </section>
  );
};