import React, { ReactNode, forwardRef } from 'react';
import { Dialog } from '@headlessui/react';
import classNames from '../private/utils/classnames';

type WithChildren<T = {}> = T & { children?: ReactNode };

type ModalRootProps = {
  open: boolean;
  onClose: () => void;
};

type ModalComponentProps = (
  props: WithChildren<ModalRootProps>
) => React.ReactElement | null;

const ModalRoot: ModalComponentProps = ({ open, onClose, children }) => (
  <Dialog as="div" open={open} className="relative z-10" onClose={onClose}>
    {children}
  </Dialog>
);

type PanelProps = {
  className?: string;
};
const Panel: React.FC<WithChildren<PanelProps>> = ({ children, className }) => {
  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <Dialog.Panel
          className={classNames(
            'w-full max-w-sm inline-block transform rounded-xl bg-gohan align-middle shadow-moon-lg transition-all',
            className
          )}
        >
          {children}
        </Dialog.Panel>
      </div>
    </div>
  );
};

type BackdropProps = {
  className?: string;
};

const Backdrop: React.FC<BackdropProps> = ({ className }) => {
  return (
    <div className={classNames('fixed inset-0 bg-black/[0.56]', className)} />
  );
};

const Title: React.FC<{ children?: ReactNode }> = ({ children }) => {
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
