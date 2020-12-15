import {useEffect} from 'react';
import {locales} from '../../locales';
import {useDispatch, useSelector} from 'react-redux';
import {setCopyLink} from '../../redux/reducers/result/actionCreators';

export const useLogic = () => {
  const {result: {title, btnText, successText}} = locales;
  const dispatch = useDispatch();

  const selectResult = state => state.resultReducer;
  const {resultLink, isLinkCopied} = useSelector(selectResult);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setCopyLink(false));
    }, 1500);

    return () => clearTimeout(timeout);
  }, [isLinkCopied, dispatch]);

  const copyLinkToBuffer = () => {
    dispatch(setCopyLink(true));
  };

  return {
    title,
    btnText,
    link: resultLink,
    successText,
    onCopy: copyLinkToBuffer,
    isVisible: isLinkCopied,
  };
};