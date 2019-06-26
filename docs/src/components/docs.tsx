import * as React from 'react';
import styled from '@emotion/styled';
import { spacing } from '@heathmont/sportsbet-utils';
import { border, colors } from '@heathmont/sportsbet-tokens';

export const Playground = styled.div({
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

/* @TODO Revisit post-EPL */
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const PropsTable = ({ of }: { of: any }) => <p>WIP</p>;
