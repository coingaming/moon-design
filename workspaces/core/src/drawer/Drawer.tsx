import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Backdrop from '../backdrop/Backdrop';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import getPositionStyles from './private/utils/getPositionStyles';
import type DrawerRootProps from './private/types/DrawerRootProps';
import type PanelProps from './private/types/PanelProps';

const DrawerRoot: React.FC<DrawerRootProps> = ({
  children,
  className,
  isOpen,
  setIsOpen,
}) => (
  <Transition show={isOpen} as={React.Fragment}>
    <Dialog
      open={isOpen}
      onClose={setIsOpen}
      className={mergeClassnames('fixed z-50 inset-0', className)}
    >
      {children}
    </Dialog>
  </Transition>
);

const Panel: React.FC<PanelProps> = ({
  children,
  className,
  position = 'end',
}) => (
  <Transition.Child
    as={React.Fragment}
    enter="ease-out duration-300"
    enterFrom="opacity-0 scale-0"
    enterTo="opacity-100 scale-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100 scale-100"
    leaveTo="opacity-0 scale-0"
  >
    <Dialog.Panel
      className={mergeClassnames(
        'fixed w-full bg-gohan shadow-moon-xl',
        getPositionStyles(position),
        className
      )}
    >
      {children}
    </Dialog.Panel>
  </Transition.Child>
);

const Drawer = Object.assign(DrawerRoot, { Panel, Backdrop });

export default Drawer;
