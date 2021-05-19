// DEPRECATED! Use one from core/src/heading
import styled from 'styled-components';
import { themed } from '@heathmont/moon-utils';
import { ColorNames } from '@heathmont/moon-themes';

import getFontSize from '../private/text/getFontSize';

export type HeadingSize = 16 | 18 | 20 | 24 | 32 | 48 | 56 | 64 | 72;

type Props = {
  size?: HeadingSize;
  color?: ColorNames;
  isRegular?: boolean;
};

const Heading = styled.h3<Props>(
  ({ color, theme }) => ({
    color: themed('color', color)(theme),
  }),
  ({ size = 16 }) => getFontSize(size),
  ({ isRegular, theme: { fontWeight } }) =>
    (isRegular
      ? {
        fontWeight: fontWeight.normal,
      }
      : {
        fontWeight: fontWeight.semibold,
      }),
);

Heading.defaultProps = {
  color: 'bulma.100',
  size: 16,
};

export default Heading;
