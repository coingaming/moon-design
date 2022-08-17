import React from 'react';
import { GenericUser } from '@heathmont/moon-icons-tw';
import classNames from '../private/utils/classnames';
import setIconSize from './private/utils/setIconSize';
import Status from './styles/Status';
import Wrapper from './styles/Wrapper';
import type AvatarProps from './private/types/AvatarProps';

const Avatar: React.FC<AvatarProps> = ({
  name,
  imageUrl = '',
  color = 'text-bulma',
  bgColor = 'bg-gohan',
  size = 'md',
  statusOrigin = { vertical: 'bottom', horizontal: 'right' },
  isStatusActive,
  isRounded,
}) => {
  return (
    <div className="relative">
      {imageUrl ? (
        <Wrapper
          size={size}
          imageUrl={imageUrl}
          color={color}
          bgColor={bgColor}
          isRounded={isRounded}
        />
      ) : (
        <Wrapper
          size={size}
          imageUrl={imageUrl}
          color={color}
          bgColor={bgColor}
          isRounded={isRounded}
        >
          {name || (
            <GenericUser
              className={classNames(setIconSize(size), color && color)}
            />
          )}
        </Wrapper>
      )}
      {statusOrigin && isStatusActive && (
        <Status size={size} statusOrigin={statusOrigin} />
      )}
    </div>
  );
};

export default Avatar;
