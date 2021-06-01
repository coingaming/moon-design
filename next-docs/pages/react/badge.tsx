import React from 'react';
import Head from 'next/head';

import { Badge } from '@heathmont/moon-core';
import { ThemeProvider, sportsbetDark } from '@heathmont/moon-themes';

export default function PageBadge() {
  return (
    <>
      <h1>Badge</h1>
      <p>Small count and labeling component.</p>
      <Badge>Active</Badge>
      <Badge color="goten.100" backgroundColor="piccolo.100">
        Active
      </Badge>
    </>
  );
}
