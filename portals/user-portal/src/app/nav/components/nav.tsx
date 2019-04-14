/** @jsx jsx */ jsx;
import * as React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import styled from '@emotion/styled';
import hideVisually from 'polished/lib/mixins/hideVisually';
import { colors, breakpoints } from '@heathmont/sportsbet-tokens';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import rem from 'polished/lib/helpers/rem';

const navSkipLinkID = 'nav-skip';

const skipLink: CSSObject = {
  position: 'absolute',
  zIndex: 1,
  padding: `0 ${spacing('small')}`,
  top: '50%',
  left: spacing('small'),
  transform: 'translateY(-50%)',
  color: colors.neutral[10],
  backgroundColor: colors.neutral[90],
  '&:not(:focus)': {
    ...hideVisually(),
  },
};

const Nav = styled.nav(() => [
  {
    width: '100%',
    position: 'sticky',
    top: 0,
    height: rem(112),
    // overflowY: 'hidden',
    zIndex: 2,
    backgroundColor: colors.neutral[90],
  },
]);

const tabList: CSSObject = {
  display: 'flex',
  flexDirection: 'column',
  whiteSpace: 'nowrap',
  alignItems: 'center',
  marginTop: 0,
  marginLeft: 0,
  padding: spacing(),
  [mq(breakpoints.small)]: {
    paddingLeft: spacing('large'),
    paddingRight: spacing('large'),
  },
};

const nav: CSSObject = {
  position: 'sticky',
  top: 0,
};

const Navigation: React.FC = ({ children }) => {
  return (
    <Nav css={nav}>
      <a href={`#${navSkipLinkID}`} css={skipLink}>
        Skip to content
      </a>
      <div css={tabList}>{children}</div>
      <span id={navSkipLinkID} />
    </Nav>
  );
};

export { Navigation };
