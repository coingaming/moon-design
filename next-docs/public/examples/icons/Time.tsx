import {
  TimeAlarm,
  TimeCalendar,
  TimeCalendarAdd,
  TimeCalendarAlternative,
  TimeCalendarDate,
  TimeCalendarRemove,
  TimeCalendarSuccess,
  TimeClock,
  TimeSandglass,
  TimeStopwatch,
  TimeStopwatchTimer,
  TimeTime,
  TimeWatch,
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
    <Icon {...wrapperProps} name="TimeAlarm">
      <TimeAlarm {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TimeCalendar">
      <TimeCalendar {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TimeCalendarAdd">
      <TimeCalendarAdd {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TimeCalendarAlternative">
      <TimeCalendarAlternative {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TimeCalendarDate">
      <TimeCalendarDate {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TimeCalendarRemove">
      <TimeCalendarRemove {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TimeCalendarSuccess">
      <TimeCalendarSuccess {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TimeClock">
      <TimeClock {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TimeSandglass">
      <TimeSandglass {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TimeStopwatch">
      <TimeStopwatch {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TimeStopwatchTimer">
      <TimeStopwatchTimer {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TimeTime">
      <TimeTime {...props} />
    </Icon>
    <Icon {...wrapperProps} name="TimeWatch">
      <TimeWatch {...props} />
    </Icon>
  </>
);

export default Example;
