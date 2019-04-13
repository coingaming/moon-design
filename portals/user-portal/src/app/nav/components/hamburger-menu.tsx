import * as React from 'react';
import styled from '@emotion/styled';
import { colors } from '@heathmont/sportsbet-tokens';
import { IconHamburger } from '../../../../../../design/icons/lib';

const StyledHamburgerIcon = styled.div({
  color: colors.neutral[20],
});

export const HamburgerMenu = () => (
  <StyledHamburgerIcon>
    <IconHamburger />
  </StyledHamburgerIcon>
);
