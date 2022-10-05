import React, { createContext, useContext } from 'react';
import { GenericCheckAlternative } from '@heathmont/moon-icons-tw';
import classNames from '../private/utils/classnames';

type MenuItemProps<C extends React.ElementType> = {
  as?: C;
  width?: string;
  isActive?: boolean;
  elementLeft?: React.ReactElement;
  elementRight?: React.ReactElement;
  isCheckbox?: boolean;
};

export type Props<C extends React.ElementType> = React.PropsWithChildren<
  MenuItemProps<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof MenuItemProps<C>>;

type CheckboxRadioProps = {
  isActive?: boolean;
};

type States = {
  active?: boolean;
};
const MenuItemContext = createContext<States>({});
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

const MenuItemRoot = <C extends React.ElementType = 'button'>({
  as,
  children,
  width,
  isActive,
  ...rest
}: Props<C>) => {
  const Component = as || 'button';
  const states = {
    isActive: isActive,
  };
  return (
    <MenuItemContext.Provider value={states}>
      <Component
        className={classNames(
          'flex gap-2 justify-between items-center p-2 bg-gohan  rounded-moon-i-sm text-moon-14 focus:shadow-focus',
          'hover:bg-bulma/[0.08] transition',
          width ? width : 'w-full',
          isActive && 'bg-bulma/[0.08]'
        )}
        {...((!as || as === 'button') && { type: 'button' })}
        {...rest}
      >
        {children}
        {/* {children({isActive})} */}
      </Component>
    </MenuItemContext.Provider>
  );
};

const Title: React.FC = ({ children }) => {
  return (
    <span className="block grow text-start text-bulma overflow-hidden">
      {children}
    </span>
  );
};

const Radio: React.FC<CheckboxRadioProps> = ({ isActive }) => {
  const { active } = useMenuItemContext('Menu.Items');
  return (
    <span
      className={classNames(
        'block relative w-4 h-4 rounded-full shadow-[0_0_0_1px_inset] ',
        isActive ? 'shadow-piccolo' : 'shadow-trunks'
      )}
    >
      {isActive && (
        <span
          className={classNames(
            'h-2 w-2 rounded-full absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-piccolo transition-transform',
            isActive ? 'scale-100' : 'scale-0'
          )}
        />
      )}
    </span>
  );
};

const Checkbox: React.FC<CheckboxRadioProps> = ({ isActive }) => (
  <span
    className={classNames(
      'block relative w-4 min-w-[1rem] h-4 rounded-moon-i-xs duration-200 transition-[background-color]',
      isActive
        ? 'bg-piccolo shadow-none'
        : 'shadow-[0_0_0_1px_inset] shadow-trunks'
    )}
  >
    {isActive && (
      <span className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <GenericCheckAlternative className="text-[1rem] text-goten" />
      </span>
    )}
  </span>
);

const MenuItem = Object.assign(MenuItemRoot, { Title, Checkbox, Radio });

export default MenuItem;
