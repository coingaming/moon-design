import React, { useEffect } from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import type ArrowProps from './private/types/ArrowProps';
import type ContentComponentProps from './private/types/ContentComponentProps';
import type RootContentProps from './private/types/RootContentProps';
import type TriggerComponentProps from './private/types/TriggerComponentProps';
import getAlign from './private/utils/getAlign';
import getSide from './private/utils/getSide';
import TooltipContext from './private/utils/TooltipContext';
import useTooltipContext from './private/utils/useTooltipContext';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import useRegisterChild from '../private/utils/useRegisterChild';

const TooltipRoot = ({ children, ...rest }: RootContentProps) => (
  <RadixTooltip.Provider delayDuration={100}>
    <RadixTooltip.Root {...rest}>{children}</RadixTooltip.Root>
  </RadixTooltip.Provider>
);

const Arrow = ({ className }: ArrowProps) => {
  const { registerChild } = useTooltipContext('Tooltip.Arrow');
  useEffect(() => {
    registerChild && registerChild('Arrow');
  }, []);
  return (
    <RadixTooltip.Arrow asChild>
      <div
        className={mergeClassnames(
          'relative top-[-7px] rotate-45 w-3 h-3 rounded-sm bg-goku',
          className
        )}
      />
    </RadixTooltip.Arrow>
  );
};

const Trigger = ({ className, children, ...rest }: TriggerComponentProps) => (
  <RadixTooltip.Trigger asChild className={className} {...rest}>
    {children}
  </RadixTooltip.Trigger>
);

const Content = ({
  position = 'top-center',
  className,
  children,
  container,
  ...rest
}: ContentComponentProps) => {
  const states = {
    withArrow: false,
  };
  const { state, registerChild } = useRegisterChild();
  const isArrow = state.childrens?.find((name) => name === 'Arrow');
  return (
    <TooltipContext.Provider value={{ ...states, ...state, registerChild }}>
      <RadixTooltip.Portal container={container}>
        <RadixTooltip.Content
          side={getSide(position)}
          align={getAlign(position)}
          sideOffset={isArrow ? 4 : 8}
          className={mergeClassnames(
            'p-3 rounded-moon-s-xs text-moon-12 text-bulma bg-goku',
            'shadow-[0_6px_6px_-6px_rgba(0,0,0,0.16)] drop-shadow-[0_0_1px_rgba(0,0,0,0.4)]',
            className
          )}
          {...rest}
        >
          {children}
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </TooltipContext.Provider>
  );
};

const Tooltip = Object.assign(TooltipRoot, { Trigger, Content, Arrow });

export default Tooltip;
