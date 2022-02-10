import React from 'react';
import { rem } from '@heathmont/moon-utils';
import styled from 'styled-components';

const Label = styled.label<React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ theme: { colorNew } }) => ({
    display: 'block',
    fontSize: rem(16),
    lineHeight: rem(24),
    color: colorNew.bulma,
    paddingBottom: rem(8),
  })
);

export default Label;
