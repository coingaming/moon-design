import React, { forwardRef } from 'react';
import type FooterProps from '../private/types/FooterProps';

const Footer = forwardRef<HTMLDivElement, FooterProps>(
  ({ headerBackgroundColor, selectable, children }, ref) => (
    <div
      ref={ref}
      className="sticky z-[99] bottom-0"
      style={
        selectable
          ? { backgroundColor: `rgb(var(--${headerBackgroundColor}))` }
          : {}
      }
    >
      {children}
    </div>
  )
);

export default Footer;
