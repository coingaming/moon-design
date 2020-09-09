import React from 'react';
import styled from 'styled-components';
import { rem, themed } from '@heathmont/moon-utils';

type ProgressbarProps = {
  value: number;
  text?: JSX.Element;
  backgroundColor?: string;
};

const ProgressBarWrapper = styled.div({
  position: 'relative',
});

const CurrentProgress = styled.div(({ theme: { fontWeight, color } }) => ({
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  color: color.bulma[100],
  fontSize: rem(10),
  lineHeight: rem(12),
  letterSpacing: 1,
  fontWeight: fontWeight.semibold,
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  textShadow: `-${rem(1)} 0 ${color.gohan['100']}, 0 ${rem(1)} ${
    color.gohan['100']
  }, ${rem(1)} 0 ${color.gohan['100']}, 0 -${rem(1)} ${color.gohan['100']}`,
}));

const Progress = styled.div<ProgressbarProps>(
  ({ theme, value, backgroundColor }) => ({
    minWidth: rem(100),
    backgroundColor:
      themed('color', backgroundColor)(theme) || theme.color.goku['100'],
    height: rem(12),
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
  })
);

const ProgressLinear: React.FC<ProgressbarProps> = ({
  value,
  text,
  backgroundColor,
}) => {
  return (
    <ProgressBarWrapper>
      <Progress value={value} backgroundColor={backgroundColor} />
      <CurrentProgress>{text}</CurrentProgress>
    </ProgressBarWrapper>
  );
};

export default ProgressLinear;
