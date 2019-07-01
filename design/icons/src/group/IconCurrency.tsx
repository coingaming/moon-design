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
      return <IconCurrencyArs color={colors.palette.goku[60]} />;
    case 'BOB':
      return <IconCurrencyBob color={colors.palette.goku[60]} />;
    case 'BRL':
      return <IconCurrencyBrl color={colors.palette.goku[60]} />;
    case 'BTC':
      return <IconCurrencyBtc color={colors.palette.goku[60]} />;
    case 'CAD':
      return <IconCurrencyCad color={colors.palette.goku[60]} />;
    case 'CLP':
      return <IconCurrencyClp color={colors.palette.goku[60]} />;
    case 'CRC':
      return <IconCurrencyCrc color={colors.palette.goku[60]} />;
    case 'CNY':
      return <IconCurrencyCny color={colors.palette.goku[60]} />;
    case 'ETH':
      return <IconCurrencyEth color={colors.palette.goku[60]} />;
    case 'EUR':
      return <IconCurrencyEur color={colors.palette.goku[60]} />;
    case 'IDR':
      return <IconCurrencyIdr color={colors.palette.goku[60]} />;
    case 'INR':
      return <IconCurrencyInr color={colors.palette.goku[60]} />;
    case 'JPY':
      return <IconCurrencyJpy color={colors.palette.goku[60]} />;
    case 'LTC':
      return <IconCurrencyLtc color={colors.palette.goku[60]} />;
    case 'MXN':
      return <IconCurrencyMxn color={colors.palette.goku[60]} />;
    case 'MYR':
      return <IconCurrencyMyr color={colors.palette.goku[60]} />;
    case 'PEN':
      return <IconCurrencyPen color={colors.palette.goku[60]} />;
    case 'RUB':
      return <IconCurrencyRub color={colors.palette.goku[60]} />;
    case 'SOC':
      return <IconCurrencySoc color={colors.palette.goku[60]} />;
    case 'THB':
      return <IconCurrencyThb color={colors.palette.goku[60]} />;
    case 'TRY':
      return <IconCurrencyTry color={colors.palette.goku[60]} />;
    case 'USD':
      return <IconCurrencyUsd color={colors.palette.goku[60]} />;
    case 'VES':
      return <IconCurrencyVes color={colors.palette.goku[60]} />;
    case 'VND':
      return <IconCurrencyVnd color={colors.palette.goku[60]} />;
    default:
      return null;
  }
};
