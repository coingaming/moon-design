import React, { useState } from 'react';

import {
  ArrowsBoost,
  ArrowsBottomLeft,
  ArrowsBottomRight,
  ArrowsChevronDownDouble,
  ArrowsChevronLeftDouble,
  ArrowsChevronRightDouble,
  ArrowsChevronUpDouble,
  ArrowsDiagonalsBltr,
  ArrowsDiagonalsTlbr,
  ArrowsDown,
  ArrowsForward,
  ArrowsLeft,
  ArrowsLeftCurved,
  ArrowsLeftShort,
  ArrowsRefresh,
  ArrowsRemoveBoost,
  ArrowsReply,
  ArrowsRight,
  ArrowsRightCurved,
  ArrowsRightShort,
  ArrowsTopLeft,
  ArrowsTopRight,
  ArrowsTransfer,
  ArrowsUp,
  ArrowsUpdate,
  ChartArea,
  ChartBar,
  ChartBarAlternitive,
  ChartBarVertical,
  ChartDashboard,
  ChartFin,
  ChartLine,
  ChartPieChart,
  ChartRelation,
  ChartRound,
  ChatChat,
  ChatComment,
  ChatCommentAdd,
  ChatCommentBubble,
  ChatCommentBubbleAlert,
  ChatCommentBubbleQuestionMark,
  ChatCommentRemove,
  ChatCommentText,
  ChatDoubleBubble,
  ChatStatsChat,
  ControlsChevronDown,
  ControlsChevronDownSmall,
  ControlsChevronLeft,
  ControlsChevronLeftSmall,
  ControlsChevronRight,
  ControlsChevronRightSmall,
  ControlsChevronUp,
  ControlsChevronUpSmall,
  ControlsClear,
  ControlsClose,
  ControlsCloseSmall,
  ControlsCollapse,
  ControlsDiagonalsInsight,
  ControlsDiagonalsOutsight,
  ControlsExpand,
  ControlsExpandAlt,
  ControlsEye,
  ControlsEyeCrossed,
  ControlsMinus,
  ControlsPlus,
  ControlsVerticalDoubleChevron,
  DevicesBluetooth,
  DevicesJoystick,
  DevicesKeyboard,
  DevicesMac,
  DevicesMacbook,
  DevicesMacbookAndIphone,
  DevicesMouse,
  DevicesPhone,
  DevicesSmartphone,
  DevicesTvBox,
  FilesAdd,
  FilesCase,
  FilesClipboard,
  FilesClipboardText,
  FilesCode,
  FilesCopy,
  FilesDelete,
  FilesDraft,
  FilesExport,
  FilesExternalLink,
  FilesFile,
  FilesFolderClosed,
  FilesFolderOpen,
  FilesFolderOpenAlternative,
  FilesFolderZip,
  FilesGlasses,
  FilesImport,
  FilesMagazine,
  FilesPrint,
  FilesRemove,
  FilesSave,
  FilesScan,
  FilesShare,
  FilesSticker,
  FilesStickers,
  FilesTable,
  FilesText,
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
  MailBox,
  MailEmailStats,
  MailEnvelope,
  MailFilter,
  MailFilterCrossed,
  MailFlag,
  MailLink,
  MailSend,
  MapsCompas,
  MapsLocation,
  MapsMap,
  MapsMarker,
  MapsPanorama,
  MapsPin,
  MapsPinAdd,
  MapsPinLocation,
  MapsWorld,
  MediaFastBack,
  MediaFastForward,
  MediaGif,
  MediaHeadphones,
  MediaMegaphone,
  MediaMice,
  MediaMiceAlternative,
  MediaMonitor,
  MediaMusic,
  MediaNoVolume,
  MediaPause,
  MediaPhoto,
  MediaPlay,
  MediaSoundwave,
  MediaStop,
  MediaTuner,
  MediaTunerAlternative,
  MediaVideo,
  MediaVolume,
  NotificationsActivity,
  NotificationsAddBell,
  NotificationsAlert,
  NotificationsApp,
  NotificationsBell,
  NotificationsBellAlarm,
  NotificationsBellCross,
  NotificationsBellRinging,
  NotificationsBellRingingAlternative,
  NotificationsError,
  NotificationsNotifications,
  NotificationsQuestionMark,
  NotificationsSettings,
  Other3Dots,
  Other3DotsHorizontal,
  OtherFrame,
  OtherId,
  OtherLightning,
  OtherMoon,
  OtherOther,
  OtherPlug,
  OtherRewards,
  OtherSad,
  OtherSmile,
  OtherSun,
  OtherWater,
  SecurityBetIncurance,
  SecurityKey,
  SecurityLock,
  SecurityMagnet,
  SecurityPassport,
  SecurityPassportAlert,
  SecurityQrCode,
  SecuritySecurityAttention,
  SecurityShield,
  SecurityShieldSecured,
  SecurityUmbrella,
  SecurityUnlock,
  SecurityVerified,
  SecurityVerifiedFace,
  ShopBag,
  ShopBasket,
  ShopCard,
  ShopCart,
  ShopCrypto,
  ShopCryptoCoin,
  ShopWallet,
  ShopWirelessPay,
  SoftwareBug,
  SoftwareClear,
  SoftwareCode,
  SoftwareCursor,
  SoftwareDashboard,
  SoftwareData,
  SoftwareDownload,
  SoftwareHand,
  SoftwareLogOut,
  SoftwareLogin,
  SoftwareNut,
  SoftwarePlate,
  SoftwarePuzzle,
  SoftwareSettings,
  SoftwareShutdown,
  SoftwareSorting,
  SoftwareWrench,
  SportAmericanFootball,
  SportBadminton,
  SportBaseball,
  SportBasketball,
  SportBeachVolley,
  SportBeachVolleyball,
  SportBombay,
  SportBoxing,
  SportCasino,
  SportCricket,
  SportCrossCountry,
  SportCsgo,
  SportCycling,
  SportDarts,
  SportDota2,
  SportESoccer,
  SportEnba,
  SportEsportGeneric,
  SportFeatured,
  SportFieldHockey,
  SportFloorball,
  SportFormula1,
  SportFutsal,
  SportGolf,
  SportGreyhound,
  SportHandball,
  SportHarness,
  SportHorseRacing,
  SportIceHockey,
  SportLoL,
  SportMma,
  SportMotor,
  SportOverwatch,
  SportRugby,
  SportSetTennis,
  SportSnooker,
  SportSoccer,
  SportSpecialSports,
  SportSpecials,
  SportSportsbet,
  SportTableTennis,
  SportTennis,
  SportVolleyball,
  SportWaterpolo,
  TextAncor,
  TextAttach,
  TextBold,
  TextBulletsList,
  TextCards,
  TextCenter,
  TextClearFormatting,
  TextCut,
  TextDescreaseIndent,
  TextHashtag,
  TextIncertLine,
  TextIncreaseIndent,
  TextItalic,
  TextLeftAlign,
  TextListView,
  TextMarker,
  TextMath,
  TextNumbersList,
  TextRightAlign,
  TextSize,
  TextStrikethrough,
  TextStyle,
  TextTable,
  TextTableAlternative,
  TextUnderline,
  TimeAlarm,
  TimeCalendar,
  TimeCalendarAdd,
  TimeCalendarAlternative,
  TimeCalendarDate,
  TimeCalendarRemove,
  TimeCalendarSucsess,
  TimeClock,
  TimeSandglass,
  TimeStopwatch,
  TimeStopwatchTimer,
  TimeTime,
  TimeWatch,
  TravelAirplane,
  TravelAirplaneDown,
  TravelAirplaneUp,
  TravelBeachChair,
  TravelBed,
  TravelBill,
  TravelHotel,
  TravelLuggage,
  TravelMeal,
  TravelPassport,
  TravelPlug,
  TravelRest,
  TravelRoom,
  TravelSeats,
  TravelSuitcase,
  TravelSwimmingPool,
  TravelWiFi,
  TypeClosedHand,
  TypeDefault,
  TypeDrag,
  TypeHandPointing,
  TypeHelp,
  TypeMove,
  TypeNotAllowed,
  TypeOpenedHand,
  TypeText,
  TypeZoomIn,
  TypeZoomOut,
} from '@heathmont/moon-icons';

import Preview from '../components/codePreview/Preview';

import classNames from '../utils/classNames';

const Block: React.FC = ({ children }) => (
  <div className="flex flex-row flex-wrap gap-4 bg-white mt-4 px-4 py-3 rounded-lg">
    {children}
  </div>
);

const SubHeader: React.FC = ({ children }) => (
  <h2 className="text-2xl mt-8">{children}</h2>
);

const Icon: React.FC<{ name: string; onClick: any; selectedIcons: string[] }> =
  ({ children, name, onClick, selectedIcons }) => {
    const isShown = selectedIcons.includes(name);
    return (
      <div
        onClick={() => onClick(name)}
        className={classNames(
          isShown ? 'text-active bg-active-80' : 'text-gray-400',
          'relative flex flex-col items-center text-sm cursor-pointer rounded-md hover:bg-active-80 hover:text-active'
        )}
      >
        {children}
      </div>
    );
  };

const ImportHelper: React.FC<{ text: string }> = ({ text }) => (
  <>
    <h2 className="text-2xl font-semibold mt-8">Importing</h2>
    <pre className="overflow-scroll bg-white mt-4 px-4 py-3 text-left text-sm rounded-lg font-medium text-gray-500">
      {text}
    </pre>
  </>
);

const TextSizesPreview = () => (
  <Preview
    title="Sizes &amp; colours"
    preview={
      <div className="flex items-center gap-20">
        <FilesCopy fontSize="1rem" />
        <FilesCopy fontSize="2rem" />
        <FilesCopy fontSize="3rem" />
        <FilesCopy fontSize="3rem" color="cell.100" />
      </div>
    }
    code={`import { FilesCopy } from '@heathmont/moon-icons';

<FilesCopy fontSize="1rem" />
<FilesCopy fontSize="2rem" />
<FilesCopy fontSize="3rem" />
<FilesCopy fontSize="3rem" color="cell.100"/>`}
  />
);

const InternalText: React.FC<{}> = ({ children }) => (
  <p className="text-lg mt-4 font-bold">{children}</p>
);

export default function PageIcons() {
  const [selectedIcons, setSelectedIcons] = useState([]);

  const props = { fontSize: '2rem' };

  const addIconToSelected: (iconName: string) => string[] = (iconName) =>
    (selectedIcons as string[]).concat(iconName);
  const removeIconFromSelected = (removedIconName: string) =>
    selectedIcons.filter((name) => name !== removedIconName);

  const toggleSelectedIcons: (iconName: string) => string[] = (iconName) => {
    if ((selectedIcons as string[]).includes(iconName)) {
      return removeIconFromSelected(iconName);
    }
    return addIconToSelected(iconName);
  };

  const displaySelectedIconsImport = selectedIcons.length > 0;

  const onClick = (iconName: string) =>
    (setSelectedIcons as any)(toggleSelectedIcons(iconName));
  const wrapperProps = { onClick, selectedIcons };

  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Icons</h1>
        {/* <h2 className="text-3xl font-semibold mt-8">Using</h2> */}
      </section>

      <section className="mt-8">
        <TextSizesPreview />
      </section>

      <InternalText>Please select icons for Import</InternalText>

      {displaySelectedIconsImport ? (
        <ImportHelper
          text={`import {
  ${selectedIcons.join(', ')}
} from '@heathmont/moon-icons';`}
        />
      ) : null}

      <section className="mt-8">
        <SubHeader>Arrows</SubHeader>
        <Block>
          <Icon {...wrapperProps} name="ArrowsBoost">
            <ArrowsBoost {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsBottomLeft">
            <ArrowsBottomLeft {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsBottomRight">
            <ArrowsBottomRight {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsChevronDownDouble">
            <ArrowsChevronDownDouble {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsChevronLeftDouble">
            <ArrowsChevronLeftDouble {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsChevronRightDouble">
            <ArrowsChevronRightDouble {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsChevronUpDouble">
            <ArrowsChevronUpDouble {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsDiagonalsBltr">
            <ArrowsDiagonalsBltr {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsDiagonalsTlbr">
            <ArrowsDiagonalsTlbr {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsDown">
            <ArrowsDown {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsForward">
            <ArrowsForward {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsLeft">
            <ArrowsLeft {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsLeftCurved">
            <ArrowsLeftCurved {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsLeftShort">
            <ArrowsLeftShort {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsRefresh">
            <ArrowsRefresh {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsRemoveBoost">
            <ArrowsRemoveBoost {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsReply">
            <ArrowsReply {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsRight">
            <ArrowsRight {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsRightCurved">
            <ArrowsRightCurved {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsRightShort">
            <ArrowsRightShort {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsTopLeft">
            <ArrowsTopLeft {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsTopRight">
            <ArrowsTopRight {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsTransfer">
            <ArrowsTransfer {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsUp">
            <ArrowsUp {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ArrowsUpdate">
            <ArrowsUpdate {...props} />
          </Icon>
        </Block>

        <SubHeader>Chart</SubHeader>
        <Block>
          <Icon {...wrapperProps} name="ChartArea">
            <ChartArea {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ChartBar">
            <ChartBar {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ChartBarAlternitive">
            <ChartBarAlternitive {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ChartBarVertical">
            <ChartBarVertical {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ChartDashboard">
            <ChartDashboard {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ChartFin">
            <ChartFin {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ChartLine">
            <ChartLine {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ChartPieChart">
            <ChartPieChart {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ChartRelation">
            <ChartRelation {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ChartRound">
            <ChartRound {...props} />
          </Icon>
        </Block>

        <SubHeader>Chat</SubHeader>
        <Block>
          <Icon {...wrapperProps} name="ChatChat">
            <ChatChat {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ChatComment">
            <ChatComment {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ChatCommentAdd">
            <ChatCommentAdd {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ChatCommentBubble">
            <ChatCommentBubble {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ChatCommentBubbleAlert">
            <ChatCommentBubbleAlert {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ChatCommentBubbleQuestionMark">
            <ChatCommentBubbleQuestionMark {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ChatCommentRemove">
            <ChatCommentRemove {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ChatCommentText">
            <ChatCommentText {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ChatDoubleBubble">
            <ChatDoubleBubble {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ChatStatsChat">
            <ChatStatsChat {...props} />
          </Icon>
        </Block>

        <SubHeader>Controls</SubHeader>
        <Block>
          <Icon {...wrapperProps} name="ControlsChevronDown">
            <ControlsChevronDown {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ControlsChevronDownSmall">
            <ControlsChevronDownSmall {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ControlsChevronLeft">
            <ControlsChevronLeft {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ControlsChevronLeftSmall">
            <ControlsChevronLeftSmall {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ControlsChevronRight">
            <ControlsChevronRight {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ControlsChevronRightSmall">
            <ControlsChevronRightSmall {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ControlsChevronUp">
            <ControlsChevronUp {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ControlsChevronUpSmall">
            <ControlsChevronUpSmall {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ControlsClear">
            <ControlsClear {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ControlsClose">
            <ControlsClose {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ControlsCloseSmall">
            <ControlsCloseSmall {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ControlsCollapse">
            <ControlsCollapse {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ControlsDiagonalsInsight">
            <ControlsDiagonalsInsight {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ControlsDiagonalsOutsight">
            <ControlsDiagonalsOutsight {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ControlsExpand">
            <ControlsExpand {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ControlsExpandAlt">
            <ControlsExpandAlt {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ControlsEye">
            <ControlsEye {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ControlsEyeCrossed">
            <ControlsEyeCrossed {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ControlsMinus">
            <ControlsMinus {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ControlsPlus">
            <ControlsPlus {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ControlsVerticalDoubleChevron">
            <ControlsVerticalDoubleChevron {...props} />
          </Icon>
        </Block>

        <SubHeader>Devices</SubHeader>
        <Block>
          <Icon {...wrapperProps} name="DevicesBluetooth">
            <DevicesBluetooth {...props} />
          </Icon>
          <Icon {...wrapperProps} name="DevicesJoystick">
            <DevicesJoystick {...props} />
          </Icon>
          <Icon {...wrapperProps} name="DevicesKeyboard">
            <DevicesKeyboard {...props} />
          </Icon>
          <Icon {...wrapperProps} name="DevicesMac">
            <DevicesMac {...props} />
          </Icon>
          <Icon {...wrapperProps} name="DevicesMacbook">
            <DevicesMacbook {...props} />
          </Icon>
          <Icon {...wrapperProps} name="DevicesMacbookAndIphone">
            <DevicesMacbookAndIphone {...props} />
          </Icon>
          <Icon {...wrapperProps} name="DevicesMouse">
            <DevicesMouse {...props} />
          </Icon>
          <Icon {...wrapperProps} name="DevicesPhone">
            <DevicesPhone {...props} />
          </Icon>
          <Icon {...wrapperProps} name="DevicesSmartphone">
            <DevicesSmartphone {...props} />
          </Icon>
          <Icon {...wrapperProps} name="DevicesTvBox">
            <DevicesTvBox {...props} />
          </Icon>
        </Block>

        <SubHeader>Files</SubHeader>
        <Block>
          <Icon {...wrapperProps} name="FilesAdd">
            <FilesAdd {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesCase">
            <FilesCase {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesClipboard">
            <FilesClipboard {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesClipboardText">
            <FilesClipboardText {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesCode">
            <FilesCode {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesCopy">
            <FilesCopy {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesDelete">
            <FilesDelete {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesDraft">
            <FilesDraft {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesExport">
            <FilesExport {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesExternalLink">
            <FilesExternalLink {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesFile">
            <FilesFile {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesFolderClosed">
            <FilesFolderClosed {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesFolderOpen">
            <FilesFolderOpen {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesFolderOpenAlternative">
            <FilesFolderOpenAlternative {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesFolderZip">
            <FilesFolderZip {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesGlasses">
            <FilesGlasses {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesImport">
            <FilesImport {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesMagazine">
            <FilesMagazine {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesPrint">
            <FilesPrint {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesRemove">
            <FilesRemove {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesSave">
            <FilesSave {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesScan">
            <FilesScan {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesShare">
            <FilesShare {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesSticker">
            <FilesSticker {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesStickers">
            <FilesStickers {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesTable">
            <FilesTable {...props} />
          </Icon>
          <Icon {...wrapperProps} name="FilesText">
            <FilesText {...props} />
          </Icon>
        </Block>

        <SubHeader>Generic</SubHeader>
        <Block>
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
        </Block>

        <SubHeader>Mail</SubHeader>
        <Block>
          <Icon {...wrapperProps} name="MailBox">
            <MailBox {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MailEmailStats">
            <MailEmailStats {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MailEnvelope">
            <MailEnvelope {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MailFilter">
            <MailFilter {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MailFilterCrossed">
            <MailFilterCrossed {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MailFlag">
            <MailFlag {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MailLink">
            <MailLink {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MailSend">
            <MailSend {...props} />
          </Icon>
        </Block>

        <SubHeader>Maps</SubHeader>
        <Block>
          <Icon {...wrapperProps} name="MapsCompas">
            <MapsCompas {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MapsLocation">
            <MapsLocation {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MapsMap">
            <MapsMap {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MapsMarker">
            <MapsMarker {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MapsPanorama">
            <MapsPanorama {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MapsPin">
            <MapsPin {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MapsPinAdd">
            <MapsPinAdd {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MapsPinLocation">
            <MapsPinLocation {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MapsWorld">
            <MapsWorld {...props} />
          </Icon>
        </Block>

        <SubHeader>Media</SubHeader>
        <Block>
          <Icon {...wrapperProps} name="MediaFastBack">
            <MediaFastBack {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MediaFastForward">
            <MediaFastForward {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MediaGif">
            <MediaGif {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MediaHeadphones">
            <MediaHeadphones {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MediaMegaphone">
            <MediaMegaphone {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MediaMice">
            <MediaMice {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MediaMiceAlternative">
            <MediaMiceAlternative {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MediaMonitor">
            <MediaMonitor {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MediaMusic">
            <MediaMusic {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MediaNoVolume">
            <MediaNoVolume {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MediaPause">
            <MediaPause {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MediaPhoto">
            <MediaPhoto {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MediaPlay">
            <MediaPlay {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MediaSoundwave">
            <MediaSoundwave {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MediaStop">
            <MediaStop {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MediaTuner">
            <MediaTuner {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MediaTunerAlternative">
            <MediaTunerAlternative {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MediaVideo">
            <MediaVideo {...props} />
          </Icon>
          <Icon {...wrapperProps} name="MediaVolume">
            <MediaVolume {...props} />
          </Icon>
        </Block>

        <SubHeader>Notifications</SubHeader>
        <Block>
          <Icon {...wrapperProps} name="NotificationsActivity">
            <NotificationsActivity {...props} />
          </Icon>
          <Icon {...wrapperProps} name="NotificationsAddBell">
            <NotificationsAddBell {...props} />
          </Icon>
          <Icon {...wrapperProps} name="NotificationsAlert">
            <NotificationsAlert {...props} />
          </Icon>
          <Icon {...wrapperProps} name="NotificationsApp">
            <NotificationsApp {...props} />
          </Icon>
          <Icon {...wrapperProps} name="NotificationsBell">
            <NotificationsBell {...props} />
          </Icon>
          <Icon {...wrapperProps} name="NotificationsBellAlarm">
            <NotificationsBellAlarm {...props} />
          </Icon>
          <Icon {...wrapperProps} name="NotificationsBellCross">
            <NotificationsBellCross {...props} />
          </Icon>
          <Icon {...wrapperProps} name="NotificationsBellRinging">
            <NotificationsBellRinging {...props} />
          </Icon>
          <Icon {...wrapperProps} name="NotificationsBellRingingAlternative">
            <NotificationsBellRingingAlternative {...props} />
          </Icon>
          <Icon {...wrapperProps} name="NotificationsError">
            <NotificationsError {...props} />
          </Icon>
          <Icon {...wrapperProps} name="NotificationsNotifications">
            <NotificationsNotifications {...props} />
          </Icon>
          <Icon {...wrapperProps} name="NotificationsQuestionMark">
            <NotificationsQuestionMark {...props} />
          </Icon>
          <Icon {...wrapperProps} name="NotificationsSettings">
            <NotificationsSettings {...props} />
          </Icon>
        </Block>

        <SubHeader>Other</SubHeader>
        <Block>
          <Icon {...wrapperProps} name="Other3Dots">
            <Other3Dots {...props} />
          </Icon>
          <Icon {...wrapperProps} name="Other3DotsHorizontal">
            <Other3DotsHorizontal {...props} />
          </Icon>
          <Icon {...wrapperProps} name="OtherFrame">
            <OtherFrame {...props} />
          </Icon>
          <Icon {...wrapperProps} name="OtherId">
            <OtherId {...props} />
          </Icon>
          <Icon {...wrapperProps} name="OtherLightning">
            <OtherLightning {...props} />
          </Icon>
          <Icon {...wrapperProps} name="OtherMoon">
            <OtherMoon {...props} />
          </Icon>
          <Icon {...wrapperProps} name="OtherOther">
            <OtherOther {...props} />
          </Icon>
          <Icon {...wrapperProps} name="OtherPlug">
            <OtherPlug {...props} />
          </Icon>
          <Icon {...wrapperProps} name="OtherRewards">
            <OtherRewards {...props} />
          </Icon>
          <Icon {...wrapperProps} name="OtherSad">
            <OtherSad {...props} />
          </Icon>
          <Icon {...wrapperProps} name="OtherSmile">
            <OtherSmile {...props} />
          </Icon>
          <Icon {...wrapperProps} name="OtherSun">
            <OtherSun {...props} />
          </Icon>
          <Icon {...wrapperProps} name="OtherWater">
            <OtherWater {...props} />
          </Icon>
        </Block>

        <SubHeader>Security</SubHeader>
        <Block>
          <Icon {...wrapperProps} name="SecurityBetIncurance">
            <SecurityBetIncurance {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SecurityKey">
            <SecurityKey {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SecurityLock">
            <SecurityLock {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SecurityMagnet">
            <SecurityMagnet {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SecurityPassport">
            <SecurityPassport {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SecurityPassportAlert">
            <SecurityPassportAlert {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SecurityQrCode">
            <SecurityQrCode {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SecuritySecurityAttention">
            <SecuritySecurityAttention {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SecurityShield">
            <SecurityShield {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SecurityShieldSecured">
            <SecurityShieldSecured {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SecurityUmbrella">
            <SecurityUmbrella {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SecurityUnlock">
            <SecurityUnlock {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SecurityVerified">
            <SecurityVerified {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SecurityVerifiedFace">
            <SecurityVerifiedFace {...props} />
          </Icon>
        </Block>

        <SubHeader>Shop</SubHeader>
        <Block>
          <Icon {...wrapperProps} name="ShopBag">
            <ShopBag {...props} />
          </Icon>
          <Icon {...wrapperProps} name="ShopBasket">
            <ShopBasket {...props} />
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
        </Block>

        <SubHeader>Software</SubHeader>
        <Block>
          <Icon {...wrapperProps} name="SoftwareBug">
            <SoftwareBug {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SoftwareClear">
            <SoftwareClear {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SoftwareCode">
            <SoftwareCode {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SoftwareCursor">
            <SoftwareCursor {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SoftwareDashboard">
            <SoftwareDashboard {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SoftwareData">
            <SoftwareData {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SoftwareDownload">
            <SoftwareDownload {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SoftwareHand">
            <SoftwareHand {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SoftwareLogOut">
            <SoftwareLogOut {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SoftwareLogin">
            <SoftwareLogin {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SoftwareNut">
            <SoftwareNut {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SoftwarePlate">
            <SoftwarePlate {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SoftwarePuzzle">
            <SoftwarePuzzle {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SoftwareSettings">
            <SoftwareSettings {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SoftwareShutdown">
            <SoftwareShutdown {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SoftwareSorting">
            <SoftwareSorting {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SoftwareWrench">
            <SoftwareWrench {...props} />
          </Icon>
        </Block>

        <SubHeader>Sport</SubHeader>
        <Block>
          <Icon {...wrapperProps} name="SportAmericanFootball">
            <SportAmericanFootball {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportBadminton">
            <SportBadminton {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportBaseball">
            <SportBaseball {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportBasketball">
            <SportBasketball {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportBeachVolley">
            <SportBeachVolley {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportBeachVolleyball">
            <SportBeachVolleyball {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportBombay">
            <SportBombay {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportBoxing">
            <SportBoxing {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportCasino">
            <SportCasino {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportCricket">
            <SportCricket {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportCrossCountry">
            <SportCrossCountry {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportCsgo">
            <SportCsgo {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportCycling">
            <SportCycling {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportDarts">
            <SportDarts {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportDota2">
            <SportDota2 {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportESoccer">
            <SportESoccer {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportEnba">
            <SportEnba {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportEsportGeneric">
            <SportEsportGeneric {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportFeatured">
            <SportFeatured {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportFieldHockey">
            <SportFieldHockey {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportFloorball">
            <SportFloorball {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportFormula1">
            <SportFormula1 {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportFutsal">
            <SportFutsal {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportGolf">
            <SportGolf {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportGreyhound">
            <SportGreyhound {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportHandball">
            <SportHandball {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportHarness">
            <SportHarness {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportHorseRacing">
            <SportHorseRacing {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportIceHockey">
            <SportIceHockey {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportLoL">
            <SportLoL {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportMma">
            <SportMma {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportMotor">
            <SportMotor {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportOverwatch">
            <SportOverwatch {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportRugby">
            <SportRugby {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportSetTennis">
            <SportSetTennis {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportSnooker">
            <SportSnooker {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportSoccer">
            <SportSoccer {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportSpecialSports">
            <SportSpecialSports {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportSpecials">
            <SportSpecials {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportSportsbet">
            <SportSportsbet {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportTableTennis">
            <SportTableTennis {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportTennis">
            <SportTennis {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportVolleyball">
            <SportVolleyball {...props} />
          </Icon>
          <Icon {...wrapperProps} name="SportWaterpolo">
            <SportWaterpolo {...props} />
          </Icon>
        </Block>

        <SubHeader>Text</SubHeader>
        <Block>
          <Icon {...wrapperProps} name="TextAncor">
            <TextAncor {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextAttach">
            <TextAttach {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextBold">
            <TextBold {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextBulletsList">
            <TextBulletsList {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextCards">
            <TextCards {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextCenter">
            <TextCenter {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextClearFormatting">
            <TextClearFormatting {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextCut">
            <TextCut {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextDescreaseIndent">
            <TextDescreaseIndent {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextHashtag">
            <TextHashtag {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextIncertLine">
            <TextIncertLine {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextIncreaseIndent">
            <TextIncreaseIndent {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextItalic">
            <TextItalic {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextLeftAlign">
            <TextLeftAlign {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextListView">
            <TextListView {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextMarker">
            <TextMarker {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextMath">
            <TextMath {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextNumbersList">
            <TextNumbersList {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextRightAlign">
            <TextRightAlign {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextSize">
            <TextSize {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextStrikethrough">
            <TextStrikethrough {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextStyle">
            <TextStyle {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextTable">
            <TextTable {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextTableAlternative">
            <TextTableAlternative {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TextUnderline">
            <TextUnderline {...props} />
          </Icon>
        </Block>

        <SubHeader>Time</SubHeader>
        <Block>
          <Icon {...wrapperProps} name="TimeAlarm">
            <TimeAlarm {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TimeCalendar">
            <TimeCalendar {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TimeCalendarAdd">
            <TimeCalendarAdd {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TimeCalendarAlternative">
            <TimeCalendarAlternative {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TimeCalendarDate">
            <TimeCalendarDate {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TimeCalendarRemove">
            <TimeCalendarRemove {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TimeCalendarSucsess">
            <TimeCalendarSucsess {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TimeClock">
            <TimeClock {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TimeSandglass">
            <TimeSandglass {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TimeStopwatch">
            <TimeStopwatch {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TimeStopwatchTimer">
            <TimeStopwatchTimer {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TimeTime">
            <TimeTime {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TimeWatch">
            <TimeWatch {...props} />
          </Icon>
        </Block>

        <SubHeader>Travel</SubHeader>
        <Block>
          <Icon {...wrapperProps} name="TravelAirplane">
            <TravelAirplane {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TravelAirplaneDown">
            <TravelAirplaneDown {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TravelAirplaneUp">
            <TravelAirplaneUp {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TravelBeachChair">
            <TravelBeachChair {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TravelBed">
            <TravelBed {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TravelBill">
            <TravelBill {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TravelHotel">
            <TravelHotel {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TravelLuggage">
            <TravelLuggage {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TravelMeal">
            <TravelMeal {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TravelPassport">
            <TravelPassport {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TravelPlug">
            <TravelPlug {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TravelRest">
            <TravelRest {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TravelRoom">
            <TravelRoom {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TravelSeats">
            <TravelSeats {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TravelSuitcase">
            <TravelSuitcase {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TravelSwimmingPool">
            <TravelSwimmingPool {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TravelWiFi">
            <TravelWiFi {...props} />
          </Icon>
        </Block>

        <SubHeader>Type</SubHeader>
        <Block>
          <Icon {...wrapperProps} name="TypeClosedHand">
            <TypeClosedHand {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TypeDefault">
            <TypeDefault {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TypeDrag">
            <TypeDrag {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TypeHandPointing">
            <TypeHandPointing {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TypeHelp">
            <TypeHelp {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TypeMove">
            <TypeMove {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TypeNotAllowed">
            <TypeNotAllowed {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TypeOpenedHand">
            <TypeOpenedHand {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TypeText">
            <TypeText {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TypeZoomIn">
            <TypeZoomIn {...props} />
          </Icon>
          <Icon {...wrapperProps} name="TypeZoomOut">
            <TypeZoomOut {...props} />
          </Icon>
        </Block>
      </section>
    </>
  );
}
