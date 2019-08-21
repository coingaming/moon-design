import styled from '@emotion/styled';
import { spacing } from '@heathmont/sportsbet-utils';

export type MediaObjectProps = {
  alignItems?: string;
  gridGap?: string;
  mediaWidth?: string;
  reverse?: boolean;
  textAlign?: any /** Meet Emotion's complex `textAlign` types */;
};

export const MediaObject = styled.div<MediaObjectProps>(
  ({
    alignItems = 'center',
    gridGap = spacing(),
    mediaWidth = spacing('large'),
    reverse,
    textAlign = 'left',
  }) => [
    {
      alignItems,
      gridGap,
      textAlign,
      display: 'grid',
      gridTemplate: `max-content / ${mediaWidth} auto`,
      'img,svg': {
        display: 'block',
        width: '100%',
        height: 'auto',
      },
    },
    reverse && {
      direction: 'rtl',
      '& > *': {
        direction: 'ltr',
      },
    },
  ]
);
