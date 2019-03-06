/** @jsx jsx */
import * as React from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import hideVisually from 'polished/lib/mixins/hideVisually';
import { listPlain, listPlainItem } from '@heathmont/sportsbet-objects';
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

const FormList = styled.ul(listPlain);

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

const FormItem = styled.li([
  listPlainItem,
  {
    marginBottom: spacing(),
  },
]);

export { Form, FormProps, FormItem };
