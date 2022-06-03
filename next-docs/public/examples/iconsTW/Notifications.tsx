import React from 'react';
import {
  NotificationsActivity,
  NotificationsAddBell,
  NotificationsAlert,
  NotificationsApp,
  NotificationsBell,
  NotificationsBellAlarm,
  NotificationsBellCross,
  NotificationsBellRinging,
  NotificationsBellRingingAlternative,
  NotificationsError,
  NotificationsNotifications,
  NotificationsQuestionMark,
  NotificationsSettings,
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
    <Icon {...wrapperProps} name="NotificationsActivity">
      <NotificationsActivity {...props} />
    </Icon>
    <Icon {...wrapperProps} name="NotificationsAddBell">
      <NotificationsAddBell {...props} />
    </Icon>
    <Icon {...wrapperProps} name="NotificationsAlert">
      <NotificationsAlert {...props} />
    </Icon>
    <Icon {...wrapperProps} name="NotificationsApp">
      <NotificationsApp {...props} />
    </Icon>
    <Icon {...wrapperProps} name="NotificationsBell">
      <NotificationsBell {...props} />
    </Icon>
    <Icon {...wrapperProps} name="NotificationsBellAlarm">
      <NotificationsBellAlarm {...props} />
    </Icon>
    <Icon {...wrapperProps} name="NotificationsBellCross">
      <NotificationsBellCross {...props} />
    </Icon>
    <Icon {...wrapperProps} name="NotificationsBellRinging">
      <NotificationsBellRinging {...props} />
    </Icon>
    <Icon {...wrapperProps} name="NotificationsBellRingingAlternative">
      <NotificationsBellRingingAlternative {...props} />
    </Icon>
    <Icon {...wrapperProps} name="NotificationsError">
      <NotificationsError {...props} />
    </Icon>
    <Icon {...wrapperProps} name="NotificationsNotifications">
      <NotificationsNotifications {...props} />
    </Icon>
    <Icon {...wrapperProps} name="NotificationsQuestionMark">
      <NotificationsQuestionMark {...props} />
    </Icon>
    <Icon {...wrapperProps} name="NotificationsSettings">
      <NotificationsSettings {...props} />
    </Icon>
  </>
);

export default Example;
