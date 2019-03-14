/** @jsx jsx */ jsx;
import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';
import { jsx } from '@emotion/core';
import { rem } from 'polished';
import { listPlain, listPlainItem } from '@heathmont/sportsbet-objects';
import { rhythm } from '@heathmont/sportsbet-utils';
import { colors, typography } from '@heathmont/sportsbet-tokens';

type MenuItemProps = {
  name: string;
  to: string;
};

const Link = styled(NavLink)({
  color: colors.neutral[20],
  textDecoration: 'none',
  '&:hover, &:active, &[aria-current=page]': {
    color: colors.text,
  },
  fontSize: rem(20),
  fontWeight: typography.fontWeight.bold,
});

const MenuItem = ({ name, to }: MenuItemProps) => (
  <li css={[listPlainItem, rhythm()]}>
    <Link to={to} activeClassName="active">
      {name}
    </Link>
  </li>
);

export const ProfileMenu = () => (
  <ul css={listPlain}>
    <MenuItem name="Settings" to={'/profile/settings'} />
    <MenuItem name="Profile" to={'/profile/info'} />
    <MenuItem name="Change Password" to={'/profile/changed-password'} />
    <MenuItem
      name="Google Authenticator"
      to={'/profile/google-authenticator'}
    />
    <MenuItem name="Verify account" to={'/profile/verify-account'} />
  </ul>
);
