import React from 'react';
import {
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
} from '@heathmont/moon-icons-tw';
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
  </>
);

export default Example;
