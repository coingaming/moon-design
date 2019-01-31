import { css } from '@emotion/core';
import { colors } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';

/**
 * buttonShadow
 *
 * Removes user-agent `:focus` styles and generates a box-shadow using the
 * color provided.
 */
const buttonShadow = (color: string) =>
  css({
    outline: 'none',
    boxShadow: `0 0 ${spacing('default', 'px')} ${color}`,
  });

/**
 * buttonDisabled
 *
 * Generates consistent disabled button styles via two variants:
 * 1. "solid"  - ideal for buttons that have a solid fill color.
 * 2. "border" - ideal for 'ghost' buttons that have a transparent fill but
 *               colored border.
 */
type DisabledStyle = 'solid' | 'border';

/* buttonDisabled-specific colors */
const colorDisabled = '#414f57';
const colorDisabledText = '#677278';

const buttonDisabled = (key: DisabledStyle) => {
  const disabledBase = css({
    cursor: 'not-allowed',
  });

  const disabledVariants = {
    solid: css({
      backgroundColor: colorDisabled,
      color: colorDisabledText,
    }),
    border: css({
      backgroundColor: 'transparent',
      borderColor: colorDisabled,
      color: colorDisabled,
    }),
  };

  return css({
    '&:disabled, &[disabled]': [disabledBase, disabledVariants[key]],
  });
};

export { buttonShadow, buttonDisabled };
