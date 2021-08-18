import styled from "styled-components";
import { rem } from '@heathmont/moon-utils';
import rgba from 'polished/lib/color/rgba';

import HeaderTR from "./HeaderTR";
import TH from "./TH";

const Footer = styled.div(({ theme: { color, radius } }) => ({
  position: 'sticky',
  zIndex: 1,
  bottom: 0,
  [HeaderTR]: {
    '&:first-child': {
      [TH]: {
        boxShadow: `inset 0 1px 0 ${rgba(color.trunks[100], 0.2)}`,
        '&:first-child': {
          borderTopLeftRadius: rem(radius.default),
        },
        '&:last-child': {
          borderTopRightRadius: rem(radius.default),
        },
      },
    },
  },
}));

export default Footer