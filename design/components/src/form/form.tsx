/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import hideVisually from 'polished/lib/mixins/hideVisually';
import { listPlain, listPlainItem } from '@heathmont/sportsbet-objects';
import { rhythm } from '@heathmont/sportsbet-utils';
jsx;

/**
 * Types
 */
/* Prevents TypeScript errors when using HTMLFormElement directly */
type FormElement = Pick<HTMLFormElement, Exclude<keyof HTMLFormElement, ''>>;

type FormProps = FormElement & {
  legend: string;
  maxWidth?: string;
  fullWidth?: boolean;
};

const FormList = styled.ul([listPlain, rhythm(0)]);

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
  fullWidth,
  ...props
}) => {
  return (
    <form css={{ maxWidth, width: fullWidth ? '100%' : 'auto' }} {...props}>
      <Fieldset>
        <legend css={hideVisually}>{legend}</legend>
        <FormList>{children}</FormList>
      </Fieldset>
    </form>
  );
};

const FormItem = styled.li([listPlainItem, rhythm()]);

export { Form, FormProps, FormItem };
