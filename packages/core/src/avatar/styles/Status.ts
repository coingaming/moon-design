import styled from 'styled-components';
import setStatusSize from '../private/utils/setStatusSize';
import type AvatarProps from '../private/types/AvatarProps';

const Status = styled.div<AvatarProps>(
  ({ theme: { colorNew }, size, statusOrigin }) => [
    {
      position: 'absolute',
      borderStyle: 'solid',
      borderColor: colorNew.beerus,
      borderRadius: '50%',
      backgroundColor: colorNew.roshi[100],
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
    setStatusSize(size),
  ]
);

export default Status;
