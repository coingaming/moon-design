import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from '@heathmont/sportsbet-tokens';
import { inlineSVG, rem, spacing } from '@heathmont/sportsbet-utils';
import { IconWarning } from '@heathmont/sportsbet-icons/lib/svg/IconWarning';
import { IconCircle } from '@heathmont/sportsbet-icons/lib/svg/IconCircle';

/** To be replaced with appropriate SVG */
const FormErrorIcon = styled.i({
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

const FormErrorMessage = styled.p({
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
const FormError: React.FC = ({ children, ...props }) => {
  return (
    <FormErrorMessage {...props} role="alert">
      <FormErrorIcon />
      {children}
    </FormErrorMessage>
  );
};

export { FormError };
