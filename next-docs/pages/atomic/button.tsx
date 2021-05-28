import React from 'react';

import { ThemeProvider, sportsbetDark } from '@heathmont/moon-themes';

export default function PageButton() {
  return (
    <>
      <ThemeProvider theme={sportsbetDark}>
        <h1>Button</h1>
      </ThemeProvider>
    </>
  );
}
