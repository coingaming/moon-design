import React from 'react';
import {
  SportAmericanFootball,
  SportBadminton,
  SportBaseball,
  SportBasketball,
  SportBeachVolleyball,
  SportBombay,
  SportBoxing,
  SportCasino,
  SportCricket,
  SportCrossCountry,
  SportCsgo,
  SportCycling,
  SportDarts,
  SportDota2,
  SportESoccer,
  SportEnba,
  SportEsportGeneric,
  SportFeatured,
  SportFieldHockey,
  SportFloorball,
  SportFormula1,
  SportFutsal,
  SportGolf,
  SportGreyhound,
  SportHandball,
  SportHarness,
  SportHorseRacing,
  SportIceHockey,
  SportLoL,
  SportMma,
  SportMotor,
  SportOverwatch,
  SportRugby,
  SportSetTennis,
  SportSnooker,
  SportSoccer,
  SportSpecialSports,
  SportSpecials,
  SportSportsbet,
  SportTableTennis,
  SportTennis,
  SportVolleyball,
  SportWaterpolo,
} from '@heathmont/moon-icons-tw';
import Icon from './Icon';

interface Props {
  wrapperProps: {
    onClick: (iconName: string) => void;
    selectedIcons: string[];
  };
  props: {
    className: string;
  };
}

const Example = ({ wrapperProps, props }: Props) => (
  <>
    <Icon {...wrapperProps} name="SportAmericanFootball">
      <SportAmericanFootball {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportBadminton">
      <SportBadminton {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportBaseball">
      <SportBaseball {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportBasketball">
      <SportBasketball {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportBeachVolleyball">
      <SportBeachVolleyball {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportBombay">
      <SportBombay {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportBoxing">
      <SportBoxing {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportCasino">
      <SportCasino {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportCricket">
      <SportCricket {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportCrossCountry">
      <SportCrossCountry {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportCsgo">
      <SportCsgo {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportCycling">
      <SportCycling {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportDarts">
      <SportDarts {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportDota2">
      <SportDota2 {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportESoccer">
      <SportESoccer {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportEnba">
      <SportEnba {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportEsportGeneric">
      <SportEsportGeneric {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportFeatured">
      <SportFeatured {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportFieldHockey">
      <SportFieldHockey {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportFloorball">
      <SportFloorball {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportFormula1">
      <SportFormula1 {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportFutsal">
      <SportFutsal {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportGolf">
      <SportGolf {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportGreyhound">
      <SportGreyhound {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportHandball">
      <SportHandball {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportHarness">
      <SportHarness {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportHorseRacing">
      <SportHorseRacing {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportIceHockey">
      <SportIceHockey {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportLoL">
      <SportLoL {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportMma">
      <SportMma {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportMotor">
      <SportMotor {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportOverwatch">
      <SportOverwatch {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportRugby">
      <SportRugby {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportSetTennis">
      <SportSetTennis {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportSnooker">
      <SportSnooker {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportSoccer">
      <SportSoccer {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportSpecialSports">
      <SportSpecialSports {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportSpecials">
      <SportSpecials {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportSportsbet">
      <SportSportsbet {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportTableTennis">
      <SportTableTennis {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportTennis">
      <SportTennis {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportVolleyball">
      <SportVolleyball {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SportWaterpolo">
      <SportWaterpolo {...props} />
    </Icon>
  </>
);

export default Example;
