import {useDispatch, useSelector} from 'react-redux';
import {locales} from '../../locales';
import {setSelectValue, setSiteInputValue} from '../../redux/reducers/siteInput/actionCreators';
import {setResultLink} from '../../redux/reducers/result/actionCreators';
import {seOptionsResult, setRadioInputs} from '../../redux/reducers/radioInputs/actionsCreators';
import {setModalContent, setShowModal} from '../../redux/reducers/modal/actionCreators';
import {setOptionsInputValue} from '../../redux/reducers/options/actionsCreators';

export const useLogic = () => {
  const {
    generator: {siteAddressTitle, preparedOptions, options: localesOptions},
    modal: modalTexts,
  } = locales;
  const {title} = localesOptions;

  const dispatch = useDispatch();

  const selectSiteInput = state => state.siteInputReducer;
  const {select, selectValue, inputValue, inputPlaceholder} = useSelector(selectSiteInput);

  const selectRadioInputs = state => state.radioInputsReducer;
  const {radioInputs} = useSelector(selectRadioInputs);

  const selectOptions = state => state.optionsReducer;
  const {options} = useSelector(selectOptions);

  const selectModal = state => state.modalReducer;
  const {modalContent, isModalVisible} = useSelector(selectModal);

  const changeSelectValueAndPutToResult = event => {
    const {value} = event.target;

    dispatch(setSelectValue(value));

    dispatchResultLink();
  };

  const changeInputValueAndPutToResult = event => {
    const {value} = event.target;

    dispatch(setSiteInputValue(value));

    dispatchResultLink();
  };

  const changeRadioValueAndPutToResult = id => {
    const inputs = [...radioInputs];
    inputs.forEach(input => input.checked = false);

    const input = inputs.find(input => input.id === id);
    input.checked = true;
    dispatch(setRadioInputs(inputs));

    const opts = [...options];
    const opt = preparedOptions.find(ads => ads.id === input.id);

    opts.forEach(option => {
      opt.optionsValue.forEach(value => {
        if (option.id === value.id) {
          option.value = value.text;
          option.description = value.description;
        }
      });
    });
    dispatch(seOptionsResult(opts));

    dispatchResultLink();
  };

  const getModalContent = id => {
    const content = modalTexts.modal.find(text => text.id === id);
    dispatch(setModalContent(content.modalText));
  };

  const showModal = boolean => {
    dispatch(setShowModal(boolean));
  };

  const changeOptionsInputValueAndPutToResult = (event, id) => {
    const {value} = event.target;
    const opts = [...options];

    const option = opts.find(option => option.id === id);
    option.value = value;

    dispatch(setOptionsInputValue(opts));

    dispatchResultLink();
  };

  const dispatchResultLink = () => {
    const payload = [selectValue, inputValue, options, inputPlaceholder];
    const result = getPreparedLink(payload);
    dispatch(setResultLink(result));
  }

  const getPreparedLink = payload => {
    const [selectValue, inputValue, options, inputPlaceholder] = payload;

    let utm = '';
    utm = getOptionsValue(options);
    utm = utm.slice(0, -1);

    if (inputValue) {
      return `${selectValue}${inputValue}/?${utm}`;
    }
    return `${selectValue}${inputPlaceholder}/?${utm}`;
  };

  const getOptionsValue = (options, utm = '') => {
    options.forEach(({name, value}) => {
      if (value) {
        utm += `${name}=${value}&`;
      }
    });
    return utm;
  };

  return {
    title: siteAddressTitle,
    select,
    selectValue,
    inputValue,
    inputPlaceholder,
    radioInputs,
    modalContent,
    optionsTitle: title,
    items: options,
    isVisible: isModalVisible,
    onSelect: changeSelectValueAndPutToResult,
    onInput: changeInputValueAndPutToResult,
    onRadio: changeRadioValueAndPutToResult,
    onShow: showModal,
    optionsOnInput: changeOptionsInputValueAndPutToResult,
    getText: getModalContent,
  };
};