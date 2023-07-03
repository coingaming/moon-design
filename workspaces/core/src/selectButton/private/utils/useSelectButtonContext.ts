import { useContext } from 'react';
import SelectButtonContext from './SelectButtonContext';

const useSelectButtonContext = (component: string) => {
  const context = useContext(SelectButtonContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <SelectButton /> component.`
    );
    // if (Error.captureStackTrace) Error.captureStackTrace(err, useInputBtnContext);
    throw err;
  }
  return context;
};

export default useSelectButtonContext;
