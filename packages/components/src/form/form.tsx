/** @jsx jsx */
import * as React from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { hideVisually } from 'polished';
import { spacing } from '@heathmont/sportsbet-utils';
jsx;

/**
 * Types
 */
/* Prevents TypeScript errors when using HTMLFormElement directly */
type FormElement = Pick<HTMLFormElement, Exclude<keyof HTMLFormElement, ''>>;

type FormProps = FormElement & {
  legend: string;
  maxWidth?: string;
};

const FormList = styled.ul({
  marginLeft: 0,
});

const Fieldset = styled.fieldset({
  border: 0,
});

/**
 * Components
 */
const Form: React.FC<FormProps> = ({
  children,
  legend,
  maxWidth,
  ...props
}) => {
  return (
    <form css={css({ maxWidth })} {...props}>
      <Fieldset>
        <legend css={hideVisually}>{legend}</legend>
        <FormList>{children}</FormList>
      </Fieldset>
    </form>
  );
};

const FormItem = styled.li({
  display: 'block',
  marginBottom: spacing(),
  listStyleType: 'none',
  '&:before': {
    position: 'absolute',
    content: '"\\200B"' /* Add zero-width space to prevent VoiceOver disable */,
  },
});

export { Form, FormProps, FormItem };
