import React, {ReactNode, useEffect, useState} from 'react';
import { Switch } from '@heathmont/moon-core';
import { Button , Accordion } from '@heathmont/moon-core-tw';

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
import CTA from "../components/cta";
import Experience from "../components/experience";
import Explore from "../components/explore";
import Family from "../components/family";
import Header from "../components/header";
import Headline from "../components/headline";
import Hero from "../components/hero";
import Social from "../components/social";
import Subtitle from "../components/subtitle";
import Title from "../components/title";
import Bitcasino from '../icons/bitcasino';
import BitcasinoLogo from '../icons/bitcasino-logo';
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
    <div className="flex flex-col grow overflow-hidden md:w-[75%] lg:w-full">
      <Header logo={<BitcasinoLogo />} height={30} isScrolled={isScrolled} />
      <Hero
        headline={
          <Headline
            text="Bitcasino VIP: For money can’t buy experiences!"
            classes="break-words sm:px-0 "
          />
        }
        subtitle={
          <Subtitle
            classes="break-words items-center mt-3 sm:px-0 sm:text-left sm:text-[18px] sm:leading-6 md:text-[24px] md:leading-8"
            text=" Join the VIP Bitcasino Club - An exclusive world of crypto leaders
                and high-rollers who dare to take risks and enjoy life to its
                fullest."
          />
        }
        button={
          <Button
            variant="primary"
            width={124}
            height={48}
            className="btn-primary py-3 px-4 gap-1 text-moon-16 rounded-moon-i-sm mx-3 my-6 sm:mx-0 sm:px-0 sm:self-start w-full sm:w-[124px] "
          >
            Sign up now
          </Button>
        }
        wrapperClasses="sm:bg-[url('/templates/bitcasino/pattern.png')]"
        heroImage={<Image src={KingKaka} objectFit="contain" />}
        bottomGradient="linear-gradient(180deg, rgba(36, 3, 63, 0)  0%, rgba(36, 3, 63, 0.55)  49.48%, #24033F 100%"
      />

      <div className="flex flex-col items-center self-center mt-[200px] sm:w-full sm:mt-[124px] xl:w-[1232px]">
        <Experience
          title={
            <Title
              text="A VIP experience tailored to your liking"
              classes="
              w-[380px] leading-10 mb-4 sm:mb-0 xl:w-[944px] sm:w-[600px] sm:leading-0 md:flex-wrap"
            />
          }
          subtitle={
            <Subtitle
              classes="w-[348px] p-5 lg:w-[700px] sm:w-[650px] sm:p-0 sm:pt-4"
              text="Enjoy exclusive bonuses and invites to prestigious events for free.
              Get all your indulgences taken care of."
            />
          }
          carouselItems={experienceItems}
        />
        <div className="mt-[6] sm:mt-[70px] md:w-[80%] lg:mt-[200px] xl:w-[1136px]">
          <Explore
            title={
              <Title
                text="Explore the world in true VIP style!"
                classes="mb-4 text-center leading-10 sm:pl-0 sm:leading-0 md:flex-wrap xl:text-left"
              />
            }
            subtitle={
              <Subtitle
                classes="text-center px-5 sm:px-0 xl:text-left"
                text="Enjoy life at its fullest and create great memories as a Bitcasino VIP. We’ll make your dreams come true with money-can't-buy  experiences you’ll never forget. At Bitcasino, we know how indulge you!"
              />
            }
            carouselItems={exploreItems}
          />
        </div>
        <Family
          title={
            <Title
              text="VIP runs in the family"
              classes="mb-4 leading-10 sm:text-center md:text-left md:self-start lg:w-[510px]"
            />
          }
          subtitle={
            <Subtitle
              classes="text-center w-[348px] px-5 pb-[32px] sm:pb-0 sm:w-[100%] md:text-left md:self-start lg:w-[510px]"
              text="From artists to visionaries, Bitcasino has the most talented individuals in our VIP club. Join our high profile group of crypto leaders and high-rollers!"
            />
          }
          image="/templates/bitcasino/partnership.png"
        />
        <CTA
          title={
            <Title
              text="Ready to step up the game?"
              classes="mb-4 p-5 leading-10"
            />
          }
          subtitle={
            <Subtitle
              text="Entry into our VIP Club is by invitation only. Get in touch with us
            to see what a tailored VIP package could look like for you. Join the
            family now!"
              classes="w-[100%] mb-4 p-5"
            />
          }
          handleSignup={() => console.log('SIGN UP clicked')}
          handleContact={() => console.log('CONTACT clicked')}
        />
        <div className="mt-[70px] sm:mt-[88px]">
          <Social
            title="Join us and talk to us"
            onClick={(social: string) => console.log(`Social link - ${social}`)}
          />
        </div>
      </div>
      <div className="flex flex-col items-center  h-full px-5 mt-16 sm:w-[100%] sm:mt-[124px] md:w-[90%] lg:self-center xxl:w-[1232px]">
        <div
          className="flex flex-col items-center self-center w-full h-full px-5 mt-16"
          style={{
            background: 'linear-gradient rgba(36, 3, 63, 0) 0% #24033F 100%',
          }}
        >
          <div className="flex flex-col lg:items-start">
            <p className="text-[24px] text-bulma !text-left leading-8 font-semibold sm:px-3 sm:text-left">
              Enjoy BTC gaming at the best Bitcoin casino
            </p>
            <p className="text-[18px] text-bulma opacity-60 !text-left !leading-8 my-2 sm:px-3 sm:text-left md:text-moon-16 lg:text-moon-16">
              The future of gaming is here, we are the number one bitcoin casino
              in 2021 and into 2022. Our range of casino-slots consistently make
              the top ten across the bitcoin casino world. Read more.
            </p>
          </div>
          <div className="mt-3 mb-3">
            <Button
              className="flex justify-center items-center cursor-pointer bg-gohan w-[32px] h-[32px] rounded-full"
              onClick={() => console.log('Read More')}
            >
              <ControlsChevronDown />
            </Button>
          </div>
        </div>
        <div className=" p-0 mx-6 md:mr-auto  lg:p-5 lg:mx-auto md:w-full xxl:w-[1262px] ">
          <div className="py-4 flex flex-row justify-start items-center border border-x-0 border-y-beerus">
            <Image src={bitcasinoLogo} />
            <ControlsChevronRight className="mx-3" />
            <p>Mainpage </p>
          </div>
          <div className="flex flex-col py-3 mb-3 w-full md:border md:border-x-0 md:border-t-0 md:border-b-beerus md:flex-row md:justify-between">
            <div className="grow-1 mb-7 lg:mr-0 lg:mb-0 md:mr-4">
              <h2 className="text-goten text-sm font-bold mb-7">
                About Bitcasino.io
              </h2>
              <p className="text-xs text-trunks md:w-[255px]">
                Bitcasino.io is owned and operated by Moon Technologies B.V. It
                is licensed and regulated by the Government of Curaçao under the
                gaming license 1668/JAZ.
              </p>
            </div>
            <div className="hidden grow-3 lg:mr-0 md:block ">
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
            <div className="grow-3 hidden lg:mr-0 md:flex md:mr-4 flex-wrap">
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
            <div className="grow-3 hidden md:mr-0 md:flex">
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
                  <p className="mb-0.5 text-trunks text-s leading-6">
                    Roulette
                  </p>
                  <p className="mb-0.5 text-trunks text-s leading-6">
                    Live Baccarat
                  </p>
                  <p className="mb-0.5 text-trunks text-s leading-6">
                    Blackjack
                  </p>
                  <p className="mb-0.5 text-trunks text-s leading-6">
                    Live Casino
                  </p>
                  <p className="mb-0.5 text-trunks text-s leading-6">
                    Sportsbook
                  </p>
                  <p className="mb-0.5 text-trunks text-s leading-6">
                    Providers
                  </p>
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
            <div className="grow-4 flex justify-center mt-6 sm:mt-0 sm:block ">
              <div className="hidden mb-4 justify-between items-center md:w-[65%] md:flex  ">
                <p className="leading-4 text-[10px] font-semibold text-trunks">
                  AM
                </p>
                <Switch
                  id="test-switch-3"
                  checked={state}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setState(e.target.checked)
                  }
                  colorScheme={true}
                />
                <p className="leading-4 text-[10px] font-semibold text-trunks">
                  PM
                </p>
              </div>
              <div className="hidden rounded-[100px] flex-col bg-gohan mb-4 lg:flex">
                <div className="flex items-center justify-between my-[6px] ml-3 mr-[17px]">
                  <div className="flex items-center">
                    <Image src={uk} className="rounded-full" />
                    <span className="text-trunks text-xs ml-[5px]">
                      English
                    </span>
                  </div>
                  <div className="cursor-pointer">
                    <ControlsChevronDown />
                  </div>
                </div>
              </div>
              <div className="rounded-[100px] bg-gohan flex justify-center align-middle lg:w-full">
                <span className="flex items-center justify-center my-[6px] ml-3 mr-[17px]">
                  <Image src={image1} className="mt-[6px]" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-3 mb-3 justify-between border border-x-0 border-t-0 border-b-beerus md:flex-row">
            <div className="mb-7 lg:mb-0">
              <h2 className="text-goten text-sm font-bold mb-5">
                Payment methods
              </h2>
              <div className="flex flex-row lg:flex-nowrap sm:flex-wrap">
                <div className=" bg-[#F7931A] rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] ">
                  <Bitcasino />
                </div>
                <div className=" bg-[#345D9D] rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] ">
                  <div className="bg-white rounded-full">
                    <LtchLogo />
                  </div>
                </div>
                <div className=" bg-[#EC0928] rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] ">
                  <TronLogo />
                </div>
                <div className=" bg-[#7748FA] rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] ">
                  <EthereumIc />
                </div>
                <div className=" bg-[#2ABB92] rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] ">
                  <UsdIc />
                </div>
                <div className=" bg-[#02A6F0] rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] ">
                  <XAbove />
                </div>
                <div className=" bg-[#0033AD] rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] ">
                  <Cardano />
                </div>
                <div className=" bg-[#C2A633] rounded-full flex items-center justify-center mr-2 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] ">
                  <DogeCoin />
                </div>
              </div>
            </div>
            <div className="mb-7 lg:mb-0 lg:ml-3 lg:mr-3">
              <h2 className="text-goten text-sm font-bold mb-5">Follow us</h2>
              <div className="flex flex-row lg:flex-nowrap sm:flex-wrap">
                <div className="bg-[#27A4DB] rounded-full mr-2 flex items-center justify-center w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] ">
                  <Telegram />
                </div>
                <div className="bg-[#FF0000] rounded-full mr-2 flex items-center justify-center w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] ">
                  <Youtube />
                </div>
                <div className="bg-[#F7931A] rounded-full mr-2 flex items-center justify-center w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] ">
                  <Bitcasino />
                </div>
                <div className="bg-[#1DA1F2] rounded-full mr-2 flex items-center justify-center w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] ">
                  <Twitter />
                </div>
                <div className=" rounded-full mr-2 flex items-center justify-center bg-gradient-to-r from-yellow-500 to-pink-500 w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] ">
                  <Instagram />
                </div>
                <div className="bg-[#000000] rounded-full mr-2 flex items-center justify-center w-[35px] h-[35px] lg:w-[36px] lg:h-[36px] ">
                  <Tiktok />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-goten text-sm font-bold mb-5">Licences</h2>
              <div className="flex flex-wrap items-center">
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
            <div className="flex items-center gap-2">
              <Image src={awards1} />
              <Image src={awards3} />
              <Image src={awards2} />
            </div>
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
