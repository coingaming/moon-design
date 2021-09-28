import styled from 'styled-components';
import { rem, themed } from '@heathmont/moon-utils';
import { ColorProps } from '@heathmont/moon-themes';

type Props = {
  color?: ColorProps;
  backgroundColor?: ColorProps;
  elementLeft?: React.ReactElement;
  elementRight?: React.ReactElement;
  isMeta?: boolean;
  subtext?: React.ReactElement;
  size?: 'medium' | 'large';
};

const Container = styled.div<Props>(
  ({ theme: { radius }, isMeta }) => ({
    display: 'grid',
    width: '100%',
    gridTemplateAreas: isMeta
      ? `
        "icon main meta"
        "icon description description"
      `
      : `
        "icon main meta"
        "icon description meta"
      `,
    gridTemplateColumns: `min-content 1fr max-content`,
    justifyContent: 'space-between',
    alignItems: 'center',
    lineHeight: rem(24),
    borderRadius: rem(radius.default),
  }),
  ({ size }) => ({
    fontSize: size === 'medium' ? rem(14) : rem(16),
    padding: size === 'medium' ? `${rem(8)}` : rem(12),
  }),
  ({ color, backgroundColor, theme }) => ({
    color: color ? themed('color', color)(theme) : theme.color.bulma[100],
    backgroundColor: themed('color', backgroundColor)(theme),
  })
);

export default Container;
