import React from 'react';
import hideVisually from 'polished/lib/mixins/hideVisually';
import styled from 'styled-components';

import Stack from '../stack/Stack';

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
}) => (
  <form style={{ maxWidth, width: fullWidth ? '100%' : 'auto' }} {...props}>
    <Fieldset>
      <legend style={hideVisually()}>{legend}</legend>
      <Stack as="ul">{children}</Stack>
    </Fieldset>
  </form>
);

/**
 * `<any>` justification: https://coingaming.atlassian.net/browse/SPO-4963.
 */
export type { FormProps };

export default Form;
