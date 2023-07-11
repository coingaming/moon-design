import React, { useEffect } from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import useRegisterChild from '../private/utils/useRegisterChild';
import getAlign from './private/utils/getAlign';
import getSide from './private/utils/getSide';
import TooltipContext from './private/utils/TooltipContext';
import useTooltipContext from './private/utils/useTooltipContext';
import type ArrowProps from './private/types/ArrowProps';
import type ContentProps from './private/types/ContentProps';
import type TooltipRootProps from './private/types/TooltipRootProps';
import type TriggerProps from './private/types/TriggerProps';

type RootContentProps = TooltipRootProps &
  React.ComponentProps<typeof RadixTooltip.Root>;

const TooltipRoot: React.FC<RootContentProps> = ({ children, ...rest }) => (
  <RadixTooltip.Provider delayDuration={100}>
    <RadixTooltip.Root {...rest}>{children}</RadixTooltip.Root>
  </RadixTooltip.Provider>
);

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

type TriggerComponentProps = TriggerProps &
  React.ComponentProps<typeof RadixTooltip.Trigger>;

const Trigger: React.FC<TriggerComponentProps> = ({
  className,
  children,
  ...rest
}) => (
  <RadixTooltip.Trigger className={className} {...rest}>
    {children}
  </RadixTooltip.Trigger>
);

type ContentComponentProps = ContentProps &
  React.ComponentProps<typeof RadixTooltip.Content>;
const Content: React.FC<ContentComponentProps> = ({
  position = 'top-center',
  className,
  children,
  container,
  ...rest
}) => {
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
            'p-3 rounded-moon-s-xs text-moon-12 text-bulma bg-gohan',
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
