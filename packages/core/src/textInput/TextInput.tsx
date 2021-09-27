import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { Input } from './Input';
import { HintText } from './HintText';

import { rem } from '@heathmont/moon-utils';

/**
 * Types & Settings
 */
type TextInputTypes =
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url'
  | 'time'
  | 'url';

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  size: 'xsmall' | 'small' | 'medium';
  label?: string;
  type?: TextInputTypes;
  placeholder?: string;
  hintText?: JSX.Element | string;
  isError?: boolean;
  rounded?: boolean;
  dir?: 'ltr' | 'rtl' | 'auto';
};

const Container = styled.div(({ theme: { radius } }) => ({
  width: '100%',
  maxWidth: '100%',
  position: 'relative',
  borderRadius: rem(radius.largest),
}));

const Label = styled.label<React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ theme: { color } }) => ({
    display: 'block',
    fontSize: rem(16),
    lineHeight: rem(24),
    color: color.bulma[100],
    paddingBottom: rem(8),
  })
);

const LabelInner = styled.label(({ theme: { color, transitionDuration } }) => ({
  position: 'absolute',
  left: rem(16),
  fontSize: rem(12),
  lineHeight: rem(12),
  color: color.trunks[100],
  top: rem(11),
  zIndex: 1,
  transition: `all ${transitionDuration.default}s ease`,
}));

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const {
    id,
    size,
    type = 'text',
    disabled,
    placeholder = ' ',
    label,
    hintText,
    isError,
    rounded,
    dir,
    // @ts-ignore
    ...rest
  } = props;
  const inputProps = {
    disabled,
    type,
    placeholder,
    rounded,
    dir,
    ...rest,
  };

  const TextInputInner = () => (
    <Input
      size={size}
      rounded={!!rounded}
      error={isError}
      ref={ref}
      dir={dir}
      id={id}
      {...inputProps}
    />
  );

  if (size === 'medium') {
    return (
      <Container>
        {TextInputInner()}
        <LabelInner>{label}</LabelInner>
      </Container>
    );
  }

  return (
    <Container>
      {label && (
        <Label dir={dir} htmlFor={id}>
          {label}
        </Label>
      )}
      {TextInputInner()}
      {hintText && <HintText isError={isError}>{hintText}</HintText>}
    </Container>
  );
});

export type { TextInputProps };

export default TextInput;
