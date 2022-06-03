import React from 'react';
import {
  DevicesBluetooth,
  DevicesJoystick,
  DevicesKeyboard,
  DevicesMac,
  DevicesMacbook,
  DevicesMacbookAndIphone,
  DevicesMouse,
  DevicesPhone,
  DevicesSmartphone,
  DevicesTvBox,
} from '@heathmont/moon-icons-tw';
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
    <Icon {...wrapperProps} name="DevicesBluetooth">
      <DevicesBluetooth {...props} />
    </Icon>
    <Icon {...wrapperProps} name="DevicesJoystick">
      <DevicesJoystick {...props} />
    </Icon>
    <Icon {...wrapperProps} name="DevicesKeyboard">
      <DevicesKeyboard {...props} />
    </Icon>
    <Icon {...wrapperProps} name="DevicesMac">
      <DevicesMac {...props} />
    </Icon>
    <Icon {...wrapperProps} name="DevicesMacbook">
      <DevicesMacbook {...props} />
    </Icon>
    <Icon {...wrapperProps} name="DevicesMacbookAndIphone">
      <DevicesMacbookAndIphone {...props} />
    </Icon>
    <Icon {...wrapperProps} name="DevicesMouse">
      <DevicesMouse {...props} />
    </Icon>
    <Icon {...wrapperProps} name="DevicesPhone">
      <DevicesPhone {...props} />
    </Icon>
    <Icon {...wrapperProps} name="DevicesSmartphone">
      <DevicesSmartphone {...props} />
    </Icon>
    <Icon {...wrapperProps} name="DevicesTvBox">
      <DevicesTvBox {...props} />
    </Icon>
  </>
);

export default Example;
