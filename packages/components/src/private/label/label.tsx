import React from 'react';
import styled from 'styled-components';
import { mq, rem } from '@heathmont/moon-utils';

import { Input } from '../input/input';
import { inputColors } from '../input/settings';
import { SelectElement } from '../../select/private/element';

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
const LabelContent = styled.span<LabelContentProps>(
  ({ disabled, flex, theme }) => [
    {
      display: 'block',
      marginBottom: rem(theme.space.small),
      color: inputColors('label')(theme),
      fontSize: rem(theme.base.fontSize),
    },
    flex && {
      [mq(theme.breakpoint.small)]: {
        flex: 1,
        paddingRight: rem(theme.space.default),
        marginBottom: 0,
      },
    },
    disabled && {
      opacity: 0.5,
    },
  ]
);

const LabelFlex = styled.label<LabelSizing>(
  ({ flex, inputGrow, theme: { breakpoint } }) =>
    flex && {
      [mq(breakpoint.small)]: {
        display: 'flex',
        alignItems: 'center',
        ...(inputGrow && {
          [`${Input}, ${SelectElement}`]: {
            flex: inputGrow,
          },
        }),
      },
    }
);

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
    <LabelFlex flex={flex} inputGrow={inputGrow} {...props}>
      <LabelContent disabled={disabled} flex={flex}>
        {text}
      </LabelContent>
      {React.Children.only(children)}
    </LabelFlex>
  );
  /* eslint-enable jsx-a11y/label-has-associated-control */
};

export type { LabelText, LabelProps, LabelSizing };
export { Label };
