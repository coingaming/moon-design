import React, { ReactNode, useEffect, useState } from 'react';
import { Carousel } from '@heathmont/moon-components';
import { Button , Accordion } from '@heathmont/moon-core-tw';
import { MailEnvelope } from '@heathmont/moon-icons';

import ControlsChevronDown from '@heathmont/moon-icons-tw/lib/icons/ControlsChevronDown';
import Image from 'next/image';
import image1 from '../../../public/templates/bitcasino/image1.png';
import explore1 from '../../../public/templates/explore-1.png';
import explore2 from '../../../public/templates/explore-2.png';
import explore3 from '../../../public/templates/explore-3.png';
import explore4 from '../../../public/templates/explore-4.png';
import gift from '../../../public/templates/gift.png';
import handshake from '../../../public/templates/handshake.png';
import promo from '../../../public/templates/promo.png';
import Plus18 from '../../../public/templates/sportsbet/18plus.png';
import Award1 from '../../../public/templates/sportsbet/award1.png';
import Award2 from '../../../public/templates/sportsbet/award2.png';
import Award3 from '../../../public/templates/sportsbet/award3.png';
import Curacao from '../../../public/templates/sportsbet/curacao.png';
import SportsbetLogo from '../../../public/templates/sportsbet/logo.png';
import SbcAwards from '../../../public/templates/sportsbet/sbc-awards.png';
import support from '../../../public/templates/support.png';
import CTA from "../components/cta";
import Experience from "../components/experience";
import Explore from "../components/explore";
import Family from "../components/family";
import Header from "../components/header";
import Headline from "../components/headline";
import Hero from "../components/hero";
import Subtitle from "../components/subtitle";
import Arsenal from '../icons/arsenal';
import Bitcasino from '../icons/bitcasino';
import BrazilianIc from '../icons/brazilianIc';
import Cardano from '../icons/cardano';
import EthereumIc from '../icons/ethereumIc';
import EuroIcon from '../icons/euro';
import Flamengo from '../icons/flamengo';
import IndianIc from '../icons/indianIc';
import Instagram from '../icons/instagram';
import JapanesIc from '../icons/japanesIc';
import LtchLogo from '../icons/ltchLogo';
import Mastercard from '../icons/mastercard';
import Neteller from '../icons/neteller';
import PlusFive from '../icons/plusFive';
import Scril from '../icons/skrill';
import Southampton from '../icons/southampton';
import Telegram from '../icons/telegram';
import Tiktok from '../icons/tiktok';
import TronLogo from '../icons/tronLogo';
import Twitter from '../icons/twitter';
import UsdIc from '../icons/usdtIc';
import Visa from '../icons/visa';
import Watford from '../icons/watford';
import XAbove from '../icons/xAbove';
import Youtube from '../icons/youtube';
import {ChevronLeft} from "./ChevronLeft";
import {ChevronRight} from "./ChevronRight";


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
      className={`w-[285px] h-full bg-goku rounded-lg flex flex-col p-6 sm:my-8 sm:h-auto ${
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

    window.addEventListener("resize", resizeItems);

    return () => {
      window.removeEventListener("resize", resizeItems);
    };
  }, []);

  return (
    <div className="w-full h-full flex p-6">
      <div className="w-[160px] me-4 flex flex-col items-stretch lg:w-[280px]">
        <div className="h-16" />
        <div className="w-[160px] h-[180px] grow-1 mb-4 relative rounded-lg lg:w-[280px] lg:h-[317px]">
          <Image
            src={items[0].image}
            width={itemWidth}
            height={itemHeight}
          />
          <div className="absolute top-0 left-0 opacity-0 w-full h-full flex items-end pointer hover:opacity-100 bg-[#0000008F]">
            <p className="text-moon-18 font-semibold m-3 w-full">
              {items[0].title}
            </p>
          </div>
        </div>
        <div className="w-[160px] h-[180px] grow-1 relative rounded-lg lg:w-[280px] lg:h-[317px]">
          <Image
            src={items[1].image}
            width={itemWidth}
            height={itemHeight}
          />
          <div className="absolute top-0 left-0 opacity-0 w-full h-full flex items-end pointer hover:opacity-100 bg-[#0000008F]">
            <p className="text-moon-18 font-semibold m-3 w-full">
              {items[1].title}
            </p>
          </div>
        </div>
      </div>
      <div className="w-[160px] me-5 flex flex-col items-stretch lg:w-[280px]">
        <div className="w-[160px] h-[180px] grow-1 mb-4 relative rounded-lg lg:w-[280px] lg:h-[317px]">
          <Image
            src={items[2].image}
            width={itemWidth}
            height={itemHeight}
          />
          <div className="absolute top-0 left-0 opacity-0 w-full h-full flex items-end pointer hover:opacity-100 bg-[#0000008F]">
            <p className="text-moon-18 font-semibold m-3 w-full">
              {items[2].title}
            </p>
          </div>
        </div>
        <div className="w-[160px] h-[180px] grow-1 relative rounded-lg lg:w-[280px] lg:h-[317px]">
          <Image
            src={items[3].image}
            width={itemWidth}
            height={itemHeight}
          />
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


const Title = ({ text, classes }: { text: string; classes?: string }) => (
  <p
    className={`text-[32px] text-center font-semibold p-4 lg:text-moon-48 sm:text-moon-32 ${
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
      <Header
        logo={(<div className="mt-2"><Image src={SportsbetLogo} /></div>)}
        height={40}
        isScrolled={isScrolled}
      />
      <Hero
        headline={(<Headline
          text="Bitcasino VIP: For money can’t buy experiences!"
          classes="sm:px-0"
        />)}
        subtitle={(<Subtitle
          classes="items-center mt-3 sm:px-0 sm:text-left sm:text-[18px] sm:leading-6 md:text-[24px] md:leading-8"
          text=" Join the VIP Bitcasino Club - An exclusive world of crypto leaders
              and high-rollers who dare to take risks and enjoy life to its
              fullest."
        />)}
        button={(<Button
          variant="primary"
          width={124}
          height={48}
          className="btn-primary py-3 px-4 gap-1 text-moon-16 rounded-moon-i-sm mx-3 my-6 sm:mx-0 sm:px-0 sm:self-start w-full sm:w-[124px] "
        >
          Sign up now
        </Button>)}
        heroImage={(<div
          className="w-full h-full bg-contain bg-bottom bg-no-repeat min-w-[100vw] min-h-[40vh] sm:min-w-[44vw] sm:min-h-[auto]"
          style={{
            backgroundImage: 'url(/templates/sportsbet/ambasadors.png)',
          }}
        />)}
        bottomGradient='linear-gradient(180deg, rgba(26, 33, 42, 0) 0%, rgba(26, 33, 42, 0.479167) 47.92%, rgba(26, 33, 42, 0.81) 67.19%, #1A212A 82.29%, #1A212A 100%)'
      />

      <div className="flex flex-col items-center self-center mt-[200px] sm:w-[80%] sm:mt-[124px]">
        <Experience
          title={(<Title
            text="A VIP experience tailored to your liking"
            classes="w-[380px] leading-10 mb-4 sm:mb-0 md:w-[944px] sm:w-[600px] sm:leading-0"
          />)}
          subtitle={(<Subtitle
            classes="w-[348px] p-5 md:w-[700px] sm:w-[650px] sm:p-0 sm:pt-4"
            text="Enjoy exclusive bonuses and invites to prestigious events for free.
              Get all your indulgences taken care of."
          />)}
          carouselItems={experienceItems}
          carouselItemBackground='goku'
        />

        <div className='mt-[6] sm:mt-[70px] lg:mt-[200px]'>
          <Explore
            title={(<Title
              text="Explore the world in true VIP style!"
              classes="mb-4 text-center leading-10 sm:pl-0 sm:leading-0 xl:text-left"
            />)}
            subtitle={(<Subtitle
              classes="text-center px-5 sm:px-0 xl:text-left"
              text="Enjoy life at its fullest and create great memories as a Bitcasino VIP. We’ll make your dreams come true with money-can't-buy  experiences you’ll never forget. At Bitcasino, we know how indulge you!"
            />)}
            carouselItems={exploreItems}
            carouselItemBackground='goku'
          />
        </div>
        <Family
          title={(<Title
            text="VIP runs in the family"
            classes="mb-4 leading-10 sm:text-center md:text-left md:self-start lg:w-[510px]"
          />)}
          subtitle={(<Subtitle
            classes="text-center w-[348px] px-5 pb-[32px] sm:pb-0 sm:w-[100%] md:text-left md:self-start lg:w-[510px]"
            text="Sportsbet has legendary athletes in our VIP club. Join our high
              profile community of crypto leaders and high-rollers!"
          />)}
          image='/templates/sportsbet/partnership.png'
        />
        <CTA
          title={(<Title
            text="Ready to step up the game?"
            classes="mb-4 p-5 leading-10"
          />)}
          subtitle={(<Subtitle
            text="Entry into our VIP Club is by invitation only. Get in touch with us
            to see what a tailored VIP package could look like for you. Join the
            family now!"
            classes="w-[100%] mb-4 p-5"
          />)}
          handleSignup={() => console.log('SIGN UP clicked')}
          handleContact={() => console.log('CONTACT clicked')}
        />
      </div>

      <div className="flex flex-col items-center self-center mt-16 sm:w-[80%] sm:mt-[124px]">

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
        className=" px-[20px] h-full flex flex-col items-center self-center mt-16 xl:w-[1232px] lg:w-[90%] sm:w-[80%] sm:mt-[124px]"
        style={{
          background: 'linear-gradient(180deg, rgba(26, 33, 42, 0) 0%, rgba(26, 33, 42, 0.479167) 47.92%, rgba(26, 33, 42, 0.81) 67.19%, #1A212A 82.29%, #1A212A 100%)',
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
      <div className="px-[38px] xl:w-[1262px] md:p-5 md:mx-auto sm:w-[100%]">
        <div className="flex flex-col py-3 mb-3  md:border md:border-x-0 md:border-t-0 md:border-b-beerus md:flex-row md:justify-between">
          <div className="grow-1 mb-6 lg:mr-0 md:mr-4 md:mb-0">
            <h2 className="text-goten text-sm font-bold mb-7">
              About Sportsbet.io
            </h2>
            <p className="text-xs text-trunks w-full md:w-[148px]">
              Sportsbet.io is owned and operated by mBet Solutions NV (Schout
              Bij Nacht Doormanweg 40, P.O. Box 4745, Curaçao). It is licensed
              and regulated by the Government of Curaçao under the gaming
              license 1668/JAZ. Some payment methods are handled by its wholly
              owned subsidiary, mProcessing Solutions Ltd, Cyprus (Menandrou 4,
              1066, Nicosia, Cyprus).
            </p>
          </div>

          <div className="grow-3 hidden lg:mr-0 md:block md:mr-4">
            <div>
              <h2 className="text-goten text-sm font-bold mb-5">Sports</h2>
              <p className="mb-3 text-trunks text-xs">Promotions</p>
              <p className="mb-3 text-trunks text-xs">In play</p>
              <p className="mb-3 text-trunks text-xs">Upcoming</p>
            </div>
          </div>

          <div className="grow-3 hidden lg:mr-0  md:block md:mr-4">
            <div>
              <h2 className="text-goten text-sm font-bold mb-5">Casino</h2>
              <p className="mb-3 text-trunks text-xs">Casino</p>
              <p className="mb-3 text-trunks text-xs">Live Casino</p>
              <p className="mb-3 text-trunks text-xs">Bombay club</p>
            </div>
          </div>

          <div className="grow-3 hidden lg:mr-0  md:block md:mr-4">
            <div>
              <h2 className="text-goten text-sm font-bold mb-5">Support</h2>
              <p className="mb-3 text-trunks text-xs">Affiliate FAQ</p>
              <p className="mb-3 text-trunks text-xs">General Betting Rules</p>
              <p className="mb-3 text-trunks text-xs">Help Centre</p>
              <p className="mb-3 text-trunks text-xs">Payment Options</p>
              <p className="mb-3 text-trunks text-xs">Responsible Gambling</p>
              <p className="mb-3 text-trunks text-xs">
                Reward Terms and Conditions
              </p>
              <p className="mb-3 text-trunks text-xs">
                Self-Exclusion Terms and Conditions
              </p>
              <p className="mb-3 text-trunks text-xs">The Clubhouse FAQ</p>
            </div>
          </div>

          <div className="grow-3 hidden lg:mr-0  md:block md:mr-4">
            <div>
              <h2 className="text-goten text-sm font-bold mb-5">About</h2>
              <p className="mb-3 text-trunks text-xs">Sportsbet app</p>
              <p className="mb-3 text-trunks text-xs">Affiliates</p>
              <p className="mb-3 text-trunks text-xs">
                Affiliate Terms and Conditions
              </p>
              <p className="mb-3 text-trunks text-xs">
                Crypto Currency How To Guide
              </p>
              <p className="mb-3 text-trunks text-xs">Privacy Policy</p>
              <p className="mb-3 text-trunks text-xs">
                Sportsbet.io Partnerships
              </p>
              <p className="mb-3 text-trunks text-xs">Terms and Conditions</p>
              <p className="mb-3 text-trunks text-xs">
                The Clubhouse Terms and Conditions
              </p>
              <p className="mb-3 text-trunks text-xs">Vip</p>
            </div>
          </div>

          <div className="grow-4 hidden md:block">
            <h2 className="text-goten text-sm font-bold mb-5">Preferences</h2>
            <div className="rounded-[100px] flex flex-col bg-beerus mb-4 ">
              <div className="flex items-center justify-between my-[6px] ml-3 mr-[17px]">
                <div className="flex items-center">
                  <span className="texst-xs ml-[5px]">English </span>
                </div>
                <div className="cursor-pointer">
                  <ControlsChevronDown />
                </div>
              </div>
            </div>

            <div className="rounded-[100px] bg-beerus flex justify-center align-middle">
              <span className="my-[6px] ml-3 mr-[17px]">
                <Image src={image1} className="mt-[6px]" />
              </span>
            </div>
          </div>
        </div>

        <div className=" hidden py-3 mb-3 justify-between border border-x-0 border-t-0 border-b-beerus md:flex ">
          <div>
            <h2 className="text-goten text-sm font-bold mb-5">
              Payment methods
            </h2>
            <div className="flex flex-row  md:w-[70%] sm:flex-wrap">
              <div className=" bg-[#F7931A] rounded-full mr-2 mb-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
                <Bitcasino />
              </div>
              <div className=" bg-[#345D9D] rounded-full mr-2 mb-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
                <div className="bg-white rounded-full">
                  <LtchLogo />
                </div>
              </div>
              <div className=" bg-[#EC0928] rounded-full mr-2 mb-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
                <TronLogo />
              </div>
              <div className=" bg-[#7748FA] rounded-full mr-2 mb-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
                <EthereumIc />
              </div>
              <div className=" bg-[#2ABB92] rounded-full mr-2 mb-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
                <UsdIc />
              </div>
              <div className=" bg-[#02A6F0] rounded-full mr-2 mb-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
                <XAbove />
              </div>
              <div className=" bg-[#0033AD] rounded-full mr-2 mb-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
                <Cardano />
              </div>
              <div className=" bg-[#0AB758] rounded-full mr-2 mb-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
                <BrazilianIc />
              </div>
              <div className=" bg-[#335DF4] rounded-full mr-2 mb-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
                <EuroIcon />
              </div>
              <div className=" bg-[#FF3D44] rounded-full mr-2 mb-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
                <JapanesIc />
              </div>
              <div className=" bg-[#FFE8BC] rounded-full mr-2 mb-2 flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
                <IndianIc />
              </div>
            </div>
          </div>
          <div className="hidden md:block sm:ml-3 sm:mr-3">
            <h2 className="text-goten text-sm font-bold mb-5">Follow us</h2>
            <div className="flex flex-row md:flex-nowrap sm:flex-wrap">
              <div className="bg-[#27A4DB] rounded-full mr-2  flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
                <Telegram />
              </div>
              <div className="bg-[#FF0000] rounded-full mr-2  flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
                <Youtube />
              </div>
              <div className="bg-[#F7931A] rounded-full mr-2  flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
                <Bitcasino />
              </div>
              <div className="bg-[#1DA1F2] rounded-full mr-2  flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
                <Twitter />
              </div>
              <div className="rounded-full mr-2  flex items-center justify-center bg-gradient-to-r from-yellow-500 to-pink-500 lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
                <Instagram />
              </div>
              <div className="bg-[#000000] rounded-full mr-2  flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
                <Tiktok />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-goten text-sm font-bold mb-5 hidden md:block">
              Partnership
            </h2>
            <div className="flex items-center">
              <div className="bg-beerus mr-2 rounded-full  flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
                <Arsenal />
              </div>
              <div className="bg-beerus mr-2 rounded-full  flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
                <Southampton />
              </div>
              <div className="bg-beerus mr-2 rounded-full  flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
                <Flamengo />
              </div>
              <div className="bg-beerus mr-2 rounded-full  flex items-center justify-center lg:w-[36px] lg:h-[36px] sm:w-[35px] sm:h-[35px]">
                <Watford />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:hidden ">
          <div className=" mb-2">
            <Accordion title={'List item'} isContentInside={true}></Accordion>
          </div>
          <div className=" mb-2">
            <Accordion title={'Casino'} isContentInside={true}>
              <div className="flex flex-col">
                <p className="mb-3 text-trunks text-xs">Casino</p>
                <p className="mb-3 text-trunks text-xs">Live Casino</p>
                <p className="mb-3 text-trunks text-xs">Bombay club</p>
              </div>
            </Accordion>
          </div>
          <div className=" mb-2">
            <Accordion title={'Support'} isContentInside={true}>
              <div className="flex flex-col">
                <p className="mb-3 text-trunks text-xs">Affiliate FAQ</p>
                <p className="mb-3 text-trunks text-xs">
                  General Betting Rules
                </p>
                <p className="mb-3 text-trunks text-xs">Help Centre</p>
                <p className="mb-3 text-trunks text-xs">Payment Options</p>
                <p className="mb-3 text-trunks text-xs">Responsible Gambling</p>
                <p className="mb-3 text-trunks text-xs">
                  Reward Terms and Conditions
                </p>
                <p className="mb-3 text-trunks text-xs">
                  Self-Exclusion Terms and Conditions
                </p>
                <p className="mb-3 text-trunks text-xs">The Clubhouse FAQ</p>
              </div>
            </Accordion>
          </div>
          <div className=" mb-2">
            <Accordion title={'About'} isContentInside={true}>
              <div className="flex flex-col">
                <p className="mb-3 text-trunks text-xs">Sportsbet app</p>
                <p className="mb-3 text-trunks text-xs">Affiliates</p>
                <p className="mb-3 text-trunks text-xs">
                  Affiliate Terms and Conditions
                </p>
                <p className="mb-3 text-trunks text-xs">
                  Crypto Currency How To Guide
                </p>
                <p className="mb-3 text-trunks text-xs">Privacy Policy</p>
                <p className="mb-3 text-trunks text-xs">
                  Sportsbet.io Partnerships
                </p>
                <p className="mb-3 text-trunks text-xs">Terms and Conditions</p>
                <p className="mb-3 text-trunks text-xs">
                  The Clubhouse Terms and Conditions
                </p>
                <p className="mb-3 text-trunks text-xs">Vip</p>
              </div>
            </Accordion>
          </div>
          <div className=" mb-2">
            <Accordion title={'Preferences'} isContentInside={true}>
              <div className="flex flex-col">
                <div className="rounded-[100px] flex flex-col bg-beerus mb-4 ">
                  <div className="flex items-center justify-between my-[6px] ml-3 mr-[17px]">
                    <div className="flex items-center">
                      <span className="texst-xs ml-[5px]">English </span>
                    </div>
                    <div className="cursor-pointer">
                      <ControlsChevronDown />
                    </div>
                  </div>
                </div>
              </div>
            </Accordion>
          </div>
          <div className=" mb-2">
            <Accordion title={'Accapted Methods'} isContentInside={true}>
              <div className="flex flex-col ">
                <div className="flex w-[70%] flex-wrap items-center ">
                  <div className=" bg-[#345D9D] rounded-full mr-2 mb-2 flex items-center justify-center w-[40px] h-[40px]">
                    <XAbove />
                  </div>
                  <div className="  bg-[#F7931A] rounded-full mr-2 mb-2  flex items-center justify-center w-[40px] h-[40px] ">
                    <Bitcasino />
                  </div>
                  <div className=" bg-[#345D9D] rounded-full mr-2 mb-2  flex items-center justify-center w-[40px] h-[40px] ">
                    <div className="bg-white rounded-full">
                      <LtchLogo />
                    </div>
                  </div>
                  <div className=" bg-[#7748FA] rounded-full mr-2 mb-2  flex items-center justify-center w-[40px] h-[40px] ">
                    <TronLogo />
                  </div>
                  <div className=" bg-[#2ABB92] rounded-full mr-2 mb-2  flex items-center justify-center w-[40px] h-[40px] ">
                    <BrazilianIc />
                  </div>
                  <div className=" bg-black rounded-full mr-2 mb-2  flex items-center justify-center w-[45px] h-[45px] ">
                    <Mastercard />
                  </div>
                  <div className=" bg-[#1A1F71] rounded-full mr-2 mb-2  flex items-center justify-center w-[45px] h-[45px] ">
                    <Visa />
                  </div>
                  <div className=" bg-[#5F1E5E] rounded-full mr-2 mb-2  flex items-center justify-center w-[45px] h-[45px] ">
                    <Scril />
                  </div>
                  <div className=" bg-[#83BA3B] rounded-full mr-2 mb-2  flex items-center justify-center w-[45px] h-[45px] ">
                    <Neteller />
                  </div>
                  <div className=" bg-beerus rounded-full mr-2 mb-2  flex items-center justify-center w-[45px] h-[45px] ">
                    <PlusFive />
                  </div>
                </div>
              </div>
            </Accordion>
          </div>
          <div className=" mb-2">
            <Accordion title={'Follow Sportsbook.io'} isContentInside={true}>
              <div className="flex flex-col">
                <div className="flex flex-wrap">
                  <div className="bg-[#27A4DB] rounded-full mr-2 mb-2  flex items-center justify-center w-[40px] h-[40px]">
                    <Telegram />
                  </div>
                  <div className="bg-[#FF0000] rounded-full mr-2 mb-2  flex items-center justify-center w-[40px] h-[40px]">
                    <Youtube />
                  </div>
                  <div className="bg-[#F7931A] rounded-full mr-2 mb-2  flex items-center justify-center w-[40px] h-[40px]">
                    <Bitcasino />
                  </div>
                  <div className="bg-[#1DA1F2] rounded-full mr-2 mb-2  flex items-center justify-center w-[40px] h-[40px]">
                    <Twitter />
                  </div>
                  <div className="rounded-full mr-2 bg-gradient-to-r from-yellow-500 to-pink-500 mb-2  flex items-center justify-center w-[40px] h-[40px]">
                    <Instagram />
                  </div>
                  <div className="bg-[#000000] rounded-full mr-2 mb-2  flex items-center justify-center w-[40px] h-[40px]">
                    <Tiktok />
                  </div>
                </div>
              </div>
            </Accordion>
          </div>
          <div className=" mb-5">
            <Accordion title={'Sponsorships'} isContentInside={true}>
              <div className="flex flex-wrap">
                <div className="flex flex-wrap">
                  <div className="bg-beerus rounded-full mr-2 mb-2 flex items-center justify-center w-[40px] h-[40px]">
                    <Arsenal />
                  </div>
                  <div className="bg-beerus rounded-full mr-2 mb-2 flex items-center justify-center w-[40px] h-[40px]">
                    <Southampton />
                  </div>
                  <div className="bg-beerus rounded-full mr-2 mb-2 flex items-center justify-center w-[40px] h-[40px]">
                    <Flamengo />
                  </div>
                  <div className="bg-beerus rounded-full mr-2 mb-2 flex items-center justify-center w-[40px] h-[40px]">
                    <Watford />
                  </div>
                </div>
              </div>
            </Accordion>
          </div>
        </div>
        <div className="flex justify-center mb-6 md:hidden ">
          <div className="rounded-[100px] bg-beerus flex justify-center align-middle">
            <span className="my-[6px] ml-3 mr-[17px]">
              <Image src={image1} className="mt-[6px]" />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-goten text-sm font-bold mb-5">Awards</h2>
          <div className="flex items-center flex-wrap md:flex-nowrap">
            <div className="mr-2 ">
              <Image src={Curacao} />
            </div>
            <div className="mr-2 ">
              <Image src={Award1} />
            </div>
            <div className="mr-2 ">
              <Image src={SbcAwards} />
            </div>
            <div className="mr-2 ">
              <Image src={Award2} />
            </div>
            <div className="mr-2 ">
              <Image src={Award3} />
            </div>
            <div className="mr-2 ">
              <Image src={Plus18} />
            </div>
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
