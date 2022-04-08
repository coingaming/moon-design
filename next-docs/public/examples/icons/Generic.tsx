import React from 'react';
import {
  GenericAbout,
  GenericAlarm,
  GenericAlarmRound,
  GenericAmountNumber,
  GenericBet,
  GenericBetslip,
  GenericBlock,
  GenericBookmark,
  GenericBrowser,
  GenericBurgerRegular,
  GenericBurgerZig,
  GenericCheckAlternative,
  GenericCheckRounded,
  GenericClose,
  GenericDelete,
  GenericDislike,
  GenericDownload,
  GenericDragHandle,
  GenericEdit,
  GenericGlobe,
  GenericHeart,
  GenericHelp,
  GenericHome,
  GenericIdea,
  GenericInfo,
  GenericInfoAlternative,
  GenericLightningBolt,
  GenericLike,
  GenericLink,
  GenericLogIn,
  GenericLogOut,
  GenericLoyalty,
  GenericMention,
  GenericMenu,
  GenericMinus,
  GenericMultiBet,
  GenericNews,
  GenericPending,
  GenericPicture,
  GenericPlus,
  GenericSearch,
  GenericSettings,
  GenericShareAndroid,
  GenericShareIos,
  GenericShareIosBig,
  GenericStar,
  GenericTag,
  GenericTicket,
  GenericTrophy,
  GenericUpload,
  GenericUser,
  GenericUsers,
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
    <Icon {...wrapperProps} name="GenericAbout">
      <GenericAbout {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericAlarm">
      <GenericAlarm {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericAlarmRound">
      <GenericAlarmRound {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericAmountNumber">
      <GenericAmountNumber {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericBet">
      <GenericBet {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericBetslip">
      <GenericBetslip {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericBlock">
      <GenericBlock {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericBookmark">
      <GenericBookmark {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericBrowser">
      <GenericBrowser {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericBurgerRegular">
      <GenericBurgerRegular {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericBurgerZig">
      <GenericBurgerZig {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericCheckAlternative">
      <GenericCheckAlternative {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericCheckRounded">
      <GenericCheckRounded {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericClose">
      <GenericClose {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericDelete">
      <GenericDelete {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericDislike">
      <GenericDislike {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericDownload">
      <GenericDownload {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericDragHandle">
      <GenericDragHandle {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericEdit">
      <GenericEdit {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericGlobe">
      <GenericGlobe {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericHeart">
      <GenericHeart {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericHelp">
      <GenericHelp {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericHome">
      <GenericHome {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericIdea">
      <GenericIdea {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericInfo">
      <GenericInfo {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericInfoAlternative">
      <GenericInfoAlternative {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericLightningBolt">
      <GenericLightningBolt {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericLike">
      <GenericLike {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericLink">
      <GenericLink {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericLogIn">
      <GenericLogIn {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericLogOut">
      <GenericLogOut {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericLoyalty">
      <GenericLoyalty {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericMention">
      <GenericMention {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericMenu">
      <GenericMenu {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericMinus">
      <GenericMinus {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericMultiBet">
      <GenericMultiBet {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericNews">
      <GenericNews {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericPending">
      <GenericPending {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericPicture">
      <GenericPicture {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericPlus">
      <GenericPlus {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericSearch">
      <GenericSearch {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericSettings">
      <GenericSettings {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericShareAndroid">
      <GenericShareAndroid {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericShareIos">
      <GenericShareIos {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericShareIosBig">
      <GenericShareIosBig {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericStar">
      <GenericStar {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericTag">
      <GenericTag {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericTicket">
      <GenericTicket {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericTrophy">
      <GenericTrophy {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericUpload">
      <GenericUpload {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericUser">
      <GenericUser {...props} />
    </Icon>
    <Icon {...wrapperProps} name="GenericUsers">
      <GenericUsers {...props} />
    </Icon>
  </>
);

export default Example;
