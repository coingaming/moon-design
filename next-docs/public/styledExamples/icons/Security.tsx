import {
  SecurityBetInsurance,
  SecurityKey,
  SecurityLock,
  SecurityMagnet,
  SecurityPassport,
  SecurityPassportAlert,
  SecurityQrCode,
  SecuritySecurityAttention,
  SecurityShield,
  SecurityShieldSecured,
  SecurityUmbrella,
  SecurityUnlock,
  SecurityVerified,
  SecurityVerifiedFace,
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
    <Icon {...wrapperProps} name="SecurityBetInsurance">
      <SecurityBetInsurance {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SecurityKey">
      <SecurityKey {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SecurityLock">
      <SecurityLock {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SecurityMagnet">
      <SecurityMagnet {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SecurityPassport">
      <SecurityPassport {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SecurityPassportAlert">
      <SecurityPassportAlert {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SecurityQrCode">
      <SecurityQrCode {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SecuritySecurityAttention">
      <SecuritySecurityAttention {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SecurityShield">
      <SecurityShield {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SecurityShieldSecured">
      <SecurityShieldSecured {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SecurityUmbrella">
      <SecurityUmbrella {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SecurityUnlock">
      <SecurityUnlock {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SecurityVerified">
      <SecurityVerified {...props} />
    </Icon>
    <Icon {...wrapperProps} name="SecurityVerifiedFace">
      <SecurityVerifiedFace {...props} />
    </Icon>
  </>
);

export default Example;
