import React, { createContext, useContext } from 'react';
import { GenericCheckAlternative } from '@heathmont/moon-icons-tw';
import classNames from '../private/utils/classnames';

type MenuItemProps = {
  width?: string;
  isSelected?: boolean;
  isActive?: boolean;
};

type MenuItemPolymorphicProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, MenuItemProps>;

type MenuItemComponentProps = <C extends React.ElementType = 'button'>(
  props: MenuItemPolymorphicProps<C>
) => React.ReactElement | null;

type MenuItemState = {
  selected?: boolean;
  active?: boolean;
};

type CheckboxRadioProps = {
  isSelected?: boolean;
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
      ...rest
    }: MenuItemPolymorphicProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'button';
    const states = {
      selected: isSelected,
      active: isActive,
    };
    return (
      <MenuItemContext.Provider value={states}>
        <Component
          ref={ref}
          className={classNames(
            'flex gap-2 justify-between items-center p-2 bg-transparent rounded-moon-i-sm text-moon-14 focus:outline-none focus:shadow-focus cursor-pointer',
            'hover:bg-bulma/[0.08] transition',
            width ? width : 'w-full',
            (isSelected || isActive) && 'bg-bulma/[0.08]'
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
  return (
    <span className="block grow text-start text-bulma overflow-hidden">
      {children}
    </span>
  );
};

const MultiTitle: React.FC<MultiTitleProps> = ({ title, text }) => {
  return (
    <span className="block grow text-start text-bulma overflow-hidden">
      <span className="block text-bulma text-moon-14">{title}</span>
      <span className="flex text-trunks text-moon-12">
        <span className="flex-1 truncate">{text}</span>
      </span>
    </span>
  );
};

const Radio: React.FC<CheckboxRadioProps> = ({ isSelected }) => {
  const { selected = isSelected } = useMenuItemContext('Menu.Items');
  return (
    <span className="flex w-6 h-6 justify-center items-center">
      <span
        className={classNames(
          'block relative w-4 h-4 rounded-full shadow-[0_0_0_1px_inset] ',
          selected ? 'shadow-piccolo' : 'shadow-trunks'
        )}
      >
        <span
          className={classNames(
            selected ? 'scale-100' : 'scale-0',
            'h-2 w-2 rounded-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-piccolo transition-transform'
          )}
        />
      </span>
    </span>
  );
};

const Checkbox: React.FC<CheckboxRadioProps> = ({ isSelected }) => {
  const { selected = isSelected } = useMenuItemContext('Menu.Items');
  return (
    <span className="flex w-6 h-6 justify-center items-center">
      <span
        className={classNames(
          'block relative w-4 min-w-[1rem] h-4 rounded-moon-i-xs duration-200 transition-[background-color]',
          selected
            ? 'bg-piccolo shadow-none'
            : 'shadow-[0_0_0_1px_inset] shadow-trunks'
        )}
      >
        {selected && (
          <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <GenericCheckAlternative className="text-[1rem] text-goten" />
          </span>
        )}
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
