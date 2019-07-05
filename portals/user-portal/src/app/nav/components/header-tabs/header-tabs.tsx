import * as React from 'react';
import { Tabs, NavTabItem } from '@heathmont/sportsbet-user-portal-components';

export const HeaderTabs = () => {
  return (
    <Tabs>
      <NavTabItem>Sports</NavTabItem>
      <NavTabItem>Casino</NavTabItem>
      <NavTabItem>E-sports</NavTabItem>
      <NavTabItem>Promo</NavTabItem>
    </Tabs>
  );
};
