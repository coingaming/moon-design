import React, { useState } from 'react';

import {
  FilesFile,
  FilesFolderClosed,
  FilesClipboard,
  FilesCopy,
  FilesCase,
  FilesSticker,
  FilesGlasses,
  FilesStickers,
  FilesExternalLink,
  FilesPrint,
  FilesScan,
  FilesShare,
  FilesFolderZip,
  FilesClipboardText,
  FilesFolderOpen,
  FilesSave,
  FilesFolderOpenAlternative,
  FilesMagazine,
  FilesDraft,
  FilesText,
  FilesTable,
  FilesCode,
  FilesAdd,
  FilesRemove,
  FilesDelete,
  FilesImport,
  FilesExport,
  ArrowsTopRight,
  ArrowsUp,
  ArrowsDown,
  ArrowsTransfer,
  ArrowsReply,
  ArrowsForward,
  ArrowsChevronLeftDouble,
  ArrowsChevronRightDouble,
  ArrowsChevronDownDouble,
  ArrowsChevronUpDouble,
  ArrowsTopLeft,
  ArrowsBottomRight,
  ArrowsBottomLeft,
  ArrowsDiagonalsBltr,
  ArrowsDiagonalsTlbr,
  ArrowsRefresh,
  ArrowsUpdate,
  ArrowsRightCurved,
  ArrowsLeftCurved,
  ArrowsLeft,
  ArrowsRight,
  ControlsClose,
  ControlsCloseSmall,
  ControlsPlus,
  ControlsMinus,
  ControlsChevronUp,
  ControlsChevronLeft,
  ControlsChevronDown,
  ControlsChevronRight,
  ControlsExpand,
  ControlsCollapse,
  ControlsDiagonalsInsight,
  ControlsDiagonalsOutsight,
  ControlsEye,
  ControlsEyeCrossed,
  ControlsChevronDownSmall,
  ControlsChevronUpSmall,
  ControlsChevronRightSmall,
  ControlsChevronLeftSmall,
  ControlsVerticalDoubleChevron,
  ControlsClear,
  MediaMusic,
  MediaTuner,
  MediaPhoto,
  MediaVolume,
  MediaNoVolume,
  MediaMice,
  MediaMiceAlternative,
  MediaVideo,
  MediaGif,
  MediaHeadphones,
  MediaFastBack,
  MediaFastForward,
  MediaMegaphone,
  MediaSoundwave,
  MediaStop,
  MediaPause,
  MediaTunerAlternative,
  MediaPlay,
  MediaMonitor,
  TimeClock,
  TimeCalendarAdd,
  TimeTime,
  TimeCalendarRemove,
  TimeSandglass,
  TimeCalendarAlternative,
  TimeAlarm,
  TimeWatch,
  TimeCalendarDate,
  TimeCalendar,
  TimeCalendarSucsess,
  TimeStopwatch,
  TimeStopwatchTimer,
  NotificationsBell,
  NotificationsBellAlarm,
  NotificationsBellRinging,
  NotificationsBellRingingAlternative,
  NotificationsBellCross,
  NotificationsSettings,
  NotificationsActivity,
  NotificationsError,
  NotificationsAlert,
  NotificationsQuestionMark,
  NotificationsNotifications,
  NotificationsApp,
  NotificationsAddBell,
  ChatCommentBubble,
  ChatChat,
  ChatCommentBubbleQuestionMark,
  ChatCommentBubbleAlert,
  ChatComment,
  ChatCommentAdd,
  ChatCommentRemove,
  ChatCommentText,
  ChatDoubleBubble,
  ChatStatsChat,
  MailEnvelope,
  MailEmailStats,
  MailLink,
  MailSend,
  MailFlag,
  MailFilter,
  MailBox,
  MailFilterCrossed,
  MapsMap,
  MapsMarker,
  MapsPinAdd,
  MapsLocation,
  MapsPinLocation,
  MapsPin,
  MapsCompas,
  MapsPanorama,
  MapsWorld,
  ShopCart,
  ShopBasket,
  ShopBag,
  ShopWallet,
  ShopCard,
  ShopWirelessPay,
  ShopCrypto,
  ShopCryptoCoin,
  DevicesMac,
  DevicesSmartphone,
  DevicesMouse,
  DevicesMacbook,
  DevicesMacbookAndIphone,
  DevicesBluetooth,
  DevicesPhone,
  DevicesTvBox,
  DevicesKeyboard,
  DevicesJoystick,
  TextCut,
  TextIncreaseIndent,
  TextStyle,
  TextDescreaseIndent,
  TextSize,
  TextAncor,
  TextTable,
  TextNumbersList,
  TextMarker,
  TextBulletsList,
  TextLeftAlign,
  TextBold,
  TextRightAlign,
  TextItalic,
  TextCenter,
  TextUnderline,
  TextAttach,
  TextClearFormatting,
  TextIncertLine,
  TextStrikethrough,
  TextMath,
  TextCards,
  TextTableAlternative,
  ChartPieChart,
  ChartRound,
  ChartRelation,
  ChartFin,
  ChartLine,
  ChartBar,
  ChartBarVertical,
  ChartArea,
  ChartDashboard,
  ChartBarAlternitive,
  SoftwareCode,
  SoftwareBug,
  SoftwareWrench,
  SoftwareShutdown,
  SoftwareNut,
  SoftwareDownload,
  SoftwareLogin,
  SoftwareLogOut,
  SoftwareCursor,
  SoftwareHand,
  SoftwareSettings,
  SoftwareDashboard,
  SoftwarePlate,
  SoftwareData,
  SoftwarePuzzle,
  SoftwareSorting,
  GenericHome,
  GenericDelete,
  GenericSearch,
  GenericUpload,
  GenericInfo,
  GenericBrowser,
  GenericPicture,
  GenericEdit,
  GenericShareAndroid,
  GenericBookmark,
  GenericUsers,
  GenericBurgerZig,
  GenericBurgerRegular,
  GenericDragHandle,
  GenericMenu,
  GenericPlus,
  GenericMinus,
  GenericBlock,
  GenericCheckRounded,
  GenericClose,
  GenericHelp,
  GenericGlobe,
  GenericInfoAlternative,
  GenericLoyalty,
  GenericCheckAlternative,
  GenericUser,
  GenericLike,
  GenericDislike,
  GenericSettings,
  GenericTag,
  GenericMention,
  GenericHeart,
  GenericAlarm,
  GenericLink,
  GenericIdea,
  GenericAbout,
  GenericNews,
  GenericLogOut,
  GenericLogIn,
  GenericDownload,
  GenericStar,
  GenericShareIos,
  GenericAlarmRound,
  GenericTicket,
  GenericAmountNumber,
  GenericBet,
  GenericShareIosBig,
  GenericMultiBet,
  SecurityLock,
  SecurityUnlock,
  SecurityShield,
  SecurityShieldSecured,
  SecurityKey,
  SecurityUmbrella,
  SecurityVerified,
  SecurityVerifiedFace,
  SecurityMagnet,
  SportCricket,
  SportCsgo,
  SportDota2,
  SportLoL,
  SportOverwatch,
  SportBaseball,
  SportBeachVolleyball,
  SportBeachVolley,
  SportSpecials,
  SportEsportGeneric,
  SportHorseRacing,
  SportGreyhound,
  SportHarness,
  SportCasino,
  SportFutsal,
  SportSnooker,
  SportHandball,
  SportDarts,
  SportBoxing,
  SportCrossCountry,
  SportCycling,
  SportFloorball,
  SportGolf,
  SportIceHockey,
  SportMma,
  SportMotor,
  SportRugby,
  SportSetTennis,
  SportSoccer,
  SportFieldHockey,
  SportBadminton,
  SportSportsbet,
  SportFeatured,
  SportBombay,
  SportBasketball,
  SportTennis,
  SportTableTennis,
  SportAmericanFootball,
  SportWaterpolo,
  OtherFrame,
  Other3Dots,
  OtherMoon,
  OtherSun,
  OtherWater,
  OtherPlug,
  OtherSmile,
  OtherSad,
  OtherLightning,
  OtherOther,
  Other3DotsHorizontal,
  OtherId,
  OtherRewards,
  TypeHandPointing,
  TypeOpenedHand,
  TypeClosedHand,
  TypeDefault,
  TypeNotAllowed,
  TypeHelp,
  TypeText,
  TypeMove,
  TypeZoomIn,
  TypeZoomOut,
} from '@heathmont/moon-icons';

import CodeSnippet from '../components/CodeSnippet';
import classNames from '../utils/classNames';

const Text: React.FC<{}> = ({ children }) => (
  <p className="text-lg mt-4">{children}</p>
);

const Block: React.FC = ({ children }) => (
  <div className="flex flex-row flex-wrap gap-4 bg-white mt-4 px-4 py-3 rounded-lg">
    {children}
  </div>
);

const SubHeader: React.FC = ({ children }) => (
  <h2 className="text-3xl font-semibold mt-8">{children}</h2>
);

const Icon: React.FC<{ name: string }> = ({ children, name }) => {
  const [isShown, setIsShown] = useState(false);
  const toggle = () => setIsShown(!isShown);
  return (
    <div
      onClick={toggle}
      className={classNames(
        isShown ? 'border border-gray-500' : 'border border-transparent',
        'relative flex flex-col items-center text-gray-400 text-sm cursor-pointer rounded-md'
      )}
    >
      {children}
      {isShown ? (
        <p className="absolute text-gray-700 -top-16 bg-white px-4 py-3 rounded-lg border whitespace-nowrap">
          {`import { ${name} } from '@heathmont/moon-icons';`}
        </p>
      ) : null}
      {/* {name} */}
    </div>
  );
};

export default function PageIcons() {
  const props = { fontSize: '2rem', color: 'piccolo.100' };
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Icons</h1>
        <h2 className="text-3xl font-semibold mt-8">Using</h2>

        {/* <Text>Import</Text> */}
        <CodeSnippet>{`import { ICON_NAME } from '@heathmont/moon-icons';`}</CodeSnippet>
      </section>

      <section className="mt-8">
        <SubHeader>Files</SubHeader>
        <Block>
          <Icon name="FilesFile">
            <FilesFile {...props} />
          </Icon>
          <Icon name="FilesFolderClosed">
            <FilesFolderClosed {...props} />
          </Icon>
          <Icon name="FilesClipboard">
            <FilesClipboard {...props} />
          </Icon>
          <Icon name="FilesCopy">
            <FilesCopy {...props} />
          </Icon>
          <Icon name="FilesCase">
            <FilesCase {...props} />
          </Icon>
          <Icon name="FilesSticker">
            <FilesSticker {...props} />
          </Icon>
          <Icon name="FilesGlasses">
            <FilesGlasses {...props} />
          </Icon>
          <Icon name="FilesStickers">
            <FilesStickers {...props} />
          </Icon>
          <Icon name="FilesExternalLink">
            <FilesExternalLink {...props} />
          </Icon>
          <Icon name="FilesPrint">
            <FilesPrint {...props} />
          </Icon>
          <Icon name="FilesScan">
            <FilesScan {...props} />
          </Icon>
          <Icon name="FilesShare">
            <FilesShare {...props} />
          </Icon>
          <Icon name="FilesFolderZip">
            <FilesFolderZip {...props} />
          </Icon>
          <Icon name="FilesClipboardText">
            <FilesClipboardText {...props} />
          </Icon>
          <Icon name="FilesFolderOpen">
            <FilesFolderOpen {...props} />
          </Icon>
          <Icon name="FilesSave">
            <FilesSave {...props} />
          </Icon>
          <Icon name="FilesFolderOpenAlternative">
            <FilesFolderOpenAlternative {...props} />
          </Icon>
          <Icon name="FilesMagazine">
            <FilesMagazine {...props} />
          </Icon>
          <Icon name="FilesDraft">
            <FilesDraft {...props} />
          </Icon>
          <Icon name="FilesText">
            <FilesText {...props} />
          </Icon>
          <Icon name="FilesTable">
            <FilesTable {...props} />
          </Icon>
          <Icon name="FilesCode">
            <FilesCode {...props} />
          </Icon>
          <Icon name="FilesAdd">
            <FilesAdd {...props} />
          </Icon>
          <Icon name="FilesRemove">
            <FilesRemove {...props} />
          </Icon>
          <Icon name="FilesDelete">
            <FilesDelete {...props} />
          </Icon>
          <Icon name="FilesImport">
            <FilesImport {...props} />
          </Icon>
          <Icon name="FilesExport">
            <FilesExport {...props} />
          </Icon>
        </Block>

        <SubHeader>Arrows</SubHeader>
        <Block>
          <Icon name="ArrowsTopRight">
            <ArrowsTopRight {...props} />
          </Icon>
          <Icon name="ArrowsUp">
            <ArrowsUp {...props} />
          </Icon>
          <Icon name="ArrowsDown">
            <ArrowsDown {...props} />
          </Icon>
          <Icon name="ArrowsTransfer">
            <ArrowsTransfer {...props} />
          </Icon>
          <Icon name="ArrowsReply">
            <ArrowsReply {...props} />
          </Icon>
          <Icon name="ArrowsForward">
            <ArrowsForward {...props} />
          </Icon>
          <Icon name="ArrowsChevronLeftDouble">
            <ArrowsChevronLeftDouble {...props} />
          </Icon>
          <Icon name="ArrowsChevronRightDouble">
            <ArrowsChevronRightDouble {...props} />
          </Icon>
          <Icon name="ArrowsChevronDownDouble">
            <ArrowsChevronDownDouble {...props} />
          </Icon>
          <Icon name="ArrowsChevronUpDouble">
            <ArrowsChevronUpDouble {...props} />
          </Icon>
          <Icon name="ArrowsTopLeft">
            <ArrowsTopLeft {...props} />
          </Icon>
          <Icon name="ArrowsBottomRight">
            <ArrowsBottomRight {...props} />
          </Icon>
          <Icon name="ArrowsBottomLeft">
            <ArrowsBottomLeft {...props} />
          </Icon>
          <Icon name="ArrowsDiagonalsBltr">
            <ArrowsDiagonalsBltr {...props} />
          </Icon>
          <Icon name="ArrowsDiagonalsTlbr">
            <ArrowsDiagonalsTlbr {...props} />
          </Icon>
          <Icon name="ArrowsRefresh">
            <ArrowsRefresh {...props} />
          </Icon>
          <Icon name="ArrowsUpdate">
            <ArrowsUpdate {...props} />
          </Icon>
          <Icon name="ArrowsRightCurved">
            <ArrowsRightCurved {...props} />
          </Icon>
          <Icon name="ArrowsLeftCurved">
            <ArrowsLeftCurved {...props} />
          </Icon>
          <Icon name="ArrowsLeft">
            <ArrowsLeft {...props} />
          </Icon>
          <Icon name="ArrowsRight">
            <ArrowsRight {...props} />
          </Icon>
        </Block>

        <SubHeader>Controls</SubHeader>
        <Block>
          <Icon name="ControlsClose">
            <ControlsClose {...props} />
          </Icon>
          <Icon name="ControlsCloseSmall">
            <ControlsCloseSmall {...props} />
          </Icon>
          <Icon name="ControlsPlus">
            <ControlsPlus {...props} />
          </Icon>
          <Icon name="ControlsMinus">
            <ControlsMinus {...props} />
          </Icon>
          <Icon name="ControlsChevronUp">
            <ControlsChevronUp {...props} />
          </Icon>
          <Icon name="ControlsChevronLeft">
            <ControlsChevronLeft {...props} />
          </Icon>
          <Icon name="ControlsChevronDown">
            <ControlsChevronDown {...props} />
          </Icon>
          <Icon name="ControlsChevronRight">
            <ControlsChevronRight {...props} />
          </Icon>
          <Icon name="ControlsExpand">
            <ControlsExpand {...props} />
          </Icon>
          <Icon name="ControlsCollapse">
            <ControlsCollapse {...props} />
          </Icon>
          <Icon name="ControlsDiagonalsInsight">
            <ControlsDiagonalsInsight {...props} />
          </Icon>
          <Icon name="ControlsDiagonalsOutsight">
            <ControlsDiagonalsOutsight {...props} />
          </Icon>
          <Icon name="ControlsEye">
            <ControlsEye {...props} />
          </Icon>
          <Icon name="ControlsEyeCrossed">
            <ControlsEyeCrossed {...props} />
          </Icon>
          <Icon name="ControlsChevronDownSmall">
            <ControlsChevronDownSmall {...props} />
          </Icon>
          <Icon name="ControlsChevronUpSmall">
            <ControlsChevronUpSmall {...props} />
          </Icon>
          <Icon name="ControlsChevronRightSmall">
            <ControlsChevronRightSmall {...props} />
          </Icon>
          <Icon name="ControlsChevronLeftSmall">
            <ControlsChevronLeftSmall {...props} />
          </Icon>
          <Icon name="ControlsVerticalDoubleChevron">
            <ControlsVerticalDoubleChevron {...props} />
          </Icon>
          <Icon name="ControlsClear">
            <ControlsClear {...props} />
          </Icon>
        </Block>

        <SubHeader>Media</SubHeader>
        <Block>
          <Icon name="MediaMusic">
            <MediaMusic {...props} />
          </Icon>
          <Icon name="MediaTuner">
            <MediaTuner {...props} />
          </Icon>
          <Icon name="MediaPhoto">
            <MediaPhoto {...props} />
          </Icon>
          <Icon name="MediaVolume">
            <MediaVolume {...props} />
          </Icon>
          <Icon name="MediaNoVolume">
            <MediaNoVolume {...props} />
          </Icon>
          <Icon name="MediaMice">
            <MediaMice {...props} />
          </Icon>
          <Icon name="MediaMiceAlternative">
            <MediaMiceAlternative {...props} />
          </Icon>
          <Icon name="MediaVideo">
            <MediaVideo {...props} />
          </Icon>
          <Icon name="MediaGif">
            <MediaGif {...props} />
          </Icon>
          <Icon name="MediaHeadphones">
            <MediaHeadphones {...props} />
          </Icon>
          <Icon name="MediaFastBack">
            <MediaFastBack {...props} />
          </Icon>
          <Icon name="MediaFastForward">
            <MediaFastForward {...props} />
          </Icon>
          <Icon name="MediaMegaphone">
            <MediaMegaphone {...props} />
          </Icon>
          <Icon name="MediaSoundwave">
            <MediaSoundwave {...props} />
          </Icon>
          <Icon name="MediaStop">
            <MediaStop {...props} />
          </Icon>
          <Icon name="MediaPause">
            <MediaPause {...props} />
          </Icon>
          <Icon name="MediaTunerAlternative">
            <MediaTunerAlternative {...props} />
          </Icon>
          <Icon name="MediaPlay">
            <MediaPlay {...props} />
          </Icon>
          <Icon name="MediaMonitor">
            <MediaMonitor {...props} />
          </Icon>
        </Block>

        <SubHeader>Time</SubHeader>
        <Block>
          <Icon name="TimeClock">
            <TimeClock {...props} />
          </Icon>
          <Icon name="TimeCalendarAdd">
            <TimeCalendarAdd {...props} />
          </Icon>
          <Icon name="TimeTime">
            <TimeTime {...props} />
          </Icon>
          <Icon name="TimeCalendarRemove">
            <TimeCalendarRemove {...props} />
          </Icon>
          <Icon name="TimeSandglass">
            <TimeSandglass {...props} />
          </Icon>
          <Icon name="TimeCalendarAlternative">
            <TimeCalendarAlternative {...props} />
          </Icon>
          <Icon name="TimeAlarm">
            <TimeAlarm {...props} />
          </Icon>
          <Icon name="TimeWatch">
            <TimeWatch {...props} />
          </Icon>
          <Icon name="TimeCalendarDate">
            <TimeCalendarDate {...props} />
          </Icon>
          <Icon name="TimeCalendar">
            <TimeCalendar {...props} />
          </Icon>
          <Icon name="TimeCalendarSucsess">
            <TimeCalendarSucsess {...props} />
          </Icon>
          <Icon name="TimeStopwatch">
            <TimeStopwatch {...props} />
          </Icon>
          <Icon name="TimeStopwatchTimer">
            <TimeStopwatchTimer {...props} />
          </Icon>
        </Block>

        <SubHeader>Notifications</SubHeader>
        <Block>
          <Icon name="NotificationsBell">
            <NotificationsBell {...props} />
          </Icon>
          <Icon name="NotificationsBellAlarm">
            <NotificationsBellAlarm {...props} />
          </Icon>
          <Icon name="NotificationsBellRinging">
            <NotificationsBellRinging {...props} />
          </Icon>
          <Icon name="NotificationsBellRingingAlternative">
            <NotificationsBellRingingAlternative {...props} />
          </Icon>
          <Icon name="NotificationsBellCross">
            <NotificationsBellCross {...props} />
          </Icon>
          <Icon name="NotificationsSettings">
            <NotificationsSettings {...props} />
          </Icon>
          <Icon name="NotificationsActivity">
            <NotificationsActivity {...props} />
          </Icon>
          <Icon name="NotificationsError">
            <NotificationsError {...props} />
          </Icon>
          <Icon name="NotificationsAlert">
            <NotificationsAlert {...props} />
          </Icon>
          <Icon name="NotificationsQuestionMark">
            <NotificationsQuestionMark {...props} />
          </Icon>
          <Icon name="NotificationsNotifications">
            <NotificationsNotifications {...props} />
          </Icon>
          <Icon name="NotificationsApp">
            <NotificationsApp {...props} />
          </Icon>
          <Icon name="NotificationsAddBell">
            <NotificationsAddBell {...props} />
          </Icon>
        </Block>

        <SubHeader>Chat</SubHeader>
        <Block>
          <Icon name="ChatCommentBubble">
            <ChatCommentBubble {...props} />
          </Icon>
          <Icon name="ChatChat">
            <ChatChat {...props} />
          </Icon>
          <Icon name="ChatCommentBubbleQuestionMark">
            <ChatCommentBubbleQuestionMark {...props} />
          </Icon>
          <Icon name="ChatCommentBubbleAlert">
            <ChatCommentBubbleAlert {...props} />
          </Icon>
          <Icon name="ChatComment">
            <ChatComment {...props} />
          </Icon>
          <Icon name="ChatCommentAdd">
            <ChatCommentAdd {...props} />
          </Icon>
          <Icon name="ChatCommentRemove">
            <ChatCommentRemove {...props} />
          </Icon>
          <Icon name="ChatCommentText">
            <ChatCommentText {...props} />
          </Icon>
          <Icon name="ChatDoubleBubble">
            <ChatDoubleBubble {...props} />
          </Icon>
          <Icon name="ChatStatsChat">
            <ChatStatsChat {...props} />
          </Icon>
        </Block>

        <SubHeader>Mail</SubHeader>
        <Block>
          <Icon name="MailEnvelope">
            <MailEnvelope {...props} />
          </Icon>
          <Icon name="MailEmailStats">
            <MailEmailStats {...props} />
          </Icon>
          <Icon name="MailLink">
            <MailLink {...props} />
          </Icon>
          <Icon name="MailSend">
            <MailSend {...props} />
          </Icon>
          <Icon name="MailFlag">
            <MailFlag {...props} />
          </Icon>
          <Icon name="MailFilter">
            <MailFilter {...props} />
          </Icon>
          <Icon name="MailBox">
            <MailBox {...props} />
          </Icon>
          <Icon name="MailFilterCrossed">
            <MailFilterCrossed {...props} />
          </Icon>
        </Block>

        <SubHeader>Maps</SubHeader>
        <Block>
          <Icon name="MapsMap">
            <MapsMap {...props} />
          </Icon>
          <Icon name="MapsMarker">
            <MapsMarker {...props} />
          </Icon>
          <Icon name="MapsPinAdd">
            <MapsPinAdd {...props} />
          </Icon>
          <Icon name="MapsLocation">
            <MapsLocation {...props} />
          </Icon>
          <Icon name="MapsPinLocation">
            <MapsPinLocation {...props} />
          </Icon>
          <Icon name="MapsPin">
            <MapsPin {...props} />
          </Icon>
          <Icon name="MapsCompas">
            <MapsCompas {...props} />
          </Icon>
          <Icon name="MapsPanorama">
            <MapsPanorama {...props} />
          </Icon>
          <Icon name="MapsWorld">
            <MapsWorld {...props} />
          </Icon>
        </Block>

        <SubHeader>Shop</SubHeader>
        <Block>
          <Icon name="ShopCart">
            <ShopCart {...props} />
          </Icon>
          <Icon name="ShopBasket">
            <ShopBasket {...props} />
          </Icon>
          <Icon name="ShopBag">
            <ShopBag {...props} />
          </Icon>
          <Icon name="ShopWallet">
            <ShopWallet {...props} />
          </Icon>
          <Icon name="ShopCard">
            <ShopCard {...props} />
          </Icon>
          <Icon name="ShopWirelessPay">
            <ShopWirelessPay {...props} />
          </Icon>
          <Icon name="ShopCrypto">
            <ShopCrypto {...props} />
          </Icon>
          <Icon name="ShopCryptoCoin">
            <ShopCryptoCoin {...props} />
          </Icon>
        </Block>

        <SubHeader>Devices</SubHeader>
        <Block>
          <Icon name="DevicesMac">
            <DevicesMac {...props} />
          </Icon>
          <Icon name="DevicesSmartphone">
            <DevicesSmartphone {...props} />
          </Icon>
          <Icon name="DevicesMouse">
            <DevicesMouse {...props} />
          </Icon>
          <Icon name="DevicesMacbook">
            <DevicesMacbook {...props} />
          </Icon>
          <Icon name="DevicesMacbookAndIphone">
            <DevicesMacbookAndIphone {...props} />
          </Icon>
          <Icon name="DevicesBluetooth">
            <DevicesBluetooth {...props} />
          </Icon>
          <Icon name="DevicesPhone">
            <DevicesPhone {...props} />
          </Icon>
          <Icon name="DevicesTvBox">
            <DevicesTvBox {...props} />
          </Icon>
          <Icon name="DevicesKeyboard">
            <DevicesKeyboard {...props} />
          </Icon>
          <Icon name="DevicesJoystick">
            <DevicesJoystick {...props} />
          </Icon>
        </Block>

        <SubHeader>Text</SubHeader>
        <Block>
          <Icon name="TextCut">
            <TextCut {...props} />
          </Icon>
          <Icon name="TextIncreaseIndent">
            <TextIncreaseIndent {...props} />
          </Icon>
          <Icon name="TextStyle">
            <TextStyle {...props} />
          </Icon>
          <Icon name="TextDescreaseIndent">
            <TextDescreaseIndent {...props} />
          </Icon>
          <Icon name="TextSize">
            <TextSize {...props} />
          </Icon>
          <Icon name="TextAncor">
            <TextAncor {...props} />
          </Icon>
          <Icon name="TextTable">
            <TextTable {...props} />
          </Icon>
          <Icon name="TextNumbersList">
            <TextNumbersList {...props} />
          </Icon>
          <Icon name="TextMarker">
            <TextMarker {...props} />
          </Icon>
          <Icon name="TextBulletsList">
            <TextBulletsList {...props} />
          </Icon>
          <Icon name="TextLeftAlign">
            <TextLeftAlign {...props} />
          </Icon>
          <Icon name="TextBold">
            <TextBold {...props} />
          </Icon>
          <Icon name="TextRightAlign">
            <TextRightAlign {...props} />
          </Icon>
          <Icon name="TextItalic">
            <TextItalic {...props} />
          </Icon>
          <Icon name="TextCenter">
            <TextCenter {...props} />
          </Icon>
          <Icon name="TextUnderline">
            <TextUnderline {...props} />
          </Icon>
          <Icon name="TextAttach">
            <TextAttach {...props} />
          </Icon>
          <Icon name="TextClearFormatting">
            <TextClearFormatting {...props} />
          </Icon>
          <Icon name="TextIncertLine">
            <TextIncertLine {...props} />
          </Icon>
          <Icon name="TextStrikethrough">
            <TextStrikethrough {...props} />
          </Icon>
          <Icon name="TextMath">
            <TextMath {...props} />
          </Icon>
          <Icon name="TextCards">
            <TextCards {...props} />
          </Icon>
          <Icon name="TextTableAlternative">
            <TextTableAlternative {...props} />
          </Icon>
        </Block>

        <SubHeader>Chart</SubHeader>
        <Block>
          <Icon name="ChartPieChart">
            <ChartPieChart {...props} />
          </Icon>
          <Icon name="ChartRound">
            <ChartRound {...props} />
          </Icon>
          <Icon name="ChartRelation">
            <ChartRelation {...props} />
          </Icon>
          <Icon name="ChartFin">
            <ChartFin {...props} />
          </Icon>
          <Icon name="ChartLine">
            <ChartLine {...props} />
          </Icon>
          <Icon name="ChartBar">
            <ChartBar {...props} />
          </Icon>
          <Icon name="ChartBarVertical">
            <ChartBarVertical {...props} />
          </Icon>
          <Icon name="ChartArea">
            <ChartArea {...props} />
          </Icon>
          <Icon name="ChartDashboard">
            <ChartDashboard {...props} />
          </Icon>
          <Icon name="ChartBarAlternitive">
            <ChartBarAlternitive {...props} />
          </Icon>
        </Block>

        <SubHeader>Software</SubHeader>
        <Block>
          <Icon name="SoftwareCode">
            <SoftwareCode {...props} />
          </Icon>
          <Icon name="SoftwareBug">
            <SoftwareBug {...props} />
          </Icon>
          <Icon name="SoftwareWrench">
            <SoftwareWrench {...props} />
          </Icon>
          <Icon name="SoftwareShutdown">
            <SoftwareShutdown {...props} />
          </Icon>
          <Icon name="SoftwareNut">
            <SoftwareNut {...props} />
          </Icon>
          <Icon name="SoftwareDownload">
            <SoftwareDownload {...props} />
          </Icon>
          <Icon name="SoftwareLogin">
            <SoftwareLogin {...props} />
          </Icon>
          <Icon name="SoftwareLogOut">
            <SoftwareLogOut {...props} />
          </Icon>
          <Icon name="SoftwareCursor">
            <SoftwareCursor {...props} />
          </Icon>
          <Icon name="SoftwareHand">
            <SoftwareHand {...props} />
          </Icon>
          <Icon name="SoftwareSettings">
            <SoftwareSettings {...props} />
          </Icon>
          <Icon name="SoftwareDashboard">
            <SoftwareDashboard {...props} />
          </Icon>
          <Icon name="SoftwarePlate">
            <SoftwarePlate {...props} />
          </Icon>
          <Icon name="SoftwareData">
            <SoftwareData {...props} />
          </Icon>
          <Icon name="SoftwarePuzzle">
            <SoftwarePuzzle {...props} />
          </Icon>
          <Icon name="SoftwareSorting">
            <SoftwareSorting {...props} />
          </Icon>
        </Block>

        <SubHeader>Generic</SubHeader>
        <Block>
          <Icon name="GenericHome">
            <GenericHome {...props} />
          </Icon>
          <Icon name="GenericDelete">
            <GenericDelete {...props} />
          </Icon>
          <Icon name="GenericSearch">
            <GenericSearch {...props} />
          </Icon>
          <Icon name="GenericUpload">
            <GenericUpload {...props} />
          </Icon>
          <Icon name="GenericInfo">
            <GenericInfo {...props} />
          </Icon>
          <Icon name="GenericBrowser">
            <GenericBrowser {...props} />
          </Icon>
          <Icon name="GenericPicture">
            <GenericPicture {...props} />
          </Icon>
          <Icon name="GenericEdit">
            <GenericEdit {...props} />
          </Icon>
          <Icon name="GenericShareAndroid">
            <GenericShareAndroid {...props} />
          </Icon>
          <Icon name="GenericBookmark">
            <GenericBookmark {...props} />
          </Icon>
          <Icon name="GenericUsers">
            <GenericUsers {...props} />
          </Icon>
          <Icon name="GenericBurgerZig">
            <GenericBurgerZig {...props} />
          </Icon>
          <Icon name="GenericBurgerRegular">
            <GenericBurgerRegular {...props} />
          </Icon>
          <Icon name="GenericDragHandle">
            <GenericDragHandle {...props} />
          </Icon>
          <Icon name="GenericMenu">
            <GenericMenu {...props} />
          </Icon>
          <Icon name="GenericPlus">
            <GenericPlus {...props} />
          </Icon>
          <Icon name="GenericMinus">
            <GenericMinus {...props} />
          </Icon>
          <Icon name="GenericBlock">
            <GenericBlock {...props} />
          </Icon>
          <Icon name="GenericCheckRounded">
            <GenericCheckRounded {...props} />
          </Icon>
          <Icon name="GenericClose">
            <GenericClose {...props} />
          </Icon>
          <Icon name="GenericHelp">
            <GenericHelp {...props} />
          </Icon>
          <Icon name="GenericGlobe">
            <GenericGlobe {...props} />
          </Icon>
          <Icon name="GenericInfoAlternative">
            <GenericInfoAlternative {...props} />
          </Icon>
          <Icon name="GenericLoyalty">
            <GenericLoyalty {...props} />
          </Icon>
          <Icon name="GenericCheckAlternative">
            <GenericCheckAlternative {...props} />
          </Icon>
          <Icon name="GenericUser">
            <GenericUser {...props} />
          </Icon>
          <Icon name="GenericLike">
            <GenericLike {...props} />
          </Icon>
          <Icon name="GenericDislike">
            <GenericDislike {...props} />
          </Icon>
          <Icon name="GenericSettings">
            <GenericSettings {...props} />
          </Icon>
          <Icon name="GenericTag">
            <GenericTag {...props} />
          </Icon>
          <Icon name="GenericMention">
            <GenericMention {...props} />
          </Icon>
          <Icon name="GenericHeart">
            <GenericHeart {...props} />
          </Icon>
          <Icon name="GenericAlarm">
            <GenericAlarm {...props} />
          </Icon>
          <Icon name="GenericLink">
            <GenericLink {...props} />
          </Icon>
          <Icon name="GenericIdea">
            <GenericIdea {...props} />
          </Icon>
          <Icon name="GenericAbout">
            <GenericAbout {...props} />
          </Icon>
          <Icon name="GenericNews">
            <GenericNews {...props} />
          </Icon>
          <Icon name="GenericLogOut">
            <GenericLogOut {...props} />
          </Icon>
          <Icon name="GenericLogIn">
            <GenericLogIn {...props} />
          </Icon>
          <Icon name="GenericDownload">
            <GenericDownload {...props} />
          </Icon>
          <Icon name="GenericStar">
            <GenericStar {...props} />
          </Icon>
          <Icon name="GenericShareIos">
            <GenericShareIos {...props} />
          </Icon>
          <Icon name="GenericAlarmRound">
            <GenericAlarmRound {...props} />
          </Icon>
          <Icon name="GenericTicket">
            <GenericTicket {...props} />
          </Icon>
          <Icon name="GenericAmountNumber">
            <GenericAmountNumber {...props} />
          </Icon>
          <Icon name="GenericBet">
            <GenericBet {...props} />
          </Icon>
          <Icon name="GenericShareIosBig">
            <GenericShareIosBig {...props} />
          </Icon>
          <Icon name="GenericMultiBet">
            <GenericMultiBet {...props} />
          </Icon>
        </Block>

        <SubHeader>Security</SubHeader>
        <Block>
          <Icon name="SecurityLock">
            <SecurityLock {...props} />
          </Icon>
          <Icon name="SecurityUnlock">
            <SecurityUnlock {...props} />
          </Icon>
          <Icon name="SecurityShield">
            <SecurityShield {...props} />
          </Icon>
          <Icon name="SecurityShieldSecured">
            <SecurityShieldSecured {...props} />
          </Icon>
          <Icon name="SecurityKey">
            <SecurityKey {...props} />
          </Icon>
          <Icon name="SecurityUmbrella">
            <SecurityUmbrella {...props} />
          </Icon>
          <Icon name="SecurityVerified">
            <SecurityVerified {...props} />
          </Icon>
          <Icon name="SecurityVerifiedFace">
            <SecurityVerifiedFace {...props} />
          </Icon>
          <Icon name="SecurityMagnet">
            <SecurityMagnet {...props} />
          </Icon>
        </Block>

        <SubHeader>Sport</SubHeader>
        <Block>
          <Icon name="SportCricket">
            <SportCricket {...props} />
          </Icon>
          <Icon name="SportCsgo">
            <SportCsgo {...props} />
          </Icon>
          <Icon name="SportDota2">
            <SportDota2 {...props} />
          </Icon>
          <Icon name="SportLoL">
            <SportLoL {...props} />
          </Icon>
          <Icon name="SportOverwatch">
            <SportOverwatch {...props} />
          </Icon>
          <Icon name="SportBaseball">
            <SportBaseball {...props} />
          </Icon>
          <Icon name="SportBeachVolleyball">
            <SportBeachVolleyball {...props} />
          </Icon>
          <Icon name="SportBeachVolley">
            <SportBeachVolley {...props} />
          </Icon>
          <Icon name="SportSpecials">
            <SportSpecials {...props} />
          </Icon>
          <Icon name="SportEsportGeneric">
            <SportEsportGeneric {...props} />
          </Icon>
          <Icon name="SportHorseRacing">
            <SportHorseRacing {...props} />
          </Icon>
          <Icon name="SportGreyhound">
            <SportGreyhound {...props} />
          </Icon>
          <Icon name="SportHarness">
            <SportHarness {...props} />
          </Icon>
          <Icon name="SportCasino">
            <SportCasino {...props} />
          </Icon>
          <Icon name="SportFutsal">
            <SportFutsal {...props} />
          </Icon>
          <Icon name="SportSnooker">
            <SportSnooker {...props} />
          </Icon>
          <Icon name="SportHandball">
            <SportHandball {...props} />
          </Icon>
          <Icon name="SportDarts">
            <SportDarts {...props} />
          </Icon>
          <Icon name="SportBoxing">
            <SportBoxing {...props} />
          </Icon>
          <Icon name="SportCrossCountry">
            <SportCrossCountry {...props} />
          </Icon>
          <Icon name="SportCycling">
            <SportCycling {...props} />
          </Icon>
          <Icon name="SportFloorball">
            <SportFloorball {...props} />
          </Icon>
          <Icon name="SportGolf">
            <SportGolf {...props} />
          </Icon>
          <Icon name="SportIceHockey">
            <SportIceHockey {...props} />
          </Icon>
          <Icon name="SportMma">
            <SportMma {...props} />
          </Icon>
          <Icon name="SportMotor">
            <SportMotor {...props} />
          </Icon>
          <Icon name="SportRugby">
            <SportRugby {...props} />
          </Icon>
          <Icon name="SportSetTennis">
            <SportSetTennis {...props} />
          </Icon>
          <Icon name="SportSoccer">
            <SportSoccer {...props} />
          </Icon>
          <Icon name="SportFieldHockey">
            <SportFieldHockey {...props} />
          </Icon>
          <Icon name="SportBadminton">
            <SportBadminton {...props} />
          </Icon>
          <Icon name="SportSportsbet">
            <SportSportsbet {...props} />
          </Icon>
          <Icon name="SportFeatured">
            <SportFeatured {...props} />
          </Icon>
          <Icon name="SportBombay">
            <SportBombay {...props} />
          </Icon>
          <Icon name="SportBasketball">
            <SportBasketball {...props} />
          </Icon>
          <Icon name="SportTennis">
            <SportTennis {...props} />
          </Icon>
          <Icon name="SportTableTennis">
            <SportTableTennis {...props} />
          </Icon>
          <Icon name="SportAmericanFootball">
            <SportAmericanFootball {...props} />
          </Icon>
          <Icon name="SportWaterpolo">
            <SportWaterpolo {...props} />
          </Icon>
        </Block>

        <SubHeader>Other</SubHeader>
        <Block>
          <Icon name="OtherFrame">
            <OtherFrame {...props} />
          </Icon>
          <Icon name="Other3Dots">
            <Other3Dots {...props} />
          </Icon>
          <Icon name="OtherMoon">
            <OtherMoon {...props} />
          </Icon>
          <Icon name="OtherSun">
            <OtherSun {...props} />
          </Icon>
          <Icon name="OtherWater">
            <OtherWater {...props} />
          </Icon>
          <Icon name="OtherPlug">
            <OtherPlug {...props} />
          </Icon>
          <Icon name="OtherSmile">
            <OtherSmile {...props} />
          </Icon>
          <Icon name="OtherSad">
            <OtherSad {...props} />
          </Icon>
          <Icon name="OtherLightning">
            <OtherLightning {...props} />
          </Icon>
          <Icon name="OtherOther">
            <OtherOther {...props} />
          </Icon>
          <Icon name="Other3DotsHorizontal">
            <Other3DotsHorizontal {...props} />
          </Icon>
          <Icon name="OtherId">
            <OtherId {...props} />
          </Icon>
          <Icon name="OtherRewards">
            <OtherRewards {...props} />
          </Icon>
        </Block>

        <SubHeader>Type</SubHeader>
        <Block>
          <Icon name="TypeHandPointing">
            <TypeHandPointing {...props} />
          </Icon>
          <Icon name="TypeOpenedHand">
            <TypeOpenedHand {...props} />
          </Icon>
          <Icon name="TypeClosedHand">
            <TypeClosedHand {...props} />
          </Icon>
          <Icon name="TypeDefault">
            <TypeDefault {...props} />
          </Icon>
          <Icon name="TypeNotAllowed">
            <TypeNotAllowed {...props} />
          </Icon>
          <Icon name="TypeHelp">
            <TypeHelp {...props} />
          </Icon>
          <Icon name="TypeText">
            <TypeText {...props} />
          </Icon>
          <Icon name="TypeMove">
            <TypeMove {...props} />
          </Icon>
          <Icon name="TypeZoomIn">
            <TypeZoomIn {...props} />
          </Icon>
          <Icon name="TypeZoomOut">
            <TypeZoomOut {...props} />
          </Icon>
        </Block>
      </section>
    </>
  );
}
