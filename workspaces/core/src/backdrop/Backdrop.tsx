import React from 'react';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

const Backdrop: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={mergeClassnames('fixed -z-1 inset-0 bg-zeno', className)}
    aria-hidden="true"
  />
);

export default Backdrop;
