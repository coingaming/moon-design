import React from 'react';
import {
  TravelAirplane,
  TravelAirplaneDown,
  TravelAirplaneUp,
  TravelBeachChair,
  TravelBed,
  TravelBill,
  TravelHotel,
  TravelLuggage,
  TravelMeal,
  TravelNoSuitcase,
  TravelPassport,
  TravelPlug,
  TravelRest,
  TravelRoom,
  TravelSeats,
  TravelSuitcase,
  TravelSwimmingPool,
  TravelWiFi,
} from '@heathmont/moon-icons';
import Icon from './Icon';

interface Props {
  wrapperProps: {
    onClick: (iconName: string) => void;
    selectedIcons: string[];
  };
  props: {
    fontSize: string;
  };
}

const Example = ({ wrapperProps, props }: Props) => (
  <>
    <Icon {...wrapperProps} name="TravelAirplane">
      <TravelAirplane {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TravelAirplaneDown">
      <TravelAirplaneDown {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TravelAirplaneUp">
      <TravelAirplaneUp {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TravelBeachChair">
      <TravelBeachChair {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TravelBed">
      <TravelBed {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TravelBill">
      <TravelBill {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TravelHotel">
      <TravelHotel {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TravelLuggage">
      <TravelLuggage {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TravelMeal">
      <TravelMeal {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TravelNoSuitcase">
      <TravelNoSuitcase {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TravelPassport">
      <TravelPassport {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TravelPlug">
      <TravelPlug {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TravelRest">
      <TravelRest {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TravelRoom">
      <TravelRoom {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TravelSeats">
      <TravelSeats {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TravelSuitcase">
      <TravelSuitcase {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TravelSwimmingPool">
      <TravelSwimmingPool {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TravelWiFi">
      <TravelWiFi {...props} />
    </Icon>
  </>
);

export default Example;
