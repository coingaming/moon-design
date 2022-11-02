import React, { createContext, useContext } from 'react';
import { GenericCheckAlternative } from '@heathmont/moon-icons-tw';
import classNames from '../private/utils/classnames';

type SnackbarProps = {
  width?: string;
  autoClose?: boolean;
  duration?: number;
  position?:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right';
  borderRadius?: string;
  font?: string;
};


type SnackbarState = {
  duration?: boolean;
};

type MultiTitleProps = {
  title?: JSX.Element | string;
  text?: JSX.Element | string;
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

const SnackbarRoot: SnackbarProps = React.forwardRef(
  <C extends React.ElementType = 'div'>(
    { width,autoClose, duration, position, borderRadius, font, children, ...rest },
    ref?: PolymorphicRef<C>
  ) => {
    const states = {
     duration
    };
    return (
      <SnackbarContext.Provider value={states}>
        <div
          ref={ref}
          className={classNames(
            'absolute w-full rounded-xl bg-goku px-4 py-6 text-left scale-100 flex items-center transition',
            width ? width : 'max-w-lg',
            borderRadius ? borderRadius : 'rounded-xl',
            position === 'top-left' ? 'top-4 left-4' : 'top-4 right-4',
            position === 'top-center' ? 'top-4 left-0 right-0 ml-auto mr-auto' : 'top-4 right-4',   
            position === 'top-right' ? 'top-4 right-4' : 'top-4 right-4',
            position === 'bottom-left' ? 'bottom-4 left-4' : 'top-4 right-4',
            position === 'bottom-center' ? 'bottom-4 left-0 right-0 ml-auto mr-auto' : 'top-4 right-4',
            position === 'bottom-right' ? 'bottom-4 right-4' : 'top-4 right-4'

          )}
          {...rest}
        >
          {children}
        </div>
      </SnackbarContext.Provider>
    );
  }
);

const Header: React.FC = ({ children }) => {
  return (
    <span className="block grow text-start text-bulma overflow-hidden">
      {children}
    </span>
  );
};

const Text: React.FC<MultiTitleProps> = ({ title, text }) => {
  return (
    <span className="block grow text-start text-bulma overflow-hidden">
      <span className="block text-bulma text-moon-14">{title}</span>
      <span className="flex text-trunks text-moon-12">
        <span className="flex-1 truncate">{text}</span>
      </span>
    </span>
  );
};

const IconContainer: React.FC<MultiTitleProps> = ({ title, text }) => {
  return (
    <span className="block grow text-start text-bulma overflow-hidden">
      <span className="block text-bulma text-moon-14">{title}</span>
      <span className="flex text-trunks text-moon-12">
        <span className="flex-1 truncate">{text}</span>
      </span>
    </span>
  );
};

const Icon: React.FC<MultiTitleProps> = ({ title, text }) => {
  return (
    <span className="block grow text-start text-bulma overflow-hidden">
      <span className="block text-bulma text-moon-14">{title}</span>
      <span className="flex text-trunks text-moon-12">
        <span className="flex-1 truncate">{text}</span>
      </span>
    </span>
  );
};

const Close: React.FC<MultiTitleProps> = ({ title, text }) => {
  return (
    <span className="block grow text-start text-bulma overflow-hidden">
      <span className="block text-bulma text-moon-14">{title}</span>
      <span className="flex text-trunks text-moon-12">
        <span className="flex-1 truncate">{text}</span>
      </span>
    </span>
  );
};



const Snackbar = Object.assign(SnackbarRoot, {
  Header,
  Text,
  IconContainer,
  Close,
  Icon,
});

export default Snackbar;
