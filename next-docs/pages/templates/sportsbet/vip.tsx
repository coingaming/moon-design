import React, { ReactNode } from 'react';
import { Carousel } from '@heathmont/moon-components';
import { Button } from '@heathmont/moon-core-tw';
import { MailEnvelope, ArrowsLeft, ShopCrypto } from '@heathmont/moon-icons';

import Image from 'next/image';
import explore1 from '../../../public/templates/explore-1.png';
import explore2 from '../../../public/templates/explore-2.png';
import explore3 from '../../../public/templates/explore-3.png';
import explore4 from '../../../public/templates/explore-4.png';
import gift from '../../../public/templates/gift.png';
import handshake from '../../../public/templates/handshake.png';
import promo from '../../../public/templates/promo.png';
import SportsbetLogo from '../../../public/templates/sportsbet/logo.png';
import support from '../../../public/templates/support.png';

interface ExperienceCarousel {
  index?: number;
  title: string;
  points: string[];
  icon: any;
}

const ExperienceCarouselItem = ({
  index,
  title,
  icon,
  points,
}: ExperienceCarousel) => {
  return (
    <div
      className={`w-[272px] h-full bg-[#2C323A] rounded-lg flex flex-col p-6 sm:my-8 sm:h-auto ${
        index && index % 2 ? 'sm:mt-[40%]' : ''
      }`}
    >
      <div className="flex items-center justify-center pt-3 pb-4">
        <Image src={icon} alt={title} />
      </div>
      <p className="text-moon-18 text-center font-semibold mb-4 w-full">
        {title}
      </p>
      <ul className="w-full list-disc ps-4">
        {points?.map((point: string) => (
          <li>
            <p className="text-moon-16 w-full">{point}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
const ExploreCarouselItem = ({
  items,
}: {
  items: Array<{ image: any; title: string }>;
}) => {
  return (
    <div className="w-full h-full flex p-6">
      <div className="w-[168px] me-3 flex flex-col items-stretch">
        <div className="h-16" />
        <div className="grow-1 mb-2 relative rounded-lg">
          <Image src={items[0].image} />
          <div className="absolute top-0 left-0 opacity-0 w-full h-full flex items-end pointer hover:opacity-100 bg-[#0000008F]">
            <p className="text-moon-18 font-semibold m-3 w-full">
              {items[0].title}
            </p>
          </div>
        </div>
        <div className="grow-1 relative rounded-lg">
          <Image src={items[1].image} />
          <div className="absolute top-0 left-0 opacity-0 w-full h-full flex items-end pointer hover:opacity-100 bg-[#0000008F]">
            <p className="text-moon-18 font-semibold m-3 w-full">
              {items[1].title}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[168px] flex flex-col items-stretch relative">
        <div className="grow-1 mb-2 relative rounded-lg">
          <Image src={items[2].image} />
          <div className="absolute top-0 left-0 opacity-0 w-full h-full flex items-end pointer hover:opacity-100 bg-[#0000008F]">
            <p className="text-moon-18 font-semibold m-3 w-full">
              {items[2].title}
            </p>
          </div>
        </div>
        <div className="grow-1 relative rounded-lg">
          <Image src={items[3].image} />
          <div className="absolute top-0 left-0 opacity-0 w-full h-full flex items-end pointer hover:opacity-100 bg-[#0000008F]">
            <p className="text-moon-18 font-semibold m-3 w-full">
              {items[3].title}
            </p>
          </div>
        </div>
        <div className="h-16" />
      </div>
    </div>
  );
};

const Headline = ({ text }: { text: string }) => (
  <p className="text-[32px] text-center font-semibold p-4 lg:text-[64px] lg:leading-[3.5rem] sm:text-left sm:text-moon-48">
    {text}
  </p>
);
const Title = ({ text, classes }: { text: string; classes?: string }) => (
  <p
    className={`text-[32px] text-center font-semibold p-4 lg:text-moon-48 sm:text-moon-32 ${
      classes ?? ''
    }`}
  >
    {text}
  </p>
);
const Subtitle = ({ text, classes }: { text: string; classes?: string }) => (
  <p
    className={`text-[16px] text-center px-3 pt-2 lg:text-moon-24 sm:text-moon-16 ${
      classes ?? ''
    }`}
  >
    {text}
  </p>
);

const Vip = () => {
  const experienceItems = [
    {
      icon: handshake,
      title: 'Dedicated VIP manager',
      points: [
        'Focused on ONLY your needs.',
        'A private casino experience tailored exactly as you deserve.',
      ],
    },
    {
      icon: support,
      title: '24/7 priority support',
      points: ['No queues, no waiting.', 'We attend to your needs first.'],
    },
    {
      icon: gift,
      title: 'Luxurious holiday gifts',
      points: [
        'High-value gifts on your birthday and your anniversary.',
        'Personalised seasonal offers.',
      ],
    },
    {
      icon: promo,
      title: 'VIP exclusive promos',
      points: [
        'The best betting experiences are reserved for you.',
        'Only visible to VIP members.',
      ],
    },
    {
      icon: handshake,
      title: 'Dedicated VIP manager',
      points: [
        'Focused on ONLY your needs.',
        'A private casino experience tailored exactly as you deserve.',
      ],
    },
    {
      icon: support,
      title: '24/7 priority support',
      points: ['No queues, no waiting.', 'We attend to your needs first.'],
    },
    {
      icon: gift,
      title: 'Luxurious holiday gifts',
      points: [
        'High-value gifts on your birthday and your anniversary.',
        'Personalised seasonal offers.',
      ],
    },
    {
      icon: promo,
      title: 'VIP exclusive promos',
      points: [
        'The best betting experiences are reserved for you.',
        'Only visible to VIP members.',
      ],
    },
  ];
  const exploreItems = [
    [
      {
        image: explore1,
        title: 'UEFA Champions League Final in Madrid',
      },
      {
        image: explore2,
        title: 'UEFA Champions League Final in Madrid',
      },
      {
        image: explore3,
        title: 'UEFA Champions League Final in Madrid',
      },
      {
        image: explore4,
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
    ],
  ];

  return (
    <div className="flex flex-col grow overflow-hidden">
      <div className="fixed top-0 left-0 w-full flex items-center justify-center my-5 mx-4 z-10">
        <div className="absolute left-0">
          <ArrowsLeft fontSize="2rem" />
        </div>
        <Image src={SportsbetLogo} />
      </div>
      <div className="mt-20 sm:flex sm:flex-row-reverse sm:items-stretch">
        <div className="flex flex-col h-[80vw] sm:items-center sm:w-[50%] sm:h-auto sm:min-h-[30vw] md:min-h-[25vw]">
          <div className="relative w-full grow">
            <div
              className="w-full h-full bg-contain bg-left bg-no-repeat"
              style={{
                backgroundImage: 'url(/templates/sportsbet/ambasadors.png)',
              }}
            />
            <div
              className="absolute left-0 bottom-0 w-full h-[150px]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(26, 33, 42, 0) 0%, rgba(26, 33, 42, 0.479167) 47.92%, rgba(26, 33, 42, 0.81) 67.19%, #1A212A 82.29%, #1A212A 100%)',
              }}
            />
          </div>
        </div>
        <div className="flex flex-col items-end relative -top-[30vw] px-8 sm:py-20 sm:w-[50%] sm:top-0 sm:items-center md:ps-[15%]">
          <div className="flex flex-col max-w-full sm:w-[550px]">
            <Headline text="Bitcasino VIP: For money can’t buy experiences!" />
            <Subtitle
              text="Join the VIP Bitcasino Club - An exclusive world of crypto leaders
              and high-rollers who dare to take risks and enjoy life to its
              fullest."
              classes="sm:text-left"
            />
            <Button
              variant="primary"
              className="btn-primary py-3 px-4 gap-1 text-moon-16 rounded-moon-i-sm mx-3 my-6 sm:self-start"
            >
              Sign up now
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center self-center sm:w-[70%]">
        <div className="flex flex-col relative -top-[100px] my-8 sm:top-0 sm:mb-0">
          <Title text="A VIP experience tailored to your liking" />
          <Subtitle
            text="Enjoy exclusive bonuses and invites to prestigious events for free.
            Get all your indulgences taken care of."
          />
          <div className="w-full flex max-w-[100vw] items-center justify-center px-5 py-8 xl:min-w-[1190px] lg:min-w-[900px] sm:mt-12 sm:max-w-[70vw]">
            <Carousel
              items={experienceItems.map((item, index) => (
                <ExperienceCarouselItem
                  title={item.title}
                  points={item.points}
                  icon={item.icon}
                  index={index}
                />
              ))}
            />
          </div>
        </div>
        <div className="flex flex-col relative -top-[90px] sm:flex-row-reverse sm:top-0 sm:flex-wrap sm:justify-center">
          <div className="flex flex-col sm:w-[320px] sm:justify-center sm:mb-20">
            <Title
              text="Explore the world in true VIP style!"
              classes="sm:text-left"
            />
            <Subtitle
              classes="sm:text-left"
              text="Enjoy life at its fullest and create great memories as a Bitcasino VIP. We’ll make your dreams come true with money-can't-buy  experiences you’ll never forget. At Bitcasino, we know how indulge you!"
            />
          </div>
          <div className="w-full max-w-[100vw] flex items-center justify-center px-5 py-8 sm:w-[430px]">
            <Carousel
              items={exploreItems.map((items) => (
                <ExploreCarouselItem items={items} />
              ))}
            />
          </div>
        </div>
        <div className="flex flex-col relative -top-[50px] sm:flex-row-reverse sm:mt-14 sm:top-0 sm:flex-wrap sm:justify-center">
          <div className="flex flex-col self-stretch align-center pb-8 sm:ps-12 sm:w-[350px] sm:justify-center lg:w-[550px]">
            <Title text="VIP runs in the family" classes="sm:text-left" />
            <Subtitle
              classes="sm:text-left"
              text="Sportsbet has legendary athletes in our VIP club. Join our high
              profile community of crypto leaders and high-rollers!"
            />
          </div>
          <div
            className="w-full h-full max-w-[100vw] bg-contain bg-center bg-no-repeat h-[80vw] sm:w-[250px] sm:h-[200px] lg:w-[400px] lg:h-[300px]"
            style={{
              backgroundImage: 'url(/templates/sportsbet/partnership.png)',
            }}
          />
        </div>
        <div className="flex flex-col justify-center items-center sm:mt-16 w-[80vw] sm:w-[40vw]">
          <Title text="Ready to step up the game?" />
          <Subtitle
            text="Entry into our VIP Club is by invitation only. Get in touch with us
            to see what a tailored VIP package could look like for you. Join the
            family now!"
            classes="w-[80%]"
          />
          <div className="flex flex-col my-6 sm:flex-row sm:justify-center sm:items-center">
            <Button
              variant="primary"
              className="btn-primary py-3 px-9 gap-1 text-moon-16 rounded-moon-i-sm mx-1 my-2 sm:self-start"
            >
              Sign up
            </Button>

            <Button
              variant="primary"
              className="flex justify-center items-center btn-tertiary py-3 px-5 gap-1 text-moon-16 rounded-moon-i-sm mx-1 my-2 sm:justify-between sm:self-start"
              icon="left"
              iconLeft={<MailEnvelope />}
            >
              Contact us
            </Button>
          </div>
        </div>
        <div className="flex flex-col my-12">
          <p className="text-moon-18 text-center font-semibold p-4">
            Join us and talk to us
          </p>
          <div className="flex gap-2">
            <Button
              iconOnly
              onClick={() => console.log('Telegram link')}
              style={{
                borderRadius: '50%',
                backgroundColor: '#27A4DB',
              }}
            >
              <ShopCrypto />
            </Button>
            <Button
              iconOnly
              onClick={() => console.log('Youtube link')}
              style={{
                borderRadius: '50%',
                backgroundColor: '#FF0000',
              }}
            >
              <ShopCrypto />
            </Button>
            <Button
              iconOnly
              onClick={() => console.log('Bitcoin link')}
              style={{
                borderRadius: '50%',
                backgroundColor: '#F7931A',
              }}
            >
              <ShopCrypto />
            </Button>
            <Button
              iconOnly
              onClick={() => console.log('Twitter link')}
              style={{
                borderRadius: '50%',
                backgroundColor: '#1DA1F2',
              }}
            >
              <ShopCrypto />
            </Button>
            <Button
              iconOnly
              onClick={() => console.log('Instagram link')}
              style={{
                borderRadius: '50%',
                background:
                  'linear-gradient(49.12deg, #FFDD55 6.62%, #FF5D3F 47.35%, #FF543E 50.06%, #C837AB 93.5%)',
              }}
            >
              <ShopCrypto />
            </Button>
            <Button
              iconOnly
              onClick={() => console.log('Tiktok link')}
              style={{
                borderRadius: '50%',
                backgroundColor: '#000',
              }}
            >
              <ShopCrypto />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

Vip.getLayout = function getLayout(page: ReactNode) {
  return (
    <div className="w-full min-h-screen theme-sb-dark bg-gohan text-white">
      {page}
    </div>
  );
};

export default Vip;
