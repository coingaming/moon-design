import React from 'react';
import { Button } from '@heathmont/moon-core-tw';
import Bitcasino from '../../pages/templates/icons/bitcasino';
import Instagram from '../../pages/templates/icons/instagram';
import Telegram from '../../pages/templates/icons/telegram';
import Tiktok from '../../pages/templates/icons/tiktok';
import Twitter from '../../pages/templates/icons/twitter';
import Youtube from '../../pages/templates/icons/youtube';

interface Props {
  title: string;
  onClick: (social: string) => any;
}

const Social = ({ title, onClick }: Props) => {
  return (
    <div className="flex flex-col">
      <p className="text-[32px] text-center font-semibold p-4 mb-4">{title}</p>
      <div className="flex gap-2 self-center items-center">
        <Button
          iconOnly
          onClick={() => onClick('telegram')}
          style={{
            borderRadius: '50%',
            backgroundColor: '#27A4DB',
          }}
        >
          <div className="w-[28px] h-[28px] flex justify-center items-center">
            <Telegram />
          </div>
        </Button>
        <Button
          iconOnly
          onClick={() => onClick('youtube')}
          style={{
            borderRadius: '50%',
            backgroundColor: '#FF0000',
          }}
        >
          <div className="w-[28px] h-[28px] flex justify-center items-center">
            <Youtube />
          </div>
        </Button>
        <Button
          iconOnly
          onClick={() => onClick('bitcoin')}
          style={{
            borderRadius: '50%',
            backgroundColor: '#F7931A',
          }}
        >
          <div className="w-[28px] h-[28px] flex justify-center items-center">
            <Bitcasino />
          </div>
        </Button>
        <Button
          iconOnly
          onClick={() => onClick('twitter')}
          style={{
            borderRadius: '50%',
            backgroundColor: '#1DA1F2',
          }}
        >
          <div className="w-[28px] h-[28px] flex justify-center items-center">
            <Twitter />
          </div>
        </Button>
        <Button
          iconOnly
          onClick={() => onClick('instagram')}
          style={{
            borderRadius: '50%',
            background:
              'linear-gradient(49.12deg, #FFDD55 6.62%, #FF5D3F 47.35%, #FF543E 50.06%, #C837AB 93.5%)',
          }}
        >
          <div className="w-[28px] h-[28px] flex justify-center items-center">
            <Instagram />
          </div>
        </Button>
        <Button
          iconOnly
          onClick={() => onClick('tiktok')}
          style={{
            borderRadius: '50%',
            backgroundColor: '#000',
          }}
        >
          <div className="w-[28px] h-[28px] flex justify-center items-center">
            <Tiktok />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Social;
