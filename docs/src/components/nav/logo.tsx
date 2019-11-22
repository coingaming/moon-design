import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import hideVisually from 'polished/lib/mixins/hideVisually';
import rem from 'polished/lib/helpers/rem';
import { LogoSportsbet } from '@heathmont/sportsbet-assets';

const LogoLink = styled(Link)(({ theme: { color } }) => ({
  display: 'block',
  maxWidth: rem(180),
  /* Select all white paths in the logo to switch with themes */
  'svg > path[fill*="#FFF"]': {
    fill: color.bulma[100],
  },
}));

export const Logo = () => (
  <LogoLink to="/">
    <span css={hideVisually()}>Home</span>
    <LogoSportsbet width="100%" height="auto" />
  </LogoLink>
);
