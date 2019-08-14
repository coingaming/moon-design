import * as React from 'react';
import { colors } from '@heathmont/sportsbet-tokens';

import { IconCurrencyArs } from '../svg/IconCurrencyArs';
import { IconCurrencyBdt } from '../svg/IconCurrencyBdt';
import { IconCurrencyBob } from '../svg/IconCurrencyBob';
import { IconCurrencyBrl } from '../svg/IconCurrencyBrl';
import { IconCurrencyBtc } from '../svg/IconCurrencyBtc';
import { IconCurrencyCad } from '../svg/IconCurrencyCad';
import { IconCurrencyClp } from '../svg/IconCurrencyClp';
import { IconCurrencyCrc } from '../svg/IconCurrencyCrc';
import { IconCurrencyCny } from '../svg/IconCurrencyCny';
import { IconCurrencyEth } from '../svg/IconCurrencyEth';
import { IconCurrencyEur } from '../svg/IconCurrencyEur';
import { IconCurrencyIdr } from '../svg/IconCurrencyIdr';
import { IconCurrencyInr } from '../svg/IconCurrencyInr';
import { IconCurrencyIqd } from '../svg/IconCurrencyIqd';
import { IconCurrencyJpy } from '../svg/IconCurrencyJpy';
import { IconCurrencyKrw } from '../svg/IconCurrencyKrw';
import { IconCurrencyLtc } from '../svg/IconCurrencyLtc';
import { IconCurrencyMxn } from '../svg/IconCurrencyMxn';
import { IconCurrencyMyr } from '../svg/IconCurrencyMyr';
import { IconCurrencyPen } from '../svg/IconCurrencyPen';
import { IconCurrencyPkr } from '../svg/IconCurrencyPkr';
import { IconCurrencyRub } from '../svg/IconCurrencyRub';
import { IconCurrencySoc } from '../svg/IconCurrencySoc';
import { IconCurrencyThb } from '../svg/IconCurrencyThb';
import { IconCurrencyTry } from '../svg/IconCurrencyTry';
import { IconCurrencyUah } from '../svg/IconCurrencyUah';
import { IconCurrencyUsd } from '../svg/IconCurrencyUsd';
import { IconCurrencyVes } from '../svg/IconCurrencyVes';
import { IconCurrencyVnd } from '../svg/IconCurrencyVnd';

type CurrencyName =
  | 'ARS'
  | 'BDT'
  | 'BOB'
  | 'BRL'
  | 'BTC'
  | 'CAD'
  | 'CLP'
  | 'CRC'
  | 'CNY'
  | 'ETH'
  | 'EUR'
  | 'IDR'
  | 'IQD'
  | 'INR'
  | 'JPY'
  | 'KRW'
  | 'LTC'
  | 'MXN'
  | 'MYR'
  | 'PEN'
  | 'PKR'
  | 'RUB'
  | 'SOC'
  | 'THB'
  | 'TRY'
  | 'UAH'
  | 'USD'
  | 'VES'
  | 'VND';

export type GroupIconCurrencyProps = {
  color?: string;
  name: CurrencyName;
};

const currencyIcons = {
  ARS: IconCurrencyArs,
  BDT: IconCurrencyBdt,
  BOB: IconCurrencyBob,
  BRL: IconCurrencyBrl,
  BTC: IconCurrencyBtc,
  CAD: IconCurrencyCad,
  CLP: IconCurrencyClp,
  CRC: IconCurrencyCrc,
  CNY: IconCurrencyCny,
  ETH: IconCurrencyEth,
  EUR: IconCurrencyEur,
  IDR: IconCurrencyIdr,
  INR: IconCurrencyInr,
  IQD: IconCurrencyIqd,
  JPY: IconCurrencyJpy,
  KRW: IconCurrencyKrw,
  LTC: IconCurrencyLtc,
  MXN: IconCurrencyMxn,
  MYR: IconCurrencyMyr,
  PEN: IconCurrencyPen,
  PKR: IconCurrencyPkr,
  RUB: IconCurrencyRub,
  SOC: IconCurrencySoc,
  THB: IconCurrencyThb,
  TRY: IconCurrencyTry,
  USD: IconCurrencyUsd,
  UAH: IconCurrencyUah,
  VES: IconCurrencyVes,
  VND: IconCurrencyVnd,
};

export const GroupIconCurrency: React.FC<GroupIconCurrencyProps> &
  React.SVGProps<SVGSVGElement> = ({ color, name, ...props }) => {
  return React.createElement(currencyIcons[name], {
    ...props,
    color: color || colors.palette.goku[60],
  });
};
