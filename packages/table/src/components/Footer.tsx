import styled from "styled-components";
import HeaderTR from "./HeaderTR";
import TH from "./TH";
import rgba from 'polished/lib/color/rgba';

const Footer = styled.div(({ theme: { color, radius } }) => ({
  position: 'sticky',
  zIndex: 1,
  bottom: 0,
  [HeaderTR]: {
    '&:first-child': {
      [TH]: {
        boxShadow: `inset 0 1px 0 ${rgba(color.trunks[100], 0.2)}`,
        '&:first-child': {
          borderTopLeftRadius: radius.default,
        },
        '&:last-child': {
          borderTopRightRadius: radius.default,
        },
      },
    },
  },
}));

export default Footer