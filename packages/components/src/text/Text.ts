import styled from 'styled-components';
import { themed } from '@heathmont/moon-utils';
import { ColorProps } from '@heathmont/moon-themes';

import getFontSize from '../private/text/getFontSize';
import { Size } from '../private/text/Size';

type Props = {
  size?: Size;
  color?: ColorProps;
  isBold?: boolean;
};

const Text = styled.p<Props>(
  ({ color, theme }) => ({
    color: themed('color', color)(theme),
  }),
  ({ size = 16 }) => getFontSize(size),
  ({ isBold, theme: { fontWeight } }) =>
    isBold && {
      fontWeight: fontWeight.semibold,
    }
);

Text.defaultProps = {
  color: 'bulma.100',
  size: 16,
};

export default Text;
