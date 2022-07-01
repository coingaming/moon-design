import React, {ReactNode, useEffect, useState} from 'react';
import { Carousel , Switch } from '@heathmont/moon-components';
import { Button , Accordion } from '@heathmont/moon-core-tw';
import { MailEnvelope, ArrowsLeft, ShopCrypto } from '@heathmont/moon-icons';

import { ControlsChevronDown, ControlsChevronRight } from '@heathmont/moon-icons-tw';
import Image from 'next/image';
import icon18 from '../../../public/templates/bitcasino/18+icon.png';
import awards1 from '../../../public/templates/bitcasino/awards1.png';
import awards2 from '../../../public/templates/bitcasino/awards2.png';
import awards3 from '../../../public/templates/bitcasino/awards3.png';
import bitcasinoLogo from '../../../public/templates/bitcasino/BitcasinoLogo.png';
import hubb from '../../../public/templates/bitcasino/Hubb.png';
import image1 from '../../../public/templates/bitcasino/image1.png';
import KingKaka from '../../../public/templates/bitcasino/kingKaka.png';
import licences1 from '../../../public/templates/bitcasino/licences1.png';
import uk from '../../../public/templates/bitcasino/uk.png';
import explore1 from '../../../public/templates/explore-1.png';
import explore2 from '../../../public/templates/explore-2.png';
import explore3 from '../../../public/templates/explore-3.png';
import explore4 from '../../../public/templates/explore-4.png';
import gift from '../../../public/templates/gift.png';
import handshake from '../../../public/templates/handshake.png';
import promo from '../../../public/templates/promo.png';
import support from '../../../public/templates/support.png';
import Bitcasino from '../icons/bitcasino';
import Cardano from '../icons/cardano';
import DogeCoin from '../icons/dogeCoin';
import EthereumIc from '../icons/ethereumIc';
import Instagram from '../icons/instagram';
import LtchLogo from '../icons/ltchLogo';
import Telegram from '../icons/telegram';
import Tiktok from '../icons/tiktok';
import TronLogo from '../icons/tronLogo';
import Twitter from '../icons/twitter';
import UsdIc from '../icons/usdtIc';
import XAbove from '../icons/xAbove';
import Youtube from '../icons/youtube';
import { ChevronLeft } from '../sportsbet/ChevronLeft';
import { ChevronRight } from '../sportsbet/ChevronRight';
import BitcasinoLogo from './bitcasino-logo';



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
      className={`w-[285px] h-full bg-gohan rounded-lg flex flex-col p-6 sm:my-8 sm:h-auto ${
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
  const [itemWidth, setItemWidth] = useState(160);
  const [itemHeight, setItemHeight] = useState(200);

  useEffect(() => {
    const resizeItems = () => {
      if (window?.innerWidth) {
        setItemWidth(window.innerWidth <= 1024 ? 160 : 280);
        setItemHeight(window.innerWidth <= 1024 ? 180 : 317);
      }
    };

    resizeItems();

    window.addEventListener('resize', resizeItems);

    return () => {
      window.removeEventListener('resize', resizeItems);
    };
  }, []);

  return (
    <div className="w-full h-full flex p-6">
      <div className="w-[160px] me-4 flex flex-col items-stretch lg:w-[280px]">
        <div className="h-16" />
        <div className="w-[160px] h-[180px] grow-1 mb-4 relative rounded-lg lg:w-[280px] lg:h-[317px]">
          <Image src={items[0].image} width={itemWidth} height={itemHeight} />
          <div className="absolute top-0 left-0 opacity-0 w-full h-full flex items-end pointer hover:opacity-100 bg-[#0000008F]">
            <p className="text-moon-18 font-semibold m-3 w-full">
              {items[0].title}
            </p>
          </div>
        </div>
        <div className="w-[160px] h-[180px] grow-1 relative rounded-lg lg:w-[280px] lg:h-[317px]">
          <Image src={items[1].image} width={itemWidth} height={itemHeight} />
          <div className="absolute top-0 left-0 opacity-0 w-full h-full flex items-end pointer hover:opacity-100 bg-[#0000008F]">
            <p className="text-moon-18 font-semibold m-3 w-full">
              {items[1].title}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[160px] me-5 flex flex-col items-stretch lg:w-[280px]">
        <div className="w-[160px] h-[180px] grow-1 mb-4 relative rounded-lg lg:w-[280px] lg:h-[317px]">
          <Image src={items[2].image} width={itemWidth} height={itemHeight} />
          <div className="absolute top-0 left-0 opacity-0 w-full h-full flex items-end pointer hover:opacity-100 bg-[#0000008F]">
            <p className="text-moon-18 font-semibold m-3 w-full">
              {items[2].title}
            </p>
          </div>
        </div>
        <div className="w-[160px] h-[180px] grow-1 relative rounded-lg lg:w-[280px] lg:h-[317px]">
          <Image src={items[3].image} width={itemWidth} height={itemHeight} />
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

const Headline = ({ text, classes }: { text: string, classes?: string }) => (
  <p className={`text-[32px] text-center font-semibold p-4 sm:text-left sm:text-moon-48 lg:text-[64px] lg:leading-[4.5rem] ${
    classes ?? ''
  }`} style={{ letterSpacing: '-2px' }}>
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [state, setState] = useState(true);
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
    }
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

    window.addEventListener("scroll", toggleHeaderBackground);

    return () => {
      window.removeEventListener("scroll", toggleHeaderBackground);
    }
  }, []);

  return (
    <div className="flex flex-col grow overflow-hidden">
      <div
        className={`fixed top-0 left-0 w-full flex items-center align-center justify-between py-4 px-6 z-1 transition-all duration-500 ${
          isScrolled ? 'bg-goku ' : 'bg-transparent'
        }`}
      >
        <div className="h-[40px] relative items-center left-0 flex fle-row ml-1">
          <ArrowsLeft fontSize="2rem" />
          <span className="sm:ml-6 ml-11">
            <BitcasinoLogo />
          </span>
        </div>
        <div className="hidden sm:flex flex-row">
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
      <div
        className="h-[800px] flex flex-col justify-center items-center bg-bottom relative mb-48 sm:mb-0 sm:flex sm:flex-row-reverse sm:items-stretch"
        style={{
          backgroundImage: 'url(/templates/bitcasino/pattern.png)',
          backgroundSize: 'auto 100%',
        }}
      >
        <div className="flex sm:items-center  sm:h-[679px] sm:mt-[120px]">
          <div className="relative w-full justify-end self-end">
            <div className="sm:min-w-[500px] lg:min-w-[600px]  md:ml-15">
              <Image src={KingKaka} objectFit="contain" />
            </div>
            <div
              className="absolute left-0 bottom-0 w-full h-[150px] sm:hidden"
              style={{
                background:
                  'linear-gradient(180deg, rgba(36, 3, 63, 0)  0%, rgba(36, 3, 63, 0.55)  49.48%, #24033F 100%',
              }}
            />
          </div>
        </div>
        <div className="flex flex-col absolute top-[60%] px-8 -mb-10 -bottom-48 z-1  sm:relative sm:top-0 sm:bottom-0 sm:mb-0 sm:pb-24 sm:pt-[72px] sm:w-[50%] sm:items-center md:w-[65%]">
          <div className="flex flex-col items-center max-w-full bottom-4 sm:items-start sm:mt-[244px] sm:w-[720px] sm:ml-[248px]">
            <Headline
              text="Bitcasino VIP: For money can’t buy experiences"
              classes="sm:px-0"
            />
            <Subtitle
              classes="items-center mt-3 sm:px-0 sm:text-left sm:text-[18px] sm:leading-6 md:text-[24px] md:leading-8"
              text=" Join the VIP Bitcasino Club - An exclusive world of crypto leaders
              and high-rollers who dare to take risks and enjoy life to its
              fullest."
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
        <div
          className="hidden absolute left-0 bottom-0 w-full h-[150px] sm:block"
          style={{
            background:
              'linear-gradient(180deg, rgba(36, 3, 63, 0)  0%, rgba(36, 3, 63, 0.55)  49.48%, #24033F  100%',
          }}
        />
      </div>
      <div className="flex flex-col items-center self-center mt-16 sm:w-[80%] sm:mt-[124px]">
        <div className="w-full flex flex-col items-center relative -top-[30px] mb-8 sm:top-0 sm:mb-0 lg:w-[1232px] ">
          <Title
            text="A VIP experience tailored to your liking"
            classes="w-[348px] leading-10 mb-4 sm:mb-0 md:w-[944px] sm:w-[600px] sm:leading-0"
          />
          <Subtitle
            classes="w-[348px] p-5 md:w-[944px] sm:w-[650px] sm:p-0"
            text="Enjoy exclusive bonuses and invites to prestigious events for free.
            Get all your indulgences taken care of."
          />
          <div className="w-full flex max-w-[100vw] items-center justify-center px-5 pt-8 xl:min-w-[1232px] lg:min-w-[900px] lg:max-w-[80vw] lg:mt-[124px] sm:mt-12 sm:max-w-[80vw]">
            <Carousel
              step={1}
              scrollToLeftButton={({
                scrollToStep,
                disabled,
              }: {
                scrollToStep: any;
                disabled: boolean;
              }) =>
                disabled ? (
                  <></>
                ) : (
                  <div
                    className="flex justify-center items-center w-8 h-8 bg-goku absolute top-[50%] -translate-y-[50%] -translate-x-[150%] rounded-full"
                    onClick={() => {
                      if (!disabled) scrollToStep();
                    }}
                  >
                    <ChevronLeft fontSize="1.5rem" />
                  </div>
                )
              }
              scrollToRightButton={({
                scrollToStep,
                disabled,
              }: {
                scrollToStep: any;
                disabled: boolean;
              }) =>
                disabled ? (
                  <></>
                ) : (
                  <div
                    className="flex justify-center items-center w-8 h-8 bg-goku absolute top-[50%] right-0 -translate-y-[50%] translate-x-[150%] rounded-full"
                    onClick={() => {
                      if (!disabled) scrollToStep();
                    }}
                  >
                    <ChevronRight fontSize="1.5rem" />
                  </div>
                )
              }
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
          <div className="flex flex-col sm:self-stretch sm:align-center px-5 sm:p-0 lg:ps-16 sm:w-[100%] sm:justify-center lg:w-[600px] md:w-[100%]">
            <Title
              text="VIP runs in the family"
              classes="md:text-left sm:text-center lg:w-[510px]  mb-4 leading-10"
            />
            <Subtitle
              classes="sm:text-left lg:w-[510px] w-[348px] px-5 pb-[32px] sm:pb-0 sm:w-[100%]"
              text="From artists to visionaries, Bitcasino has the most talented individuals in our VIP club. Join our high profile group of crypto leaders and high-rollers!"
            />
          </div>
          <div
            className=" max-w-[100vw] bg-contain bg-center bg-no-repeat w-[340px] h-[238px]  sm:w-[482px] sm:h-[384px] xl:mr-[144px]"
            style={{
              backgroundImage: 'url(/templates/bitcasino/partnership.png)',
            }}
          />
        </div>
        <div className="flex flex-col sm:mt-0 w-[95vw] sm:w-[100%]">
          <Title
            classes="mb-4 p-5 leading-10"
            text="Ready to step up the game?"
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
              className="w-full sm:w-[130px] btn-primary p-[20px] sm:py-3 sm:px-5 text-moon-16 font-semibold rounded-moon-i-sm sm:mx-4 my-2 sm:self-start"
            >
              Sign up
            </Button>

            <Button
              variant="primary"
              className="w-full sm:w-[150px] bg-[#FFFFFF14] flex font-semibold items-center ml-0 btn-tertiary p-[20px] sm:p-0 sm:py-3 sm:px-5 gap-1 text-moon-16 rounded-moon-i-sm mx-2 my-2 sm:justify-between sm:self-start"
              icon="left"
            >
              <div className="w-full flex flex-row justify-between ">
                <div>
                  <MailEnvelope width={24} height={24} />
                </div>
                <div>Contact us</div>
                <div></div>
              </div>
            </Button>
          </div>
        </div>
        <div className="flex flex-col ">
          <p className="text-moon-32 text-center font-semibold p-4 mb-4">
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
              <div className="w-[36px] h-[36px] flex justify-center items-center">
                <Telegram />
              </div>
            </Button>
            <Button
              iconOnly
              onClick={() => console.log('Youtube link')}
              style={{
                borderRadius: '50%',
                backgroundColor: '#FF0000',
              }}
            >
              <div className="w-[36px] h-[36px] flex justify-center items-center">
                <Youtube />
              </div>
            </Button>
            <Button
              iconOnly
              onClick={() => console.log('Bitcoin link')}
              style={{
                borderRadius: '50%',
                backgroundColor: '#F7931A',
              }}
            >
              <div className="w-[36px] h-[36px] flex justify-center items-center">
                <Bitcasino />
              </div>
            </Button>
            <Button
              iconOnly
              onClick={() => console.log('Twitter link')}
              style={{
                borderRadius: '50%',
                backgroundColor: '#1DA1F2',
              }}
            >
              <div className="w-[36px] h-[36px] flex justify-center items-center">
                <Twitter />
              </div>
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
              <div className="w-[36px] h-[36px] flex justify-center items-center">
                <Instagram />
              </div>
            </Button>
            <Button
              iconOnly
              onClick={() => console.log('Tiktok link')}
              style={{
                borderRadius: '50%',
                backgroundColor: '#000',
              }}
            >
              <div className="w-[36px] h-[36px] flex justify-center items-center">
                <Tiktok />
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div
        className=" px-5 h-full flex flex-col items-center self-center mt-16 xl:w-[1232px] lg:w-[90%] sm:w-[80%] sm:mt-[124px]"
        style={{
          background: 'linear-gradient rgba(36, 3, 63, 0)  0%  #24033F  100%',
        }}
      >
        <div className="flex flex-col lg:items-start">
          <Title
            text="Enjoy BTC gaming at the best Bitcoin casino"
            classes="text-bulma !text-left sm:px-3 sm:text-left leading-8 font-semibold lg:text-moon-20 md:text-moon-20 "
          />
          <Subtitle
            text="The future of gaming is here, we are the number one bitcoin casino in 2021 and into 2022.
             Our range of casino-slots consistently make the top ten across the bitcoin casino world. Read more."
            classes="text-bulma opacity-60 !text-left !leading-8 lg:text-moon-16 md:text-moon-16 sm:text-left"
          />
        </div>
        <div className="mt-3 mb-3">
          <Button
            className="bg-gohan w-[32px] h-[32px] rounded-full  flex justify-center items-center cursor-pointer"
            onClick={() => {
              console.log('Read more');
            }}
          >
            <ControlsChevronDown />
          </Button>
        </div>
      </div>

      <div className=" p-0 mx-6 xl:w-[1262px] md:p-5 md:mx-auto md:w-[90%]">
        <div className="py-4 flex flex-row justify-start items-center border border-x-0 border-y-beerus">
          <Image src={bitcasinoLogo} />
          <ControlsChevronRight className="mx-3" />
          <p>Mainpage </p>
        </div>

        <div className="flex flex-col py-3 mb-3 w-full md:border md:border-x-0 md:border-t-0 md:border-b-beerus md:flex-row md:justify-between">
          <div className="grow-1 mb-7 lg:mr-0 md:mb-0 md:mr-4">
            <h2 className="text-goten text-sm font-bold mb-7">
              About Bitcasino.io
            </h2>
            <p className="text-xs text-trunks lg:w-[255px] md:w-[150px]">
              Bitcasino.io is owned and operated by Moon Technologies B.V. It is
              licensed and regulated by the Government of Curaçao under the
              gaming license 1668/JAZ.
            </p>
          </div>

          <div className="hidden grow-3 lg:mr-0 md:block md:mr-4">
            <div>
              <h2 className="text-goten text-sm font-bold mb-5">Games</h2>
              <p className="mb-3 text-trunks text-xs">Slots</p>
              <p className="mb-3 text-trunks text-xs">Roulette</p>
              <p className="mb-3 text-trunks text-xs">Live Baccarat</p>
              <p className="mb-3 text-trunks text-xs">Blackjack</p>
              <p className="mb-3 text-trunks text-xs">Live Casino</p>
              <p className="mb-3 text-trunks text-xs">Sportsbook</p>
              <p className="mb-3 text-trunks text-xs">Providers</p>
              <p className="mb-3 text-trunks text-xs">Live Poker</p>
              <p className="mb-3 text-trunks text-xs">Live Game Shows</p>
              <p className="mb-3 text-trunks text-xs">Casual Games</p>
              <p className="mb-3 text-trunks text-xs">Multiplayer</p>
            </div>
          </div>

          <div className="grow-3 hidden lg:mr-0 md:flex md:mr-4">
            <div>
              <h2 className="text-goten text-sm font-bold mb-5">About</h2>
              <p className="mb-3 text-trunks text-xs">Loyalty Club</p>
              <p className="mb-3 text-trunks text-xs">VIP</p>
              <p className="mb-3 text-trunks text-xs">Rewards</p>
              <p className="mb-3 text-trunks text-xs">Blog</p>
              <p className="mb-3 text-trunks text-xs">Affiliates</p>
              <p className="mb-3 text-trunks text-xs">Help Centre</p>
              <p className="mb-3 text-trunks text-xs">Gaming License</p>
            </div>
          </div>

          <div className="grow-3 hidden lg:mr-0 md:flex md:mr-4">
            <div>
              <h2 className="text-goten text-sm font-bold mb-5">Info</h2>
              <p className="mb-3 text-trunks text-xs">
                General Terms and Conditions
              </p>
              <p className="mb-3 text-trunks text-xs">
                Reward Terms and Conditions
              </p>
              <p className="mb-3 text-trunks text-xs">
                Self-Exclusion Terms and Conditions
              </p>
              <p className="mb-3 text-trunks text-xs">
                Affiliate Terms & Conditions
              </p>
              <p className="mb-3 text-trunks text-xs">Privacy Policy</p>
              <p className="mb-3 text-trunks text-xs">Responsible Gambling</p>
            </div>
          </div>

          <div className="flex flex-col md:hidden">
            <div className=" mb-2">
              <Accordion title={'Games'} isContentInside={true}>
                <p className="mb-0.5 text-trunks text-s leading-6">Slots</p>
                <p className="mb-0.5 text-trunks text-s leading-6">Roulette</p>
                <p className="mb-0.5 text-trunks text-s leading-6">
                  Live Baccarat
                </p>
                <p className="mb-0.5 text-trunks text-s leading-6">Blackjack</p>
                <p className="mb-0.5 text-trunks text-s leading-6">
                  Live Casino
                </p>
                <p className="mb-0.5 text-trunks text-s leading-6">
                  Sportsbook
                </p>
                <p className="mb-0.5 text-trunks text-s leading-6">Providers</p>
                <p className="mb-0.5 text-trunks text-s leading-6">
                  Live Poker
                </p>
                <p className="mb-0.5 text-trunks text-s leading-6">
                  Live Game Shows
                </p>
                <p className="mb-0.5 text-trunks text-s leading-6">
                  Casual Games
                </p>
                <p className="mb-0.5 text-trunks text-s leading-6">
                  Multiplayer
                </p>
              </Accordion>
            </div>
            <div className=" mb-2">
              <Accordion title={'About'} isContentInside={true}>
                <p className="mb-0.5 text-trunks text-s leading-6">
                  Loyalty Club
                </p>
                <p className="mb-0.5 text-trunks text-s leading-6">VIP</p>
                <p className="mb-0.5 text-trunks text-s leading-6">Rewards</p>
                <p className="mb-0.5 text-trunks text-s leading-6">Blog</p>
                <p className="mb-0.5 text-trunks text-s leading-6">
                  Affiliates
                </p>
                <p className="mb-0.5 text-trunks text-s leading-6">
                  Help Centre
                </p>
                <p className="mb-0.5 text-trunks text-s leading-6">
                  Gaming License
                </p>
              </Accordion>
            </div>
            <div className=" mb-2">
              <Accordion title={'Info'} isContentInside={true}>
                <p className="mb-0.5 text-trunks text-s leading-6">
                  General Terms and Conditions
                </p>
                <p className="mb-0.5 text-trunks text-s leading-6">
                  Reward Terms and Conditions
                </p>
                <p className="mb-0.5 text-trunks text-s leading-6">
                  Self-Exclusion Terms and Conditions
                </p>
                <p className="mb-0.5 text-trunks text-s leading-6">
                  Affiliate Terms & Conditions
                </p>
                <p className="mb-0.5 text-trunks text-s leading-6">
                  Privacy Policy
                </p>
                <p className="mb-0.5 text-trunks text-s leading-6">
                  Responsible Gambling
                </p>
              </Accordion>
            </div>
          </div>

          <div className="grow-4 flex justify-center mt-6 md:mt-0 md:block ">
            <div className="hidden mb-4 justify-between items-center lg:w-[65%] md:flex  ">
              <p className="leading-4 text-[10px] font-semibold text-trunks">
                AM
              </p>
              <Switch
                id="test-switch-3"
                checked={state}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setState(e.target.checked)
                }
                colorScheme="gohan"
              />
              <p className="leading-4 text-[10px] font-semibold text-trunks">
                PM
              </p>
            </div>

            <div className="hidden rounded-[100px] flex-col bg-gohan mb-4  md:flex  ">
              <div className="flex items-center justify-between my-[6px] ml-3 mr-[17px]">
                <div className="flex items-center">
                  <Image src={uk} className="rounded-full" />
                  <span className="texst-xs ml-[5px]">English </span>
                </div>
                <div className="cursor-pointer">
                  <ControlsChevronDown />
                </div>
              </div>
            </div>

            <div className="rounded-[100px] w-[50%] bg-gohan flex justify-center align-middle md:w-full ">
              <span className="my-[6px] ml-3 mr-[17px]">
                <Image src={image1} className="mt-[6px]" />
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col py-3 mb-3 justify-between border border-x-0 border-t-0 border-b-beerus md:flex-row">
          <div className="mb-7 md:mb-0">
            <h2 className="text-goten text-sm font-bold mb-5">
              Payment methods
            </h2>
            <div className="flex flex-row md:flex-nowrap sm:flex-wrap">
              <div className=" bg-[#F7931A] rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] md:w-[35px] md:h-[35px]">
                <Bitcasino />
              </div>
              <div className=" bg-[#345D9D] rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] md:w-[35px] md:h-[35px]">
                <div className="bg-white rounded-full">
                  <LtchLogo />
                </div>
              </div>
              <div className=" bg-[#EC0928] rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] md:w-[35px] md:h-[35px]">
                <TronLogo />
              </div>
              <div className=" bg-[#7748FA] rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] md:w-[35px] md:h-[35px]">
                <EthereumIc />
              </div>
              <div className=" bg-[#2ABB92] rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] md:w-[35px] md:h-[35px]">
                <UsdIc />
              </div>
              <div className=" bg-[#02A6F0] rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] md:w-[35px] md:h-[35px]">
                <XAbove />
              </div>
              <div className=" bg-[#0033AD] rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] md:w-[35px] md:h-[35px]">
                <Cardano />
              </div>
              <div className=" bg-[#C2A633] rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] md:w-[35px] md:h-[35px]">
                <DogeCoin />
              </div>
            </div>
          </div>
          <div className="mb-7 md:mb-0 md:ml-3 md:mr-3">
            <h2 className="text-goten text-sm font-bold mb-5">Follow us</h2>
            <div className="flex flex-row md:flex-nowrap sm:flex-wrap">
              <div className="bg-[#27A4DB] rounded-full mr-2 flex items-center justify-center w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] md:w-[35px] md:h-[35px] ">
                <Telegram />
              </div>
              <div className="bg-[#FF0000] rounded-full mr-2 flex items-center justify-center w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] md:w-[35px] md:h-[35px] ">
                <Youtube />
              </div>
              <div className="bg-[#F7931A] rounded-full mr-2 flex items-center justify-center w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] md:w-[35px] md:h-[35px] ">
                <Bitcasino />
              </div>
              <div className="bg-[#1DA1F2] rounded-full mr-2 flex items-center justify-center w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] md:w-[35px] md:h-[35px] ">
                <Twitter />
              </div>
              <div className=" rounded-full mr-2 flex items-center justify-center bg-gradient-to-r from-yellow-500 to-pink-500 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] md:w-[35px] md:h-[35px] ">
                <Instagram />
              </div>
              <div className="bg-[#000000] rounded-full mr-2 flex items-center justify-center w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] md:w-[35px] md:h-[35px] ">
                <Tiktok />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-goten text-sm font-bold mb-5">Licences</h2>
            <div className="flex items-center">
              <Image src={licences1} />
              <div className="mx-4">
                <Image src={icon18} />
              </div>
              <Image src={hubb} />
            </div>
          </div>
        </div>
        <div className="mb-7">
          <h2 className="text-goten text-sm font-bold mb-5">Awards</h2>
          <div>
            <Image src={awards1} />
            <Image src={awards3} />
            <Image src={awards2} />
          </div>
        </div>
      </div>
    </div>
  );
};

Vip.getLayout = function getLayout(page: ReactNode) {
  return (
    <div className="w-full min-h-screen theme-bitcasino-dark bg-goku text-white">
      {page}
    </div>
  );
};

export default Vip;
