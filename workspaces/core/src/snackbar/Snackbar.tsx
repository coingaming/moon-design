import React from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import ControlsCloseSmall from '../private/icons/ControlsCloseSmall';
import type CloseProps from './private/types/CloseProps';
import type SnackbarProps from './private/types/SnackbarProps';
import type WithChildren from './private/types/WithChildren';

const SnackbarRoot = ({
  autoClose,
  position = 'top-right',
  children,
  ref,
  className,
  isOpen,
  onOpenChange,
}: WithChildren<SnackbarProps>) => (
  <ToastPrimitive.Provider swipeDirection="right" duration={autoClose}>
    <ToastPrimitive.Root
      open={isOpen}
      onOpenChange={onOpenChange}
      ref={ref}
      aria-live="polite"
      className={mergeClassnames(
        'z-50 flex fixed w-[calc(100%-32px)] md:w-fit transition',
        'radix-state-closed:animate-toast-hide',
        'radix-swipe-end:animate-toast-swipe-out',
        'translate-x-radix-toast-swipe-move-x',
        'radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]',
        position === 'top-left' &&
          'top-4 ltr:left-4 ltr:radix-state-open:animate-toast-slide-in-left rtl:right-4 rtl:radix-state-open:animate-toast-slide-in-right',
        position === 'top-center' &&
          'justify-center top-4 left-4 right-4 md:m-auto radix-state-open:animate-toast-slide-in-up',
        position === 'top-right' &&
          'justify-end top-4 ltr:right-4 ltr:radix-state-open:animate-toast-slide-in-right rtl:left-4 rtl:radix-state-open:animate-toast-slide-in-left',
        position === 'bottom-left' &&
          'bottom-4 ltr:left-4 ltr:radix-state-open:animate-toast-slide-in-left rtl:right-4 rtl:radix-state-open:animate-toast-slide-in-right',
        position === 'bottom-center' &&
          'justify-center bottom-4 left-4 right-4 m-auto radix-state-open:animate-toast-slide-in-down',
        position === 'bottom-right' &&
          'justify-end bottom-4 ltr:right-4 ltr:radix-state-open:animate-toast-slide-in-right rtl:left-4 lrtltr:radix-state-open:animate-toast-slide-in-left'
      )}
    >
      <div
        className={mergeClassnames(
          'flex w-fit max-w-xs items-center gap-4 p-4 bg-gohan shadow-moon-lg rounded-moon-s-sm',
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
}: WithChildren<{ className?: string }>) => (
  <p
    className={mergeClassnames(
      'w-full text-moon-14 font-medium transition-colors text-bulma',
      className
    )}
  >
    {children}
  </p>
);

const Message = ({
  children,
  className,
}: WithChildren<{ className?: string }>) => (
  <p
    className={mergeClassnames(
      'w-full text-moon-14 transition-colors text-bulma',
      className
    )}
  >
    {children}
  </p>
);

const Content = ({
  children,
  className,
}: WithChildren<{ className?: string }>) => (
  <div className={mergeClassnames('w-full', className)}>{children}</div>
);

const Icon = ({
  children,
  className,
}: WithChildren<{ className?: string }>) => (
  <div
    aria-hidden="true"
    className={mergeClassnames(
      'flex h-8 aspect-square items-center justify-center rounded-moon-s-sm text-moon-32',
      className
    )}
  >
    {children}
  </div>
);

const Close = ({ className, ariaLabel = 'Close' }: CloseProps) => (
  <ToastPrimitive.Close
    aria-label={ariaLabel}
    className={mergeClassnames(
      'flex h-8 aspect-square items-center justify-center text-bulma text-moon-24',
      className
    )}
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
