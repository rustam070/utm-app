import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

export const Portal = ({children}) => {
  const [container] = useState(document.createElement('div'));

  useEffect(() => {
    document.body.prepend(container);

    return () => document.body.removeChild(container);
  }, [container]);

  return ReactDOM.createPortal(children, container);
};