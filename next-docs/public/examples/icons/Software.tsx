import {
  SoftwareBug,
  SoftwareClear,
  SoftwareCode,
  SoftwareCursor,
  SoftwareDashboard,
  SoftwareData,
  SoftwareDownload,
  SoftwareHand,
  SoftwareLogOut,
  SoftwareLogin,
  SoftwareNut,
  SoftwarePlate,
  SoftwarePuzzle,
  SoftwareSettings,
  SoftwareShutdown,
  SoftwareSorting,
  SoftwareWrench,
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
    <Icon {...wrapperProps} name="SoftwareBug">
      <SoftwareBug {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SoftwareClear">
      <SoftwareClear {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SoftwareCode">
      <SoftwareCode {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SoftwareCursor">
      <SoftwareCursor {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SoftwareDashboard">
      <SoftwareDashboard {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SoftwareData">
      <SoftwareData {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SoftwareDownload">
      <SoftwareDownload {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SoftwareHand">
      <SoftwareHand {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SoftwareLogOut">
      <SoftwareLogOut {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SoftwareLogin">
      <SoftwareLogin {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SoftwareNut">
      <SoftwareNut {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SoftwarePlate">
      <SoftwarePlate {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SoftwarePuzzle">
      <SoftwarePuzzle {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SoftwareSettings">
      <SoftwareSettings {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SoftwareShutdown">
      <SoftwareShutdown {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SoftwareSorting">
      <SoftwareSorting {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SoftwareWrench">
      <SoftwareWrench {...props} />
    </Icon>
  </>
);

export default Example;
