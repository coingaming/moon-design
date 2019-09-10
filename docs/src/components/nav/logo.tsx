import * as React from 'react';
import { CSSObject } from '@emotion/core';
import { Link } from 'gatsby';
import hideVisually from 'polished/lib/mixins/hideVisually';
import rem from 'polished/lib/helpers/rem';
import { LogoSportsbet } from '@heathmont/sportsbet-components';

const logoLink: CSSObject = {
  display: 'block',
  maxWidth: rem(180), // Totally arbitrary number
};

export const Logo = () => (
  <Link to="/" css={logoLink}>
    <span css={hideVisually}>Home</span>
    <LogoSportsbet />
  </Link>
);
