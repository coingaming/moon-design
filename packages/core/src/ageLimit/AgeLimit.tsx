import * as React from 'react';
import { themed } from '@heathmont/moon-utils';
import { ColorProps, useTheme } from '@heathmont/moon-themes';

import Container from './styles/Container';
import Caption from './styles/Caption';
export interface AgeLimitProps {
  caption: any;
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
