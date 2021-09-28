import React from 'react';
import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

const Label = styled.label<React.LabelHTMLAttributes<HTMLLabelElement>>(
  ({ theme: { color } }) => ({
    display: 'block',
    fontSize: rem(16),
    lineHeight: rem(24),
    color: color.bulma[100],
    paddingBottom: rem(8),
  })
);

export default Label;
