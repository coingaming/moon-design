import styled from 'styled-components';
import { themed } from '@heathmont/moon-utils';
import { ColorNames } from '@heathmont/moon-themes';

import getFontSize from '../private/text/getFontSize';

export type HeadingSize = 16 | 18 | 20 | 24 | 32 | 48 | 56 | 64 | 72;

export interface HeadingProps {
  size?: HeadingSize;
  color?: ColorNames;
  isRegular?: boolean;
  textAlign?: TextAlign;
}

const Heading = styled.h3<HeadingProps>(
  ({ color, theme }) => ({
    color: themed('color', color)(theme),
  }),
  ({ size = 16 }) => getFontSize(size),
  ({ textAlign }) => textAlign && { textAlign },
  ({ isRegular, theme: { fontWeight } }) =>
    isRegular
      ? {
          fontWeight: fontWeight.normal,
        }
      : {
          fontWeight: fontWeight.semibold,
        }
);

Heading.defaultProps = {
  color: 'bulma.100',
  size: 16,
};

export default Heading;
