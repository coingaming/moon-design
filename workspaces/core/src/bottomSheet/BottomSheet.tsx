import React, { ReactNode, useCallback, useEffect, useReducer } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Backdrop from '../backdrop/Backdrop';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import BottomSheetContext, {
  useBottomSheetContext,
} from './private/utils/context';
import stateReducer from './private/utils/stateReducer';
import useDrag from './private/utils/useDrag';
import type BottomSheetRootProps from './private/types/BottomSheetRootProps';
import type DraghandleProps from './private/types/DraghandleProps';
import type PanelProps from './private/types/PanelProps';
import type TitleProps from './private/types/TitleProps';

const BottomSheetRoot = ({
  open,
  onClose,
  hasShadow, // deprecated
  size, // deprecated
  children,
}: BottomSheetRootProps) => {
  const [state, dispatch] = useReducer(stateReducer, {
    bottomSheetChildren: [],
  });
  const registerChild = useCallback((child: string) => {
    dispatch?.({ type: 'RegisterChild', children: child });
    return () => dispatch?.({ type: 'UnregisterChild', children: child });
  }, []);
  return (
    <BottomSheetContext.Provider
      value={{ ...state, size, registerChild, dispatch }}
    >
      <Transition appear show={open} as={React.Fragment}>
        <Dialog
          as="div"
          open={open}
          className="fixed inset-0 z-50"
          onClose={onClose}
        >
          {React.Children.map<ReactNode, ReactNode>(children, (child) => {
            if (React.isValidElement(child)) {
              let extraProps = {};
              if (
                typeof child.type !== 'string' &&
                child.type.name === 'Panel'
              ) {
                extraProps = { onClose, hasShadow };
              }
              return React.cloneElement(child, extraProps);
            }
            return null;
          })}
        </Dialog>
      </Transition>
    </BottomSheetContext.Provider>
  );
};

const Panel = ({
  children,
  className,
  hasShadow, // deprecated
  onClose,
}: PanelProps) => {
  const { size } = useBottomSheetContext('BottomSheet.Panel'); // deprecated
  const {
    isTransition, // deprecated
    panelRef,
  } = useDrag(onClose);
  let height;
  switch (size) {
    case 'lg':
      height = 'h-[88%]';
      break;
    case 'sm':
      height = 'h-[32%]';
      break;
    case 'md':
      height = 'h-[64%]';
      break;
    default:
      height = undefined;
  }
  return (
    <Transition.Child
      as={React.Fragment}
      enter="ease-out duration-300 transition-transform"
      enterFrom="translate-y-full"
      enterTo="translate-y-0"
      leave="ease-in duration-200 transition-transform"
      leaveFrom="translate-y-0"
      leaveTo="translate-y-full"
    >
      <Dialog.Panel
        className={mergeClassnames(
          'absolute flex flex-col inset-x-0 bottom-0 rounded-t-moon-i-md bg-gohan p-2 h-1/3',
          height, // deprecated
          hasShadow && 'shadow-moon-lg', // deprecated
          isTransition && 'duration-200 transition-all', // deprecated
          className
        )}
        ref={panelRef}
      >
        {children}
      </Dialog.Panel>
    </Transition.Child>
  );
};

const Draghandle = ({ children, className }: DraghandleProps) => {
  const { registerChild, draghandleRef } = useBottomSheetContext(
    'BottomSheet.Draghandle'
  );
  useEffect(() => {
    registerChild?.('Draghandle');
  }, [registerChild]);
  return (
    <div
      className={mergeClassnames(
        'relative flex items-center justify-center pb-2 after:absolute after:-top-1',
        'after:left-1/2 after:rounded-full after:-translate-x-1/2 after:w-10 after:h-1',
        'after:bg-beerus',
        className
      )}
      ref={draghandleRef}
    >
      {children}
    </div>
  );
};

const Title = ({ children, className }: TitleProps) => (
  <Dialog.Title
    as="p"
    className={mergeClassnames(
      'text-moon-16 text-bulma font-medium text-center',
      className
    )}
  >
    {children}
  </Dialog.Title>
);

const BottomSheet = Object.assign(BottomSheetRoot, {
  Backdrop,
  Draghandle,
  Title,
  Panel,
});

export default BottomSheet;
