import styled, { CSSObject } from 'styled-components';
import { themed } from '@heathmont/moon-utils';
import { SpaceProps } from '@heathmont/moon-themes';

export type MediaObjectProps = {
  alignItems?: CSSObject['alignItems'];
  /**
   * Excepts a string value, number or a theme key.
   *
   * Theme keys are returned as a `rem`-based unit.
   *
   * e.g. `<MediaObject gridGap="large" />` returns `space.large` as a rem unit.
   */
  gridGap?: SpaceProps | CSSObject['gridGap'];
  /**
   * Excepts a string value or a theme key.
   *
   * Theme keys are returned as a `rem`-based unit.
   *
   * e.g. `<MediaObject mediaWidth="large" />` returns `space.large` as a rem unit.
   */
  mediaWidth?: SpaceProps | string | undefined;
  reverse?: boolean;
  textAlign?: CSSObject['textAlign'];
};

const MediaObject = styled.div<MediaObjectProps>(
  ({
    alignItems = 'center',
    gridGap = 'default',
    mediaWidth = 'large',
    reverse,
    textAlign = 'left',
    theme,
  }) => [
    {
      alignItems,
      gridGap: themed('space', gridGap)(theme),
      textAlign,
      display: 'grid',
      gridTemplate: `max-content / ${themed('space', mediaWidth)(theme)} auto`,
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
  ],
);

export default MediaObject;
