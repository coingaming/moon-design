import React from 'react';
import {
  MailBox,
  MailEmailStats,
  MailEnvelope,
  MailFilter,
  MailFilterCrossed,
  MailFlag,
  MailLink,
  MailSend,
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
  </>
);

export default Example;
