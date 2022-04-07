import React from 'react';
import { IconUser } from '@heathmont/moon-assets';
import { ColorProps } from '@heathmont/moon-themes';
import { rem, themed } from '@heathmont/moon-utils';
import styled from 'styled-components';

type StatusOrigin = {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'right';
};

type AvatarProps = {
  imageUrl?: string;
  name?: string | JSX.Element;
  color?: ColorProps;
  backgroundColor?: ColorProps;
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  statusOrigin?: StatusOrigin;
  isStatusActive?: boolean;
};

const Container = styled.div({
  position: 'relative',
});

const AvatarWrapper = styled.div<AvatarProps>(
  ({ size, imageUrl, color, backgroundColor, theme }) => [
    {
      color: themed('color', color)(theme),
      backgroundColor: themed('color', backgroundColor)(theme),
      borderRadius: '50%',
      overflow: 'hidden',
      textTransform: 'uppercase',
      fontWeight: theme.fontWeight.semibold,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
    },
    size === 'xsmall' && {
      height: rem(24),
      width: rem(24),
      fontSize: rem(10),
      lineHeight: rem(16),
    },
    size === 'small' && {
      height: rem(32),
      width: rem(32),
      fontSize: rem(12),
      lineHeight: rem(16),
    },
    size === 'medium' && {
      height: rem(40),
      width: rem(40),
      fontSize: rem(14),
      lineHeight: rem(24),
    },
    size === 'large' && {
      height: rem(48),
      width: rem(48),
      fontSize: rem(16),
      lineHeight: rem(24),
    },
    size === 'xlarge' && {
      height: rem(56),
      width: rem(56),
      fontSize: rem(16),
      lineHeight: rem(24),
    },
    size === 'xxlarge' && {
      height: rem(64),
      width: rem(64),
      fontSize: rem(20),
      lineHeight: rem(32),
    },
  ]
);

const StatusWrapper = styled.div<AvatarProps>(
  ({ theme: { color }, size, isStatusActive, statusOrigin }) => [
    {
      position: 'absolute',
      borderStyle: 'solid',
      borderColor: color.beerus[100],
      borderRadius: '50%',
      backgroundColor: isStatusActive ? color.roshi[100] : color.gohan[100],
    },
    statusOrigin &&
      statusOrigin.vertical === 'top' && {
        top: 0,
      },
    statusOrigin &&
      statusOrigin.vertical === 'bottom' && {
        bottom: 0,
      },
    statusOrigin &&
      statusOrigin.horizontal === 'left' && {
        left: 0,
      },
    statusOrigin &&
      statusOrigin.horizontal === 'right' && {
        right: 0,
      },
    size === 'xsmall' && {
      height: rem(8),
      width: rem(8),
      borderWidth: rem(1),
    },
    size === 'small' && {
      height: rem(12),
      width: rem(12),
      borderWidth: rem(2),
    },
    size === 'medium' && {
      height: rem(12),
      width: rem(12),
      borderWidth: rem(2),
    },
    size === 'large' && {
      height: rem(16),
      width: rem(16),
      borderWidth: rem(2),
    },
    size === 'xlarge' && {
      height: rem(16),
      width: rem(16),
      borderWidth: rem(2),
    },
    size === 'xxlarge' && {
      height: rem(16),
      width: rem(16),
      borderWidth: rem(2),
    },
  ]
);

const Avatar: React.FC<AvatarProps> = (props) => {
  const { name, imageUrl, color, statusOrigin } = props;
  if (imageUrl)
    return (
      <Container>
        <AvatarWrapper {...props} />
        {statusOrigin && <StatusWrapper {...props} />}
      </Container>
    );

  return (
    <Container>
      <AvatarWrapper {...props}>
        {name || <IconUser color={color} />}
      </AvatarWrapper>
      {statusOrigin && <StatusWrapper {...props} />}
    </Container>
  );
};

Avatar.defaultProps = {
  imageUrl: '',
  size: 'medium',
};

export default Avatar;
