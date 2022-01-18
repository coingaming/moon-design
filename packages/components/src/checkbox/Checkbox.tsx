import React, { forwardRef } from 'react';
import { Theme } from '@heathmont/moon-themes';
import { uniqueId, inlineSvg, rem } from '@heathmont/moon-utils';
import hideVisually from 'polished/lib/mixins/hideVisually';
import styled from 'styled-components';
import { inputColors, inputBorderWidth } from '../private/input/settings';
import { LabelText } from '../private/label/label';
import { CheckboxIcon } from './private/icon';

const checkboxSize = (theme: Theme) => theme.space.default;
const checkboxGap = (theme: Theme) => theme.space.xsmall * 2;
const captionMargin = (theme: Theme) =>
  rem(checkboxSize(theme) + checkboxGap(theme));

/**
 * Checkbox Container
 *
 * Behaves as the outer interactive element of our checkbox input and label
 * content (set inside an additional `span`).
 *
 * 1. Prevents the label collapsing without text
 */
const CheckboxLabel = styled.label(({ theme }) => ({
  display: 'inline-block',
  position: 'relative',
  alignItems: 'center',
  minHeight: rem(checkboxSize(theme)) /* [1] */,
}));

/**
 * Checkbox Caption
 *
 * As styling of native checkboxes is limited, we use pseudo elements on the
 * caption to create a completely bespoke checkbox.
 * Interaction styles are handled by the prior adjacent hidden `input`.
 */
const CheckboxCaption = styled.span(({ theme, dir }) => ({
  display: 'inline-block',
  ...(dir === 'rtl'
    ? { marginRight: captionMargin(theme) }
    : { marginLeft: captionMargin(theme) }),
  color: inputColors('label')(theme),
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    width: rem(checkboxSize(theme)),
    height: rem(checkboxSize(theme)),
    top: rem(inputBorderWidth(theme)),
    ...(dir === 'rtl' ? { right: 0 } : { left: 0 }),
    transitionDuration: `${theme.transitionDuration.default}s`,
    transitionTimingFunction: 'ease',
  },
  /* Pseudo Checkbox Circle */
  '&::before': {
    backgroundColor: inputColors('borderHover')(theme),
    borderRadius: '50%',
    opacity: 0,
    transform: 'none',
    transitionProperty: 'background-color, transform, opacity',
    willChange: 'transform, opacity',
  },
  /* Psuedo Checkbox */
  '&::after': {
    border: `${rem(2)} solid ${theme.color.trunks[100]}`,
    borderRadius: rem(2),
    backgroundColor: 'transparent',
    transitionProperty: 'border-color',
  },
}));

/**
 * Checkbox Input
 *
 * Hides the default input and handles interaction styles of the custom pseudo
 * checkbox on CheckboxCaption.
 */
const CheckboxInput = styled.input(({ theme }) => ({
  ...hideVisually(),
  '& + span': {
    cursor: 'pointer',
    '&::after': {
      backgroundImage: inlineSvg(
        <CheckboxIcon color={theme.color.goten[100]} />
      ),
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 0,
    },
  },
  '&:hover:enabled, &:focus:enabled': {
    /* Show the Pseudo Checkbox Circle */
    '& + span::before': {
      opacity: 0.5,
      transform: 'scale(2)',
    },
    '&:checked + span::before': {
      opacity: 0.1,
      backgroundColor: theme.color.piccolo[100] /* [1] */,
    },
    /* Adjust the Pseudo Checkbox */
    '&:not(:checked) + span::after': {
      borderColor: theme.color.trunks[100],
    },
  },
  /* Add the "check" to the Pseudo Checkbox */
  '&:checked + span::after': {
    backgroundColor: theme.color.piccolo[100],
    backgroundSize: rem(10),
    borderColor: theme.color.piccolo[100],
  },
  '&[disabled] + span': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
}));

/**
 * Checkbox Component
 */
type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  label?: LabelText;
  ariaLabel?: string;
  disabled?: boolean;
  dir?: 'ltr' | 'rtl' | 'auto';
  key?: string;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    disabled = false,
    ariaLabel,
    id,
    label,
    dir,
    key,
    ...inputProps
  } = props;
  const autoId = id || `Checkbox-${uniqueId()}`;
  const checkboxKey = !key ? autoId : key;
  return (
    <CheckboxLabel htmlFor={autoId}>
      <CheckboxInput
        id={autoId}
        key={checkboxKey}
        disabled={disabled}
        type="checkbox"
        aria-label={ariaLabel}
        ref={ref}
        {...inputProps}
      />
      <CheckboxCaption dir={dir}>{label}</CheckboxCaption>
    </CheckboxLabel>
  );
});

export type { CheckboxProps };

export default Checkbox;
