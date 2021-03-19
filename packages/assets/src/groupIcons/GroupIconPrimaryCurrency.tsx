import React from 'react';

import {
  IconBitcoin,
  IconAustralianDollar,
  IconBrazilianReal,
  IconCanadianDollar,
  IconCardano,
  IconChilieanPeso,
  IconChineseYuan,
  IconDanishKrone,
  IconEthereum,
  IconEuro,
  IconGbPoundSterling,
  IconHongKongDollar,
  IconIcelandicKrona,
  IconIndianRupee,
  IconJapaneseYen,
  IconLitecoin,
  IconNewTaiwanDollar,
  IconNewZealandDollar,
  IconPolandZloty,
  IconRipple,
  IconRussianRuble,
  IconSingaporeDollar,
  IconSoc,
  IconSouthKoreanWon,
  IconSwedishKrona,
  IconSwissFranc,
  IconThaiBaht,
  IconTron,
  IconTurkishLira,
  IconUsaDollar,
} from '../currencies';

type CurrencyName =
  | 'ADA'
  | 'BRL'
  | 'BTC'
  | 'CAD'
  | 'CNY'
  | 'ETH'
  | 'EUR'
  | 'HKD'
  | 'INR'
  | 'JPY'
  | 'KRW'
  | 'LTC'
  | 'RUB'
  | 'SOC'
  | 'THB'
  | 'TRX'
  | 'TRY'
  | 'USD'
  | 'XRP'
  | 'CHF'
  | 'SEK'
  | 'SGD'
  | 'PLN'
  | 'NZD'
  | 'TWD'
  | 'ISK'
  | 'GBP'
  | 'DKK'
  | 'CLP'
  | 'AUD';

export type GroupIconPrimaryCurrencyProps = {
  name: CurrencyName;
};

const currencyIcons = {
  ADA: IconCardano,
  BRL: IconBrazilianReal,
  BTC: IconBitcoin,
  CAD: IconCanadianDollar,
  CNY: IconChineseYuan,
  ETH: IconEthereum,
  EUR: IconEuro,
  HKD: IconHongKongDollar,
  INR: IconIndianRupee,
  JPY: IconJapaneseYen,
  KRW: IconSouthKoreanWon,
  LTC: IconLitecoin,
  RUB: IconRussianRuble,
  SOC: IconSoc,
  THB: IconThaiBaht,
  TRX: IconTron,
  TRY: IconTurkishLira,
  USD: IconUsaDollar,
  XRP: IconRipple,
  CHF: IconSwissFranc,
  SEK: IconSwedishKrona,
  SGD: IconSingaporeDollar,
  PLN: IconPolandZloty,
  NZD: IconNewZealandDollar,
  TWD: IconNewTaiwanDollar,
  ISK: IconIcelandicKrona,
  GBP: IconGbPoundSterling,
  DKK: IconDanishKrone,
  CLP: IconChilieanPeso,
  AUD: IconAustralianDollar,
};

const GroupIconPrimaryCurrency: React.FC<GroupIconPrimaryCurrencyProps> &
  React.SVGProps<SVGSVGElement> = ({ name, ...props }) =>
  React.createElement(currencyIcons[name], {
    ...props,
  });

export default GroupIconPrimaryCurrency;
