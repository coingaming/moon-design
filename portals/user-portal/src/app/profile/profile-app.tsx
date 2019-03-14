import * as React from 'react';
import {
  ProfileLayout,
  ProfileLayoutMain,
  ProfileNav,
} from './components/profile-layout';
import { ProfileMenu } from './components/profile-menu';
import { ProfileRoutes } from './routes';

export const ProfileApp = () => (
  <ProfileLayout>
    <ProfileNav>
      <ProfileMenu />
    </ProfileNav>
    <ProfileLayoutMain>
      <ProfileRoutes />
    </ProfileLayoutMain>
  </ProfileLayout>
);
