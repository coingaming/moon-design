import React, { createContext, useContext, ElementType } from 'react';
import { Tab as HeadlesssTab } from '@headlessui/react';
import classNames from '../private/utils/classnames';

type TabsState = {
  size?: 'sm' | 'md';
};

const TabsContext = createContext<TabsState>({});
TabsContext.displayName = 'TabsContext';

const useTabsContext = (component: string) => {
  const context = useContext(TabsContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <Tabs /> component.`
    );
    // if (Error.captureStackTrace) Error.captureStackTrace(err, useTabsContext);
    throw err;
  }
  return context;
};

//Tabs
type TabsProps = {
  size?: 'sm' | 'md';
  selectedIndex?: number;
  onChange?: () => void;
};

const TabsRoot: React.FC<TabsProps> = ({
  children,
  size,
  selectedIndex,
  onChange,
}) => {
  const states = {
    size: size,
  };

  return (
    <TabsContext.Provider value={states}>
      <HeadlesssTab.Group selectedIndex={selectedIndex} onChange={onChange}>
        {children}
      </HeadlesssTab.Group>
    </TabsContext.Provider>
  );
};

//Tabs.List
const List: React.FC = ({ children }) => {
  return (
    <HeadlesssTab.List className="flex items-center justify-center gap-2">
      {children}
    </HeadlesssTab.List>
  );
};

//Tabs.Tab
type TabProps = {
  disabled?: boolean;
  as?: ElementType<any>;
  className?: string | (({ selected }: { selected: boolean }) => string);
};

const Tab: React.FC<TabProps> = React.forwardRef(
  ({ children, disabled, as, className, ...rest }, ref) => {
    const { size } = useTabsContext('Tabs.Tab');
    return (
      <HeadlesssTab
        disabled={disabled}
        className={({ selected }) =>
          classNames(
            size === 'sm' ? 'px-2 py-1 gap-1' : 'py-2 px-3 gap-2',
            'focus:outline-none py-2 px-3 gap-2',
            'text-moon-14 text-bulma font-semibold flex items-center justify-center cursor-pointer',
            'relative after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-piccolo  after:transition-transform after:duration-300 after:origin-top-left after:scale-x-0 after:scale-y-100',
            'hover:after:origin-top-left hover:after:scale-100 hover:text-piccolo',
            selected && 'after:origin-top-left after:scale-x-100 text-piccolo',
            typeof className === 'function'
              ? className({ selected: selected })
              : className
          )
        }
        as={as || 'button'}
        ref={ref}
        {...rest}
      >
        {children}
      </HeadlesssTab>
    );
  }
);

//Tabs.Pill
type PillProps = {
  disabled?: boolean;
  as?: ElementType<any>;
  className?: string | (({ selected }: { selected: boolean }) => string);
};

const Pill: React.FC<PillProps> = React.forwardRef(
  ({ children, disabled, className, ...rest }, ref) => {
    const { size } = useTabsContext('Tabs.Pill');
    return (
      <HeadlesssTab
        disabled={disabled}
        className={({ selected }) =>
          classNames(
            size === 'sm' ? 'px-2 py-1 gap-1' : 'py-2 px-3 gap-2',
            'focus:outline-none text-moon-14 text-bulma font-semibold flex items-center justify-center transition-colors cursor-pointer',
            'hover:bg-gohan rounded-moon-i-sm',
            selected && 'bg-gohan',
            typeof className === 'function'
              ? className({ selected: selected })
              : className
          )
        }
        ref={ref}
        {...rest}
      >
        {children}
      </HeadlesssTab>
    );
  }
);

type PanelsProps = {
  className?: string;
};

//Tabs.Panels
const Panels: React.FC<PanelsProps> = ({ children, className }) => {
  return (
    <HeadlesssTab.Panels className={className}>{children}</HeadlesssTab.Panels>
  );
};

type PanelProps = {
  className?: string;
};

//Tabs.Panel
const Panel: React.FC<PanelProps> = ({ children, className }) => {
  return (
    <HeadlesssTab.Panel className={className}>{children}</HeadlesssTab.Panel>
  );
};

const Tabs = Object.assign(TabsRoot, { Tab, Pill, List, Panels, Panel });

export default Tabs;
