import React, { createContext, useContext } from 'react';
import { Dialog } from '@headlessui/react';
import classNames from '../private/utils/classnames';

type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | string;
type ModalState = {
  size?: ModalSize;
};

const ModalContext = createContext<ModalState>({});
ModalContext.displayName = 'ModalContext';

type ModalRootProps = {
  open: boolean;
  onClose: () => void;
  size?: ModalSize;
};

const useModalContext = (component: string) => {
  const context = useContext(ModalContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <Modal /> component.`
    );
    // if (Error.captureStackTrace) Error.captureStackTrace(err, useModalContext);
    throw err;
  }
  return context;
};

const ModalRoot: React.FC<ModalRootProps> = ({
  open,
  onClose,
  size = 'md',
  children,
}) => {
  const state = {
    size: size,
  };

  return (
    <ModalContext.Provider value={state}>
      <Dialog as="div" open={open} className="relative z-10" onClose={onClose}>
        {children}
      </Dialog>
    </ModalContext.Provider>
  );
};

const setSize = (size?: ModalSize) => {
  switch (size) {
    case 'sm':
      return `max-w-[22.5rem]`;
    case 'lg':
      return `max-w-[50rem]`;
    case 'xl':
      return `max-w-[75rem]`;
    case 'md':
    default:
      return `max-w-[30rem]`;
  }
};

type PanelProps = {
  className: string;
};
const Panel: React.FC<PanelProps> = ({ children, className }) => {
  const { size } = useModalContext('Modal.Panel');

  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <Dialog.Panel
          className={classNames(
            'w-full inline-block transform rounded-xl bg-gohan align-middle shadow-moon-lg transition-all',
            setSize(size),
            className
          )}
        >
          {children}
        </Dialog.Panel>
      </div>
    </div>
  );
};

const Backdrop: React.FC = () => {
  return <div className="fixed inset-0 bg-black/[0.56]" />;
};

const Title: React.FC = ({ children }) => {
  return (
    <Dialog.Title
      as="h3"
      className="text-lg font-medium leading-6 text-gray-900"
    >
      {children}
    </Dialog.Title>
  );
};

const Modal = Object.assign(ModalRoot, {
  Backdrop,
  Title,
  Panel,
});

export default Modal;
