import React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
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

type ContentProps = {
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  withArrow?: boolean;
  withShadow?: boolean;
  bgColor?: string;
  className?: string;
  children?: React.ReactNode;
};

const Content: React.FC<ContentProps> = ({
  side = 'top',
  align = 'center',
  withArrow = true,
  withShadow = true,
  bgColor = 'bg-gohan',
  className,
  children,
}) => (
  <RadixTooltip.Portal>
    <RadixTooltip.Content
      side={side}
      align={align}
      sideOffset={withArrow ? 4 : 8}
      className={mergeClassnames(
        'p-3 rounded-moon-s-xs text-moon-12 text-bulma',
        withShadow &&
          'shadow-[0_6px_6px_-6px_rgba(0,0,0,0.16)] drop-shadow-[0_0_1px_rgba(0,0,0,0.4)]',
        bgColor,
        className
      )}
    >
      {children}
      {withArrow && (
        <RadixTooltip.Arrow asChild>
          <div
            className={mergeClassnames(
              'relative top-[-7px] rotate-45 w-3 h-3 rounded-sm',
              bgColor
            )}
          />
        </RadixTooltip.Arrow>
      )}
    </RadixTooltip.Content>
  </RadixTooltip.Portal>
);

const Tooltip = Object.assign(TooltipRoot, { Trigger, Content });

export default Tooltip;
