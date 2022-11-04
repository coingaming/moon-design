import React, { Children, createContext, useContext } from 'react';
import {
  ControlsClose,
  GenericCheckAlternative,
} from '@heathmont/moon-icons-tw';
import * as ToastPrimitive from '@radix-ui/react-toast';
import classNames from '../private/utils/classnames';

type SnackbarProps = {
  width?: string;
  autoClose?: number;
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
  borderRadius?: string;
  font?: string;
  ref?: null;
  className?: string;
  type?: string;
  onClose: () => void;
};

type SnackbarState = {
  openSnackbar?: boolean;
  setOpenSnackbar: (value: boolean) => void;
};

type IconProps = {
  backgroundColor?: string;
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

const SnackbarContext = createContext<SnackbarState>({} as SnackbarState);
SnackbarContext.displayName = 'SnackbarContext';

const useSnackbarContext = (component: string) => {
  const context = useContext(SnackbarContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <Menu /> component.`
    );
    // if (Error.captureStackTrace) Error.captureStackTrace(err, useSnackbarContext);
    throw err;
  }
  return context;
};

const { openSnackbar, setOpenSnackbar } =
useSnackbarContext('SnackbarContext');
const onOpenSnackbar = () => {
    console.log(openSnackbar)
  if (openSnackbar) {
    setOpenSnackbar(false);
    setTimeout(() => {
      setOpenSnackbar(true);
    }, 400);
  } else {
    setOpenSnackbar(true);
  }
  console.log(openSnackbar)
};

const SnackbarRoot: React.FC<SnackbarProps> = ({
  width,
  autoClose,
  position,
  borderRadius,
  font,
  children,
  ref,
  className,
  type,
  ...rest
}) => {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const states = {
    openSnackbar,
    setOpenSnackbar,
  };
  return (
    <SnackbarContext.Provider value={states}>
      <ToastPrimitive.Provider swipeDirection="right">
        <ToastPrimitive.Root
          open={openSnackbar}
          onOpenChange={setOpenSnackbar}
          ref={ref}
          className={classNames(
            'fixed w-full max-w-lg rounded-xl rounded-xl bg-goku px-4 py-6 text-left scale-100 flex items-center transition gap-2 medium transition.default',
            position === 'top-left' ? 'top-4 left-4' : 'top-4 right-4',
            position === 'top-center'
              ? 'top-4 left-0 right-0 ml-auto mr-auto'
              : 'top-4 right-4',
            position === 'top-right' ? 'top-4 right-4' : 'top-4 right-4',
            position === 'bottom-left' ? 'bottom-4 left-4' : 'top-4 right-4',
            position === 'bottom-center'
              ? 'bottom-4 left-0 right-0 ml-auto mr-auto'
              : 'top-4 right-4',
            position === 'bottom-right' ? 'bottom-4 right-4' : 'top-4 right-4',
            className
          )}
          {...rest}
        >
          {type === 'success' && (
            <Icon className="bg-chiChi">
              <GenericCheckAlternative className="text-[32px] text-dodoria" />
            </Icon>
          )}
          {type ? <Content>{children}</Content> : children}
        </ToastPrimitive.Root>
      </ToastPrimitive.Provider>
    </SnackbarContext.Provider>
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

const Icon: React.FC<IconProps> = ({
  backgroundColor,
  children,
  className,
}) => {
  return (
    <div
      className={classNames(
        'p-1 rounded-lg',
        backgroundColor ? backgroundColor : '',
        className
      )}
    >
      {children}
    </div>
  );
};

const Close: React.FC = () => {
  return (
    <ToastPrimitive.Close className="absolute top-4 right-4">
      <ControlsClose className="text-[16px] text-bulma" />
    </ToastPrimitive.Close>
  );
};

const Snackbar = Object.assign(SnackbarRoot, {
  Content,
  Header,
  Message,
  Close,
  Icon,
  onOpenSnackbar
});

export default Snackbar;
