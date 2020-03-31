import * as React from 'react';
import { rem, mq } from '@heathmont/sportsbet-utils';
import styled from 'styled-components';

type SnackbarProps = {
  message: string;
  action?: any;
  autoHideDuration?: number; // ms
  isFixed?: boolean;
};

const SnackbarWrapper = styled.div<any>(
  ({
    theme: { color, space, fontWeight, zIndex, breakpoint },
    isActionExist,
    isFixed = true,
  }) => [
    isFixed && {
      position: 'fixed',
      left: 0,
      bottom: 0,
      // left: rem(20),
      // bottom: rem(20),
      zIndex: zIndex.dialog,
      margin: space.default,
    },
    {
      width: `calc(100% - ${space.default * 2})`,
      [mq(breakpoint.medium)]: {
        width: 'fit-content',
      },
      padding: space.default,
      backgroundColor: color.beerus[100],
      borderRadius: rem(16),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      'P,  SPAN': {
        fontSize: rem(12),
        lineHeight: rem(20),
        fontWeight: fontWeight.semibold,
      },
    },
    isActionExist
      ? {
          justifyContent: 'space-between',
          '& > * + *': {
            marginLeft: space.default,
          },
        }
      : { justifyContent: 'center' },
  ]
);

const Snackbar: React.FC<SnackbarProps> = ({
  message,
  action,
  autoHideDuration,
  isFixed,
}) => {
  const [visible, setVisible] = React.useState(true);

  autoHideDuration && setTimeout(() => setVisible(false), autoHideDuration);

  return visible ? (
    <SnackbarWrapper isActionExist={!!action} isFixed={isFixed}>
      {message && message}
      {action && action}
    </SnackbarWrapper>
  ) : null;
};

export { SnackbarProps };

export default Snackbar;
