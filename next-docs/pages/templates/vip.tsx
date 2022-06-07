import React, {ReactNode} from 'react';
import { Button } from '@heathmont/moon-core-tw';
import { ArrowsLeft } from '@heathmont/moon-icons';
import Image from 'next/image';
import ambassadors from './private/ambasadors.png';
import BitcasinoLogo from "./private/bitcasino-logo";

const Vip = () => (
  <div className='flex flex-col grow'>
    <div className="relative flex items-center justify-center my-5 mx-4">
      <div className="absolute left-0"><ArrowsLeft fontSize="2rem" /></div>
      <BitcasinoLogo />
    </div>
    <div className="flex flex-col">
      <div className="relative">
        <Image
          src={ambassadors}
          alt="ambassadors"
        />
        <div
          className="absolute left-0 bottom-0 w-full h-[150px]"
          style={{
            background: 'linear-gradient(180deg, rgba(26, 33, 42, 0) 0%, rgba(26, 33, 42, 0.479167) 47.92%, rgba(26, 33, 42, 0.81) 67.19%, #1A212A 82.29%, #1A212A 100%)'
          }}
        />
      </div>
    </div>
    <div className="flex flex-col relative -top-[100px]">
      <p className="text-moon-32 text-center font-semibold p-4">Bitcasino VIP: For money can’t buy experiences!</p>
      <p className="text-moon-16 text-center px-3 pt-2">Join the VIP Bitcasino Club - An exclusive world of crypto leaders and high-rollers who dare to take risks and enjoy life to its fullest.</p>
      <Button variant='primary'>Sign up now</Button>
    </div>
  </div>
);

Vip.getLayout = function getLayout(page: ReactNode) {
  return (<div className="w-full min-h-screen bg-[#1A212A] text-white">{page}</div>);
};

export default Vip;
