import React from 'react';
import styled from 'styled-components';
import { mq, rem } from '@heathmont/moon-utils';

type LabelSizing = {
  flex?: boolean;
  inputGrow?: number;
};

type LabelText = string | JSX.Element[] | JSX.Element;

type LabelProps = LabelSizing & {
  disabled?: boolean;
  text: LabelText;
  inline?: boolean;
  htmlFor?: string;
  dir?: 'ltr' | 'rtl' | 'auto';
};

const Label = styled.span<LabelProps>(({ disabled, flex, dir, theme }) => [
  {
    display: 'block',
    marginBottom: rem(theme.space.small),
    color: theme.color.bulma[100],
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
  dir === 'rtl' && {
    textAlign: 'right',
  },
]);

export type { LabelText, LabelProps, LabelSizing };
export default Label;
