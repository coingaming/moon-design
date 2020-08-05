import * as React from 'react';

import IconESportsCallOfDuty from '../icons/IconESportsCallOfDuty';
import IconESportsCounterStrike from '../icons/IconESportsCounterStrike';
import IconESportsDota2 from '../icons/IconESportsDota2';
import IconESportsENba from '../icons/IconESportsENba';
import IconESportsESport from '../icons/IconESportsESport';
import IconESportsFootball from '../icons/IconESportsFootball';
import IconESportsHearthstone from '../icons/IconESportsHearthstone';
import IconESportsLeagueOfLegends from '../icons/IconESportsLeagueOfLegends';
import IconESportsOverwatch from '../icons/IconESportsOverwatch';
import IconESportsRainbow from '../icons/IconESportsRainbow';
import IconESportsRocketLeague from '../icons/IconESportsRocketLeague';
import IconESportsStarCraft from '../icons/IconESportsStarCraft';

export type GroupIconESportsName =
  | 'sport-dota2'
  | 'sport-counter-strike'
  | 'sport-league-of-legends'
  | 'sport-football'
  | 'sport-call-of-duty'
  | 'sport-overwatch'
  | 'sport-rocket-league'
  | 'sport-hearthstone'
  | 'sport-star-craft'
  | 'sport-e-nba'
  | 'sport-rainbow'
  | 'sport-e-sport';

export type GroupIconESportsProps = {
  name: GroupIconESportsName;
};

const GroupIconESports: React.FC<GroupIconESportsProps> &
  React.SVGProps<SVGSVGElement> = ({ name, ...props }) => {
  switch (name) {
    case 'sport-dota2':
      return <IconESportsDota2 {...props} />;
    case 'sport-counter-strike':
      return <IconESportsCounterStrike {...props} />;
    case 'sport-league-of-legends':
      return <IconESportsLeagueOfLegends {...props} />;
    case 'sport-football':
      return <IconESportsFootball {...props} />;
    case 'sport-call-of-duty':
      return <IconESportsCallOfDuty {...props} />;
    case 'sport-overwatch':
      return <IconESportsOverwatch {...props} />;
    case 'sport-rocket-league':
      return <IconESportsRocketLeague {...props} />;
    case 'sport-hearthstone':
      return <IconESportsHearthstone {...props} />;
    case 'sport-star-craft':
      return <IconESportsStarCraft {...props} />;
    case 'sport-e-nba':
      return <IconESportsENba {...props} />;
    case 'sport-rainbow':
      return <IconESportsRainbow {...props} />;
    case 'sport-e-sport':
      return <IconESportsESport {...props} />;
    default:
      return null;
  }
};

export default GroupIconESports;
