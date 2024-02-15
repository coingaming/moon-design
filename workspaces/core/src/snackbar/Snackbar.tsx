import React from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import type CloseProps from './private/types/CloseProps';
import type SnackbarProps from './private/types/SnackbarProps';
import type WithChildren from './private/types/WithChildren';
import getPosition from './private/utils/getPosition';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import ControlsCloseSmall from '../private/icons/ControlsCloseSmall';

const SnackbarRoot = ({
  autoClose,
  position = 'top-right',
  children,
  ref,
  className,
  isOpen,
  onOpenChange,
  ...rest
}: WithChildren<SnackbarProps>) => (
  <ToastPrimitive.Provider swipeDirection="right" duration={autoClose}>
    <ToastPrimitive.Root
      open={isOpen}
      onOpenChange={onOpenChange}
      ref={ref}
      aria-live="polite"
      className={mergeClassnames(
        'z-50 flex fixed w-[calc(100%-32px)] md:w-fit transition',
        'radix-state-closed:animate-toast-hide radix-swipe-end:animate-toast-swipe-out',
        'translate-x-radix-toast-swipe-move-x radix-swipe-cancel:translate-x-0',
        'radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]',
        getPosition(position)
      )}
      {...rest}
    >
      <div
        className={mergeClassnames(
          'flex w-fit max-w-xs items-center gap-4 p-4 bg-goku shadow-moon-lg rounded-moon-s-sm',
          className
        )}
      >
        {children}
      </div>
    </ToastPrimitive.Root>
    <ToastPrimitive.Viewport />
  </ToastPrimitive.Provider>
);

const Header = ({
  children,
  className,
  ...rest
}: WithChildren<{ className?: string }>) => (
  <p
    className={mergeClassnames(
      'w-full text-moon-14 font-medium transition-colors text-bulma',
      className
    )}
    {...rest}
  >
    {children}
  </p>
);

const Message = ({
  children,
  className,
  ...rest
}: WithChildren<{ className?: string }>) => (
  <p
    className={mergeClassnames(
      'w-full text-moon-14 transition-colors text-bulma',
      className
    )}
    {...rest}
  >
    {children}
  </p>
);

const Content = ({
  children,
  className,
  ...rest
}: WithChildren<{ className?: string }>) => (
  <div className={mergeClassnames('w-full', className)} {...rest}>
    {children}
  </div>
);

const Icon = ({
  children,
  className,
  ...rest
}: WithChildren<{ className?: string }>) => (
  <div
    aria-hidden="true"
    className={mergeClassnames(
      'flex h-8 aspect-square items-center justify-center rounded-moon-s-sm text-moon-32',
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

const Close = ({ className, ariaLabel = 'Close', ...rest }: CloseProps) => (
  <ToastPrimitive.Close
    aria-label={ariaLabel}
    className={mergeClassnames(
      'flex h-8 aspect-square items-center justify-center text-bulma text-moon-24',
      className
    )}
    {...rest}
  >
    <ControlsCloseSmall />
  </ToastPrimitive.Close>
);

const Snackbar = Object.assign(SnackbarRoot, {
  Content,
  Header,
  Message,
  Close,
  Icon,
});

export default Snackbar;
