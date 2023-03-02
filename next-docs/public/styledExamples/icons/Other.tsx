import {
  Other3Dots,
  Other3DotsHorizontal,
  Other43Free,
  Other66Free,
  OtherClaps,
  OtherCrown,
  OtherFlame,
  OtherFrame,
  OtherFreebet,
  OtherId,
  OtherLifebuoy,
  OtherLightning,
  OtherLiveCasino,
  OtherMoon,
  OtherPlug,
  OtherRewards,
  OtherRocket,
  OtherSad,
  OtherSmile,
  OtherSun,
  OtherWater,
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
    <Icon {...wrapperProps} name="Other3Dots">
      <Other3Dots {...props} />
    </Icon>
    <Icon {...wrapperProps} name="Other3DotsHorizontal">
      <Other3DotsHorizontal {...props} />
    </Icon>
    <Icon {...wrapperProps} name="Other43Free">
      <Other43Free {...props} />
    </Icon>
    <Icon {...wrapperProps} name="Other66Free">
      <Other66Free {...props} />
    </Icon>
    <Icon {...wrapperProps} name="OtherClaps">
      <OtherClaps {...props} />
    </Icon>
    <Icon {...wrapperProps} name="OtherCrown">
      <OtherCrown {...props} />
    </Icon>
    <Icon {...wrapperProps} name="OtherFlame">
      <OtherFlame {...props} />
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
    <Icon {...wrapperProps} name="OtherLiveCasino">
      <OtherLiveCasino {...props} />
    </Icon>
    <Icon {...wrapperProps} name="OtherMoon">
      <OtherMoon {...props} />
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
