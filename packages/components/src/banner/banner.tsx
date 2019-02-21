/** @jsx jsx */
import * as React from 'react';
import styled from '@emotion/styled';
import { jsx } from '@emotion/core';

import { colors, border } from '@heathmont/sportsbet-tokens';
import { spacing } from '@heathmont/sportsbet-utils';

type BannerItemProps = {
  horizontal?: boolean;
};

type BannerProps = BannerItemProps & {
  maxWidth?: string;
};

const StyledBanner = styled.div<BannerProps>(({ horizontal, maxWidth }) => [
  {
    display: 'flex',
    position: 'relative', // For close button that positioned absolutely
    width: '100%',
    height: 'auto',
    flexDirection: horizontal ? 'row' : 'column',
    justifyContent: horizontal ? 'space-between' : 'flex-start',
    alignContent: horizontal ? 'stretch' : 'normal',
    alignItems: horizontal ? 'center' : 'flex-start',
    fontFamily: 'inherit', // Prevents links rendering as system fonts.
    backgroundColor: colors.neutral[60],
    borderRadius: horizontal ? border.radius.small : border.radius.default,
  },
  maxWidth && {
    maxWidth,
  },
  !horizontal && {
    padding: spacing('xlarge'),
  },
]);

const BannerItem = styled.div<BannerItemProps>(({ horizontal }) => [
  {
    flexGrow: 2,
  },
  horizontal
    ? { margin: 0, padding: `${spacing()} ${spacing('medium')}` }
    : { width: '100%', ':not(:last-child)': { marginBottom: spacing() } },
]);

const Banner: React.FC<BannerProps> = ({
  children,
  maxWidth,
  horizontal = false,
}) => {
  const BannerItems = React.Children.map(children, child => (
    <BannerItem horizontal={horizontal}>{child}</BannerItem>
  ));
  return (
    <StyledBanner maxWidth={maxWidth} horizontal={horizontal}>
      {BannerItems}
    </StyledBanner>
  );
};

export { Banner };
