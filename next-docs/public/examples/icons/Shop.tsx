import React from 'react';
import {
  ShopBag,
  ShopBank,
  ShopBasket,
  ShopBuyCrypto,
  ShopCard,
  ShopCart,
  ShopCrypto,
  ShopCryptoCoin,
  ShopWallet,
  ShopWirelessPay,
} from '@heathmont/moon-icons';
import Icon from './Icon';

interface Props {
  wrapperProps: {
    onClick: (iconName: string) => void;
    selectedIcons: string[];
  };
  props: {
    fontSize: string;
  };
}

const Example = ({ wrapperProps, props }: Props) => (
  <>
    <Icon {...wrapperProps} name="ShopBag">
      <ShopBag {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ShopBank">
      <ShopBank {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ShopBasket">
      <ShopBasket {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ShopBuyCrypto">
      <ShopBuyCrypto {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ShopCard">
      <ShopCard {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ShopCart">
      <ShopCart {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ShopCrypto">
      <ShopCrypto {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ShopCryptoCoin">
      <ShopCryptoCoin {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ShopWallet">
      <ShopWallet {...props} />
    </Icon>
    <Icon {...wrapperProps} name="ShopWirelessPay">
      <ShopWirelessPay {...props} />
    </Icon>
  </>
);

export default Example;
