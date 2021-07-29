import { sharedTokens } from '@heathmont/moon-themes';

// TODO Deprecate this util
const disabled = (styles: any) => ({
  '&:disabled, &[disabled]': {
    cursor: 'not-allowed',
    opacity:
      typeof styles === 'number' ? styles : sharedTokens.opacity.disabled,
    ...(typeof styles === 'object' && styles),
  },
});

export default disabled;
