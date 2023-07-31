import React, { forwardRef } from 'react';
import { mergeClassnames } from '@heathmont/moon-core-tw';
import type BodyTRProps from '../private/types/BodyTRProps';

const BodyTR = forwardRef<HTMLDivElement, BodyTRProps>(
  (
    {
      reactTableProps,
      onClick,
      onHoverToggle,
      isExpanded,
      isLastRow,
      isSelected,
      selectable,
      children,
      backgroundColor,
      fontColor,
      isHovered,
      role = 'row',
    },
    ref
  ) => (
    <div
      ref={ref}
      {...reactTableProps}
      role={role}
      className={mergeClassnames(
        'relative focus-visible:outline-none flex rounded-moon-s-sm transition-colors',
        isExpanded && 'first:rounded-bl-0 last:rounded-br-0',
        isLastRow &&
          'first:rounded-tl-0 first:rounded-bl-0 last:rounded-tl-0 last:rounded-br-0 after:mt-0',
        isSelected
          ? 'text-bulma bg-bulma/[.04]'
          : fontColor
          ? `text-${fontColor}`
          : 'text-bulma',
        isSelected || isHovered
          ? 'bg-bulma/[.04] border-piccolo/10 cursor-pointer'
          : `bg-${backgroundColor} border-${backgroundColor}`,
        selectable &&
          'pl-2 text-bulma border-t-1 border-t-transparent border-b-1 border-b-transparent bg-bulma/[.04]'
      )}
      onMouseEnter={onHoverToggle ? () => onHoverToggle(true) : null}
      onMouseLeave={onHoverToggle ? () => onHoverToggle(false) : null}
      onClick={() => (onClick ? onClick() : null)}
    >
      {children}
    </div>
  )
);

export default BodyTR;
