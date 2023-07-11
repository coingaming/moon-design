import React, { ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Backdrop from '../backdrop/Backdrop';
import mergeClassnames from '../mergeClassnames/mergeClassnames';

type WithChildren<T = {}> = T & { children?: ReactNode };

type ModalRootProps = {
  open: boolean;
  onClose: () => void;
};

type ModalComponentProps = (
  props: WithChildren<ModalRootProps>
) => React.ReactElement | null;

const ModalRoot: ModalComponentProps = ({ open, onClose, children }) => (
  <Transition appear show={open} as={React.Fragment}>
    <Dialog as="div" className="relative z-10" onClose={onClose}>
      {children}
    </Dialog>
  </Transition>
);

type PanelProps = {
  className?: string;
};
const Panel: React.FC<WithChildren<PanelProps>> = ({ children, className }) => {
  return (
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
              'w-full max-w-sm inline-block transform rounded-xl bg-gohan align-middle shadow-moon-lg transition-all',
              className
            )}
          >
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </div>
  );
};

const Title: React.FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <Dialog.Title as="h3" className="text-moon-18 font-medium text-gray-900">
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
