import * as React from 'react';

import { IconSportsAmericanFootBall } from '../svg/IconSportsAmericanFootBall';
import { IconSportsBadminton } from '../svg/IconSportsBadminton';
import { IconSportsBaseBall } from '../svg/IconSportsBaseBall';
import { IconSportsBasketBall } from '../svg/IconSportsBasketBall';
import { IconSportsBiathlon } from '../svg/IconSportsBiathlon';
import { IconSportsBoxing } from '../svg/IconSportsBoxing';
import { IconSportsCricket } from '../svg/IconSportsCricket';
import { IconSportsCycling } from '../svg/IconSportsCycling';
import { IconSportsDarts } from '../svg/IconSportsDarts';
import { IconSportsESports } from '../svg/IconSportsESports';
import { IconSportsFootBall } from '../svg/IconSportsFootBall';
import { IconSportsGolf } from '../svg/IconSportsGolf';
import { IconSportsHandBall } from '../svg/IconSportsHandBall';
import { IconSportsHorseRacing } from '../svg/IconSportsHorseRacing';
import { IconSportsIceHockey } from '../svg/IconSportsIceHockey';
import { IconSportsMma } from '../svg/IconSportsMma';
import { IconSportsMotorSports } from '../svg/IconSportsMotorSports';
import { IconSportsPolitics } from '../svg/IconSportsPolitics';
import { IconSportsPool } from '../svg/IconSportsPool';
import { IconSportsPopular } from '../svg/IconSportsPopular';
import { IconSportsRugby } from '../svg/IconSportsRugby';
import { IconSportsSinuca } from '../svg/IconSportsSinuca';
import { IconSportsSki } from '../svg/IconSportsSki';
import { IconSportsSnooker } from '../svg/IconSportsSnooker';
import { IconSportsSpecial } from '../svg/IconSportsSpecial';
import { IconSportsSquash } from '../svg/IconSportsSquash';
import { IconSportsTableTennis } from '../svg/IconSportsTableTennis';
import { IconSportsTennis } from '../svg/IconSportsTennis';
import { IconSportsVolleyBall } from '../svg/IconSportsVolleyBall';
import { IconSportsWaterPolo } from '../svg/IconSportsWaterPolo';

export type SportsIconKind =
  | 'americanfootball'
  | 'badminton'
  | 'baseball'
  | 'basketball'
  | 'biathlon'
  | 'boxing'
  | 'cricket'
  | 'cycling'
  | 'darts'
  | 'esports'
  | 'football'
  | 'golf'
  | 'handball'
  | 'icehockey'
  | 'mma'
  | 'motorsports'
  | 'politics'
  | 'pool'
  | 'sinuca'
  | 'sports-popular'
  | 'skiing'
  | 'snooker'
  | 'soccer'
  | 'squash'
  | 'tabletennis'
  | 'tennis'
  | 'volleyball'
  | 'waterpolo'
  | 'horseracing'
  | 'popular'
  | 'rugby'
  | 'special';

type IconProp = {
  name: SportsIconKind;
};
export const IconSports: React.FC<IconProp> = ({ name }) => {
  switch (name) {
    case 'americanfootball':
      return (
        <IconSportsAmericanFootBall color={sportColors.americanFootBall} />
      );
    case 'badminton':
      return <IconSportsBadminton color={sportColors.badminton} />;
    case 'baseball':
      return <IconSportsBaseBall color={sportColors.baseBall} />;
    case 'basketball':
      return <IconSportsBasketBall color={sportColors.basketBall} />;
    case 'biathlon':
      return <IconSportsBiathlon color={sportColors.biathlon} />;
    case 'boxing':
      return <IconSportsBoxing color={sportColors.boxing} />;
    case 'cricket':
      return <IconSportsCricket color={sportColors.cricket} />;
    case 'cycling':
      return <IconSportsCycling color={sportColors.cycling} />;
    case 'darts':
      return <IconSportsDarts color={sportColors.darts} />;
    case 'esports':
      return <IconSportsESports color={sportColors.eSports} />;
    case 'football':
    case 'soccer':
      return <IconSportsFootBall color={sportColors.footBall} />;
    case 'golf':
      return <IconSportsGolf color={sportColors.golf} />;
    case 'handball':
      return <IconSportsHandBall color={sportColors.handBall} />;
    case 'horseracing':
      return <IconSportsHorseRacing color={sportColors.horseRacing} />;
    case 'icehockey':
      return <IconSportsIceHockey color={sportColors.iceHockey} />;
    case 'mma':
      return <IconSportsMma color={sportColors.mma} />;
    case 'motorsports':
      return <IconSportsMotorSports color={sportColors.motorSports} />;
    case 'politics':
      return <IconSportsPolitics color={sportColors.politics} />;
    case 'pool':
      return <IconSportsPool color={sportColors.pool} />;
    case 'popular':
      return <IconSportsPopular color={sportColors.popular} />;
    case 'rugby':
      return <IconSportsRugby color={sportColors.rugby} />;
    case 'sinuca':
      return <IconSportsSinuca color={sportColors.sinuca} />;
    case 'skiing':
      return <IconSportsSki color={sportColors.ski} />;
    case 'snooker':
      return <IconSportsSnooker color={sportColors.snooker} />;
    case 'special':
      return <IconSportsSpecial color={sportColors.special} />;
    case 'squash':
      return <IconSportsSquash color={sportColors.squash} />;
    case 'tabletennis':
      return <IconSportsTableTennis color={sportColors.tableTennis} />;
    case 'tennis':
      return <IconSportsTennis color={sportColors.tennis} />;
    case 'volleyball':
      return <IconSportsVolleyBall color={sportColors.volleyBall} />;
    case 'waterpolo':
      return <IconSportsWaterPolo color={sportColors.waterPolo} />;
    default:
      return null;
  }
};
