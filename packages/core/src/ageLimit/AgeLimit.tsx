import * as React from 'react';
import { ColorProps, useTheme } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

import Caption from './styles/Caption';
import Container from './styles/Container';
export interface AgeLimitProps {
  caption: string;
  color?: ColorProps;
}

const AgeLimit: React.FC<AgeLimitProps> = ({
  caption,
  color = 'bulma.100',
}) => {
  const theme = useTheme();
  const captionColor = themed('color', color)(theme);
  return (
    <Container>
      <Caption color={captionColor}>{caption}</Caption>
    </Container>
  );
};

export default AgeLimit;
