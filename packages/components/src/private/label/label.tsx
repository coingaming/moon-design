import * as React from 'react';
import styled from 'styled-components';
import { breakpoints } from '@heathmont/sportsbet-tokens';
import { mq, rem, spacing } from '@heathmont/sportsbet-utils';

import { inputColors } from '../input/settings';

import { inputSelectors } from './settings';

/**
 * Types
 */
type LabelContentProps = {
  flex?: boolean;
  disabled?: boolean;
};

type LabelSizing = {
  flex?: boolean;
  inputGrow?: number;
};

/**
 * Types (Exported)
 */
type LabelText = string | JSX.Element[] | JSX.Element;

type LabelProps = LabelSizing & {
  disabled?: boolean;
  text: LabelText;
  inline?: boolean;
  htmlFor?: string;
};

/**
 * Styles
 */
const LabelContent = styled.span<LabelContentProps>(({ disabled, flex }) => [
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

const LabelFlex = styled.label<{ inputGrow?: number }>(({ inputGrow }) => ({
  [mq(breakpoints.small)]: {
    display: 'flex',
    alignItems: 'center',
    [inputSelectors]: {
      flex: inputGrow,
    },
  },
}));

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
    <LabelFlex inputGrow={inputGrow} {...props}>
      <LabelContent disabled={disabled} flex={flex}>
        {text}
      </LabelContent>
      {React.Children.only(children)}
    </LabelFlex>
  );
  /* eslint-enable jsx-a11y/label-has-associated-control */
};

export { Label, LabelText, LabelProps, LabelSizing };
