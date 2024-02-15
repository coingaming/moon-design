import React, { useEffect, ReactNode } from 'react';
import type CheckboxRadioProps from './private/types/CheckboxRadioProps';
import type MenuItemPolymorphicProps from './private/types/MenuItemPolymorphicProps';
import type MultiTitleProps from './private/types/MultiTitleProps';
import MenuItemContext from './private/utils/MenuItemContext';
import useMenuItemContext from './private/utils/useMenuItemContext';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import GenericCheckAlternative from '../private/icons/GenericCheckAlternative';
import useRegisterChild from '../private/utils/useRegisterChild';

const MenuItemRoot = React.forwardRef(
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
    const { state, registerChild } = useRegisterChild();
    const isNoBg = state.childrens?.find(
      (name) => name === 'Radio' || name === 'Checkbox'
    );
    const innerSelected = isNoBg ? false : isSelected;
    return (
      <MenuItemContext.Provider value={{ ...states, ...state, registerChild }}>
        <Component
          ref={ref}
          className={mergeClassnames(
            'flex gap-2 justify-between items-center p-2 bg-transparent rounded-moon-i-sm',
            'text-moon-14 text-bulma focus:outline-none focus:shadow-focus cursor-pointer',
            'hover:bg-heles transition',
            width ? width : 'w-full',
            (innerSelected || isActive) && 'bg-heles',
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

const Title = ({ children }: { children?: ReactNode }) => {
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

const MultiTitle = ({ title, text }: MultiTitleProps) => {
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

const Radio = ({
  isSelected,
  className,
  ['aria-label']: ariaLabel,
}: CheckboxRadioProps) => {
  const { selected = isSelected, registerChild } =
    useMenuItemContext('MenuItem.Items');
  useEffect(() => {
    registerChild && registerChild('Radio');
  }, []);
  const ariaLabelValue = ariaLabel ? ariaLabel : 'Radio option';
  return (
    <span className="flex w-6 h-6 justify-center items-center">
      <span
        role="radio"
        aria-checked={selected}
        aria-label={ariaLabelValue}
        className={mergeClassnames(
          'block relative w-4 h-4 rounded-full shadow-[0_0_0_1px_inset] shadow-trunks',
          'moon-checked:shadow-piccolo after:h-2 after:w-2 after:rounded-full after:absolute',
          'after:top-1/2 after:left-1/2 after:-translate-y-1/2 after:-translate-x-1/2',
          'after:bg-piccolo after:transition-transform after:scale-0',
          'moon-checked:after:scale-100',
          className
        )}
      />
    </span>
  );
};

const Checkbox = ({
  isSelected,
  className,
  ['aria-label']: ariaLabel,
}: CheckboxRadioProps) => {
  const { selected = isSelected, registerChild } =
    useMenuItemContext('MenuItem.Checkbox');
  useEffect(() => {
    registerChild && registerChild('Checkbox');
  }, []);
  const ariaLabelValue = ariaLabel ? ariaLabel : 'Checkbox';
  return (
    <span className="flex w-6 h-6 justify-center items-center relative">
      <span
        role="checkbox"
        aria-checked={selected}
        aria-label={ariaLabelValue}
        className={mergeClassnames(
          'absolute top-1 start-1 flex w-4 h-4 items-center justify-center',
          'shadow-[0_0_0_1px_inset] transition-colors text-moon-16 rounded-moon-s-xs shadow-trunks',
          'text-goten moon-checked:shadow-none moon-checked:bg-piccolo',
          className
        )}
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
