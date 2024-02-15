import React, {
  ReactNode,
  useRef,
  useState,
  useEffect,
  MutableRefObject,
} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Backdrop from '../backdrop/Backdrop';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

type WithChildren<T = {}> = T & { children?: ReactNode };

type ModalRootProps = {
  open: boolean;
  onClose: () => void;
  initialFocus?: React.MutableRefObject<HTMLElement | null>;
  className?: string;
};

type ModalComponentProps = (
  props: WithChildren<ModalRootProps>
) => React.ReactElement | null;

const ModalRoot: ModalComponentProps = ({
  open,
  onClose,
  children,
  initialFocus,
  className
}) => {
  const defFocus = useRef(null);
  const [focusElRef, setFocusElRef] =
    useState<MutableRefObject<HTMLElement | null>>();
  useEffect(() => {
    setFocusElRef(initialFocus ? initialFocus : defFocus);
  }, [initialFocus, defFocus]);
  return (
    <Transition appear show={open} as={React.Fragment}>
      <Dialog
        as="div"
        className={mergeClassnames("relative z-10", className)}
        onClose={onClose}
        initialFocus={focusElRef}
      >
        {children}
      </Dialog>
    </Transition>
  );
};

type PanelProps = {
  className?: string;
};
const Panel = ({ children, className }: WithChildren<PanelProps>) => (
  <div className="fixed inset-0 overflow-y-auto">
    <div className="flex min-h-full items-center justify-center p-4">
      <Transition.Child
        enter="transition duration-300 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-200 ease-in"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        as={React.Fragment}
      >
        <Dialog.Panel
          className={mergeClassnames(
            'w-full max-w-sm inline-block transform rounded-xl bg-goku align-middle shadow-moon-lg transition-all',
            className
          )}
        >
          {children}
        </Dialog.Panel>
      </Transition.Child>
    </div>
  </div>
);

type TitleProps = {
  children?: ReactNode; 
  className?: string;
}

const Title = ({ children, className }: TitleProps) => (
  <Dialog.Title as="h3" className={mergeClassnames("text-moon-18 font-medium text-gray-900", className)}>
    {children}
  </Dialog.Title>
);

const Modal = Object.assign(ModalRoot, {
  Backdrop,
  Title,
  Panel,
});

export default Modal;
