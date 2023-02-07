import React, { Fragment } from 'react';
import { Transition } from "@headlessui/react";
import mergeClassnames from '../../../mergeClassnames/mergeClassnames';

export const Backdrop: React.FC<{className?: string}> = ({ className }) => <Transition.Child
  as={Fragment}
  enter="ease-out duration-300"
  enterFrom="opacity-0"
  enterTo="opacity-100"
  leave="ease-in duration-200"
  leaveFrom="opacity-100"
  leaveTo="opacity-0"
>
  <div className={mergeClassnames("fixed inset-0 bg-black/[0.56] z-40", className)} />
</Transition.Child>
