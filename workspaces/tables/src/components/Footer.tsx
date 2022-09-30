import React from 'react';

type FooterProps = {
  ref: React.RefObject<any>;
  headerBackgroundColor: string;
  selectable?: boolean;
};
const Footer: React.FC<FooterProps> = ({
  headerBackgroundColor,
  selectable,
  children,
}) => {
  return (
    <div
      className={'sticky z-1 t-0 '}
      style={
        selectable
          ? {
              backgroundColor: `rgb(var(--${headerBackgroundColor}))`,
            }
          : {}
      }
    >
      {children}
    </div>
  );
};

// [HeaderTR]: {
//   '&:first-child': {
//     [TH]: {
//       boxShadow: `inset 0 1px 0 ${rgba(colorNew.trunks, 0.2)}`,
//       '&:first-child': {
//         borderTopLeftRadius: newTokens.borderRadius.surface.small,
//       },
//       '&:last-child': {
//         borderTopRightRadius: newTokens.borderRadius.surface.small,
//       },
//     },
//   },
// },
export default Footer;
