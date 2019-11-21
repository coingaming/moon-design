import * as React from 'react';
import { sportColors } from '@heathmont/sportsbet-tokens';

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
import IconSportsFootBall from '../icons/IconSportsFootBall';
import IconSportsGolf from '../icons/IconSportsGolf';
import IconSportsHandBall from '../icons/IconSportsHandBall';
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
          color={color || sportColors.americanFootBall}
          {...props}
        />
      );
    case 'sport-badminton':
      return (
        <IconSportsBadminton
          color={color || sportColors.badminton}
          {...props}
        />
      );
    case 'sport-baseball':
      return (
        <IconSportsBaseBall color={color || sportColors.baseBall} {...props} />
      );
    case 'sport-basketball':
      return (
        <IconSportsBasketBall
          color={color || sportColors.basketBall}
          {...props}
        />
      );
    case 'sport-biathlon':
      return (
        <IconSportsBiathlon color={color || sportColors.biathlon} {...props} />
      );
    case 'sport-boxing':
      return (
        <IconSportsBoxing color={color || sportColors.boxing} {...props} />
      );
    case 'sport-cricket':
      return (
        <IconSportsCricket color={color || sportColors.cricket} {...props} />
      );
    case 'sport-cycling':
      return (
        <IconSportsCycling color={color || sportColors.cycling} {...props} />
      );
    case 'sport-darts':
      return <IconSportsDarts color={color || sportColors.darts} {...props} />;
    case 'sport-esports':
      return (
        <IconSportsESports color={color || sportColors.eSports} {...props} />
      );
    case 'sport-football':
    case 'sport-soccer':
      return (
        <IconSportsFootBall color={color || sportColors.footBall} {...props} />
      );
    case 'sport-golf':
      return <IconSportsGolf color={color || sportColors.golf} {...props} />;
    case 'sport-handball':
      return (
        <IconSportsHandBall color={color || sportColors.handBall} {...props} />
      );
    case 'sport-horseracing':
      return (
        <IconSportsHorseRacing
          color={color || sportColors.horseRacing}
          {...props}
        />
      );
    case 'sport-icehockey':
      return (
        <IconSportsIceHockey
          color={color || sportColors.iceHockey}
          {...props}
        />
      );
    case 'sport-mma':
      return <IconSportsMma color={color || sportColors.mma} {...props} />;
    case 'sport-motorsports':
      return (
        <IconSportsMotorSports
          color={color || sportColors.motorSports}
          {...props}
        />
      );
    case 'sport-politics':
      return (
        <IconSportsPolitics color={color || sportColors.politics} {...props} />
      );
    case 'sport-pool':
      return <IconSportsPool color={color || sportColors.pool} {...props} />;
    case 'sport-popular':
      return (
        <IconSportsPopular color={color || sportColors.popular} {...props} />
      );
    case 'sport-rugby':
      return <IconSportsRugby color={color || sportColors.rugby} {...props} />;
    case 'sport-sinuca':
      return <IconSportsSnooker color={color || sportColors.sinuca} />;
    case 'sport-skiing':
      return <IconSportsSki color={color || sportColors.ski} />;
    case 'sport-snooker':
      return <IconSportsSnooker color={color || sportColors.snooker} />;
    case 'sport-special':
      return <IconSportsSpecial color={color || sportColors.special} />;
    case 'sport-squash':
      return <IconSportsSquash color={color || sportColors.squash} />;
    case 'sport-tabletennis':
      return <IconSportsTableTennis color={color || sportColors.tableTennis} />;
    case 'sport-tennis':
      return <IconSportsTennis color={color || sportColors.tennis} />;
    case 'sport-volleyball':
      return <IconSportsVolleyBall color={color || sportColors.volleyBall} />;
    case 'sport-waterpolo':
      return <IconSportsWaterPolo color={color || sportColors.waterPolo} />;
    default:
      return null;
  }
};

export default GroupIconSports;
