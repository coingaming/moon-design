import * as React from 'react';
import styled from 'styled-components';
import hideVisually from 'polished/lib/mixins/hideVisually';
import { listPlain, listPlainItem } from '@heathmont/sportsbet-objects';
import { rem, spacing } from '@heathmont/sportsbet-utils';
import { border } from '@heathmont/sportsbet-tokens';

import { inputSpacingY } from '../private/input/settings';
import { inputSelectors } from '../private/label/settings';

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

const FormList = styled.ul(listPlain, { marginTop: 0 });

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
        <legend css={hideVisually()}>{legend}</legend>
        <FormList>{children}</FormList>
      </Fieldset>
    </form>
  );
};

/**
 * `<any>` justification: https://coingaming.atlassian.net/browse/SPO-4963.
 */
const FormItem = styled.li<any>(listPlainItem, { marginBottom: spacing() });

const FormCombo = styled.div({
  display: 'block',
  position: 'relative',
});

const FormComboInput = styled.div({
  [inputSelectors]: {
    borderRadius: border.radius.largest,
  },
});

/**
 * 1. We want our button located in the same position as an Input Icon
 */
const FormComboButton = styled.div({
  position: 'absolute',
  right: rem(inputSpacingY / 2),
  bottom: rem(inputSpacingY / 2) /* [1] */,
});

export {
  Form,
  FormProps,
  FormItem,
  FormCombo,
  FormComboInput,
  FormComboButton,
};
