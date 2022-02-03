import React, { JSXElementConstructor, ReactElement, ReactPortal } from 'react';

const useRecursiveMapChildren = (
  children: React.ReactNode,
  fn: (
    child:
      | {}
      | ReactElement<any, string | JSXElementConstructor<any>>
      | ReactPortal
  ) => void
): React.ReactNode => {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child) || typeof child.type == 'string') {
      return child;
    }

    if (child.props.children) {
      child = React.cloneElement(child, {
        children: useRecursiveMapChildren(child.props.children, fn),
      });
    }

    return fn(child);
  });
};

export default useRecursiveMapChildren;
