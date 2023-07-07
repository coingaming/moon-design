import React from 'react';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import getTabSize from './private/utils/getTabSize';
import type Size from './private/types/Size';

type TabsRootProps = {
  className?: string;
  children?: React.ReactNode;
};
const TabsRoot: React.FC<TabsRootProps> = ({ className, children }) => {
  return <div className={mergeClassnames(className)}>{children}</div>;
};

type ListProps = {
  className?: string;
  children?: React.ReactNode;
};
const List: React.FC<ListProps> = ({ className, children }) => {
  return (
    <div
      className={mergeClassnames(
        className,
        'flex items-center justify-center w-fit gap-2'
      )}
    >
      {children}
    </div>
  );
};

type TabProps = {
  className?: string;
  children?: React.ReactNode;
  isDisabled?: boolean;
  selected?: boolean;
  size?: Size;
};

type TabPolymorphicProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, TabProps>;

type TabComponentProps = <C extends React.ElementType = 'a'>(
  props: TabPolymorphicProps<C>
) => React.ReactElement | null;

const Tab: TabComponentProps = React.forwardRef(
  <C extends React.ElementType = 'a'>(
    {
      className,
      children,
      isDisabled,
      selected,
      href,
      size,
      as,
      ...rest
    }: TabPolymorphicProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'a';
    return (
      <Component
        href={href}
        className={mergeClassnames(
          getTabSize(size),
          'relative flex items-center justify-center w-full whitespace-nowrap text-moon-14',
          'text-bulma font-medium cursor-pointer after:content-[""] after:absolute after:left-0',
          'after:bottom-0 after:w-full after:h-[2px] after:bg-piccolo after:transition-transform',
          'after:duration-300 after:origin-top-left after:scale-x-0 after:scale-y-100',
          'hover:after:origin-top-left hover:after:scale-100 hover:text-piccolo',
          'focus:outline-none',
          isDisabled && 'opacity-30 hover:after:scale-0 cursor-not-allowed',
          ' [&:local-link]:after:origin-top-left [&:local-link]:after:scale-x-100 [&:local-link]:text-piccolo',
          selected && 'after:origin-top-left after:scale-x-100 text-piccolo',
          className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

const Pill: TabComponentProps = React.forwardRef(
  <C extends React.ElementType = 'a'>(
    {
      className,
      children,
      isDisabled,
      selected,
      href,
      size,
      as,
      ...rest
    }: TabPolymorphicProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'a';
    return (
      <Component
        href={href}
        className={mergeClassnames(
          getTabSize(size),
          'relative flex items-center justify-center w-full whitespace-nowrap text-moon-14',
          'text-bulma font-medium cursor-pointer after:content-[""] after:absolute after:left-0',
          'after:bottom-0 after:w-full after:h-[2px] after:bg-piccolo after:transition-transform',
          'after:duration-300 after:origin-top-left after:scale-x-0 after:scale-y-100',
          'hover:after:origin-top-left hover:after:scale-100 hover:text-piccolo',
          'focus:outline-none',
          isDisabled && 'opacity-30 hover:after:scale-0 cursor-not-allowed',
          ' [&:local-link]:after:origin-top-left [&:local-link]:after:scale-x-100 [&:local-link]:text-piccolo',
          selected && 'after:origin-top-left after:scale-x-100 text-piccolo',
          className
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

// const Pill: TabComponentProps = React.forwardRef(
//   <C extends React.ElementType = 'a'>(
//     {
//       children,
//       className,
//       isDisabled,
//       selected,
//       href,
//       as,
//       size,
//       ...rest
//     }: TabPolymorphicProps<C>,
//     ref: PolymorphicRef<C>
//   ) => {
//     const Component = as || 'a';
//     return (
//       <Component
//         className={mergeClassnames(
//           getTabSize(size),
//           'flex items-center justify-center w-full whitespace-nowrap text-moon-14 text-bulma',
//           'font-medium rounded-moon-i-sm transition-colors cursor-pointer hover:bg-gohan',
//           'focus:outline-none',
//           selected && 'bg-gohan',
//           isDisabled && 'opacity-30 hover:bg-transparent cursor-not-allowed'
//         )}
//         ref={ref}
//         aria-label="Close"
//         {...rest}
//       >
//         {children}
//       </Component>
//     );
//   }
// );

type PanelsProps = {
  className?: string;
  children?: React.ReactNode;
};

const Panels: React.FC<PanelsProps> = ({ children }) => {
  return <div className=" relative">{children}</div>;
};

type PanelProps = {
  id: string;
  className?: string;
  children?: React.ReactNode;
};

const Panel: React.FC<PanelProps> = ({ children, id }) => {
  return (
    <div
      id={id}
      className=" absolute w-full p-5  [&:not(:target)]:hidden target:block"
    >
      {children}
    </div>
  );
};

const Tabs = Object.assign(TabsRoot, { List, Tab, Panels, Panel, Pill });
export default Tabs;
