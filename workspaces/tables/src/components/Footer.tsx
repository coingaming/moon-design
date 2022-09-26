import React from 'react';

type FooterProps = {
  headerBackgroundColor: string;
  selectable?: boolean;
};
const Footer: React.FC<FooterProps> = ({
  headerBackgroundColor,
  selectable,
  children,
}) => {
  return <div className={`sticky z-1 bottom-0`}>{children}</div>;
};

export default Footer;
