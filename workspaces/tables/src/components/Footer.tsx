import React from 'react';
import type FooterProps from '../private/types/FooterProps';

const Footer = ({
  headerBackgroundColor,
  selectable,
  children,
}: FooterProps) => (
  <div
    className="sticky z-[99] bottom-0"
    style={
      selectable
        ? { backgroundColor: `rgb(var(--${headerBackgroundColor}))` }
        : {}
    }
  >
    {children}
  </div>
);

export default Footer;
