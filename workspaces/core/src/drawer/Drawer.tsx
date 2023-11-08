import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import type DrawerRootProps from './private/types/DrawerRootProps';
import type PanelProps from './private/types/PanelProps';
import getAnimationStyles from './private/utils/getAnimationStyles';
import getPositionStyles from './private/utils/getPositionStyles';
import Backdrop from '../backdrop/Backdrop';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

const DrawerRoot = ({
  children,
  className,
  open,
  setOpen,
}: DrawerRootProps) => (
  <Transition appear show={open} as={React.Fragment}>
    <Dialog
      onClose={setOpen}
      className={mergeClassnames('fixed z-50 inset-0', className)}
    >
      {children}
    </Dialog>
  </Transition>
);

const Panel = ({ children, className, position = 'end' }: PanelProps) => (
  <Transition.Child
    as={React.Fragment}
    enter="ease-out duration-300 transition-transform"
    enterFrom={getAnimationStyles(position).initial}
    enterTo={getAnimationStyles(position).rendered}
    leave="ease-in duration-200 transition-transform"
    leaveFrom={getAnimationStyles(position).rendered}
    leaveTo={getAnimationStyles(position).initial}
  >
    <Dialog.Panel
      className={mergeClassnames(
        'fixed w-full bg-goku text-bulma shadow-moon-xl',
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
