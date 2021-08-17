import * as React from 'react';
import styled from 'styled-components';
import { rem, themed } from '@heathmont/moon-utils';
import { ColorProps, useTheme } from '@heathmont/moon-themes';

const Wrapper = styled.div(({ theme }) => ({
  boxSizing: 'border-box',
  border: `2px ${theme.color.chiChi[100]} solid`,
  borderRadius: rem(theme.radius.largest),
  padding: rem(theme.space.small),
  width: rem(40),
  height: rem(40),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
}));

const Caption = styled.span(({ theme, color }) => ({
  color,
  fontSize: rem(14),
  lineHeight: 1,
  fontWeight: theme.fontWeight.semibold,
}));

interface AgeLimitProps {
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
    <Wrapper>
      <Caption color={captionColor}>{caption}</Caption>
    </Wrapper>
  );
};

export default AgeLimit;
