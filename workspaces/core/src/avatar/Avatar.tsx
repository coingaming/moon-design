import React from 'react';
import mergeClassnames from '../mergeClassnames/mergeClassnames';
import GenericUser from '../private/icons/GenericUser';
import setIconSize from './private/utils/setIconSize';
import setStatusSize from './private/utils/setStatusSize';
import StatusDeprecated from './styles/StatusDeprecated'; // deprecated
import Wrapper from './styles/Wrapper';
import type AvatarProps from './private/types/AvatarProps';
import type StatusProps from './private/types/StatusProps';

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
      className={mergeClassnames(setStatusSize(size), className)}
    >
      {!imageUrl && !name && !children && (
        <GenericUser
          className={mergeClassnames(setIconSize(size), color && color)}
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
      'absolute border-solid border-goku rounded-full bg-roshi',
      position && position.vertical === 'top' && 'top-0',
      position && position.vertical === 'bottom' && 'bottom-0',
      position && position.horizontal === 'left' && 'ltr:left-0 rtl:right-0',
      position && position.horizontal === 'right' && 'ltr:right-0 rtl:left-0',
      className
    )}
  />
);

const Avatar = Object.assign(AvatarRoot, { Status });

export default Avatar;
