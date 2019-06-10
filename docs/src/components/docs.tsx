import * as React from 'react';
import styled from '@emotion/styled';
import { spacing, rhythm } from '@heathmont/sportsbet-utils';
import { border, colors } from '@heathmont/sportsbet-tokens';

export const Playground = styled.div({
  ...rhythm(),
  position: 'relative',
  padding: spacing(),
  borderStyle: border.style,
  borderWidth: border.width,
  borderRadius: border.radius.small,
  borderColor: colors.neutral[30],
  overflow: 'auto',
  resize: 'horizontal',
  width: '100%',
});

export const PropsTable = ({ of }: { of: any }) => <p>WIP</p>;
