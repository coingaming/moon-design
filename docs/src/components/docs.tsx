import * as React from 'react';
import styled from 'styled-components';
import { spacing } from '@heathmont/sportsbet-utils';
import { border, colors } from '@heathmont/sportsbet-tokens';

export const Playground = styled.div({
  position: 'relative',
  padding: spacing(),
  borderStyle: border.style,
  borderWidth: border.width,
  borderRadius: border.radius.small,
  borderColor: colors.border,
  overflow: 'auto',
  resize: 'horizontal',
  width: '100%',
});

export const PropsTable = () => <p>WIP</p>;
