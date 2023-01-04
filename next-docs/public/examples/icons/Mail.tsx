import {
  MailBox,
  MailEmailStats,
  MailEnvelope,
  MailFilter,
  MailFilterCrossed,
  MailFlag,
  MailLink,
  MailSend,
  MailSendRight,
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
    <Icon {...wrapperProps} name="MailBox">
      <MailBox {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MailEmailStats">
      <MailEmailStats {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MailEnvelope">
      <MailEnvelope {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MailFilter">
      <MailFilter {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MailFilterCrossed">
      <MailFilterCrossed {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MailFlag">
      <MailFlag {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MailLink">
      <MailLink {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MailSend">
      <MailSend {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MailSendRight">
      <MailSendRight {...props} />
    </Icon>
  </>
);

export default Example;
