import * as React from 'react';

import { colors } from '@heathmont/sportsbet-tokens';

import { IconCurrencyArs } from '../svg/IconCurrencyArs';
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
import { IconCurrencyJpy } from '../svg/IconCurrencyJpy';
import { IconCurrencyLtc } from '../svg/IconCurrencyLtc';
import { IconCurrencyMxn } from '../svg/IconCurrencyMxn';
import { IconCurrencyMyr } from '../svg/IconCurrencyMyr';
import { IconCurrencyPen } from '../svg/IconCurrencyPen';
import { IconCurrencyRub } from '../svg/IconCurrencyRub';
import { IconCurrencySoc } from '../svg/IconCurrencySoc';
import { IconCurrencyThb } from '../svg/IconCurrencyThb';
import { IconCurrencyTry } from '../svg/IconCurrencyTry';
import { IconCurrencyUsd } from '../svg/IconCurrencyUsd';
import { IconCurrencyVes } from '../svg/IconCurrencyVes';
import { IconCurrencyVnd } from '../svg/IconCurrencyVnd';

type CurrencyName =
  | 'ARS'
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
  | 'INR'
  | 'JPY'
  | 'LTC'
  | 'MXN'
  | 'MYR'
  | 'PEN'
  | 'RUB'
  | 'SOC'
  | 'THB'
  | 'TRY'
  | 'USD'
  | 'VES'
  | 'VND';

type IconProp = {
  color: string;
  name: CurrencyName;
};

export const GroupIconCurrency: React.FC<IconProp> = ({
  color,
  name,
  ...props
}) => {
  const currencyIcons = {
    ARS: IconCurrencyArs,
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
    JPY: IconCurrencyJpy,
    LTC: IconCurrencyLtc,
    MXN: IconCurrencyMxn,
    MYR: IconCurrencyMyr,
    PEN: IconCurrencyPen,
    RUB: IconCurrencyRub,
    SOC: IconCurrencySoc,
    THB: IconCurrencyThb,
    TRY: IconCurrencyTry,
    USD: IconCurrencyUsd,
    VES: IconCurrencyVes,
    VND: IconCurrencyVnd,
  };

  return React.createElement(currencyIcons[name], {
    ...props,
    color: color || colors.palette.goku[60],
  });
};
