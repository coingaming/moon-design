import { ReactNode } from 'react';

type CallableChildren = (data: {
  open?: boolean;
  close?: (
    focusableElement?:
      | HTMLElement
      | React.MutableRefObject<HTMLElement | null>
      | undefined
  ) => void;
}) => ReactNode;

export default CallableChildren;
