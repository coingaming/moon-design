import * as React from 'react';

import { IconBitcoinTalk } from '../svg/IconBitcoinTalk';
import { IconFacebook } from '../svg/IconFacebook';
import { IconGoogle } from '../svg/IconGoogle';
import { IconInstagram } from '../svg/IconInstagram';
import { IconTelegram } from '../svg/IconTelegram';
import { IconTwitter } from '../svg/IconTwitter';
import { IconVkontakte } from '../svg/IconVkontakte';
import { IconYoutube } from '../svg/IconYoutube';

export type ThirdPartyName =
  | 'bitcointalk'
  | 'facebook'
  | 'google'
  | 'instagram'
  | 'telegram'
  | 'twitter'
  | 'vkontakte'
  | 'youtube';

export type GroupIconThirdPartyProps = {
  name: ThirdPartyName;
};

const thirdPartyIcons = {
  bitcointalk: IconBitcoinTalk,
  facebook: IconFacebook,
  google: IconGoogle,
  instagram: IconInstagram,
  telegram: IconTelegram,
  twitter: IconTwitter,
  vkontakte: IconVkontakte,
  youtube: IconYoutube,
};

export const GroupIconThirdParty: React.FC<GroupIconThirdPartyProps> &
  React.SVGProps<SVGSVGElement> = ({ name, ...props }) => {
  return React.createElement(thirdPartyIcons[name], { ...props });
};
