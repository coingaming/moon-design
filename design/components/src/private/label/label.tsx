/** @jsx jsx */
import * as React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { breakpoints } from '@heathmont/sportsbet-tokens';
import { mq, spacing } from '@heathmont/sportsbet-utils';
import { inputSelectors } from './settings';
import { inputColors } from '../input/settings';

jsx;

/**
 * Types
 */
type LabelTextProps = {
  flex?: boolean;
  disabled?: boolean;
};

type LabelSizing = {
  flex?: boolean;
  inputGrow?: number;
};

type LabelProps = LabelSizing & {
  disabled?: boolean;
  text: string;
  inline?: boolean;
  htmlFor?: string;
};

/**
 * Styles
 */
const LabelText = styled.span<LabelTextProps>(({ disabled, flex }) => [
  {
    display: 'block',
    marginBottom: spacing('small'),
    color: inputColors.label,
    fontSize: rem(16),
  },
  flex && {
    [mq(breakpoints.small)]: {
      flex: 1,
      paddingRight: spacing(),
      marginBottom: 0,
    },
  },
  disabled && {
    opacity: 0.5,
  },
]);

const labelFlex: (inputGrow: number) => CSSObject = inputGrow => ({
  [mq(breakpoints.small)]: {
    display: 'flex',
    alignItems: 'center',
    [inputSelectors]: {
      flex: inputGrow,
    },
  },
});

/**
 * Component
 */
const Label: React.FC<LabelProps> = ({
  text,
  disabled,
  flex,
  children,
  inline,
  inputGrow = 1,
  ...props
}) => {
  /* Disable as this is handled in the consumer */
  /* eslint-disable jsx-a11y/label-has-associated-control */
  return inline ? (
    <label {...props}>{text}</label>
  ) : (
    <label css={flex && labelFlex(inputGrow)} {...props}>
      <LabelText disabled={disabled} flex={flex}>
        {text}
      </LabelText>
      {React.Children.only(children)}
    </label>
  );
  /* eslint-enable jsx-a11y/label-has-associated-control */
};

export { Label, LabelProps, LabelSizing };
