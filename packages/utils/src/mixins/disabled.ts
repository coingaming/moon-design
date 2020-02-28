import { CSSObject } from 'styled-components';
import { shared } from '@heathmont/sportsbet-themes';

/**
 * Accepts either an opacity (as a number), or nested styles as a CSS Object.
 */
type DisabledProps = number | CSSObject;

const disabled = (styles?: DisabledProps) => ({
  '&:disabled, &[disabled]': {
    cursor: 'not-allowed',
    opacity: typeof styles === 'number' ? styles : shared.opacity.disabled,
    ...(typeof styles === 'object' && styles),
  },
});

export default disabled;
