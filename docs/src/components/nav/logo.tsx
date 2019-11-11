import * as React from 'react';
import { CSSObject } from 'styled-components';
import { Link } from 'gatsby';
import hideVisually from 'polished/lib/mixins/hideVisually';
import rem from 'polished/lib/helpers/rem';
import { LogoSportsbet } from '@heathmont/sportsbet-assets';

const logoLink: CSSObject = {
  display: 'block',
  maxWidth: rem(180), // Totally arbitrary number
};

export const Logo = () => (
  <Link to="/" css={logoLink}>
    <span css={hideVisually()}>Home</span>
    <LogoSportsbet width="100%" height="auto" />
  </Link>
);
