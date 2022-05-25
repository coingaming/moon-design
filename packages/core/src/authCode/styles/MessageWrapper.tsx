import styled from 'styled-components';
enum ErrorPositions {
  left = 'left',
  center = 'center',
  right = 'right'
}

const MessageWrapper = styled.div<{
  textAlign?: ErrorPositions | keyof typeof ErrorPositions
}>(
  ({ textAlign }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: textAlign === 'center'
      ? 'center' : textAlign === 'right'
        ? 'flex-end' : 'flex-start',
    position: 'absolute',
    bottom: 0,
    left: textAlign === 'center'
      ? '50%' : textAlign === 'right'
        ? 'initial' : 0,
    right: textAlign === 'right' ? 0 : 'initial',
    transform: textAlign === 'center' ? 'translate(-50%, 0%)' : 'none'
  })
);

export default MessageWrapper;
