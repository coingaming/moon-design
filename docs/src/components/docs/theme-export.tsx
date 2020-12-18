import React from 'react';
import styled from 'styled-components';
import {
  useTheme,
  sportsbetDark,
  sportsbetLight,
  bitcasinoLight,
  bitcasinoDark,
  slotsLight,
  slotsDark,
  luckyslots,
  livecasinoLight,
  bombayClub,
  hub88,
  aposta10Dark,
  aposta10Light,
  missionsToolDark,
  missionsToolLight,
  shangrilaLight,
  shangrilaDark,
} from '@heathmont/moon-themes';
import { Link } from '@heathmont/moon-components';

const Pre = styled.pre(({ theme }) => ({
  overflowX: 'scroll',
  backgroundColor: theme.color.gohan[100],
}));

export const ThemeExport = () => {
  const theme = useTheme();

  const formattedTheme = JSON.stringify(theme, null, 2);

  // eslint-disable-next-line react/no-danger
  return <Pre dangerouslySetInnerHTML={{ __html: formattedTheme }} />;
};

export const DownloadThemeLink: React.FC<{ theme: any; themeName: string }> = ({
  theme,
  themeName,
}) => {
  const formattedTheme = JSON.stringify(theme, null, 2);

  return (
    <Link
      href={`data:text;charset=utf-8,${encodeURIComponent(formattedTheme)}`}
      download={`${themeName}.json`}
    >
      {themeName}
    </Link>
  );
};

export const DownloadThemes = () => {
  const themes = [
    sportsbetDark,
    sportsbetLight,
    bitcasinoLight,
    bitcasinoDark,
    slotsLight,
    slotsDark,
    luckyslots,
    livecasinoLight,
    bombayClub,
    hub88,
    aposta10Dark,
    aposta10Light,
    missionsToolDark,
    missionsToolLight,
    shangrilaLight,
    shangrilaDark,
  ];

  return themes.map(theme => (
    <DownloadThemeLink
      theme={theme}
      themeName={`${theme.brand} ${theme.colorScheme}`}
    />
  ));
};
