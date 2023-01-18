import React, { ReactNode, useEffect, useState } from 'react';
import { Button, Accordion } from '@heathmont/moon-core-tw';
import ControlsChevronDown from '@heathmont/moon-icons-tw/lib/icons/ControlsChevronDown';
import Image from 'next/image';
import CTA from '../../../components/templates/cta';
import Experience from '../../../components/templates/experience';
import Explore from '../../../components/templates/explore';
import Family from '../../../components/templates/family';
import Header from '../../../components/templates/header';
import Headline from '../../../components/templates/headline';
import Hero from '../../../components/templates/hero';
import LayoutSportsbet from '../../../components/templates/layout-sportsbet';
import Social from '../../../components/templates/social';
import Subtitle from '../../../components/templates/subtitle';
import Title from '../../../components/templates/title';
import image1 from '../../../public/templates/bitcasino/image1.png';
import explore1 from '../../../public/templates/explore-1.png';
import explore2 from '../../../public/templates/explore-2.png';
import explore3 from '../../../public/templates/explore-3.png';
import explore4 from '../../../public/templates/explore-4.png';
import handshake from '../../../public/templates/handshake.png';
import limit from '../../../public/templates/limits.png';
import reward from '../../../public/templates/rewards.png';
import Plus18 from '../../../public/templates/sportsbet/18plus.png';
import Award1 from '../../../public/templates/sportsbet/award1.png';
import Award2 from '../../../public/templates/sportsbet/award2.png';
import Award3 from '../../../public/templates/sportsbet/award3.png';
import Curacao from '../../../public/templates/sportsbet/curacao.png';
import SportsbetLogo from '../../../public/templates/sportsbet/logo.png';
import SbcAwards from '../../../public/templates/sportsbet/sbc-awards.png';
import support from '../../../public/templates/support.png';
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
      icon: reward,
      title: 'High-value rewards',
      points: [
        'Lucrative offers modelled just for you.',
        'Wager free rewards.',
        'Weekly & monthly bonuses.',
      ],
    },
    {
      icon: limit,
      title: 'Highest bet limits in the industry',
      points: ['No limits to withdrawals and deposits!'],
    },
    {
      icon: support,
      title: '24/7 priority support',
      points: ['No queues, no waiting.', 'We attend to your needs first.'],
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
    <div className="w-full flex flex-col grow overflow-hidden">
      <Header
        height={30}
        isScrolled={isScrolled}
        logo={
          <div className="mt-2">
            <Image src={SportsbetLogo} alt="Logo" />
          </div>
        }
      />
      <Hero
        headline={
          <Headline
            text="Sportsbet VIP: For money can’t buy experiences"
            classes="break-words sm:px-0 "
          />
        }
        subtitle={
          <Subtitle
            classes="break-words items-center mt-3 sm:px-0 sm:text-left sm:text-moon-18 sm:leading-6 md:text-moon-24 md:leading-8"
            text="Join the VIP Bitcasino Club - An exclusive world of crypto leaders and high-rollers who dare to take risks and enjoy life to its fullest."
          />
        }
        button={
          <Button className="mx-3 my-6 sm:mx-0 sm:self-start w-full sm:w-auto">
            Sign up now
          </Button>
        }
        heroImage={
          <div
            className="w-full h-full bg-contain bg-bottom bg-no-repeat min-w-[100vw] min-h-[40vh] sm:min-w-[44vw] sm:min-h-[auto]"
            style={{
              backgroundImage: 'url(/templates/sportsbet/ambasadors.png)',
            }}
          />
        }
        bottomGradient="linear-gradient(rgba(35, 42, 51, 0) 0%, rgba(35, 42, 51, 0.8) 49.48%, rgba(35, 42, 51, 0.95) 100%)"
      />
      <div className="flex flex-col items-center self-center mt-[264px] sm:w-full sm:mt-[124px]">
        <Experience
          title={
            <Title
              text="A VIP experience tailored to your liking"
              classes="w-[380px] leading-10 mb-4 sm:mb-0 xl:w-[944px] sm:w-[600px] sm:leading-0 md:flex-wrap"
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
          carouselItemBackground="gohan"
        />

        <div className="mt-[6] sm:mt-[70px] md:w-[80%] lg:mt-[200px] xl:w-[1136px]">
          <Explore
            title={
              <Title
                text="Explore the world in true VIP style!"
                classes="mb-4 text-center leading-10 sm:pl-0 sm:leading-0 xl:text-left"
              />
            }
            subtitle={
              <Subtitle
                classes="text-center px-5 sm:px-0 xl:text-left"
                text="Enjoy life at its fullest and create great memories as a Bitcasino VIP. We’ll make your dreams come true with money-can't-buy  experiences you’ll never forget. At Bitcasino, we know how indulge you!"
              />
            }
            carouselItems={exploreItems}
            carouselItemBackground="gohan"
          />
        </div>
        <Family
          title={
            <Title
              text="VIP runs in the family"
              classes="mb-4 leading-10 sm:text-center md:text-left md:self-start lg:w-[420px] xl:w-[510px]"
            />
          }
          subtitle={
            <Subtitle
              classes="text-center w-[348px] px-5 pb-[32px] sm:pb-0 sm:w-[100%] md:text-left md:self-start lg:w-[420px] xl:w-[510px]"
              text="Sportsbet has legendary athletes in our VIP club. Join our high
              profile community of crypto leaders and high-rollers!"
            />
          }
          image="/templates/sportsbet/partnership.png"
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
            title="Stay connected with us via social media"
            onClick={(social: string) => console.log(`Social link - ${social}`)}
          />
        </div>
      </div>
      <div className="flex flex-col m-auto sm:w-[80%] sm:mt-[124px] lg:w-[90%] xl:w-[1136px]">
        <div
          className="flex flex-col items-center self-center w-full h-full px-5 mt-16"
          style={{
            background: 'linear-gradient rgba(36, 3, 63, 0) 0% #24033F 100%',
          }}
        >
          <div className="flex flex-col lg:items-start">
            <p className="text-moon-24 text-bulma !text-left leading-8 font-semibold sm:px-3 sm:text-left">
              Enjoy BTC gaming at the best Bitcoin casino
            </p>
            <p className="text-moon-18 text-bulma opacity-60 !text-left !leading-8 my-2 sm:px-3 sm:text-left md:text-moon-16 lg:text-moon-16">
              The future of gaming is here, we are the number one bitcoin casino
              in 2021 and into 2022. Our range of casino-slots consistently make
              the top ten across the bitcoin casino world. Read more.
            </p>
          </div>
          <div className="mt-3 mb-3">
            <Button
              className="flex justify-center items-center cursor-pointer bg-goku w-[32px] h-[32px] rounded-full"
              onClick={() => console.log('Read More')}
            >
              <ControlsChevronDown />
            </Button>
          </div>
        </div>
        <div className="w-full px-[38px] lg:p-5 lg:mx-auto">
          <div className="flex flex-col py-3 mb-3 lg:border lg:border-x-0 lg:border-t-0 lg:border-b-beerus lg:flex-row lg:justify-between">
            <div className="grow-1 mb-6  lg:mr-4 lg:mb-0">
              <h2 className="text-goten text-sm font-bold mb-7">
                About Sportsbet.io
              </h2>
              <p className="text-xs text-trunks w-full lg:w-[148px]">
                Sportsbet.io is owned and operated by mBet Solutions NV (Schout
                Bij Nacht Doormanweg 40, P.O. Box 4745, Curaçao). It is licensed
                and regulated by the Government of Curaçao under the gaming
                license 1668/JAZ. Some payment methods are handled by its wholly
                owned subsidiary, mProcessing Solutions Ltd, Cyprus (Menandrou
                4, 1066, Nicosia, Cyprus).
              </p>
            </div>
            <div className="grow-3 hidden  lg:block lg:mr-4">
              <div>
                <h2 className="text-goten text-sm font-bold mb-5">Sports</h2>
                <p className="mb-3 text-trunks text-xs">Promotions</p>
                <p className="mb-3 text-trunks text-xs">In play</p>
                <p className="mb-3 text-trunks text-xs">Upcoming</p>
              </div>
            </div>
            <div className="grow-3 hidden lg:block lg:mr-4">
              <div>
                <h2 className="text-goten text-sm font-bold mb-5">Casino</h2>
                <p className="mb-3 text-trunks text-xs">Casino</p>
                <p className="mb-3 text-trunks text-xs">Live Casino</p>
                <p className="mb-3 text-trunks text-xs">Bombay club</p>
              </div>
            </div>
            <div className="grow-3 hidden lg:block lg:mr-4">
              <div>
                <h2 className="text-goten text-sm font-bold mb-5">Support</h2>
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
            </div>
            <div className="grow-3 hidden lg:block lg:mr-4">
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
            <div className="grow-4 hidden lg:block">
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
                  <Image
                    src={image1}
                    className="mt-[6px]"
                    alt="Exchange rate"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className=" hidden py-3 mb-3 justify-between border border-x-0 border-t-0 border-b-beerus lg:flex ">
            <div>
              <h2 className="text-goten text-sm font-bold mb-5">
                Payment methods
              </h2>
              <div className="flex flex-row  lg:w-[70%] sm:flex-wrap">
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
            <div className="hidden lg:block sm:ml-3 sm:mr-3">
              <h2 className="text-goten text-sm font-bold mb-5">Follow us</h2>
              <div className="flex flex-row lg:flex-nowrap sm:flex-wrap">
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
              <h2 className="text-goten text-sm font-bold mb-5 hidden lg:block">
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
          <div className="flex flex-col lg:hidden">
            <div className=" mb-2">
              <Accordion
                title={'List item'}
                isContentInside={true}
                backgroundColor="bg-gohan"
              />
            </div>
            <div className=" mb-2">
              <Accordion
                title={'Casino'}
                isContentInside={true}
                backgroundColor="bg-gohan"
              >
                <div className="flex flex-col">
                  <p className="mb-3 text-trunks text-xs">Casino</p>
                  <p className="mb-3 text-trunks text-xs">Live Casino</p>
                  <p className="mb-3 text-trunks text-xs">Bombay club</p>
                </div>
              </Accordion>
            </div>
            <div className=" mb-2">
              <Accordion
                backgroundColor="bg-gohan"
                title={'Support'}
                isContentInside={true}
              >
                <div className="flex flex-col">
                  <p className="mb-3 text-trunks text-xs">Affiliate FAQ</p>
                  <p className="mb-3 text-trunks text-xs">
                    General Betting Rules
                  </p>
                  <p className="mb-3 text-trunks text-xs">Help Centre</p>
                  <p className="mb-3 text-trunks text-xs">Payment Options</p>
                  <p className="mb-3 text-trunks text-xs">
                    Responsible Gambling
                  </p>
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
              <Accordion
                backgroundColor="bg-gohan"
                title={'About'}
                isContentInside={true}
              >
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
                  <p className="mb-3 text-trunks text-xs">
                    Terms and Conditions
                  </p>
                  <p className="mb-3 text-trunks text-xs">
                    The Clubhouse Terms and Conditions
                  </p>
                  <p className="mb-3 text-trunks text-xs">Vip</p>
                </div>
              </Accordion>
            </div>
            <div className=" mb-2">
              <Accordion
                backgroundColor="bg-gohan"
                title={'Preferences'}
                isContentInside={true}
              >
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
              <Accordion
                backgroundColor="bg-gohan"
                title={'Accapted Methods'}
                isContentInside={true}
              >
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
              <Accordion
                backgroundColor="bg-gohan"
                title={'Follow Sportsbook.io'}
                isContentInside={true}
              >
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
              <Accordion
                backgroundColor="bg-gohan"
                title={'Sponsorships'}
                isContentInside={true}
              >
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
          <div className="flex justify-center mb-6 lg:hidden">
            <div className="rounded-[100px] bg-beerus flex justify-center items-center">
              <span className="mt-[6px] ml-3 mr-[17px]">
                <Image src={image1} className="mt-[6px]" alt="Exchange rate" />
              </span>
            </div>
          </div>
          <div>
            <h2 className="text-goten text-sm font-bold mb-5">Awards</h2>
            <div className="flex items-center flex-wrap lg:flex-nowrap">
              <div className="mr-2 ">
                <Image src={Curacao} alt="Curacao license" />
              </div>
              <div className="mr-2 ">
                <Image src={Award1} alt="Award 1" />
              </div>
              <div className="mr-2 ">
                <Image src={SbcAwards} alt="Award 2" />
              </div>
              <div className="mr-2 ">
                <Image src={Award2} alt="Award 3" />
              </div>
              <div className="mr-2 ">
                <Image src={Award3} alt="Award 4" />
              </div>
              <div className="mr-2 ">
                <Image src={Plus18} alt="18+" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Vip.getLayout = function getLayout(page: ReactNode) {
  return (
    <LayoutSportsbet
      sidebar={
        <div className="w-full h-full p-5">
          <Image src={SportsbetLogo} alt="Logo" />
        </div>
      }
    >
      <Vip />
    </LayoutSportsbet>
  );
};

export default Vip;
