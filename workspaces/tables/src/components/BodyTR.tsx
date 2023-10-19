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
      isSelected,
      selectable,
      children,
      backgroundColor,
      fontColor,
      isHovered,
      role = 'row',
      textClip,
    },
    ref
  ) => (
    <div
      ref={ref}
      {...reactTableProps}
      role={role}
      className={mergeClassnames(
        'relative focus-visible:outline-none flex rounded-moon-s-sm transition-colors',
        isExpanded && 'first:rounded-es-none last:rounded-ee-none',
        isSelected
          ? 'text-bulma bg-bulma/[.04]'
          : fontColor
          ? `text-${fontColor}`
          : 'text-bulma',
        isSelected || isHovered
          ? 'bg-bulma/[.04] border-piccolo/10 cursor-pointer'
          : `bg-${backgroundColor} border-${backgroundColor}`,
        selectable && 'ps-2 text-bulma bg-heles'
      )}
      onMouseEnter={onHoverToggle ? () => onHoverToggle(true) : null}
      onMouseLeave={onHoverToggle ? () => onHoverToggle(false) : null}
      onClick={(e) => (onClick ? onClick(e.target) : null)}
    >
      {children}
    </div>
  )
);

export default BodyTR;
