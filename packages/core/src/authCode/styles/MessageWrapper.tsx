import {rem} from '@heathmont/moon-utils';
import styled from 'styled-components';

const MessageWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translate(-50%, 0%)'
});

export default MessageWrapper;
