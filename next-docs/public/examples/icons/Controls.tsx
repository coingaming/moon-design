import {
  ControlsChevronDown,
  ControlsChevronDownSmall,
  ControlsChevronLeft,
  ControlsChevronLeftSmall,
  ControlsChevronRight,
  ControlsChevronRightSmall,
  ControlsChevronUp,
  ControlsChevronUpSmall,
  ControlsClear,
  ControlsClose,
  ControlsCloseSmall,
  ControlsCollapse,
  ControlsDiagonalsInsight,
  ControlsDiagonalsOutsight,
  ControlsExpand,
  ControlsExpandAlt,
  ControlsEye,
  ControlsEyeCrossed,
  ControlsFullScreen,
  ControlsFullScreenOut,
  ControlsMinus,
  ControlsPlus,
  ControlsVerticalDoubleChevron,
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
    <Icon {...wrapperProps} name="ControlsChevronDown">
      <ControlsChevronDown {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ControlsChevronDownSmall">
      <ControlsChevronDownSmall {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ControlsChevronLeft">
      <ControlsChevronLeft {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ControlsChevronLeftSmall">
      <ControlsChevronLeftSmall {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ControlsChevronRight">
      <ControlsChevronRight {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ControlsChevronRightSmall">
      <ControlsChevronRightSmall {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ControlsChevronUp">
      <ControlsChevronUp {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ControlsChevronUpSmall">
      <ControlsChevronUpSmall {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ControlsClear">
      <ControlsClear {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ControlsClose">
      <ControlsClose {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ControlsCloseSmall">
      <ControlsCloseSmall {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ControlsCollapse">
      <ControlsCollapse {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ControlsDiagonalsInsight">
      <ControlsDiagonalsInsight {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ControlsDiagonalsOutsight">
      <ControlsDiagonalsOutsight {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ControlsExpand">
      <ControlsExpand {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ControlsExpandAlt">
      <ControlsExpandAlt {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ControlsEye">
      <ControlsEye {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ControlsEyeCrossed">
      <ControlsEyeCrossed {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ControlsFullScreen">
      <ControlsFullScreen {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ControlsFullScreenOut">
      <ControlsFullScreenOut {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ControlsMinus">
      <ControlsMinus {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ControlsPlus">
      <ControlsPlus {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ControlsVerticalDoubleChevron">
      <ControlsVerticalDoubleChevron {...props} />
    </Icon>
  </>
);

export default Example;
