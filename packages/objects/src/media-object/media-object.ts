import styled, { CSSObject } from 'styled-components';
import { spacing } from '@heathmont/sportsbet-utils';

export type MediaObjectProps = {
  alignItems?: CSSObject['alignItems'];
  gridGap?: CSSObject['gridGap'];
  mediaWidth?: string;
  reverse?: boolean;
  textAlign?: CSSObject['textAlign'];
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
