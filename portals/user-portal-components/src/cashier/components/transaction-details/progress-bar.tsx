import * as React from 'react';
import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import { colors } from '@heathmont/sportsbet-tokens';

const Container = styled.div<{ color?: string; height?: number }>(
  ({ color, height }) => [
    {
      backgroundColor: colors.neutral[70],
      height: rem(3),
      width: '100%',
    },
    color && { backgroundColor: color },
    height && { height: rem(height) },
  ]
);

const Progress = styled.div<{
  progress: number;
  color?: string;
  backgroundColor?: string;
  height?: number;
}>(({ progress, color }) => [
  { height: '100%', backgroundColor: colors.brand },
  progress && { width: `${progress}%` },
  color && { backgroundColor: color },
]);

export const ProgressBar = ({
  current,
  max,
  backgroundColor,
  height,
  color,
}: {
  current: number;
  max: number;
  backgroundColor?: string;
  height?: number;
  color?: string;
}) => {
  const getProgression = (start: number, finish: number) =>
    (start / finish) * 100;

  return (
    <Container color={backgroundColor} height={height}>
      <Progress progress={getProgression(current, max)} color={color} />
    </Container>
  );
};
