import React from 'react';

type FooterProps = {
  ref: React.RefObject<any>;
  headerBackgroundColor: string;
  selectable?: boolean;
  children?: React.ReactNode;
};

const Footer: React.FC<FooterProps> = ({
  headerBackgroundColor,
  selectable,
  children,
}) => {
  return (
    <div
      className={'sticky z-[99] bottom-0'}
      style={
        selectable
          ? { backgroundColor: `rgb(var(--${headerBackgroundColor}))` }
          : {}
      }
    >
      {children}
    </div>
  );
};

export default Footer;
