import React, { JSXElementConstructor, ReactElement, ReactPortal } from 'react';

const useCloneElements = (
  child:
    | {}
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactPortal,
  additionalProps: object
) => {
  if (React.isValidElement(child)) {
    return React.cloneElement(child, additionalProps);
  }
  return child;
};

export default useCloneElements;
