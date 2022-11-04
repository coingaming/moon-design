import React, { Children, createContext, useContext } from 'react';
import { ControlsClose , GenericCheckAlternative } from '@heathmont/moon-icons-tw';
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
  ref?: React.Ref<HTMLDivElement>;
  className?: string;
  onClose: () => void;
};

type SnackbarState = {
  duration?: number;
};

type IconProps = {
  backgroundColor?: string;
  className?: string;
};
type ContentProps = {
  className?: string;
}

type MessageProps = {
  className?: string;
};
type HeadingProps = {
  heading?: string;
};

const SnackbarContext = createContext<SnackbarState>({});
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

const SnackbarRoot: React.FC<SnackbarProps> = (
    {
      width,
      autoClose,
      position,
      borderRadius,
      font,
      children,
      ref,
      className,
      ...rest
    },
  
  ) => {
    const states = {
      type,
    };
    return (
      <SnackbarContext.Provider value={states}>
        <div
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
          {type === 'success' &&  <Icon className="bg-chiChi">
        <GenericCheckAlternative className="text-[32px] text-dodoria" />
      </Icon>}
      {type ? <Content>{children}</Content> : children} 
        </div>
      </SnackbarContext.Provider>
    );
  };

const Header: React.FC<HeadingProps> = ({ children }) => {
  return (
    <span className={classNames(
      "text-moon-16 font-medium transition-colors text-bulma",
    )}>
      {children}
    </span>
  );
};

const Message: React.FC<MessageProps> = ({ children, className }) => {
  return (
    <p className={classNames(
      "text-bulma text-moon-14 transition-colors",
      className
    )}>{children}</p>
  );
};

const Content: React.FC<ContentProps> = ({children, className}) => {
  return (
    <div className={classNames(className)}>
      {children}
    </div>
  )
}

const Icon: React.FC<IconProps> = ({
  backgroundColor,
  children,
  className
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
    <div className="absolute top-4 right-4">
      <ControlsClose className="text-[16px] text-bulma" />
    </div>
  );
};

const Snackbar = Object.assign(SnackbarRoot, {
  Content,
  Header,
  Message,
  Close,
  Icon,
});

export default Snackbar;
