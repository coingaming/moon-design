import { useContext } from 'react';
import ProgressContext from './ProgressContext';

const useProgressContext = (component: string) => {
  const context = useContext(ProgressContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <Progress /> component.`
    );
    // if (Error.captureStackTrace) Error.captureStackTrace(err, useProgressContext);
    throw err;
  }
  return context;
};

export default useProgressContext;
