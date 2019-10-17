/** @jsx jsx */
import * as React from 'react';
import styled from '@emotion/styled';
import { jsx, CSSObject } from '@emotion/core';
import size from 'polished/lib/shorthands/size';
import { colors, border } from '@heathmont/sportsbet-tokens';
import { rem, spacing } from '@heathmont/sportsbet-utils';

import { Label, LabelText } from '../private/label/label';
import { inputBorder, inputColors } from '../private/input/settings';

/**
 * Types
 */
type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  label?: LabelText;
  ariaLabel?: string;
  disabled?: boolean;
};

/**
 * Functions
 */
const uuid = (): string =>
  Math.random()
    .toString(36)
    .substr(2, 9);

/**
 * Styles
 */
const CheckboxContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
});

/* 1. Creates a transparent gap between border and backgroundColor */
const CheckboxInput = styled.input({
  ...size(rem(20)),
  position: 'relative',
  padding: rem(2) /* [1] */,
  backgroundClip: 'content-box' /* [1] */,
  alignSelf: 'center',
  border: inputBorder,
  borderRadius: border.radius.small,
  backgroundColor: 'transparent',
  appearance: 'none',
  '&:checked': {
    backgroundColor: colors.brand,
  },
  '&:disabled': {
    borderColor: inputColors.disabled,
    cursor: 'not-allowed',
  },
});

const checkboxLabel: (disabled: boolean) => CSSObject = disabled => ({
  flex: 1,
  marginLeft: spacing(),
  color: disabled ? inputColors.disabled : inputColors.label,
});

/**
 * Component
 */
const Checkbox: React.FC<CheckboxProps> = ({
  disabled = false,
  ariaLabel,
  id,
  label,
  ...inputProps
}) => {
  const autoId = id || `Checkbox-${uuid()}`;

  return (
    <CheckboxContainer>
      <CheckboxInput
        id={autoId}
        disabled={disabled}
        type="checkbox"
        aria-label={ariaLabel && ariaLabel}
        {...inputProps}
      />
      {label && (
        <Label
          htmlFor={autoId}
          css={checkboxLabel(disabled)}
          text={label}
          inline
        />
      )}
    </CheckboxContainer>
  );
};

export { Checkbox, CheckboxProps };
