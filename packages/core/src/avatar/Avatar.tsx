import React from 'react';
import { GenericUser } from '@heathmont/moon-icons';
import Size from '../private/enums/Size';
import setIconSize from './private/utils/setIconSize';
import Container from './styles/Container';
import Status from './styles/Status';
import Wrapper from './styles/Wrapper';
import type AvatarProps from './private/types/AvatarProps';

const Avatar: React.FC<AvatarProps> = ({
  name,
  imageUrl = '',
  color = 'bulma.100',
  backgroundColor = 'gohan.100',
  size = Size.MEDIUM,
  statusOrigin = { vertical: 'bottom', horizontal: 'right' },
  isStatusActive,
}) => (
  <Container>
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
        {name || <GenericUser fontSize={setIconSize(size)} color={color} />}
      </Wrapper>
    )}
    {statusOrigin && isStatusActive && (
      <Status size={size} statusOrigin={statusOrigin} />
    )}
  </Container>
);

export default Avatar;
