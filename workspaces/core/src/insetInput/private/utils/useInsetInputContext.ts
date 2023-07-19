import { useContext } from 'react';
import InsetInputContext from './InsetInputContext';

const useInsetInputContext = (component: string) => {
  const context = useContext(InsetInputContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <InsetInput /> component.`
    );
    // if (Error.captureStackTrace) Error.captureStackTrace(err, useInsetInputContext);
    throw err;
  }
  return context;
};

export default useInsetInputContext;
