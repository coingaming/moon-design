import React, {ReactNode} from 'react';
import { Carousel } from '@heathmont/moon-components';
import { Button } from '@heathmont/moon-core-tw';
import { ArrowsLeft } from '@heathmont/moon-icons';
import Image from 'next/image';
import BitcasinoLogo from "./private/bitcasino-logo";
import explore1 from './private/explore-1.png';
import explore2 from './private/explore-2.png';
import gift from './private/gift.png';
import handshake from './private/handshake.png';
import promo from './private/promo.png';
import support from './private/support.png';

interface ExperienceCarousel {
  index?: number;
  title: string;
  points: string[];
  icon: any;
}

const ExperienceCarouselItem = ({index, title, icon, points}: ExperienceCarousel) => {
  return (<div className={`w-[272px] h-full bg-[#2C323A] rounded-lg flex flex-col p-6 sm:my-8 sm:h-auto ${ index && index % 2 ? 'sm:mt-[40%]': ''}`}>
    <div className="flex items-center justify-center pt-3 pb-4"><Image src={icon} alt={title}/></div>
    <p className="text-moon-18 text-center font-semibold mb-4 w-full">{title}</p>
    <ul className="w-full list-disc pl-4">
      {points?.map((point: string) => (
        <li><p className="text-moon-16 w-full">{point}</p></li>
      ))}
    </ul>
  </div>);
};
const ExploreCarouselItem = ({items}: {items: Array<{ image: any, title: string}>}) => {
  return (<div className="w-full h-full flex p-6">
    <div className="w-[168px] mr-3 flex flex-col items-stretch">
      <div className="h-16"/>
      <div className="grow-1 mb-2 relative rounded-lg">
        <Image src={items[0].image}/>
        <div className="absolute top-0 left-0 opacity-0 w-full h-full flex items-end pointer hover:opacity-100 bg-[#0000008F]">
          <p className="text-moon-18 font-semibold m-3 w-full">{items[0].title}</p>
        </div>
      </div>
      <div className="grow-1 relative rounded-lg">
        <Image src={items[1].image}/>
        <div className="absolute top-0 left-0 opacity-0 w-full h-full flex items-end pointer hover:opacity-100 bg-[#0000008F]">
          <p className="text-moon-18 font-semibold m-3 w-full">{items[1].title}</p>
        </div>
      </div>
    </div>
    <div className="w-[168px] flex flex-col items-stretch relative">
      <div className="grow-1 mb-2 relative rounded-lg">
        <Image src={items[2].image}/>
        <div className="absolute top-0 left-0 opacity-0 w-full h-full flex items-end pointer hover:opacity-100 bg-[#0000008F]">
          <p className="text-moon-18 font-semibold m-3 w-full">{items[2].title}</p>
        </div>
      </div>
      <div className="grow-1 relative rounded-lg">
        <Image src={items[3].image}/>
        <div className="absolute top-0 left-0 opacity-0 w-full h-full flex items-end pointer hover:opacity-100 bg-[#0000008F]">
          <p className="text-moon-18 font-semibold m-3 w-full">{items[3].title}</p>
        </div>
      </div>
      <div className="h-16"/>
    </div>
  </div>);
};

const Vip = () => {
  const experienceItems = [
    {
      icon: handshake,
      title: 'Dedicated VIP manager',
      points: ['Focused on ONLY your needs.', 'A private casino experience tailored exactly as you deserve.']
    },
    {
      icon: support,
      title: '24/7 priority support',
      points: ['No queues, no waiting.', 'We attend to your needs first.']
    },
    {
      icon: gift,
      title: 'Luxurious holiday gifts',
      points: ['High-value gifts on your birthday and your anniversary.', 'Personalised seasonal offers.']
    },
    {
      icon: promo,
      title: 'VIP exclusive promos',
      points: ['The best betting experiences are reserved for you.', 'Only visible to VIP members.']
    }
  ];
  const exploreItems = [
    [
      {
        image: explore1,
        title: 'UEFA Champions League Final in Madrid',
      },
      {
        image: explore1,
        title: 'UEFA Champions League Final in Madrid',
      },
      {
        image: explore1,
        title: 'UEFA Champions League Final in Madrid',
      },
      {
        image: explore1,
        title: 'UEFA Champions League Final in Madrid',
      },
    ],
    [
      {
        image: explore2,
        title: 'UEFA Champions League Final in Madrid',
      },
      {
        image: explore2,
        title: 'UEFA Champions League Final in Madrid',
      },
      {
        image: explore2,
        title: 'UEFA Champions League Final in Madrid',
      },
      {
        image: explore2,
        title: 'UEFA Champions League Final in Madrid',
      },
    ]
  ];

  return (<div className='flex flex-col grow'>
    <div className="relative flex items-center justify-center my-5 mx-4">
      <div className="absolute left-0"><ArrowsLeft fontSize="2rem"/></div>
      <BitcasinoLogo />
    </div>
    <div className="sm:flex sm:flex-row-reverse sm:items-center">
      <div className="flex flex-col h-[80vw] sm:items-center sm:w-[50%] sm:h-[30vw] md:h-[25vw]">
        <div className="relative w-full grow">
          <div
            className='w-full h-full bg-contain bg-left bg-no-repeat'
            style={{ backgroundImage: 'url(/ambasadors.png)' }}
          />
          <div
            className="absolute left-0 bottom-0 w-full h-[150px]"
            style={{ background: 'linear-gradient(180deg, rgba(26, 33, 42, 0) 0%, rgba(26, 33, 42, 0.479167) 47.92%, rgba(26, 33, 42, 0.81) 67.19%, #1A212A 82.29%, #1A212A 100%)' }}
          />
        </div>
      </div>
      <div className="flex flex-col items-end relative -top-[30vw] sm:w-[50%] sm:top-0 sm:items-center md:pl-[15%]">
        <div className="flex flex-col max-w-full sm:w-[500px]">
          <p className="text-moon-32 text-center font-semibold p-4 sm:text-left">Bitcasino VIP: For money can’t buy experiences!</p>
          <p className="text-moon-16 text-center px-3 pt-2 sm:text-left">Join the VIP Bitcasino Club - An exclusive world of crypto
            leaders and high-rollers who dare to take risks and enjoy life to its fullest.</p>
          <Button>Sign up now</Button>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center self-center sm:w-[70%]">
      <div className="flex flex-col relative -top-[100px] my-8 sm:top-0 sm:mb-0">
        <p className="text-moon-32 text-center font-semibold p-4 md:self-center md:w-[80%]">A VIP experience tailored to your liking</p>
        <p className="text-moon-16 text-center px-8 pt-2 md:self-center md:w-[60%]">Enjoy exclusive bonuses and invites to prestigious events for
          free. Get all your indulgences taken care of.</p>
        <div className="w-full flex max-w-[100vw] items-center justify-center px-5 py-8 sm:mt-12 sm:max-w-[70vw]">
          <Carousel
            scrollTo={1}
            items={experienceItems.map((item, index) => (<ExperienceCarouselItem
              title={item.title}
              points={item.points}
              icon={item.icon}
              index={index}
            />))}
          />
        </div>
      </div>
      <div className="flex flex-col relative -top-[90px] sm:flex-row-reverse sm:top-0 sm:flex-wrap sm:justify-center">
        <div className='flex flex-col sm:w-[300px] sm:justify-center sm:mb-20'>
          <p className="text-moon-32 text-center font-semibold p-4 sm:pl-0 sm:text-left">Explore the world in true VIP style!</p>
          <p className="text-moon-16 text-center px-8 pt-2 sm:pl-0 sm:text-left">Enjoy life at its fullest and create great memories as a Bitcasino VIP. We’ll make your dreams come true with money-can't-buy experiences you’ll never forget. At Bitcasino, we know how to indulge you!</p>
        </div>
        <div className="w-full max-w-[100vw] flex items-center justify-center px-5 py-8 sm:w-[430px]">
          <Carousel
            scrollTo={1}
            items={exploreItems.map((items) => (<ExploreCarouselItem
              items={items}
            />))}
          />
        </div>
      </div>
    </div>
  </div>);
};

Vip.getLayout = function getLayout(page: ReactNode) {
  return (<div className="w-full min-h-screen bg-[#1A212A] text-white">{page}</div>);
};

export default Vip;
