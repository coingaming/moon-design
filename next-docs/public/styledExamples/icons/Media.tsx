import React from 'react';
import {
  MediaCss,
  MediaCsv,
  MediaExe,
  MediaFastBack,
  MediaFastForward,
  MediaGifAlternative,
  MediaHeadphones,
  MediaHtml,
  MediaJpg,
  MediaJs,
  MediaMegaphone,
  MediaMice,
  MediaMiceAlternative,
  MediaMonitor,
  MediaMp3,
  MediaMp4,
  MediaMusic,
  MediaNoVolume,
  MediaPause,
  MediaPhoto,
  MediaPhp,
  MediaPlay,
  MediaPng,
  MediaPpt,
  MediaPsd,
  MediaSoundwave,
  MediaStop,
  MediaTuner,
  MediaTunerAlternative,
  MediaTxt,
  MediaVideo,
  MediaVolume,
  MediaXll,
  MediaXml,
  MediaZip,
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
    <Icon {...wrapperProps} name="MediaCss">
      <MediaCss {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MediaCsv">
      <MediaCsv {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MediaExe">
      <MediaExe {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MediaFastBack">
      <MediaFastBack {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MediaFastForward">
      <MediaFastForward {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MediaGifAlternative">
      <MediaGifAlternative {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MediaHeadphones">
      <MediaHeadphones {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MediaHtml">
      <MediaHtml {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MediaJpg">
      <MediaJpg {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MediaJs">
      <MediaJs {...props} />
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
    <Icon {...wrapperProps} name="MediaMp3">
      <MediaMp3 {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MediaMp4">
      <MediaMp4 {...props} />
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
    <Icon {...wrapperProps} name="MediaPhp">
      <MediaPhp {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MediaPlay">
      <MediaPlay {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MediaPng">
      <MediaPng {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MediaPpt">
      <MediaPpt {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MediaPsd">
      <MediaPsd {...props} />
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
    <Icon {...wrapperProps} name="MediaTxt">
      <MediaTxt {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MediaVideo">
      <MediaVideo {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MediaVolume">
      <MediaVolume {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MediaXll">
      <MediaXll {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MediaXml">
      <MediaXml {...props} />
    </Icon>
    <Icon {...wrapperProps} name="MediaZip">
      <MediaZip {...props} />
    </Icon>
  </>
);

export default Example;
