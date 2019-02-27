/** @jsx jsx */
import * as React from 'react';
import { css, jsx } from '@emotion/core';
import { rem } from 'polished';
import { colors } from '@heathmont/sportsbet-tokens';
import { Label } from '../private/label';
import { hyphenate } from '@heathmont/sportsbet-utils';
import { Input, inputSpacing, inputAnimationSpeed } from '../private/input';
jsx;

/**
 * Types & Settings
 */
type TextInputTypes =
  | 'date'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url';

type TextInputProps = {
  label: string;
  type?: TextInputTypes;
  placeholder?: string;
  labelBlock?: boolean;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
};

const inputsWithDefaultBlockLabels = ['date'];

/**
 * Functions
 */
const hasDefaultBlockLabel = (inputType: TextInputTypes) =>
  inputsWithDefaultBlockLabels.some(type => type === inputType);

const createId = (id: string) => `TextInput-${hyphenate(id)}`;

/**
 * Styles
 */
const inputContainer = css({
  position: 'relative',
});

const textInputBase = css({
  '&:focus': {
    borderColor: colors.neutral[20],
    outline: 'none',
  },
  '&:not(:focus):not(:placeholder-shown):invalid': {
    borderColor: colors.error,
  },
});

const textInputFloat = css({
  '::placeholder': {
    color: 'transparent',
  },
  '&:not(:placeholder-shown)': {
    paddingTop: rem(inputSpacing + 7),
    paddingBottom: rem(inputSpacing - 7),
    borderColor: 'transparent',
    '& + label': {
      transform: 'translateY(-90%) scale(0.75)',
    },
  },
});

const textInputLabelFloat = css({
  position: 'absolute',
  left: rem(inputSpacing),
  top: '50%',
  transform: 'translateY(-50%)',
  transformOrigin: 'top left',
  transition: `transform ${inputAnimationSpeed} ease`,
  color: colors.neutral[20],
  pointerEvents: 'none',
});

/**
 * Component
 *
 * 1. Leaving the placeholder as an empty string by default allows us to float
 *    the label when a user starts typing, even if a placeholder isn't defined.
 */
const TextInput: React.FC<TextInputProps> = ({
  type = 'text',
  placeholder = ' ',
  label,
  labelBlock,
  ...props
}) => {
  const inputProps = {
    type,
    placeholder,
    ...props,
  };

  return hasDefaultBlockLabel(inputProps.type) || labelBlock ? (
    <Label text={label}>
      <Input css={textInputBase} {...inputProps} />
    </Label>
  ) : (
    <div css={inputContainer}>
      <Input
        id={createId(label)}
        css={[textInputBase, textInputFloat]}
        {...inputProps}
      />
      <label htmlFor={createId(label)} css={textInputLabelFloat}>
        {label}
      </label>
    </div>
  );
};

export { TextInput, TextInputProps };
