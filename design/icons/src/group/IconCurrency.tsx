import * as React from 'react';

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

type CurrencyType =
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
  name: CurrencyType;
};
export const IconCurrency: React.FC<IconProp> = ({ name }) => {
  switch (name) {
    case 'ARS':
      return <IconCurrencyArs />;
    case 'BOB':
      return <IconCurrencyBob />;
    case 'BRL':
      return <IconCurrencyBrl />;
    case 'BTC':
      return <IconCurrencyBtc />;
    case 'CAD':
      return <IconCurrencyCad />;
    case 'CLP':
      return <IconCurrencyClp />;
    case 'CRC':
      return <IconCurrencyCrc />;
    case 'CNY':
      return <IconCurrencyCny />;
    case 'ETH':
      return <IconCurrencyEth />;
    case 'EUR':
      return <IconCurrencyEur />;
    case 'IDR':
      return <IconCurrencyIdr />;
    case 'INR':
      return <IconCurrencyInr />;
    case 'JPY':
      return <IconCurrencyJpy />;
    case 'LTC':
      return <IconCurrencyLtc />;
    case 'MXN':
      return <IconCurrencyMxn />;
    case 'MYR':
      return <IconCurrencyMyr />;
    case 'PEN':
      return <IconCurrencyPen />;
    case 'RUB':
      return <IconCurrencyRub />;
    case 'SOC':
      return <IconCurrencySoc />;
    case 'THB':
      return <IconCurrencyThb />;
    case 'TRY':
      return <IconCurrencyTry />;
    case 'USD':
      return <IconCurrencyUsd />;
    case 'VES':
      return <IconCurrencyVes />;
    case 'VND':
      return <IconCurrencyVnd />;
    default:
      return null;
  }
};
