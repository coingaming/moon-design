import styled from 'styled-components';
import { rem, themed } from '@heathmont/moon-utils';
import React from 'react';
import { ColorProps } from '@heathmont/moon-themes';
import { IconUser } from '@heathmont/moon-assets';

type AvatarProps = {
  imageUrl?: string;
  name?: string | JSX.Element;
  color?: ColorProps;
  backgroundColor?: ColorProps;
  size?: 'xsmall' | 'small' | 'medium' | 'large';
};

const AvatarWrapper = styled.div<AvatarProps>(
  ({
    size, imageUrl, color, backgroundColor, theme,
  }) => [
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
      fontSize: rem(14),
    },
    size === 'small' && {
      height: rem(32),
      width: rem(32),
      fontSize: rem(18),
    },
    size === 'medium' && {
      height: rem(40),
      width: rem(40),
      fontSize: rem(20),
    },
    size === 'large' && {
      height: rem(48),
      width: rem(48),
      fontSize: rem(24),
    },
  ],
);

const Avatar: React.FC<AvatarProps> = (props) => {
  const { name, imageUrl, color } = props;
  if (imageUrl) return <AvatarWrapper {...props} />;

  return (
    <AvatarWrapper {...props}>
      {name || <IconUser color={color} />}
    </AvatarWrapper>
  );
};

Avatar.defaultProps = {
  imageUrl: '',
  size: 'medium',
};

export default Avatar;
