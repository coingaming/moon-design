import React from 'react';
import styled from 'styled-components';
import { rem, themed } from '@heathmont/moon-utils';

type ProgressbarProps = {
  value: number;
  text?: JSX.Element;
  backgroundColor?: string;
  height?: number;
  fontSize?: number;
};

const ProgressBarWrapper = styled.div({
  position: 'relative',
});

const CurrentProgress = styled.div<{ lineHeight?: number; fontSize?: number }>(
  ({ lineHeight = 12, fontSize = 10, theme: { fontWeight, color } }) => ({
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    color: color.bulma[100],
    fontSize: rem(fontSize),
    lineHeight: rem(lineHeight),
    letterSpacing: 1,
    fontWeight: fontWeight.semibold,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    textShadow: `-${rem(1)} 0 ${color.gohan['100']}, 0 ${rem(1)} ${
      color.gohan['100']
    }, ${rem(1)} 0 ${color.gohan['100']}, 0 -${rem(1)} ${color.gohan['100']}`,
  }),
);

const Progress = styled.div<ProgressbarProps>(
  ({
    theme, value, backgroundColor, height = 12,
  }) => ({
    minWidth: rem(100),
    backgroundColor:
      themed('color', backgroundColor)(theme) || theme.color.goku['100'],
    height: rem(height),
    position: 'relative',
    borderRadius: rem(60),
    '&::before': {
      content: '""',
      position: 'absolute',
      backgroundColor: theme.color.piccolo['100'],
      height: '100%',
      width: `${value}%`,
      borderRadius: rem(60),
    },
  }),
);

const ProgressLinear: React.FC<ProgressbarProps> = ({
  value,
  text,
  backgroundColor,
  height,
  fontSize,
}) => (
    <ProgressBarWrapper>
      <Progress
        height={height}
        value={value}
        backgroundColor={backgroundColor}
      />
      <CurrentProgress lineHeight={height} fontSize={fontSize}>
        {text}
      </CurrentProgress>
    </ProgressBarWrapper>
);

export default ProgressLinear;
