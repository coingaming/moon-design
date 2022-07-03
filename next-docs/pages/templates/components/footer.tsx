import React, {ReactElement} from "react";
import {Switch} from "@heathmont/moon-components";
import {Accordion, Button} from "@heathmont/moon-core-tw";
import {ControlsChevronDown, ControlsChevronRight} from "@heathmont/moon-icons-tw";
import Image from "next/image";
import icon18 from "../../../public/templates/bitcasino/18+icon.png";
import awards1 from "../../../public/templates/bitcasino/awards1.png";
import awards2 from "../../../public/templates/bitcasino/awards2.png";
import awards3 from "../../../public/templates/bitcasino/awards3.png";
import bitcasinoLogo from "../../../public/templates/bitcasino/BitcasinoLogo.png";
import hubb from "../../../public/templates/bitcasino/Hubb.png";
import image1 from "../../../public/templates/bitcasino/image1.png";
import licences1 from "../../../public/templates/bitcasino/licences1.png";
import uk from "../../../public/templates/bitcasino/uk.png";
import Bitcasino from "../icons/bitcasino";
import Cardano from "../icons/cardano";
import DogeCoin from "../icons/dogeCoin";
import EthereumIc from "../icons/ethereumIc";
import Instagram from "../icons/instagram";
import LtchLogo from "../icons/ltchLogo";
import Telegram from "../icons/telegram";
import Tiktok from "../icons/tiktok";
import TronLogo from "../icons/tronLogo";
import Twitter from "../icons/twitter";
import UsdIc from "../icons/usdtIc";
import XAbove from "../icons/xAbove";
import Youtube from "../icons/youtube";
import Subtitle from "./subtitle";
import Title from "./title";

interface Props {
  title: string;
  subtitle: string;
  logo: ReactElement;
  handleReadMore?: () => any;
}

const Footer = ({
  title,
  subtitle,
  logo,
  handleReadMore
}: Props) => {
  return (<div className='flex flex-col'>
    <div
      className="flex flex-col items-center self-center h-full px-5 mt-16 sm:w-[80%] sm:mt-[124px] lg:w-[90%] xl:w-[1232px]"
      style={{ background: 'linear-gradient rgba(36, 3, 63, 0) 0% #24033F 100%' }}
    >
      <div className="flex flex-col lg:items-start">
        <Title
          text={title}
          classes="text-bulma !text-left leading-8 font-semibold sm:px-3 sm:text-left md:text-moon-20 lg:text-moon-20"
        />
        <Subtitle
          text={subtitle}
          classes="text-bulma opacity-60 !text-left !leading-8 lg:text-moon-16 md:text-moon-16 sm:text-left"
        />
      </div>
      <div className="mt-3 mb-3">
        <Button
          className="flex justify-center items-center cursor-pointer bg-gohan w-[32px] h-[32px] rounded-full"
          onClick={() => handleReadMore && handleReadMore()}
        ><ControlsChevronDown /></Button>
      </div>
    </div>
    <div className="p-0 mx-6 md:p-5 md:mx-auto md:w-[90%] xl:w-[1262px]">
      <div className="flex flex-row justify-start items-center py-4 border border-x-0 border-y-beerus">
        {logo}
        <ControlsChevronRight className="mx-3" />
        <p>Mainpage</p>
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
  </div>)
};

export default Footer;
