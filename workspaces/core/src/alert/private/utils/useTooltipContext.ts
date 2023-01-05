import { useContext } from 'react';
import AlertContext from './AlertContext';

const useAlertContext = (component: string) => {
  const context = useContext(AlertContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <Alert /> component.`
    );
    // if (Error.captureStackTrace) Error.captureStackTrace(err, useAlertContext);
    throw err;
  }
  return context;
};

export default useAlertContext;
