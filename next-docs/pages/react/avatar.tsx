import React from 'react';

import { ThemeProvider, sportsbetDark } from '@heathmont/moon-themes';

export default function PageAvatar() {
  return (
    <>
      <ThemeProvider theme={sportsbetDark}>
        <h1>Avatar</h1>
      </ThemeProvider>
    </>
  );
}
