import React from 'react';
import {
  Other3Dots,
  Other3DotsHorizontal,
  OtherFrame,
  OtherFreebet,
  OtherId,
  OtherLifebuoy,
  OtherLightning,
  OtherMoon,
  OtherOther,
  OtherPlug,
  OtherRewards,
  OtherRocket,
  OtherSad,
  OtherSmile,
  OtherSun,
  OtherWater,
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
    <Icon {...wrapperProps} name="Other3Dots">
      <Other3Dots {...props} />
    </Icon>
    <Icon {...wrapperProps} name="Other3DotsHorizontal">
      <Other3DotsHorizontal {...props} />
    </Icon>
    <Icon {...wrapperProps} name="OtherFrame">
      <OtherFrame {...props} />
    </Icon>
    <Icon {...wrapperProps} name="OtherFreebet">
      <OtherFreebet {...props} />
    </Icon>
    <Icon {...wrapperProps} name="OtherId">
      <OtherId {...props} />
    </Icon>
    <Icon {...wrapperProps} name="OtherLifebuoy">
      <OtherLifebuoy {...props} />
    </Icon>
    <Icon {...wrapperProps} name="OtherLightning">
      <OtherLightning {...props} />
    </Icon>
    <Icon {...wrapperProps} name="OtherMoon">
      <OtherMoon {...props} />
    </Icon>
    <Icon {...wrapperProps} name="OtherOther">
      <OtherOther {...props} />
    </Icon>
    <Icon {...wrapperProps} name="OtherPlug">
      <OtherPlug {...props} />
    </Icon>
    <Icon {...wrapperProps} name="OtherRewards">
      <OtherRewards {...props} />
    </Icon>
    <Icon {...wrapperProps} name="OtherRocket">
      <OtherRocket {...props} />
    </Icon>
    <Icon {...wrapperProps} name="OtherSad">
      <OtherSad {...props} />
    </Icon>
    <Icon {...wrapperProps} name="OtherSmile">
      <OtherSmile {...props} />
    </Icon>
    <Icon {...wrapperProps} name="OtherSun">
      <OtherSun {...props} />
    </Icon>
    <Icon {...wrapperProps} name="OtherWater">
      <OtherWater {...props} />
    </Icon>
  </>
);

export default Example;
