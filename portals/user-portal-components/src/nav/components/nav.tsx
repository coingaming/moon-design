/** @jsx jsx */
import { jsx, CSSObject } from '@emotion/core';
import styled from '@emotion/styled';
import hideVisually from 'polished/lib/mixins/hideVisually';
import { colors, breakpoints, typography } from '@heathmont/sportsbet-tokens';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import rem from 'polished/lib/helpers/rem';
import { Link } from '@heathmont/sportsbet-components';
import { closeStyles } from './hamburger/hamburger-menu';

jsx;

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
    backgroundColor: colors.neutral[90],
    overflow: 'hidden',
  },
]);

const navGrid: CSSObject = {
  fontWeight: typography.fontWeight.semibold,
  display: 'grid',
  gridTemplateRows: `${rem(64)} auto auto`,
  gridTemplateColumns: '1fr 1fr',
  gridColumnGap: spacing(),
  gridTemplateAreas: `
      "hamburger    buttons"
      "logo         logo"
      "search       search"
    `,
  marginTop: 0,
  marginLeft: 0,
  height: '100%',
  [mq(breakpoints.small)]: {
    paddingLeft: spacing('large'),
    paddingRight: spacing('large'),
  },
  [mq(breakpoints.large)]: {
    gridTemplateColumns: 'fit-content(20%) auto fit-content(20%)',
    gridTemplateRows: `${rem(64)}`,
    gridTemplateAreas: `
        "hamburger    search    buttons"
      `,
  },
};

const Navigation: React.FC = ({ children }) => {
  return (
    <Nav>
      <a href={`#${navSkipLinkID}`} css={skipLink}>
        Skip to content
      </a>
      <div css={navGrid}>{children}</div>
      <span id={navSkipLinkID} />
    </Nav>
  );
};

const CloseBack = styled(Link)({
  ...closeStyles,
  marginLeft: spacing('small'),
  [mq(breakpoints.medium)]: {
    display: 'none',
  },
});

export { Navigation, CloseBack };
