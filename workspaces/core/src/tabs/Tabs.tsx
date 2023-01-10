import React from 'react';
import { Tab as HeadlesssTab } from '@headlessui/react';
import mergeClassnames from '../utils/mergeClassnames';
import getTabSize from './private/utils/getTabSize';
import TabsContext from './private/utils/TabsContext';
import useTabsContext from './private/utils/useTabsContext';
import type ListProps from './private/types/ListProps';
import type PanelProps from './private/types/PanelProps';
import type TabProps from './private/types/TabProps';
import type TabsProps from './private/types/TabsProps';

const TabsRoot: React.FC<TabsProps> = ({
  children,
  selectedIndex,
  onChange,
}) => (
  <HeadlesssTab.Group selectedIndex={selectedIndex} onChange={onChange}>
    {children}
  </HeadlesssTab.Group>
);

const List: React.FC<ListProps> = ({ children, className, size = 'md' }) => {
  const states = {
    size: size,
  };
  return (
    <TabsContext.Provider value={states}>
      <HeadlesssTab.List
        className={mergeClassnames(
          'flex items-center justify-center gap-2',
          className
        )}
      >
        {children}
      </HeadlesssTab.List>
    </TabsContext.Provider>
  );
};

const Segment: React.FC<ListProps> = ({ children, className, size = 'md' }) => {
  const states = {
    size: size,
  };
  return (
    <TabsContext.Provider value={states}>
      <HeadlesssTab.List
        className={mergeClassnames(
          'flex items-center justify-center gap-1 p-1 bg-goku',
          size === 'md' ? 'rounded-moon-s-md' : 'rounded-moon-s-sm',
          className
        )}
      >
        {children}
      </HeadlesssTab.List>
    </TabsContext.Provider>
  );
};

const Tab: React.FC<TabProps> = React.forwardRef(
  ({ children, disabled, as, className, ...rest }, ref) => {
    const { size } = useTabsContext('Tabs.Tab');
    return (
      <HeadlesssTab
        disabled={disabled}
        className={({ selected }) =>
          mergeClassnames(
            getTabSize(size),
            'relative flex items-center justify-center text-moon-14 text-bulma font-medium',
            'cursor-pointer after:content-[""] after:absolute after:left-0 after:bottom-0',
            'after:w-full after:h-[2px] after:bg-piccolo after:transition-transform',
            'after:duration-300 after:origin-top-left after:scale-x-0 after:scale-y-100',
            'hover:after:origin-top-left hover:after:scale-100 hover:text-piccolo',
            'focus:outline-none',
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

const Pill: React.FC<TabProps> = React.forwardRef(
  ({ children, disabled, className, ...rest }, ref) => {
    const { size } = useTabsContext('Tabs.Pill');
    return (
      <HeadlesssTab
        disabled={disabled}
        className={({ selected }) =>
          mergeClassnames(
            getTabSize(size),
            'flex items-center justify-center text-moon-14 text-bulma font-medium',
            'rounded-moon-i-sm transition-colors cursor-pointer hover:bg-gohan focus:outline-none',
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

const Panels: React.FC<PanelProps> = ({ children, className }) => (
  <HeadlesssTab.Panels className={className}>{children}</HeadlesssTab.Panels>
);

const Panel: React.FC<PanelProps> = ({ children, className }) => (
  <HeadlesssTab.Panel className={className}>{children}</HeadlesssTab.Panel>
);

const Tabs = Object.assign(TabsRoot, {
  Tab,
  Pill,
  List,
  Segment,
  Panels,
  Panel,
});

export default Tabs;
