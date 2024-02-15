import { useContext } from 'react';
import GroupContext from './GroupContext';

const useGroupContext = (component: string) => {
  const context = useContext(GroupContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <Group /> component.`
    );
    // if (Error.captureStackTrace) Error.captureStackTrace(err, useGroupContext);
    throw err;
  }
  return context;
};

export default useGroupContext;
