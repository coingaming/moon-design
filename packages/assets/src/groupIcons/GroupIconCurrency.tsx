import React from 'react';

import IconCurrencyAda from '../icons/IconCurrencyAda';
import IconCurrencyArs from '../icons/IconCurrencyArs';
import IconCurrencyBdt from '../icons/IconCurrencyBdt';
import IconCurrencyBob from '../icons/IconCurrencyBob';
import IconCurrencyBrl from '../icons/IconCurrencyBrl';
import IconCurrencyBtc from '../icons/IconCurrencyBtc';
import IconCurrencyCad from '../icons/IconCurrencyCad';
import IconCurrencyClp from '../icons/IconCurrencyClp';
import IconCurrencyCny from '../icons/IconCurrencyCny';
import IconCurrencyCrc from '../icons/IconCurrencyCrc';
import IconCurrencyDoge from '../icons/IconCurrencyDoge';
import IconCurrencyEth from '../icons/IconCurrencyEth';
import IconCurrencyEur from '../icons/IconCurrencyEur';
import IconCurrencyGel from '../icons/IconCurrencyGel';
import IconCurrencyHkd from '../icons/IconCurrencyHkd';
import IconCurrencyIdr from '../icons/IconCurrencyIdr';
import IconCurrencyInr from '../icons/IconCurrencyInr';
import IconCurrencyIqd from '../icons/IconCurrencyIqd';
import IconCurrencyJpy from '../icons/IconCurrencyJpy';
import IconCurrencyKrw from '../icons/IconCurrencyKrw';
import IconCurrencyLtc from '../icons/IconCurrencyLtc';
import IconCurrencyMxn from '../icons/IconCurrencyMxn';
import IconCurrencyMyr from '../icons/IconCurrencyMyr';
import IconCurrencyPen from '../icons/IconCurrencyPen';
import IconCurrencyPkr from '../icons/IconCurrencyPkr';
import IconCurrencyRub from '../icons/IconCurrencyRub';
import IconCurrencySoc from '../icons/IconCurrencySoc';
import IconCurrencyThb from '../icons/IconCurrencyThb';
import IconCurrencyTrx from '../icons/IconCurrencyTrx';
import IconCurrencyTry from '../icons/IconCurrencyTry';
import IconCurrencyUah from '../icons/IconCurrencyUah';
import IconCurrencyUsd from '../icons/IconCurrencyUsd';
import IconCurrencyUsdt from '../icons/IconCurrencyUsdt';
import IconCurrencyVes from '../icons/IconCurrencyVes';
import IconCurrencyVnd from '../icons/IconCurrencyVnd';
import IconCurrencyXrp from '../icons/IconCurrencyXrp';

type CurrencyName =
  | 'ADA'
  | 'ARS' // Argentinian Peso
  | 'BDT'
  | 'BOB'
  | 'BRL'
  | 'BTC'
  | 'CAD'
  | 'CLP'
  | 'CRC'
  | 'CNY'
  | 'DOGE'
  | 'ETH'
  | 'EUR'
  | 'GEL'
  | 'HKD'
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
  | 'USDT'
  | 'VES'
  | 'VND'
  | 'TRX'
  | 'XRP';

export type GroupIconCurrencyProps = {
  color?: string;
  name: CurrencyName;
};

const currencyIcons = {
  ADA: IconCurrencyAda,
  ARS: IconCurrencyArs,
  BDT: IconCurrencyBdt,
  BOB: IconCurrencyBob,
  BRL: IconCurrencyBrl,
  BTC: IconCurrencyBtc,
  CAD: IconCurrencyCad,
  CLP: IconCurrencyClp,
  CRC: IconCurrencyCrc,
  CNY: IconCurrencyCny,
  DOGE: IconCurrencyDoge,
  ETH: IconCurrencyEth,
  EUR: IconCurrencyEur,
  GEL: IconCurrencyGel,
  HKD: IconCurrencyHkd,
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
  TRX: IconCurrencyTrx,
  TRY: IconCurrencyTry,
  USD: IconCurrencyUsd,
  USDT: IconCurrencyUsdt,
  UAH: IconCurrencyUah,
  VES: IconCurrencyVes,
  VND: IconCurrencyVnd,
  XRP: IconCurrencyXrp,
};

const GroupIconCurrency: React.FC<GroupIconCurrencyProps> &
  React.SVGProps<SVGSVGElement> = ({ color, name, ...props }) =>
  React.createElement(currencyIcons[name], {
    ...props,
    color: color || 'goku.60',
  });

export default GroupIconCurrency;
