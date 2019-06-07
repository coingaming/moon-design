/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';
import { spacing } from '@heathmont/sportsbet-utils';
import { IconNotification } from '@heathmont/sportsbet-icons/lib/svg/IconNotification';
import { IconLiveChat } from '@heathmont/sportsbet-icons/lib/svg/IconLiveChat';
import { Select } from '@heathmont/sportsbet-components';
jsx;

import {
  DetailsContainer,
  CenteredLogo,
  IconCaptionLogo,
  Username,
  TopMenuSection,
  TopMenuLink,
  Balance,
  LinkItem,
  List,
  Item,
  SelectSettingsSection,
  SocialSection,
  HamburgerDetailsCaption,
  SocialIcons,
  Icon,
  IconFacebook,
  IconGoogle,
  IconTelegram,
  IconTwitter,
  CuracaoSection,
  CuracaoLogoImage,
  AllRightsReserved,
  SectionItem,
  ItemCount,
  ItemCaption,
} from '@heathmont/sportsbet-user-portal-components';
import { IconSoccer } from '@heathmont/sportsbet-icons/lib/svg/IconSoccer';
import { IconSportsCenter } from '@heathmont/sportsbet-icons/lib/svg/IconSportsCenter';
import { IconHorseRacing } from '@heathmont/sportsbet-icons';

jsx;

export const HamburgerDetailsContent = () => {
  return (
    <DetailsContainer>
      <CenteredLogo>
        <IconCaptionLogo />
        <Username>Ivergletzeternateigh</Username>
      </CenteredLogo>

      <TopMenuSection>
        <TopMenuLink href="#" optional>
          <Balance>0</Balance>
          <LinkItem>My bets</LinkItem>
        </TopMenuLink>
        <TopMenuLink href="#" optional>
          <IconNotification
            css={{ fontSize: '1.5rem', marginBottom: spacing('small') }}
          />
          <LinkItem>Notifications</LinkItem>
        </TopMenuLink>
        <TopMenuLink href="#" optional>
          <IconLiveChat
            css={{ fontSize: '1.5rem', marginBottom: spacing('small') }}
          />
          <LinkItem>Live chat</LinkItem>
        </TopMenuLink>
      </TopMenuSection>

      <List>
        <Item active>
          <IconSoccer />
          <ItemCaption>Sports</ItemCaption>
        </Item>
        <Item>
          <IconSoccer />
          <ItemCaption>Casino</ItemCaption>
          <ItemCount>241</ItemCount>
        </Item>
        <Item>
          <IconSportsCenter />
          <ItemCaption>Promo</ItemCaption>
          <ItemCount>548</ItemCount>
        </Item>
        <SectionItem>Popular</SectionItem>
        <Item>
          <IconSoccer />
          <ItemCaption>Fantasy</ItemCaption>
        </Item>
        <Item>
          <IconHorseRacing />
          <ItemCaption>Horse Racing</ItemCaption>
        </Item>
        <Item>
          <IconSoccer />
          <ItemCaption>Player Props</ItemCaption>
        </Item>
        <Item>
          <IconSoccer />
          <ItemCaption>Virtual Sports</ItemCaption>
        </Item>
      </List>

      <SelectSettingsSection>
        <Select>
          <option value="en">English</option>
          <option value="pt">Portuguese</option>
        </Select>
        <Select css={{ marginTop: spacing() }}>
          <option value="decimal">Decimal</option>
          <option value="american">American</option>
          <option value="hong-kong">Hong Kong</option>
        </Select>
      </SelectSettingsSection>

      <SocialSection>
        <HamburgerDetailsCaption>Follow us</HamburgerDetailsCaption>
        <SocialIcons>
          <Icon>
            <IconFacebook />
          </Icon>
          <Icon>
            <IconGoogle />
          </Icon>
          <Icon>
            <IconTelegram />
          </Icon>
          <Icon>
            <IconTwitter />
          </Icon>
        </SocialIcons>
      </SocialSection>

      <CuracaoSection>
        <CuracaoLogoImage
          src="/assets/img/curacao.png"
          alt="Curaçao eGaming License"
        />
        <HamburgerDetailsCaption>
          Curaçao eGaming License
        </HamburgerDetailsCaption>
      </CuracaoSection>
      <AllRightsReserved>© All rights reserved.</AllRightsReserved>
    </DetailsContainer>
  );
};
