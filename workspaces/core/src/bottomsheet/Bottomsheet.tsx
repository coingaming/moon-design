import React, { ReactNode, useRef } from 'react';
import { Dialog } from '@headlessui/react';
import classNames from '../private/utils/classnames';
import useDrag from './private/useDrag';

type BottomsheetRootProps = {
  open: boolean;
  onClose: () => void;
  hasDragHandle?: boolean;
  hasShadow?: boolean;
  size?: 'sm' | 'md' | 'lg' | string;
};

const BottomsheetRoot: React.FC<BottomsheetRootProps> = ({
  open,
  onClose,
  hasDragHandle,
  hasShadow,
  size,
  children,
}) => (
  <Dialog as="div" open={open} className="relative z-10" onClose={onClose}>
    {React.Children.map<ReactNode, ReactNode>(children, (child) => {
      if (React.isValidElement(child)) {
        let extraProps = {};
        if (typeof child.type !== 'string' && child.type.name === 'Panel') {
          extraProps = { onClose, hasDragHandle, hasShadow, size };
        }
        return React.cloneElement(child, extraProps);
      }
      return null;
    })}
  </Dialog>
);

type PanelProps = {
  className: string;
  size?: 'sm' | 'md' | 'lg' | string;
  hasDragHandle?: boolean;
  hasShadow?: boolean;
  onClose: () => void;
};

const Panel: React.FC<PanelProps> = ({
  children,
  className,
  size,
  hasDragHandle,
  hasShadow,
  onClose,
}) => {
  const dragHandleRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { isTransition } = useDrag(
    dragHandleRef,
    panelRef,
    contentRef,
    onClose
  );

  let height;
  switch (size) {
    case 'md':
      height = 'h-[64%]';
      break;
    case 'lg':
      height = 'h-[88%]';
      break;
    case 'sm':
    case undefined:
      height = 'h-[32%]';
      break;
    default:
      height = `h-[${size}]`;
  }

  return (
    <div className="fixed inset-0">
      <Dialog.Panel
        className={classNames(
          'absolute inset-x-0 bottom-0 rounded-t-xl bg-gohan translate-y-full',
          height,
          !hasDragHandle && 'overflow-y-auto',
          hasShadow && 'shadow-moon-lg',
          isTransition && 'duration-200 transition-all',
          className
        )}
        ref={panelRef}
      >
        {hasDragHandle ? (
          <>
            <div
              className="flex items-center justify-center h-12"
              ref={dragHandleRef}
            >
              <div className="w-10 h-2 rounded bg-beerus"></div>
            </div>
            <div
              className="overflow-y-auto h-[calc(100%_-_48px)]"
              ref={contentRef}
            >
              {children}
            </div>
          </>
        ) : (
          children
        )}
      </Dialog.Panel>
    </div>
  );
};

type BackdropProps = {
  className?: string;
};

const Backdrop: React.FC<BackdropProps> = ({ className }) => (
  <div className={classNames('fixed inset-0 bg-black/[0.56]', className)} />
);

type TitleProps = {
  className?: string;
};

const Title: React.FC<TitleProps> = ({ children, className }) => (
  <div className="p-4 border-b-2 border-beerus">
    <Dialog.Title
      as="h3"
      className={classNames(
        'text-lg font-medium leading-6 text-gray-900',
        className
      )}
    >
      {children}
    </Dialog.Title>
  </div>
);

const Bottomsheet = Object.assign(BottomsheetRoot, {
  Backdrop,
  Title,
  Panel,
});

export default Bottomsheet;
