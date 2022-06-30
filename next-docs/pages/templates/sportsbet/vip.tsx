import React, { ReactNode, useEffect, useState } from 'react';
import { Carousel } from '@heathmont/moon-components';
import { Button } from '@heathmont/moon-core-tw';
import { MailEnvelope, ArrowsLeft, ShopCrypto } from '@heathmont/moon-icons';

import ControlsChevronDown from '@heathmont/moon-icons-tw/lib/icons/ControlsChevronDown';
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
      className={`w-[285px] h-full bg-[#2C323A] rounded-lg flex flex-col p-6 sm:my-8 sm:h-auto ${
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
      <div className="w-[160px] me-5 flex flex-col items-stretch lg:w-[280px]">
        <div className="h-16" />
        <div className="grow-1 mb-4 relative rounded-lg">
          <Image src={items[0].image} width={280} height={317} />
          <div className="absolute top-0 left-0 opacity-0 w-full h-full flex items-end pointer hover:opacity-100 bg-[#0000008F]">
            <p className="text-moon-18 font-semibold m-3 w-full">
              {items[0].title}
            </p>
          </div>
        </div>
        <div className="grow-1 relative rounded-lg">
          <Image src={items[1].image} width={280} height={317} />
          <div className="absolute top-0 left-0 opacity-0 w-full h-full flex items-end pointer hover:opacity-100 bg-[#0000008F]">
            <p className="text-moon-18 font-semibold m-3 w-full">
              {items[1].title}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[160px] me-5 flex flex-col items-stretch lg:w-[280px]">
        <div className="grow-1 mb-4 relative rounded-lg">
          <Image src={items[2].image} width={280} height={317} />
          <div className="absolute top-0 left-0 opacity-0 w-full h-full flex items-end pointer hover:opacity-100 bg-[#0000008F]">
            <p className="text-moon-18 font-semibold m-3 w-full">
              {items[2].title}
            </p>
          </div>
        </div>
        <div className="grow-1 relative rounded-lg">
          <Image src={items[3].image} width={280} height={317} />
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

const Headline = ({ text, classes }: { text: string; classes?: string }) => (
  <p
    className={`text-[32px] text-center font-semibold p-4 sm:text-left sm:text-moon-48 lg:text-[64px] lg:leading-[4.5rem] ${
      classes ?? ''
    }`}
    style={{ letterSpacing: '-2px' }}
  >
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
    className={`text-[16px] text-center px-3 sm:px-0 pt-2 lg:text-moon-24 sm:text-moon-16 ${
      classes ?? ''
    }`}
  >
    {text}
  </p>
);

const Vip = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const toggleHeaderBackground = (e: Event) => {
      setIsScrolled(window.scrollY >= 30);
    };

    window.addEventListener('scroll', toggleHeaderBackground);

    return () => {
      window.removeEventListener('scroll', toggleHeaderBackground);
    };
  }, []);

  return (
    <div className="flex flex-col grow overflow-hidden">
      <div
        className={`fixed top-0 left-0 w-full flex items-center align-center justify-between py-4 px-6 z-1 transition-all duration-500 ${
          isScrolled ? 'bg-goku ' : 'bg-transparent'
        }`}
      >
        <div className="h-[50px] relative items-center justify-center left-0 flex fle-row sm:ml-[38px] ml-1">
          <ArrowsLeft fontSize="2rem" />
          <span className="sm:ml-6 ml-11">
            <Image src={SportsbetLogo} />
          </span>
        </div>
        <div className="hidden sm:flex flex-row mr-7">
          <Button
            variant="ghost"
            width={82}
            height={40}
            style={{ marginRight: '5px', color: 'white' }}
          >
            Log in
          </Button>
          <Button width={82} height={40}>
            Sing up
          </Button>
        </div>
      </div>
      <div className="mt-20 sm:mt-[244px] sm:flex sm:flex-row-reverse sm:items-stretch ">
        <div className="flex flex-col h-[80vw] sm:items-center sm:w-[50%] sm:h-auto sm:min-h-[30vw] md:min-h-[25vw] ">
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
        <div className="flex flex-col items-end relative -top-[30vw] px-8 sm:py-20 sm:w-[45%] sm:top-0 sm:items-center md:ps-[15%]">
          <div className="flex flex-col max-w-full sm:w-[550px]">
            <Headline
              text="Bitcasino VIP: For money can’t buy experiences!"
              classes="sm:px-0"
            />
            <Subtitle
              text="Join the VIP Bitcasino Club - An exclusive world of crypto leaders
              and high-rollers who dare to take risks and enjoy life to its
              fullest."
              classes="items-center mt-3 sm:px-0 sm:text-left sm:text-[18px] sm:leading-6 md:text-[24px] md:leading-8"
            />
            <Button
              variant="primary"
              width={124}
              height={48}
              className="btn-primary py-3 px-4 gap-1 text-moon-16 rounded-moon-i-sm mx-3 my-6 sm:mx-0 sm:px-0 sm:self-start w-full sm:w-[124px] "
            >
              Sign up now
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center self-center mt-16 sm:w-[80%] sm:mt-[124px]">
        <div className="w-full flex flex-col items-center relative -top-[30px] mb-8 sm:top-0 sm:mb-0 lg:w-[1232px] ">
          <Title
            text="A VIP experience tailored to your liking"
            classes="w-[348px] leading-10 mb-4 sm:mb-0 md:w-[944px] sm:w-[600px] sm:leading-0"
          />
          <Subtitle
            text="Enjoy exclusive bonuses and invites to prestigious events for free.
            Get all your indulgences taken care of."
            classes="w-[348px] p-5 md:w-[944px] sm:w-[650px] sm:p-0"
          />
          <div className="w-full flex max-w-[100vw] items-center justify-center px-5 pt-8 xl:min-w-[1232px] lg:min-w-[900px] lg:max-w-[80vw] lg:mt-[124px] sm:mt-12 sm:max-w-[80vw]">
            <Carousel
              step={1}
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
        <div className="flex flex-col relative sm:mt-[230px] mb-0 sm:flex-row-reverse sm:top-0 sm:flex-wrap sm:justify-center">
          <div className="flex flex-col self-stretch w-[380px] xl:w-[30%] sm:w-[100%] justify-center sm:mb-20 2xl:ml-24 lg:mx-0 lg:px-0 md:pl-9 sm:ml-0 ml-3">
            <Title
              text="Explore the world in true VIP style!"
              classes="xl:text-left leading-10 sm:pl-0 sm:leading-0 mb-4 text-center"
            />
            <Subtitle
              classes="sm:text-left px-5 sm:px-0"
              text="Enjoy life at its fullest and create great memories as a Bitcasino VIP. We’ll make your dreams come true with money-can't-buy  experiences you’ll never forget. At Bitcasino, we know how indulge you!"
            />
          </div>
          <div className="w-full max-w-[100vw] flex items-center justify-center sm:px-5 py-8 lg:w-[645px] lg:h-[684px] sm:w-[490px] sm:h-full sm:ml-0">
            <Carousel
              items={exploreItems.map((items) => (
                <ExploreCarouselItem items={items} />
              ))}
            />
          </div>
        </div>
        <div className="mt-[96px] mb-[96px] flex flex-col items-center sm:my-[246px] md:justify-center sm:flex-row-reverse sm:top-0 md:flex-nowrap sm:flex-wrap sm:justify-center w-[100%] ">
          <div className="flex flex-col self-stretch align-center pb-8 xl:w-[600px] xl:pl-0 lg:w-[100%] sm:ps-12 sm:w-[100%] sm:justify-center ">
            <Title
              text="VIP runs in the family"
              classes="md:text-left sm:text-center lg:w-[510px] mb-4 leading-10 "
            />
            <Subtitle
              classes="sm:text-left text-center lg:w-[510px] w-[348px] px-5 pb-[32px] sm:pb-0 sm:w-[100%]"
              text="Sportsbet has legendary athletes in our VIP club. Join our high
              profile community of crypto leaders and high-rollers!"
            />
          </div>
          <div
            className="max-w-[100vw] bg-contain bg-center bg-no-repeat w-[340px] h-[238px]  sm:w-[482px] sm:h-[384px] xl:mr-[144px]"
            style={{
              backgroundImage: 'url(/templates/sportsbet/partnership.png)',
            }}
          />
        </div>
        <div className="flex flex-col sm:mt-0 w-[95vw] sm:w-[100%]">
          <Title
            text="Ready to step up the game?"
            classes="mb-4 p-5 leading-10"
          />
          <Subtitle
            text="Entry into our VIP Club is by invitation only. Get in touch with us
            to see what a tailored VIP package could look like for you. Join the
            family now!"
            classes="w-[100%] mb-4 p-5"
          />
          <div className="flex flex-col mb-[72px] sm:mb-[88px] w-full sm:w-auto sm:flex-row sm:justify-center sm:items-center">
            <Button
              variant="primary"
              className="btn-primary sm:w-[130px] py-3 px-9 gap-1 text-moon-16 rounded-moon-i-sm mx-1 my-2 sm:self-start"
            >
              Sign up
            </Button>

            <Button
              variant="primary"
              className="w-full sm:w-[150px] bg-[#FFFFFF14] flex font-semibold items-center ml-0 btn-tertiary p-[20px] sm:p-0 sm:py-3 sm:px-5 gap-1 text-moon-16 rounded-moon-i-sm mx-2 my-2 sm:justify-between sm:self-start"
              icon="left"
            >
              <div className="w-full flex flex-row justify-between">
                <div>
                  <MailEnvelope width={24} height={24} />
                </div>
                <div className="">Contact us</div>
                <div></div>
              </div>
            </Button>
          </div>
        </div>
        <div className="flex flex-col my-12">
          <p className="text-moon-18 text-center font-semibold p-4 mb-4">
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
              <ShopCrypto width={36} height={36} />
            </Button>
            <Button
              iconOnly
              onClick={() => console.log('Youtube link')}
              style={{
                borderRadius: '50%',
                backgroundColor: '#FF0000',
              }}
            >
              <ShopCrypto width={36} height={36} />
            </Button>
            <Button
              iconOnly
              onClick={() => console.log('Bitcoin link')}
              style={{
                borderRadius: '50%',
                backgroundColor: '#F7931A',
              }}
            >
              <ShopCrypto width={36} height={36} />
            </Button>
            <Button
              iconOnly
              onClick={() => console.log('Twitter link')}
              style={{
                borderRadius: '50%',
                backgroundColor: '#1DA1F2',
              }}
            >
              <ShopCrypto width={36} height={36} />
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
              <ShopCrypto width={36} height={36} />
            </Button>
            <Button
              iconOnly
              onClick={() => console.log('Tiktok link')}
              style={{
                borderRadius: '50%',
                backgroundColor: '#000',
              }}
            >
              <ShopCrypto width={36} height={36} />
            </Button>
          </div>
        </div>
      </div>

      <div
        className=" px-[20px] h-full flex flex-col items-center self-center mt-16 xl:w-[1232px] lg:w-[1136px] sm:w-[80%] sm:mt-[124px]"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(26, 33, 42, 0) 0%, rgba(26, 33, 42, 0.479167) 47.92%, rgba(26, 33, 42, 0.81) 67.19%, #1A212A 82.29%, #1A212A 100%)',
        }}
      >
        <div className="flex flex-col lg:items-start">
          <Title
            text="Enjoy BTC gaming at the best Bitcoin casino"
            classes="text-bulma !text-moon-20 !text-left leading-8 font-semibold sm:p-0 sm:py-3 lg:text-moon-20 md:text-moon-20 sm:text-left   "
          />
          <Subtitle
            text="The future of gaming is here, we are the number one bitcoin casino in 2021 and into 2022.
             Our range of casino-slots consistently make the top ten across the bitcoin casino world. Read more."
            classes="text-bulma  opacity-60 !text-moon-16 !text-left !leading-8 !sm:text-left"
          />
        </div>
        <div className="mt-3 mb-3">
          <div
            className="bg-gohan w-[32px] h-[32px] rounded-full flex justify-center items-center cursor-pointer"
            onClick={() => {
              console.log('Read more');
            }}
          >
            <ControlsChevronDown />
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
