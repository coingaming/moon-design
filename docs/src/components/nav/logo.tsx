import React from 'react';
import styled from 'styled-components';
import rem from 'polished/lib/helpers/rem';
import {
  IconChevronDown,
  LogoAposta10Full,
  LogoBitcasinoFull,
  LogoBombayFull,
  LogoHub88Full,
  LogoLivecasinoFull,
  LogoLuckyslotsFull,
  LogoMissions,
  LogoSlotsFull,
  LogoSportsbetFull,
  LogoMoonDesign,
  LogoMoneyball,
  LogoCommsFull,
} from '@heathmont/moon-assets';
import { mq } from '@heathmont/moon-utils';
import { useTheme } from '@heathmont/moon-themes';

import { useDocsTheme } from '../../provider';

const LogoContainer = styled.div(({ theme: { breakpoint, color, space } }) => ({
  display: 'flex',
  position: 'relative',
  textAlign: 'left',
  height: rem(40),
  width: rem(240),
  alignItems: 'center',
  marginBottom: rem(32),
  maxHeight: rem(20),
  color: color.bulma[100],
  /* The logo */
  'svg:first-child': {
    width: 'auto',
    height: '100%',
  },
  [`${IconChevronDown}`]: {
    fontSize: rem(12),
    marginLeft: rem(space.default),
    flexShrink: 0,
    color: color.bulma[100],
  },
  [mq(breakpoint.medium)]: {
    width: '100%',
  },
}));

const BrandSelect = styled.select({
  position: 'absolute',
  appearance: 'none',
  color: 'transparent',
  width: '100%',
  border: 'none',
  backgroundColor: 'transparent',
  height: '100%',
  option: {
    color: 'initial',
  },
  '&:hover': {
    cursor: 'pointer',
  },
  outline: 'none',
});

export const Logo = () => {
  const { setBrand } = useDocsTheme();
  const { brand } = useTheme();

  return (
    <LogoContainer>
      {brand === 'MoonDesign' && (
        <LogoMoonDesign height="auto" width={rem(90)} />
      )}
      {brand === 'Sportsbet.io' && (
        <LogoSportsbetFull height="100%" width="auto" />
      )}
      {brand === 'Bitcasino.io' && (
        <LogoBitcasinoFull height="100%" width="auto" />
      )}
      {brand === 'Slots.io' && <LogoSlotsFull width="100%" height="auto" />}
      {brand === 'LuckySlots' && (
        <LogoLuckyslotsFull width="100%" height="auto" />
      )}
      {brand === 'Livecasino.io' && (
        <LogoLivecasinoFull width="100%" height="auto" />
      )}
      {brand === 'BombayClub' && <LogoBombayFull width="100%" height="auto" />}
      {brand === 'Hub88' && <LogoHub88Full width="100%" height="auto" />}
      {brand === 'Aposta10' && <LogoAposta10Full width="100%" height="auto" />}
      {brand === 'MissionsTool' && <LogoMissions fontSize="2rem" />}
      {brand === 'Moneyball' && <LogoMoneyball />}
      {brand === 'Comms' && <LogoCommsFull />}
      {brand === 'ShangriLa.io' && 'ShangriLa.io'}

      <IconChevronDown aria-hidden="true" />

      <BrandSelect onChange={(e) => setBrand(e.target.value)}>
        <option value="moondesign">Moon Design</option>
        <option value="sportsbet">Sportsbet.io</option>
        <option value="bitcasino">Bitcasino.io</option>
        <option value="slots">Slots.io</option>
        <option value="luckyslots">LuckySlots</option>
        <option value="livecasino">Livecasino</option>
        <option value="bombay">Bombay Club</option>
        <option value="hub88">Hub88</option>
        <option value="aposta10">Aposta10</option>
        <option value="missionsTool">MissionsTool</option>
        <option value="moneyball">Moneyball</option>
        <option value="comms">Comms</option>
        <option value="shangrila">Shangri La</option>
      </BrandSelect>
    </LogoContainer>
  );
};
