import React from 'react';

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
import IconSportsAfl from '../icons/IconSportsAfl';
import IconSportsAmericanFootBall from '../icons/IconSportsAmericanFootBall';
import IconSportsBadminton from '../icons/IconSportsBadminton';
import IconSportsBaseBall from '../icons/IconSportsBaseBall';
import IconSportsBasketBall from '../icons/IconSportsBasketBall';
import IconSportsBiathlon from '../icons/IconSportsBiathlon';
import IconSportsBoxing from '../icons/IconSportsBoxing';
import IconSportsCricket from '../icons/IconSportsCricket';
import IconSportsCycling from '../icons/IconSportsCycling';
import IconSportsDarts from '../icons/IconSportsDarts';
import IconSportsESports from '../icons/IconSportsESports';
import IconSportsFeatured from '../icons/IconSportsFeatured';
import IconSportsFootBall from '../icons/IconSportsFootBall';
import IconSportsGolf from '../icons/IconSportsGolf';
import IconSportsGreyhound from '../icons/IconSportsGreyhound';
import IconSportsHandBall from '../icons/IconSportsHandBall';
import IconSportsHarness from '../icons/IconSportsHarness';
import IconSportsHorse from '../icons/IconSportsHorse';
import IconSportsHorseRacing from '../icons/IconSportsHorseRacing';
import IconSportsIceHockey from '../icons/IconSportsIceHockey';
import IconSportsMma from '../icons/IconSportsMma';
import IconSportsMotorSports from '../icons/IconSportsMotorSports';
import IconSportsPolitics from '../icons/IconSportsPolitics';
import IconSportsPool from '../icons/IconSportsPool';
import IconSportsPopular from '../icons/IconSportsPopular';
import IconSportsRugby from '../icons/IconSportsRugby';
import IconSportsSki from '../icons/IconSportsSki';
import IconSportsSnooker from '../icons/IconSportsSnooker';
import IconSportsSpecial from '../icons/IconSportsSpecial';
import IconSportsSquash from '../icons/IconSportsSquash';
import IconSportsTableTennis from '../icons/IconSportsTableTennis';
import IconSportsTennis from '../icons/IconSportsTennis';
import IconSportsVolleyBall from '../icons/IconSportsVolleyBall';
import IconSportsWaterPolo from '../icons/IconSportsWaterPolo';

import { GroupIconSportsColor } from './GroupIconSportsColor';

export type GroupIconSportsName =
  | 'sport-americanfootball'
  | 'sport-badminton'
  | 'sport-baseball'
  | 'sport-basketball'
  | 'sport-biathlon'
  | 'sport-boxing'
  | 'sport-cricket'
  | 'sport-cycling'
  | 'sport-darts'
  | 'sport-esports'
  | 'sport-featured'
  | 'sport-football'
  | 'sport-golf'
  | 'sport-handball'
  | 'sport-icehockey'
  | 'sport-mma'
  | 'sport-motorsports'
  | 'sport-politics'
  | 'sport-pool'
  | 'sport-sinuca'
  | 'sports-popular'
  | 'sport-skiing'
  | 'sport-snooker'
  | 'sport-soccer'
  | 'sport-squash'
  | 'sport-tabletennis'
  | 'sport-tennis'
  | 'sport-volleyball'
  | 'sport-waterpolo'
  | 'sport-horseracing'
  | 'sport-popular'
  | 'sport-rugby'
  | 'sport-greyhound'
  | 'sport-harness'
  | 'sport-horse'
  | 'sport-afl'
  // e-sports
  | 'sport-special'
  | 'sport-dota2'
  | 'sport-counter-strike'
  | 'sport-league-of-legends'
  | 'sport-e-football'
  | 'sport-call-of-duty'
  | 'sport-overwatch'
  | 'sport-rocket-league'
  | 'sport-hearthstone'
  | 'sport-star-craft'
  | 'sport-e-nba'
  | 'sport-rainbow'
  | 'sport-e-sport';

export type GroupIconSportsProps = {
  name: GroupIconSportsName;
  color?: string;
};

const GroupIconSports: React.FC<GroupIconSportsProps> &
  React.SVGProps<SVGSVGElement> = ({ name, color, ...props }) => {
  switch (name) {
    case 'sport-americanfootball':
      return (
        <IconSportsAmericanFootBall
          color={color || GroupIconSportsColor.americanFootBall}
          {...props}
        />
      );
    case 'sport-badminton':
      return (
        <IconSportsBadminton
          color={color || GroupIconSportsColor.badminton}
          {...props}
        />
      );
    case 'sport-baseball':
      return (
        <IconSportsBaseBall
          color={color || GroupIconSportsColor.baseBall}
          {...props}
        />
      );
    case 'sport-basketball':
      return (
        <IconSportsBasketBall
          color={color || GroupIconSportsColor.basketBall}
          {...props}
        />
      );
    case 'sport-biathlon':
      return (
        <IconSportsBiathlon
          color={color || GroupIconSportsColor.biathlon}
          {...props}
        />
      );
    case 'sport-boxing':
      return (
        <IconSportsBoxing
          color={color || GroupIconSportsColor.boxing}
          {...props}
        />
      );
    case 'sport-cricket':
      return (
        <IconSportsCricket
          color={color || GroupIconSportsColor.cricket}
          {...props}
        />
      );
    case 'sport-cycling':
      return (
        <IconSportsCycling
          color={color || GroupIconSportsColor.cycling}
          {...props}
        />
      );
    case 'sport-darts':
      return (
        <IconSportsDarts
          color={color || GroupIconSportsColor.darts}
          {...props}
        />
      );
    case 'sport-esports':
      return (
        <IconSportsESports
          color={color || GroupIconSportsColor.eSports}
          {...props}
        />
      );
    case 'sport-featured':
      return (
        <IconSportsFeatured
          color={color || GroupIconSportsColor.special}
          {...props}
        />
      );
    case 'sport-football':
    case 'sport-soccer':
      return (
        <IconSportsFootBall
          color={color || GroupIconSportsColor.footBall}
          {...props}
        />
      );
    case 'sport-golf':
      return (
        <IconSportsGolf color={color || GroupIconSportsColor.golf} {...props} />
      );
    case 'sport-handball':
      return (
        <IconSportsHandBall
          color={color || GroupIconSportsColor.handBall}
          {...props}
        />
      );
    case 'sport-horseracing':
      return (
        <IconSportsHorseRacing
          color={color || GroupIconSportsColor.horseRacing}
          {...props}
        />
      );
    case 'sport-icehockey':
      return (
        <IconSportsIceHockey
          color={color || GroupIconSportsColor.iceHockey}
          {...props}
        />
      );
    case 'sport-mma':
      return (
        <IconSportsMma color={color || GroupIconSportsColor.mma} {...props} />
      );
    case 'sport-motorsports':
      return (
        <IconSportsMotorSports
          color={color || GroupIconSportsColor.motorSports}
          {...props}
        />
      );
    case 'sport-politics':
      return (
        <IconSportsPolitics
          color={color || GroupIconSportsColor.politics}
          {...props}
        />
      );
    case 'sport-pool':
      return (
        <IconSportsPool color={color || GroupIconSportsColor.pool} {...props} />
      );
    case 'sport-popular':
      return (
        <IconSportsPopular
          color={color || GroupIconSportsColor.popular}
          {...props}
        />
      );
    case 'sport-rugby':
      return (
        <IconSportsRugby
          color={color || GroupIconSportsColor.rugby}
          {...props}
        />
      );
    case 'sport-afl':
      return (
        <IconSportsAfl color={color || GroupIconSportsColor.afl} {...props} />
      );
    case 'sport-sinuca':
      return <IconSportsSnooker color={color || GroupIconSportsColor.sinuca} />;
    case 'sport-skiing':
      return <IconSportsSki color={color || GroupIconSportsColor.ski} />;
    case 'sport-snooker':
      return (
        <IconSportsSnooker color={color || GroupIconSportsColor.snooker} />
      );
    case 'sport-special':
      return (
        <IconSportsSpecial color={color || GroupIconSportsColor.special} />
      );
    case 'sport-squash':
      return <IconSportsSquash color={color || GroupIconSportsColor.squash} />;
    case 'sport-tabletennis':
      return (
        <IconSportsTableTennis
          color={color || GroupIconSportsColor.tableTennis}
        />
      );
    case 'sport-tennis':
      return <IconSportsTennis color={color || GroupIconSportsColor.tennis} />;
    case 'sport-volleyball':
      return (
        <IconSportsVolleyBall
          color={color || GroupIconSportsColor.volleyBall}
        />
      );
    case 'sport-waterpolo':
      return (
        <IconSportsWaterPolo color={color || GroupIconSportsColor.waterPolo} />
      );
    case 'sport-dota2':
      return <IconESportsDota2 {...props} />;
    case 'sport-counter-strike':
      return (
        <IconESportsCounterStrike color={color || 'bulma.100'} {...props} />
      );
    case 'sport-league-of-legends':
      return <IconESportsLeagueOfLegends {...props} />;
    case 'sport-e-football':
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
    case 'sport-greyhound':
      return <IconSportsGreyhound color={color || 'krillin.100'} {...props} />;
    case 'sport-harness':
      return <IconSportsHarness color={color || 'dodoria.100'} {...props} />;
    case 'sport-horse':
      return <IconSportsHorse color={color || 'whis.100'} {...props} />;
    default:
      return null;
  }
};

export default GroupIconSports;
