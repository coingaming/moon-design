import rgba from 'polished/lib/color/rgba';
import styled from 'styled-components';
import HeaderTR from './HeaderTR';
import TH from './TH';

const Footer = styled.div(({ theme: { colorNew, newTokens } }) => ({
  position: 'sticky',
  zIndex: 1,
  bottom: 0,
  [HeaderTR]: {
    '&:first-child': {
      [TH]: {
        boxShadow: `inset 0 1px 0 ${rgba(colorNew.trunks, 0.2)}`,
        '&:first-child': {
          borderTopLeftRadius: newTokens.radius.medium,
        },
        '&:last-child': {
          borderTopRightRadius: newTokens.radius.medium,
        },
      },
    },
  },
}));

export default Footer;
