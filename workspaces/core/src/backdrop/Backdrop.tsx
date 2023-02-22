import React from 'react';
import { Transition } from '@headlessui/react';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

const Backdrop: React.FC<{ className?: string }> = ({ className }) => (
  <Transition.Child
    as={React.Fragment}
    enter="ease-out duration-300 transition-opacity"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in duration-200 transition-opacity"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div
      className={mergeClassnames('fixed -z-1 inset-0 bg-zeno', className)}
      aria-hidden="true"
    />
  </Transition.Child>
);

export default Backdrop;
