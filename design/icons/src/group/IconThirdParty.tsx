import * as React from 'react';

import { IconBitcoinTalk } from '../svg/IconBitcoinTalk';
import { IconFacebook } from '../svg/IconFacebook';
import { IconGoogle } from '../svg/IconGoogle';
import { IconInstagram } from '../svg/IconInstagram';
import { IconTelegram } from '../svg/IconTelegram';
import { IconTwitter } from '../svg/IconTwitter';
import { IconVkontakte } from '../svg/IconVkontakte';
import { IconYoutube } from '../svg/IconYoutube';

type ThirdPartyName =
  | 'bitcointalk'
  | 'facebook'
  | 'google'
  | 'instagram'
  | 'telegram'
  | 'twitter'
  | 'vkontakte'
  | 'youtube';

type IconProp = {
  name: ThirdPartyName;
};
export const IconThirdParty: React.FC<IconProp> = ({ name }) => {
  switch (name) {
    case 'bitcointalk':
      return <IconBitcoinTalk />;
    case 'facebook':
      return <IconFacebook />;
    case 'google':
      return <IconGoogle />;
    case 'instagram':
      return <IconInstagram />;
    case 'telegram':
      return <IconTelegram />;
    case 'twitter':
      return <IconTwitter />;
    case 'vkontakte':
      return <IconVkontakte />;
    case 'youtube':
      return <IconYoutube />;
    default:
      return null;
  }
};
