import * as React from 'react';

import IconBitcoinTalk from '../icons/IconBitcoinTalk';
import IconFacebook from '../icons/IconFacebook';
import IconGoogle from '../icons/IconGoogle';
import IconInstagram from '../icons/IconInstagram';
import IconLine from '../icons/IconLine';
import IconTelegram from '../icons/IconTelegram';
import IconTwitter from '../icons/IconTwitter';
import IconVkontakte from '../icons/IconVkontakte';
import IconYoutube from '../icons/IconYoutube';

export type GroupIconThirdPartyName =
  | 'bitcointalk'
  | 'facebook'
  | 'google'
  | 'instagram'
  | 'line'
  | 'telegram'
  | 'twitter'
  | 'vkontakte'
  | 'youtube';

export type GroupIconThirdPartyProps = {
  name: GroupIconThirdPartyName;
};

const thirdPartyIcons = {
  bitcointalk: IconBitcoinTalk,
  facebook: IconFacebook,
  google: IconGoogle,
  instagram: IconInstagram,
  line: IconLine,
  telegram: IconTelegram,
  twitter: IconTwitter,
  vkontakte: IconVkontakte,
  youtube: IconYoutube,
};

const GroupIconThirdParty: React.FC<GroupIconThirdPartyProps> &
  React.SVGProps<SVGSVGElement> = ({ name, ...props }) => {
  return React.createElement(thirdPartyIcons[name], { ...props });
};

export default GroupIconThirdParty;
