import React from 'react';
import classNames from '../private/utils/classnames';
import GenericUser from './private/icons/GenericUser';
import setIconSize from './private/utils/setIconSize';
import Status from './styles/Status';
import Wrapper from './styles/Wrapper';
import type AvatarProps from './private/types/AvatarProps';

const Avatar: React.FC<AvatarProps> = ({
  name,
  imageUrl = '',
  color = 'text-bulma',
  backgroundColor = 'bg-gohan',
  size = 'md',
  statusOrigin = { vertical: 'bottom', horizontal: 'right' },
  isStatusActive,
}) => {
  return (
    <div className="relative">
      {imageUrl ? (
        <Wrapper
          size={size}
          imageUrl={imageUrl}
          color={color}
          backgroundColor={backgroundColor}
        />
      ) : (
        <Wrapper
          size={size}
          imageUrl={imageUrl}
          color={color}
          backgroundColor={backgroundColor}
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
