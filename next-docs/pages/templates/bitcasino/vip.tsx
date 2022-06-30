import React, {ReactNode, useEffect, useState} from 'react';
import { Carousel } from '@heathmont/moon-components';
import { Button } from '@heathmont/moon-core-tw';
import { MailEnvelope, ArrowsLeft, ShopCrypto } from '@heathmont/moon-icons';

import { ArrowsDown, ControlsChevronDown } from '@heathmont/moon-icons-tw';
import Image from 'next/image';
import KingKaka from '../../../public/templates/bitcasino/kingKaka.png';
import explore1 from '../../../public/templates/explore-1.png';
import explore2 from '../../../public/templates/explore-2.png';
import explore3 from '../../../public/templates/explore-3.png';
import explore4 from '../../../public/templates/explore-4.png';
import gift from '../../../public/templates/gift.png';
import handshake from '../../../public/templates/handshake.png';
import promo from '../../../public/templates/promo.png';
import support from '../../../public/templates/support.png';
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
  return (
    <div className="w-full h-full flex sm:px-3 px-0">
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
      <div className="w-[160px] flex flex-col items-stretch relative  lg:w-[280px]">
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
        <div className="flex sm:items-center sm:w-[100%] sm:h-[679px] sm:mt-[120px]">
          <div className="relative w-full justify-end self-end">
            <div className=" min-w-[600px] sm:mr-[124px] lg:ml-24">
              <Image src={KingKaka} objectFit="contain" />
            </div>
            <div
              className="absolute left-0 bottom-0 w-full h-[150px] sm:hidden"
              style={{
                background:
                  'linear-gradient(180deg, rgba(36, 3, 63, 0)  0%, rgba(36, 3, 63, 0.55)  49.48%, #24033F  100%',
              }}
            />
          </div>
        </div>
        <div className="flex flex-col absolute top-[60%] px-8 -mb-10 -bottom-48 z-1 sm:relative sm:top-0 sm:bottom-0 sm:mb-0 sm:pb-24 sm:pt-[72px] sm:w-[50%] sm:items-center md:w-[65%]">
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
          <p className="text-moon-32 text-center font-semibold p-4 mb-8 ">
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
          background:
            'linear-gradient rgba(36, 3, 63, 0)  0%  #24033F  100%',
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
          <div
            className="bg-gohan w-[32px] h-[32px] rounded-full  flex justify-center items-center cursor-pointer"
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
    <div className="w-full min-h-screen theme-bitcasino-dark bg-goku text-white">
      {page}
    </div>
  );
};

export default Vip;
