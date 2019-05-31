import * as React from 'react';
import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { colors } from '@heathmont/sportsbet-tokens';
import { inlineSVG, spacing } from '@heathmont/sportsbet-utils';
import { IconWarning, IconCircle } from '@heathmont/sportsbet-icons';

type ErrorProps = {
  text: string;
};

/** To be replaced with appropriate SVG */
const ErrorIcon = styled.i({
  display: 'inline-block',
  width: rem(14),
  height: rem(14),
  marginRight: spacing('small'),
  verticalAlign: 'sub',
  backgroundPosition: 'center',
  backgroundSize: '60%, 100%',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `
    ${inlineSVG(<IconWarning color={colors.neutral[10]} />)},
    ${inlineSVG(<IconCircle color={colors.error} />)}`,
});

const ErrorMessage = styled.span({
  display: 'inline-block',
  marginTop: spacing('small'),
  fontSize: rem(12),
  color: colors.error,
});

/**
 * Component
 *
 * Consistent inline error messages for forms
 */
const Error: React.FC<ErrorProps> = ({ text, ...props }) => {
  return (
    <ErrorMessage {...props}>
      <ErrorIcon />
      {text}
    </ErrorMessage>
  );
};

export { Error, ErrorProps };
