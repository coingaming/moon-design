import React from 'react';
import {
  GenericUser
} from '@heathmont/moon-icons';
import { rem } from '@heathmont/moon-utils';
import {AvatarProps} from "./private/AvatarTypes";
import {Container} from "./private/Container";
import {Status} from "./private/Status";
import {Wrapper} from "./private/Wrapper";

const Avatar: React.FC<AvatarProps> = (props) => {
  const { name, imageUrl, color, size, statusOrigin } = props;
  let iconSize = rem(24);

  switch (size) {
    case '2xlarge':
      iconSize = rem(32);
      break;
    case 'xlarge':
    case 'large':
    case 'small':
      iconSize = rem(24);
      break;
    case 'xsmall':
      iconSize = rem(16);
      break;
  }

  return (<Container>
    {
      imageUrl ? (<Wrapper {...props} />) : (<Wrapper {...props}>
        {name || <GenericUser fontSize={iconSize} color={color} />}
      </Wrapper>)
    }
    {statusOrigin && <Status {...props} />}
  </Container>);
};

Avatar.defaultProps = {
  imageUrl: '',
  size: 'medium',
};

export default Avatar;
