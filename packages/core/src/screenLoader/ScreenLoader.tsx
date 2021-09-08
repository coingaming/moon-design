import React from 'react';
import { useTheme, ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

import Container from './styles/Container';

export type ScreenLoaderProps = {
  firstColor?: ColorProps;
  secondColor?: ColorProps;
  thirdColor?: ColorProps;
  fourthColor?: ColorProps;
};

const ScreenLoader: React.FC<ScreenLoaderProps> = ({
  firstColor,
  secondColor,
  thirdColor,
  fourthColor,
}) => {
  const theme = useTheme();
  return (
    <Container
      firstColor={themed('color', firstColor)(theme)}
      secondColor={themed('color', secondColor)(theme)}
      thirdColor={themed('color', thirdColor)(theme)}
      fourthColor={themed('color', fourthColor)(theme)}
      role="progressbar"
    />
  );
};

export default ScreenLoader;
