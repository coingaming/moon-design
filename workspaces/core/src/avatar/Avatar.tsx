import React from 'react';
import type AvatarProps from './private/types/AvatarProps';
import type StatusProps from './private/types/StatusProps';
import getIconSize from './private/utils/getIconSize';
import getStatusSize from './private/utils/getStatusSize';
import StatusDeprecated from './styles/StatusDeprecated'; // deprecated
import Wrapper from './styles/Wrapper';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import GenericUser from '../private/icons/GenericUser';

const AvatarRoot = ({
  name, // deprecated
  imageUrl,
  color, // deprecated
  bgColor, // deprecated
  size = 'md',
  statusOrigin = { vertical: 'bottom', horizontal: 'right' }, // deprecated
  isStatusActive, // deprecated
  isRounded, // deprecated
  className,
  children,
}: AvatarProps) => {
  return (
    <Wrapper
      size={size}
      imageUrl={imageUrl}
      color={color} // deprecated
      bgColor={bgColor} // deprecated
      isRounded={isRounded} // deprecated
      className={mergeClassnames(getStatusSize(size), className)}
    >
      {!imageUrl && !name && !children && (
        <GenericUser
          className={mergeClassnames(getIconSize(size), color && color)}
        />
      )}
      {name && name} {/* deprecated */}
      {children && children}
      {statusOrigin && isStatusActive && (
        <StatusDeprecated size={size} statusOrigin={statusOrigin} />
      )}{' '}
      {/* deprecated */}
    </Wrapper>
  );
};

const Status = ({
  position = { vertical: 'bottom', horizontal: 'right' },
  className,
}: StatusProps) => (
  <div
    className={mergeClassnames(
      'status',
      'absolute border-solid border-gohan rounded-full bg-roshi',
      position && position.vertical === 'top' && 'top-0',
      position && position.vertical === 'bottom' && 'bottom-0',
      position && position.horizontal === 'left' && 'start-0',
      position && position.horizontal === 'right' && 'end-0',
      className
    )}
  />
);

const Avatar = Object.assign(AvatarRoot, { Status });

export default Avatar;
