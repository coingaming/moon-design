import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import stateReducer from '../private/utils/stateReducer';
import mergeClassnames from '../utils/mergeClassnames';

type Props = {
  children?: React.ReactNode;
};

const TooltipRoot: React.FC<Props> = ({ children }) => (
  <RadixTooltip.Provider>
    <RadixTooltip.Root>{children}</RadixTooltip.Root>
  </RadixTooltip.Provider>
);

type TriggerProps = {
  className?: string;
  children?: React.ReactNode;
};

const Trigger: React.FC<TriggerProps> = ({ className, children }) => (
  <RadixTooltip.Trigger className={className}>{children}</RadixTooltip.Trigger>
);

type TooltipState = {
  withArrow?: boolean;
  registerChild?: (child: string) => () => void;
};

const TooltipContext = createContext<TooltipState>({});
TooltipContext.displayName = 'TooltipContext';

const useTooltipContext = (component: string) => {
  const context = useContext(TooltipContext);
  if (context === null) {
    const err = new Error(
      `<${component}> is missing a parent <Tooltip /> component.`
    );
    // if (Error.captureStackTrace) Error.captureStackTrace(err, useTooltipContext);
    throw err;
  }
  return context;
};

type ContentProps = {
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  withShadow?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const Content: React.FC<ContentProps> = ({
  side = 'top',
  align = 'center',
  withShadow = true,
  className,
  children,
}) => {
  const states = {
    withArrow: false,
  };
  const [state, dispatch] = useReducer(stateReducer, {
    childrens: [],
  });
  const registerChild = useCallback((child: string) => {
    dispatch && dispatch({ type: 'RegisterChild', children: child });
    return () =>
      dispatch && dispatch({ type: 'UnregisterChild', children: child });
  }, []);
  const isArrow = state.childrens?.find((name) => name === 'Arrow');
  return (
    <TooltipContext.Provider value={{ ...states, ...state, registerChild }}>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          side={side}
          align={align}
          sideOffset={isArrow ? 4 : 8}
          className={mergeClassnames(
            'p-3 rounded-moon-s-xs text-moon-12 text-bulma bg-gohan',
            withShadow &&
              'shadow-[0_6px_6px_-6px_rgba(0,0,0,0.16)] drop-shadow-[0_0_1px_rgba(0,0,0,0.4)]',
            className
          )}
        >
          {children}
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </TooltipContext.Provider>
  );
};

type ArrowProps = {
  className?: string;
};

const Arrow: React.FC<ArrowProps> = ({ className }) => {
  const { registerChild } = useTooltipContext('Tooltip.Arrow');
  useEffect(() => {
    registerChild && registerChild('Arrow');
  }, []);
  return (
    <RadixTooltip.Arrow asChild>
      <div
        className={mergeClassnames(
          'relative top-[-7px] rotate-45 w-3 h-3 rounded-sm bg-gohan',
          className
        )}
      />
    </RadixTooltip.Arrow>
  );
};

const Tooltip = Object.assign(TooltipRoot, { Trigger, Content, Arrow });

export default Tooltip;
