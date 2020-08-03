import styled from 'styled-components';
import { themed } from '@heathmont/moon-utils';
import { ColorNames } from '@heathmont/moon-themes';

import getFontSize from '../private/text/getFontSize';

import { HeadingSize } from './HeadingSize';

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
