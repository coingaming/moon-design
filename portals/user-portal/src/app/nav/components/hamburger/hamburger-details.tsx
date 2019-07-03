/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';
import { IconNotification } from '@heathmont/sportsbet-icons/lib/svg/IconNotification';
import { IconLiveChat } from '@heathmont/sportsbet-icons/lib/svg/IconLiveChat';
import { Select } from '@heathmont/sportsbet-components';
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
  CuracaoSection,
  CuracaoLogoImage,
  AllRightsReserved,
  SectionItem,
  ItemCount,
  ItemCaption,
  SubMenuItem,
  HamburgerMenuFooter,
} from '@heathmont/sportsbet-user-portal-components';
import {
  GroupIconThirdParty,
  IconSportsTennis,
  IconInPlay,
  IconMenuHome,
  IconCalendar,
  IconAsianView,
  IconAllSports,
  IconLogoPlain,
} from '@heathmont/sportsbet-icons';
import { NavLink } from 'react-router-dom';

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
          <IconNotification />
          <LinkItem>Notifications</LinkItem>
        </TopMenuLink>
        <TopMenuLink href="#" optional>
          <IconLiveChat />
          <LinkItem>Live chat</LinkItem>
        </TopMenuLink>
      </TopMenuSection>
      <List>
        <Item to="" as={NavLink}>
          <ItemCaption>Sports</ItemCaption>
        </Item>
        <SubMenuItem>
          <IconMenuHome />
          <ItemCaption>Home</ItemCaption>
        </SubMenuItem>
        <SubMenuItem>
          <IconInPlay />
          <ItemCaption>In-Play</ItemCaption>
        </SubMenuItem>
        <SubMenuItem>
          <IconCalendar />
          <ItemCaption>Upcoming</ItemCaption>
        </SubMenuItem>
        <SubMenuItem>
          <IconAsianView />
          <ItemCaption>Asian View</ItemCaption>
        </SubMenuItem>
        <SubMenuItem>
          <IconAllSports />
          <ItemCaption>All Sports</ItemCaption>
        </SubMenuItem>
        <SubMenuItem>
          <IconLogoPlain />
          <ItemCaption>News</ItemCaption>
        </SubMenuItem>
      </List>
      <List>
        <SectionItem>Popular</SectionItem>
        <SubMenuItem>
          <IconLogoPlain />
          <ItemCaption>Fantasy</ItemCaption>
        </SubMenuItem>
        <SubMenuItem>
          <IconLogoPlain />
          <ItemCaption>Horse Racing</ItemCaption>
        </SubMenuItem>
        <SubMenuItem>
          <IconLogoPlain />
          <ItemCaption>Player Props</ItemCaption>
        </SubMenuItem>
        <SubMenuItem>
          <IconLogoPlain />
          <ItemCaption>Virtual sports</ItemCaption>
        </SubMenuItem>
        <SubMenuItem>
          <IconLogoPlain />
          <ItemCaption>Seria A</ItemCaption>
        </SubMenuItem>
        <SubMenuItem>
          <IconSportsTennis />
          <ItemCaption>APT</ItemCaption>
        </SubMenuItem>
        <SubMenuItem>
          <IconLogoPlain />
          <ItemCaption>World Championship</ItemCaption>
        </SubMenuItem>
        <SubMenuItem>
          <IconLogoPlain />
          <ItemCaption>Bombay Club</ItemCaption>
        </SubMenuItem>
      </List>
      <List>
        <Item>
          <ItemCaption>Casino</ItemCaption>
          <ItemCount>241</ItemCount>
        </Item>
        <Item>
          <ItemCaption>Promotion</ItemCaption>
          <ItemCount>548</ItemCount>
        </Item>
        <Item>
          <ItemCaption>Support</ItemCaption>
        </Item>
        <Item>
          <ItemCaption>About</ItemCaption>
        </Item>
      </List>
      <HamburgerMenuFooter>
        <SelectSettingsSection>
          <Select>
            <option value="en">English</option>
            <option value="pt">Portuguese</option>
          </Select>
          <Select>
            <option value="decimal">Decimal</option>
            <option value="american">American</option>
            <option value="hong-kong">Hong Kong</option>
          </Select>
        </SelectSettingsSection>
        <SocialSection>
          <HamburgerDetailsCaption>Follow us</HamburgerDetailsCaption>
          <SocialIcons>
            <Icon>
              <GroupIconThirdParty name="facebook" />
            </Icon>
            <Icon>
              <GroupIconThirdParty name="instagram" />
            </Icon>
            <Icon>
              <GroupIconThirdParty name="google" />
            </Icon>
            <Icon>
              <GroupIconThirdParty name="telegram" />
            </Icon>
            <Icon>
              <GroupIconThirdParty name="twitter" />
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
      </HamburgerMenuFooter>
    </DetailsContainer>
  );
};
