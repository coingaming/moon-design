import * as React from 'react';
import styled from '@emotion/styled';
import { spacing } from '@heathmont/sportsbet-utils';
import { border, colors } from '@heathmont/sportsbet-tokens';
import { Children } from '../types';

export const Playground = styled.div({
  position: 'relative',
  marginBottom: spacing(),
  padding: spacing(),
  borderStyle: border.style,
  borderWidth: border.width,
  borderRadius: border.radius.small,
  borderColor: colors.neutral[60],
  overflow: 'auto',
  resize: 'horizontal',
  width: '100%',
});

export const PropsTable = ({ of }: { of: any }) => <p>WIP</p>;
