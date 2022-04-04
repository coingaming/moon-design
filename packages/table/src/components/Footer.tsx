import {rem, themed} from '@heathmont/moon-utils';
import rgba from 'polished/lib/color/rgba';
import styled from 'styled-components';
import HeaderTR from './HeaderTR';
import TH from './TH';

const Footer = styled.div<{
  headerBackgroundColor: string,
  selectable?: boolean,
}>(
  ({ theme: { colorNew, newTokens } }) => ({
    position: 'sticky',
    zIndex: 1,
    bottom: 0,
    [HeaderTR]: {
      '&:first-child': {
        [TH]: {
          boxShadow: `inset 0 1px 0 ${rgba(colorNew.trunks, 0.2)}`,
          '&:first-child': {
            borderTopLeftRadius: newTokens.borderRadius.medium,
          },
          '&:last-child': {
            borderTopRightRadius: newTokens.borderRadius.medium,
          },
        },
      },
    },
  }),
  ({ selectable, headerBackgroundColor, theme }) => ({
    ...(selectable
      ? {
        paddingLeft: rem(46),
        backgroundColor: themed('color', headerBackgroundColor)(theme)
      } : {})
  })
);

export default Footer;
