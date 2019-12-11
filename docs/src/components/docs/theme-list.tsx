import * as React from 'react';

import { useDocsTheme } from '../../provider';

export const ThemeList = () => {
  const themes = useDocsTheme().themeKeys;

  return (
    <ul>
      {themes.map(themeKey => (
        <li>{themeKey}</li>
      ))}
    </ul>
  );
};
