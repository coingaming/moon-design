import React, { Children, createContext, useContext, useEffect } from 'react';
import {
  ControlsClose,
  GenericCheckAlternative,
  GenericInfo,
  GenericClose,
  GenericAlarm,
  GenericCheckRounded,
} from '@heathmont/moon-icons-tw';
import * as ToastPrimitive from '@radix-ui/react-toast';
import classNames from '../private/utils/classnames';

type SnackbarProps = {
  autoClose?: number;
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
  ref?: null;
  className?: string;
  isOpen: boolean;
  onOpenChange: () => void;
};

type IconProps = {
  className?: string;
};
type ContentProps = {
  className?: string;
};

type MessageProps = {
  className?: string;
};
type HeadingProps = {
  heading?: string;
};

type VariantProps = {
  containerClassName?: string;
  iconClassname?: string

}
const SnackbarRoot: React.FC<SnackbarProps> = ({
  autoClose,
  position = 'top-right',
  children,
  ref,
  className,
  isOpen,
  onOpenChange,
  ...rest
}) => {
  return (
    <ToastPrimitive.Provider
      swipeDirection="right"
      duration={autoClose || 6000}
    >
      <ToastPrimitive.Root
        open={isOpen}
        onOpenChange={onOpenChange}
        ref={ref}
        className={classNames(
          'z-50 fixed right-4 left-4 w-auto shadow-lg rounded-xl bg-goku px-4 py-6 bg-goku text-left flex items-center transition gap-2 medium',
          'md:w-full md:max-w-sm md:right-4',
          "radix-state-open:animate-toast-slide-in-bottom md:radix-state-open:animate-toast-slide-in-right",
          "radix-state-closed:animate-toast-hide",
          "radix-swipe-end:animate-toast-swipe-out",
          'translate-x-radix-toast-swipe-move-x',
          'radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]',
          position === 'top-left' && 'top-4 md:left-4 md:right-auto',
          position === 'top-center' &&
            'top-4  ml-auto mr-auto md:left-0 md:right-0',
          position === 'top-right' && 'top-4 md:right-4 md:left-auto',
          position === 'bottom-left' && 'bottom-4 md:left-4 md:right-auto',
          position === 'bottom-center' &&
            'bottom-4  ml-auto mr-auto md:left-0 md:right-0',
          position === 'bottom-right' && 'bottom-4 md:right-4 md:left-auto',
          className
        )}
        {...rest}
      >
        {children}
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  );
};

const Header: React.FC<HeadingProps> = ({ children }) => {
  return (
    <span
      className={classNames(
        'text-moon-16 font-medium transition-colors text-bulma'
      )}
    >
      {children}
    </span>
  );
};

const Message: React.FC<MessageProps> = ({ children, className }) => {
  return (
    <p
      className={classNames(
        'text-bulma text-moon-14 transition-colors',
        className
      )}
    >
      {children}
    </p>
  );
};

const Content: React.FC<ContentProps> = ({ children, className }) => {
  return <div className={classNames(className)}>{children}</div>;
};

const Icon: React.FC<IconProps> = ({ children, className }) => {
  return (
    <div className={classNames('p-1 rounded-lg', className)}>{children}</div>
  );
};

const Close: React.FC = () => {
  return (
    <ToastPrimitive.Close className="absolute top-4 right-4">
      <ControlsClose className="text-[16px] text-bulma" />
    </ToastPrimitive.Close>
  );
};

const Success: React.FC<VariantProps> = ({containerClassName, iconClassname }) => {
  return (
    <Icon className={classNames('bg-chiChi', containerClassName)}>
      <GenericCheckRounded className={classNames('text-[32px] text-dodoria', iconClassname)} />
    </Icon>
  );
};

const Info: React.FC<VariantProps> = ({containerClassName, iconClassname }) => {
  return (
    <Icon className={classNames('bg-chiChi', containerClassName)}>
      <GenericInfo className={classNames('text-[32px] text-dodoria', iconClassname)} />
    </Icon>
  );
};

const Error: React.FC<VariantProps> = ({containerClassName, iconClassname }) => {
  return (
    <Icon className={classNames('bg-chiChi', containerClassName)}>
      <GenericClose className={classNames('text-[32px] text-dodoria', iconClassname)} />
    </Icon>
  );
};

const Warning: React.FC<VariantProps> = ({containerClassName, iconClassname }) => {
  return (
    <Icon className={classNames('bg-chiChi', containerClassName)}>
      <GenericAlarm className={classNames('text-[32px] text-dodoria', iconClassname)} />
    </Icon>
  );
};

const Snackbar = Object.assign(SnackbarRoot, {
  Content,
  Header,
  Message,
  Close,
  Icon,
  Success,
  Info,
  Error,
  Warning,
});

export default Snackbar;
