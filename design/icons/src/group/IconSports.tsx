import * as React from 'react';

import { sportColors } from '@heathmont/sportsbet-tokens';

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
  | 'sport-special';

type IconProp = {
  name: SportsIconKind;
};
export const IconSports: React.FC<IconProp> = ({ name }) => {
  switch (name) {
    case 'sport-americanfootball':
      return (
        <IconSportsAmericanFootBall color={sportColors.americanFootBall} />
      );
    case 'sport-badminton':
      return <IconSportsBadminton color={sportColors.badminton} />;
    case 'sport-baseball':
      return <IconSportsBaseBall color={sportColors.baseBall} />;
    case 'sport-basketball':
      return <IconSportsBasketBall color={sportColors.basketBall} />;
    case 'sport-biathlon':
      return <IconSportsBiathlon color={sportColors.biathlon} />;
    case 'sport-boxing':
      return <IconSportsBoxing color={sportColors.boxing} />;
    case 'sport-cricket':
      return <IconSportsCricket color={sportColors.cricket} />;
    case 'sport-cycling':
      return <IconSportsCycling color={sportColors.cycling} />;
    case 'sport-darts':
      return <IconSportsDarts color={sportColors.darts} />;
    case 'sport-esports':
      return <IconSportsESports color={sportColors.eSports} />;
    case 'sport-football':
    case 'sport-soccer':
      return <IconSportsFootBall color={sportColors.footBall} />;
    case 'sport-golf':
      return <IconSportsGolf color={sportColors.golf} />;
    case 'sport-handball':
      return <IconSportsHandBall color={sportColors.handBall} />;
    case 'sport-horseracing':
      return <IconSportsHorseRacing color={sportColors.horseRacing} />;
    case 'sport-icehockey':
      return <IconSportsIceHockey color={sportColors.iceHockey} />;
    case 'sport-mma':
      return <IconSportsMma color={sportColors.mma} />;
    case 'sport-motorsports':
      return <IconSportsMotorSports color={sportColors.motorSports} />;
    case 'sport-politics':
      return <IconSportsPolitics color={sportColors.politics} />;
    case 'sport-pool':
      return <IconSportsPool color={sportColors.pool} />;
    case 'sport-popular':
      return <IconSportsPopular color={sportColors.popular} />;
    case 'sport-rugby':
      return <IconSportsRugby color={sportColors.rugby} />;
    case 'sport-sinuca':
      return <IconSportsSinuca color={sportColors.sinuca} />;
    case 'sport-skiing':
      return <IconSportsSki color={sportColors.ski} />;
    case 'sport-snooker':
      return <IconSportsSnooker color={sportColors.snooker} />;
    case 'sport-special':
      return <IconSportsSpecial color={sportColors.special} />;
    case 'sport-squash':
      return <IconSportsSquash color={sportColors.squash} />;
    case 'sport-tabletennis':
      return <IconSportsTableTennis color={sportColors.tableTennis} />;
    case 'sport-tennis':
      return <IconSportsTennis color={sportColors.tennis} />;
    case 'sport-volleyball':
      return <IconSportsVolleyBall color={sportColors.volleyBall} />;
    case 'sport-waterpolo':
      return <IconSportsWaterPolo color={sportColors.waterPolo} />;
    default:
      return null;
  }
};
