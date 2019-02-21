/** @jsx jsx */
import * as React from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { breakpoints } from '@heathmont/sportsbet-tokens';
import { mq, spacing } from '@heathmont/sportsbet-utils';
import { inputSelectors } from './settings';
jsx;

/**
 * Types
 */
type LabelTextProps = {
  flex?: boolean;
};

type LabelSizing = {
  flex?: boolean;
  inputGrow?: number;
};

type LabelProps = LabelSizing & {
  text: string;
  inline?: boolean;
  htmlFor?: string;
};

/**
 * Styles
 */
const LabelText = styled.span<LabelTextProps>(({ flex }) => [
  {
    display: 'block',
    marginBottom: spacing('xsmall'),
  },
  flex && {
    [mq(breakpoints.small)]: {
      flex: 1,
      paddingRight: spacing(),
      marginBottom: 0,
    },
  },
]);

const labelFlex = (inputGrow: number = 1) =>
  css({
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
  flex,
  children,
  inline,
  inputGrow,
  ...props
}) => {
  return inline ? (
    <label {...props}>{text}</label>
  ) : (
    <label css={flex && labelFlex(inputGrow)} {...props}>
      <LabelText flex={flex}>{text}</LabelText>
      {React.Children.only(children)}
    </label>
  );
};

export { Label, LabelProps, LabelSizing };
