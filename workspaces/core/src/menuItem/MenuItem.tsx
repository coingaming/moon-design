import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useCallback,
} from 'react';
import { GenericCheckAlternative } from '@heathmont/moon-icons-tw';
import stateReducer from '../private/utils/stateReducer';
import mergeClassnames from '../utils/mergeClassnames';

type MenuItemProps = {
  width?: string;
  isSelected?: boolean;
  isActive?: boolean;
  className?: string;
};

type MenuItemPolymorphicProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, MenuItemProps>;

type MenuItemComponentProps = <C extends React.ElementType = 'button'>(
  props: MenuItemPolymorphicProps<C>
) => React.ReactElement | null;

type MenuItemState = {
  selected?: boolean;
  active?: boolean;
  registerChild?: (child: string) => () => void;
};

type CheckboxRadioProps = {
  isSelected?: boolean;
  className?: string;
};

type MultiTitleProps = {
  title?: JSX.Element | string;
  text?: JSX.Element | string;
};

const MenuItemContext = createContext<MenuItemState>({});
MenuItemContext.displayName = 'MenuItemContext';

const useMenuItemContext = (component: string) => {
  const context = useContext(MenuItemContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <Menu /> component.`
    );
    // if (Error.captureStackTrace) Error.captureStackTrace(err, useMenuItemContext);
    throw err;
  }
  return context;
};

const MenuItemRoot: MenuItemComponentProps = React.forwardRef(
  <C extends React.ElementType = 'button'>(
    {
      as,
      children,
      width,
      isSelected,
      isActive,
      className,
      ...rest
    }: MenuItemPolymorphicProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'button';
    const states = {
      selected: isSelected,
      active: isActive,
    };

    const [state, dispatch] = useReducer(stateReducer, {
      childrens: [],
    });

    const registerChild = useCallback((child: string) => {
      dispatch && dispatch({ type: 'RegisterChild', children: child });
      return () =>
        dispatch && dispatch({ type: 'UnregisterChild', children: child });
    }, []);

    const isNoBg = state.childrens?.find(
      (name) => name === 'Radio' || name === 'Checkbox'
    );
    const innerSelected = isNoBg ? false : isSelected;
    return (
      <MenuItemContext.Provider value={{ ...states, ...state, registerChild }}>
        <Component
          ref={ref}
          className={mergeClassnames(
            'flex gap-2 justify-between items-center p-2 bg-transparent rounded-moon-i-sm text-moon-14 text-bulma focus:outline-none focus:shadow-focus cursor-pointer hover:bg-bulma/[0.04] transition',
            width ? width : 'w-full',
            (innerSelected || isActive) && 'bg-bulma/[0.04]',
            className && className
          )}
          {...((!as || as === 'button') && { type: 'button' })}
          {...rest}
        >
          {children}
        </Component>
      </MenuItemContext.Provider>
    );
  }
);

const Title: React.FC = ({ children }) => {
  const { registerChild } = useMenuItemContext('MenuItem.Title');
  useEffect(() => {
    registerChild && registerChild('Title');
  }, []);
  return (
    <span className="block grow text-start text-bulma overflow-hidden">
      {children}
    </span>
  );
};

const MultiTitle: React.FC<MultiTitleProps> = ({ title, text }) => {
  const { registerChild } = useMenuItemContext('MenuItem.MultiTitle');
  useEffect(() => {
    registerChild && registerChild('MultiTitle');
  }, []);
  return (
    <span className="block grow text-start text-bulma overflow-hidden">
      <span className="block text-bulma text-moon-14">{title}</span>
      <span className="flex text-trunks text-moon-12">
        <span className="flex-1 truncate">{text}</span>
      </span>
    </span>
  );
};

const Radio: React.FC<CheckboxRadioProps> = ({ isSelected, className }) => {
  const { selected = isSelected, registerChild } =
    useMenuItemContext('MenuItem.Items');
  useEffect(() => {
    registerChild && registerChild('Radio');
  }, []);
  return (
    <span className="flex w-6 h-6 justify-center items-center">
      <span
        aria-checked={selected}
        className={mergeClassnames(
          'block relative w-4 h-4 rounded-full shadow-[0_0_0_1px_inset] shadow-trunks moon-checked:shadow-piccolo',
          'after:content-[""] after:h-2 after:w-2 after:rounded-full after:absolute after:top-1/2 after:left-1/2 after:translate-x-[-50%] after:translate-y-[-50%] after:bg-piccolo after:transition-transform after:scale-0 moon-checked:after:scale-100',
          className && className
        )}
      />
    </span>
  );
};

const Checkbox: React.FC<CheckboxRadioProps> = ({ isSelected, className }) => {
  const { selected = isSelected, registerChild } =
    useMenuItemContext('MenuItem.Checkbox');
  useEffect(() => {
    registerChild && registerChild('Checkbox');
  }, []);
  return (
    <span className="flex w-6 h-6 justify-center items-center relative">
      <span
        aria-checked={selected}
        className={mergeClassnames(
          'absolute top-1 ltr:left-1 rtl:right-1 flex w-4 h-4 items-center justify-center shadow-[0_0_0_1px_inset] transition-colors text-moon-16 rounded-moon-i-xs shadow-trunks text-goten moon-checked:shadow-none moon-checked:bg-piccolo',
          className && className
        )}
        aria-hidden="true"
      >
        <GenericCheckAlternative
          className={mergeClassnames(
            'transition-opacity',
            selected ? 'opacity-100' : 'opacity-0'
          )}
        />
      </span>
    </span>
  );
};

const MenuItem = Object.assign(MenuItemRoot, {
  Title,
  MultiTitle,
  Checkbox,
  Radio,
});

export default MenuItem;
