import * as React from 'react';
import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { colors } from '@heathmont/sportsbet-tokens';

const Container = styled.div<{ color?: string; height?: number }>(
  ({ color, height }) => [
    {
      backgroundColor: colors.secondary,
      height: rem(3),
      width: '100%',
    },
    color && { backgroundColor: color },
    height && { height: rem(height) },
  ]
);

const Progress = styled.div<{
  progression: number;
  color?: string;
  backgroundColor?: string;
  height?: number;
}>(({ progression, color }) => [
  { height: '100%', backgroundColor: colors.brand },
  progression && { width: `${progression}%` },
  color && { backgroundColor: color },
]);

export const ProgressBar = ({
  from,
  to,
  backgroundColor,
  height,
  color,
}: {
  from: number;
  to: number;
  backgroundColor?: string;
  height?: number;
  color?: string;
}) => {
  const progression = (start: number, finish: number) => (start / finish) * 100;

  return (
    <Container color={backgroundColor} height={height}>
      <Progress progression={progression(from, to)} color={color} />
    </Container>
  );
};
